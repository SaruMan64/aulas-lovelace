
function myFunction() {
          var list = [
            ["SatisfeitoMuitoBom"],
            ["SatisfeitoBom"],
            ["SatisfeitoNeutro"],
            ["SatisfeitoRuim"],
            ["SatisfeitoPessimo"],
            ["SatisfeitoNada"],
            ["CatalogoMuitoBom"],
            ["CatalogoBom"],
            ["CatalogoNeutro"],
            ["CatalogoRuim"],
            ["CatalogoPessimo"],
            ["CatalogoNada"],
            ["Recomendaria1"],
            ["Recomendaria2"],
            ["Recomendaria3"],
            ["Recomendaria4"],
            ["Recomendaria5"],
            ["Comentario"],
            ["Nome"],
            ["Sobrenome"],
            ["Email"],
            ["Concordo"],
          ];
          for (let i = 0; i < list.length; i++) {
            console.log("input" + list[i][0]);
            let a = document.getElementById("input" + list[i][0]).value;
            console.log(a);
            list[i].push(a);
          }
          document.getElementById("oi").innerHTML = list;
        }

/* function myFunction() {
  var list = [
    ["SatisfeitoMuitoBom"],
    ["SatisfeitoBom"],
    ["SatisfeitoNeutro"],
    ["SatisfeitoRuim"],
    ["SatisfeitoPessimo"],
    ["SatisfeitoNada"],
    ["CatalogoMuitoBom"],
    ["CatalogoBom"],
    ["CatalogoNeutro"],
    ["CatalogoRuim"],
    ["CatalogoPessimo"],
    ["CatalogoNada"],
    ["Recomendaria1"],
    ["Recomendaria2"],
    ["Recomendaria3"],
    ["Recomendaria4"],
    ["Recomendaria5"],
    ["Comentario"],
    ["Nome"],
    ["Sobrenome"],
    ["Email"],
    ["Concordo"]
  ];
  let aaa = document.forms.form;
  let a = aaa.elements.iputSatisfeitoMuitoBom.value;
  console.log(a);
}
 */