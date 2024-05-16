//Importo la funzione "createApp" dalla classe/oggettone "Vue"
const { createApp } = Vue;
// vuol dire ===> const createApp = Vue.createApp;






//Creo un oggetto con la configurazione (i dati) della mia app
const configurazione = {
    //l'oggetto ha una proprietà "data", che è una funzione
    data() {
        //La funzione restituisce un oggetto con tutti i dati
        return {
            myProfile: 'Luca',
            immagine: './img/Io.png',
            ourMsg : ['Ehy', 'Come va? tutto bene?', 'Elemento 3'],
            nomeContatto: 'prova',
            contatto: [
                {
                    nome: 'Gigi',
                    msg : ['Ehila'],
                    img : './img/avatar_1.jpg',
                    ultimoAccesso : 'oggi alle 12:00'
                },
                {
                    nome: 'Fabio',
                    msg : ['Sto arrivando'],
                    img : './img/avatar_2.jpg',
                    ultimoAccesso : 'ultimo accesso ieri alle 13:00'
                },
                {
                    nome: 'Manuel',
                    msg : ['No oggi non ho voglia'],
                    img : './img/avatar_3.jpg',
                    ultimoAccesso : 'ultimo accesso martedì alle 13:00'
                },
                {
                    nome: 'Alessandro B.',
                    msg : ['Molto interessante'],
                    img : './img/avatar_4.jpg',
                    ultimoAccesso : 'online'
                },
                {
                    nome: 'Fabio',
                    msg : ['Sto arrivando'],
                    img : './img/avatar_2.jpg',
                    ultimoAccesso : 'ultimo accesso ieri alle 13:00'
                },
            ]
        }
    },
};

console.log (this.ourMsg)








// Creo una variabile alla quale assegno Vue.createApp e gli passo configurazione
let app = Vue.createApp(configurazione);
console.log("applicazione inizializzata ma non montata", app);

app.mount('.app'); //funziona esattamente come il querySelector
console.log("Con questo monto e `applico app.mount('h1');`", app);