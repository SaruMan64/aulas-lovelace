#!/bin/bash

# Função que retorna o número inserido.
Inserir () {
        counter=0
        while [ $counter -le 2 ];
        do
                read -p "Digite sua altura: " number

        if [[ $number =~ ^[0-9]+$ ]] | [[ $number =~ ^[0-9]+\.?[0-9]*$ ]]; then
                break;

        else
                let counter++
                echo "Insira somente número"
                echo "Tentativa $counter de 3"

                if [ $counter -eq 3 ]; then
                        echo "Encerrando programa."
                exit

                fi
        fi
        done
        return "$number"
}

# Função que retorna a classificação do IMC.
Classificacao () {
        IMC=$1
        if [ $IMC -le 18 ]; then
                echo "Sua classificação no IMC é Magreza"

        elif [ $IMC -gt 18 ] & [ $IMC -lt 25 ]; then
                echo "Sua classificação no IMC é Saudável"

        elif [ $IMC -ge 25 ] & [ $IMC -lt 30 ]; then
                echo "Sua classificação no IMC é Sobrepeso"

        elif [ $IMC -ge 30 ] & [ $IMC -lt 35 ]; then
                echo "Sua classificação no IMC é Obesidade Grau I"

        elif [ $IMC -ge 35 ] & [ $IMC -lt 40 ]; then
                echo "Sua classificação no IMC é S Obesidade Grau II \(severa\)"

        elif [ $IMC -ge 40 ]; then
                echo "Sua classificação no IMC é Obesidade Grau III \(morbida\)"

        fi
}


echo "Vamos calcular seu IMC."
Inserir
height=$?
Inserir
weight=$?

imc=$( echo "$weight / ($height * $height)" | bc)

echo -e "\nO seu IMC é $imc"

Classificacao $imc
