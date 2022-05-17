async function episode(ep) {
    const res = await fetch('https://rickandmortyapi.com/api/episode/' + ep);
    const json = await res.json();
    return json.characters;
}

async function character(url) {
    const res = await fetch(url);
    const { name, status, species, type, gender, image } = await res.json();
    return { name, status, species, type, gender, image };
}

async function mountArray(ep) {
    const characters = await episode(ep);
    //console.log("characters:",characters, characters.length);
    const cardArray = [];
    for(let i = 0; i < characters.length; i++){
      let response = await character(characters[i]);
      cardArray.push(response);
    } 
    //console.log(cardArray)
    return cardArray;
}

export { mountArray };