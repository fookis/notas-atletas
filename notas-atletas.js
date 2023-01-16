let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
   ];
   
   function obterMedia(nota){ 
    let notasCresc = nota.sort(function(a, b){return a-b});
    let notasComp = notasCresc.slice(1, notasCresc.length-1);
    let somaNotas = notasComp.reduce(function(soma, total){return soma+total}, 0);
  return somaNotas/notasComp.length
   }
   
   function mostrarResultado(objAtletas){
     for (let i = 0; i < objAtletas.length; i++) {
       console.log(`Atleta: ${objAtletas[i].nome}`);
       console.log(`Notas Obtidas: ${objAtletas[i].notas}`);
       console.log(`Média Válida: ${obterMedia(objAtletas[i].notas)}`)
       console.log()
}
   }
console.log(mostrarResultado(atletas))