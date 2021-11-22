let textSelector = [
    ['#name', 'Yeté Labarca', "bold", "48px", "56px", "left"],
    ['#hobby', 'BANDA FAVORITA', "bold", "96px", "112px", "left"],
    ['#text1', 'Yeté Abunã Marques Labarca, 20 ano, Graduando em Licenciatura em    Física na UFSCar e aspirante a Dev pelo Alpha EdTech.', "300", "24px", "28px", "right"],
    ['#title', 'Minha Banda Favorita', "bold", "48px", "56px", "left"],
    ["#text2", "Metallica é uma banda norte-americana de heavy metal originária de Los Angeles, mas com base em San Francisco.<br /> Ouço essa banda desde de criança, e o álbum que eu mais gosto é o Black.<br /> Eu tento aranhar o violão tocando algumas músicas, como Nothing Else Matters, Fade to Black e Mama Said.", "300", "24px", "28px", "center"],
    ['#metal1', 'Integrantes Metallica', "300", "24px", "28px", "center"],
    ['#metal2', 'Álbum Black', "300", "24px", "28px", "center"],
    ['#metal3', 'Álbuns Metallica', "300", "24px", "28px", "center"],
    ['#metal1', 'Integrantes Metallica', "300", "24px", "28px", "center"],
    ['#footer', 'Developed by Yeté Labarca', "400", "24px", "28px",  "right"]
];
let imgId =[
    ["img-yete", "./img/Yete-Cinza-Paisagem.jpg", "Image of author"],
    ['imgMetal1', './img/metallica1.webp', 'Integrantes Metallica'],
    ['imgMetal2', './img/metallica2.jpg', 'Álbum Black'],
    ['imgMetal3', './img/metallica3.gif', 'Álbuns Metallica'],
    ['imgMetal4', './img/metallica1.webp', 'Integrantes Metallica']
];
let linkId = [
    ["linkName", "#intro"],
    ["button", "#content"]
];

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
function addInClass(Class, value, fontweight, fontsize, lineheight, textalign){
    var el = document.querySelector(Class);
    el.innerHTML = value;
    el.style.fontWeight = fontweight;
    el.style.fontSize = fontsize;
    el.style.lineHeight = lineheight;
    el.style.textAlign = textalign;
};

for (var i = 0; i < textSelector.length; i++)
{
    addInClass(textSelector[i][0], textSelector[i][1], textSelector[i][2], textSelector[i][3], textSelector[i][4], textSelector[i][5]);
};

for (var i = 0; i < imgId.length; i++){
    addInId(imgId[i][0], imgId[i][1], imgId[i][2], "src");
};

for (var i = 0; i < linkId.length; i++)
{
    addInId(linkId[i][0], linkId[i][1], undefined, "href");
};
