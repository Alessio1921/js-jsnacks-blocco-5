/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const player={
    code:"",
    name:"giulio",
    surname:"police",
    age:30,
    average:"",
    'success-rate':""
  };

const n=3;
let newCode="";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for (var i=0; i<n; i++){
  newCode+=(letters.charAt(Math.floor(Math.random() * letters.length))) ;
}
newCode+=(Math.floor(Math.random() * 1000));
player.code=newCode;
player.average=Math.floor(Math.random() * (50 - 0) + 0);
player['success-rate']=`${Math.floor(Math.random() * (100 - 0) + 0)}%`;

console.log(player);
