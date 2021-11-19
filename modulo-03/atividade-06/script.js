let textId = [
    ['name', 'Yeté Labarca'],
    ['hobby', 'HOBBY'],
    ['text1', 'Yeté Abunã Marques Labarca, 20 ano, Graduando em Licenciatura em    Física na UFSCar e aspirante a Dev pelo Alpha EdTech.'],
    ['footer', 'Developed by Yeté Labarca'],
    ['title', 'Meu Hobby'],
    ["text2", "O origami é uma arte oriental que consiste em fazer dobraduras de papel, formando assim pequenas esculturas.<br /> Ainda sou iniciante nessa arte, porém, aos poucos realizo novas figuras e estruturas mais complexas e bonitas."],
    ['origami1', 'flor'],
    ['origami2', 'avião'],
    ['origami3', 'cahorinho e gatinho']
];
let imgId =[
    ["img-yete", "./img/Yete-Cinza-Paisagem.jpg", "Image of author"],
    ['imgOrigami1', './img/origami1.jpg', 'flor...'],
    ['imgOrigami2', './img/origami2.jpg', 'cahorinho e gatinho'],
    ['imgOrigami3', './img/origami3.jpg', 'avião'],
];
let linkId = [
    ["linkName", "#intro"],
    ["button", "#content"]
];
var id;
var value;
var otherValue;
var type;
function addInId(id, value, otherValue = null, type){
    var el = document.getElementById(id);
    if(type === "text"){
        el.innerHTML = value;
    }
    else if(type === "src"){
        el.src = value;
        el.alt = otherValue;
    }
    else if(type === "href"){
        el.href = value;
    };
    
};

for (var i = 0; i < textId.length; i++)
{
    addInId(textId[i][0], textId[i][1], undefined, "text");
};

for (var i = 0; i < imgId.length; i++){
    addInId(imgId[i][0], imgId[i][1], imgId[i][2], "src");
};

for (var i = 0; i < linkId.length; i++)
{
    addInId(linkId[i][0], linkId[i][1], undefined, "href");
};