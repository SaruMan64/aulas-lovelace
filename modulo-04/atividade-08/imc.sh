#!/bin/bash

# Print "Olá mundo!"
echo -e "olá mundo!\n";

# Add 'a' with 'b'
a=5;
b=6;
c=$a+$b;
echo -e "A soma de $a + $b = $c\n"

# Calculate BMI
echo "Vamos calcular seu IMC."

counter=0;

while [ $counter -le 2 ]; 
do
    read -p "Digite sua altura: " height;
    
    if [[ $height =~ ^[0-9]+$ ]] | [[ $height =~ ^[0-9]+\.?[0-9]*$ ]]; then 
        break;
    
    else
        let counter++; 
        echo "Insira somente número";
        echo "Tentativa $counter de 3"
        
        if [ $counter -eq 3 ]; then 
            echo "Encerrando programa.";
        exit

        fi
         
    fi 
done 

counter=0;

while [ $counter -le 2 ]; 
do
    read -p "Digite seu peso: " weight;
    
    if [[ $weight =~ ^[0-9]+$ ]] | [[ $weight =~ ^[0-9]+\.?[0-9]*$ ]]; then 
        break;
    
    else
        let counter++; 
        echo "Insira somente número";
        echo "Tentativa $counter de 3"
        
        if [ $counter -eq 3 ]; then 
            echo "Encerrando programa.";
        exit

        fi
         
    fi 
done 

imc=$( echo "$weight / ($height * $height)" | bc)

echo -e "\nO seu IMC é $imc"

