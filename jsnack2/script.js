/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */
const car=[
  {
    marca:"fiat",
    modello:"punto",
    alimentazione:"diesel",
  },
  {
    marca:"alfa",
    modello:"stelvio",
    alimentazione:"elettrica",
  },
  {
    marca:"audi",
    modello:"tt",
    alimentazione:"benzina",
  },
  {
    marca:"mercedes",
    modello:"x1",
    alimentazione:"metano",
  },
  {
    marca:"fiat",
    modello:"panda",
    alimentazione:"benzina",
  },
  {
    marca:"alfa",
    modello:"giulia",
    alimentazione:"diesel",
  },
  {
    marca:"audi",
    modello:"a1",
    alimentazione:"elettrica",
  },
  {
    marca:"mercedes",
    modello:"amg",
    alimentazione:"benzina",
  },
  {
    marca:"fiat",
    modello:"bravo",
    alimentazione:"diesel",
  },
  {
    marca:"alfa",
    modello:"giulietta",
    alimentazione:"elettrica",
  },
  {
    marca:"audi",
    modello:"a3",
    alimentazione:"benzina",
  },
  {
    marca:"mercedes",
    modello:"x6",
    alimentazione:"gpl",
  },
];

const benzina = car.filter ((element)=> {
  if(element.alimentazione=="benzina")return true;
});
const diesel= car.filter ((element)=> {
  if(element.alimentazione=="diesel")return true;
});
const restanti= car.filter((element)=>{
  if(element.alimentazione!=="diesel" && element.alimentazione!=="benzina")return true;
})

console.log(benzina);
console.log(diesel);
console.log(restanti);

