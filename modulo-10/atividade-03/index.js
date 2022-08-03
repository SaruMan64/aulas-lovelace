require("dotenv").config()
const { Client } = require("pg")
const express = require("express");
const Redis = require("ioredis");
const app = express();

const redis = new Redis({ port: 6379, host: 'localhost', password: 'abacate' })


app.get("/nome", (req, res) => {
    const searchTerm = 'Nomes';
    try {
        redis.get(searchTerm, async (err, nome) => {
            if (err) throw err;

            const start = Date.now();

            if (nome) {
                res.status(200).send({
                    time: Date.now() - start,
                    length: (JSON.parse(nome)).length,
                    nome: JSON.parse(nome),
                    message: "data retrieved from the cache"
                });
            } else {
                const client =
                    new Client({
                        connectionString: process.env.DBPG_STRING,
                        ssl: { rejectUnauthorized: false },
                    }) ||
                    new Client({
                        user: process.env.DBPG_USER,
                        password: process.env.POSTGRES.DBPG_PASSWORD,
                        database: process.env.POSTGRES.DBPG_DATABASE,
                        port: process.env.POSTGRES.DBPG_PORT,
                        host: process.env.POSTGRES.DBPG_HOST,
                        ssl: { rejectUnauthorized: false },
                    });

                await client.connect()

                const result = await client.query('select * from redis.nomes')

                await client.end()

                redis.setex(searchTerm, 10, JSON.stringify(result.rows));
                res.status(200).send({
                    time: Date.now() - start,
                    length: result.rows.length,
                    nome: result.rows,
                    message: "cache miss"
                });
            }
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});


app.listen(process.env.PORT || 3000, () => {
    console.log("Node server started");
});