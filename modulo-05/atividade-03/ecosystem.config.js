module.exports = {
    apps: [
      {
        name: "App",
        script: "server.js",
        args: "start",
        cwd: "./",
        watch: true,
        watch_delay: 1000,
        "ignore_watch": ["node_modules"]
      }
    ]
  };