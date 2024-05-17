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
            ourMsg: [{
                primoContatto: [
                    {
                        msg: [
                            {
                                data: '10/01/2020 15:30:55',
                                messaggio: 'Ehy',
                                stato: 'sent'
                            },
                            {
                                data: '10/01/2020 15:30:55',
                                messaggio: 'Come va? tutto bene?',
                                stato: 'sent'
                            },
                            {
                                data: '10/01/2020 15:30:55',
                                messaggio: 'Elemento 3',
                                stato: 'sent'
                            },
                        ]
                    }]
            },

            ],
            nomeContatto: 'prova',
            contatto: [

                {
                    nome: 'Alberto',
                    msg: [
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Hai portato a spasso il cane?',
                            stato: 'sent'

                        },
                        {
                            data: '10/01/2020 15:40:55',
                            messaggio: 'Rispondimi?',
                            stato: 'sent'
                        },
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Va bene a dopo?',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_1.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    value: "user",
                    ownUser: false
                },

                {
                    nome: 'Gigi',
                    msg: [
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Non so più cosa inventarmi',
                            stato: 'sent'

                        },
                        {
                            data: '10/01/2020 15:40:55',
                            messaggio: 'Hai qualche suggerimento?',
                            stato: 'sent'
                        },
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Va bene a dopo',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_1.jpg',
                    ultimoAccesso: 'oggi alle 12:00',

                },
                {
                    nome: 'Fabio',
                    msg: [
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Hai portato a spasso il cane?',
                            stato: 'sent'

                        },
                        {
                            data: '10/01/2020 15:40:55',
                            messaggio: 'Rispondimi?',
                            stato: 'sent'
                        },
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Va bene a dopo?',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_2.jpg',
                    ultimoAccesso: 'ultimo accesso ieri alle 13:00',

                },
                {
                    nome: 'Manuel',
                    msg: [
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Non so più cosa inventarmi',
                            stato: 'sent'

                        },
                        {
                            data: '10/01/2020 15:40:55',
                            messaggio: 'Hai qualche suggerimento?',
                            stato: 'sent'
                        },
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Va bene a dopo',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_3.jpg',
                    ultimoAccesso: 'ultimo accesso martedì alle 13:00',

                },
                {
                    nome: 'Alessandro B.',
                    msg: [
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Hai portato a spasso il cane?',
                            stato: 'sent'

                        },
                        {
                            data: '10/01/2020 15:40:55',
                            messaggio: 'Rispondimi?',
                            stato: 'sent'
                        },
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Va bene a dopo?',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_4.jpg',
                    ultimoAccesso: 'online',

                },
                {
                    nome: 'Fabio',
                    msg: [
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Non so più cosa inventarmi',
                            stato: 'sent'

                        },
                        {
                            data: '10/01/2020 15:40:55',
                            messaggio: 'Hai qualche suggerimento?',
                            stato: 'sent'
                        },
                        {
                            data: '10/01/2020 15:30:55',
                            messaggio: 'Va bene a dopo',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_2.jpg',
                    ultimoAccesso: 'ultimo accesso ieri alle 13:00',

                },
            ]
        }
    },
};

console.log(this.ourMsg)








// Creo una variabile alla quale assegno Vue.createApp e gli passo configurazione
let app = Vue.createApp(configurazione);
console.log("applicazione inizializzata ma non montata", app);

app.mount('.app'); //funziona esattamente come il querySelector
console.log("Con questo monto e `applico app.mount('h1');`", app);