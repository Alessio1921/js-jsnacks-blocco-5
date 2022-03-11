/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const people=[
  {
    name:"lorenzo",
    surname:"freni",
    age:20,
  },
  {
    name:"vittorio",
    surname:"siamese",
    age:19,
  },
  {
    name:"hugo",
    surname:"forrest",
    age:29,
  },
  {
    name:"franco",
    surname:"ball",
    age:17,
  },
  {
    name:"matteo",
    surname:"jordan",
    age:56,
  }
];
const newArrey=[];
for (let i = 0; i < people.length; i++) {
  newArrey.push({
    'full-name':people[i]['name'] + " "+people[i]['surname'],
    drive:"",
});
  if(people[i].age>=18){
    newArrey[i].drive="Puoi Guidare perchè sei maggiorenne ma prima devi prendere la patente!!";
  } 
  else{
    newArrey[i].drive="non puoi Guidare perchè non sei maggiorenne e non puoi prendere la patente!!";
  }
}
console.log(newArrey);
