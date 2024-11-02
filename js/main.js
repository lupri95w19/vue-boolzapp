//Importo la funzione "createApp" dalla classe/oggettone "Vue"
const { createApp } = Vue;
// vuol dire ===> const createApp = Vue.createApp;






//Creo un oggetto con la configurazione (i dati) della mia app
const configurazione = {
    //l'oggetto ha una proprietà "data", che è una funzione
    data() {
        //La funzione restituisce un oggetto con tutti i dati
        return {
            contattoAttivo: 0,
            myProfile: 'Luca',
            immagine: './img/Io.png',
            nomeContatto: 'prova',
            text: "",
            addText: "",
            search: "",
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
                            data: '10/01/2020 15:50:55',
                            messaggio: 'Va bene a dopo',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_1.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    value: "user",
                    ownUser: false,
                    visible: true,
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
                    img: './img/avatar_8.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

                },
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
                            data: '10/01/2020 15:50:55',
                            messaggio: 'Va bene a dopo',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_1.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    value: "user",
                    ownUser: false,
                    visible: true,
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
                    img: './img/avatar_8.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

                },
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
                            data: '10/01/2020 15:50:55',
                            messaggio: 'Va bene a dopo',
                            stato: 'received'
                        }
                    ],
                    img: './img/avatar_1.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    value: "user",
                    ownUser: false,
                    visible: true,
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
                    img: './img/avatar_8.jpg',
                    ultimoAccesso: 'oggi alle 12:00',
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

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
                    visible: true,

                },
            ]
        }
    },
    methods:
    {
        // cambiaChat(indice) {
        //     this.contattoAttivo = indice;
        //     // Quando usato nel ciclo for dei contatti, indice viene sostituito alla i in quel caso, e quindi al click cambia il contatto attivo in i
        // },
        cambiaChat(indice) {
            this.contattoAttivo = indice; // Imposta l'indice del contatto attivo

            // Aggiorna i dettagli del contatto attivo
            this.contattoSingolo = this.contatto[indice]; // Assicurati che 'contatto' contenga i dettagli dei contatti
        },
        getClass(indice) {
            if (indice == 'sent') {
                console.log("ourMessage")
                return "ourMessage";
            }
            else {
                console.log("contactMessage")
                return "contactMessage";
            }
        },
        getClassLeft(indice) {
            if (indice == 'sent') {
                return "onRight";
            }
            else {
                return "onLeft";
            }
        },


        print(indice) {
            if (this.addText.length > 0) {
                console.log(indice);

                const now = new Date();
                const day = now.getDate().toString().padStart(2, '0'); // Giorno
                const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Mese (ricorda di aggiungere 1)
                const year = now.getFullYear(); // Anno
                const hours = now.getHours().toString().padStart(2, '0'); // Ore
                const minutes = now.getMinutes().toString().padStart(2, '0'); // Minuti
                const seconds = now.getSeconds().toString().padStart(2, '0'); // Secondi

                // Formattare la data e l'ora
                const formattedTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

                const b = {
                    data: formattedTime, // Usa il formato appena creato
                    messaggio: this.addText,
                    stato: 'sent'
                };

                indice.push(b);
                this.addText = "";

                setTimeout(() => {
                    console.log(indice);
                    const c = {
                        data: formattedTime, // Usa lo stesso formato per la risposta
                        messaggio: "Ok",
                        stato: 'Received'
                    };
                    indice.push(c);
                }, 1000);
            }
        },

        remove(indice) {
            indice.pop(0);
        },

        filterList() {
            const searchInputv = search;
            const filter = searchInputv.value.toLowerCase();
            const listItems = this.contatto
        },

        find() {
            for (let i = 0; i < this.contatto.length; i++) {
                let contatto = this.contatto[i];
                // Assicurati di rimuovere i controlli sul maiuscolo/minuscolo per semplificare la ricerca
                if (contatto.nome.toLowerCase().startsWith(this.search.toLowerCase())) {
                    contatto.visible = true;
                } else {
                    contatto.visible = false;
                }
            }
        },

    },
    computed: {
        lastIndex() {
            console.log("ciao", this.contatto[0].msg)
            //   return this.contatto[this.contattoAttivo].msg.length -1
            //   Così prendo l'ultimo elemento dell'oggetto
        }
    }
};








// Creo una variabile alla quale assegno Vue.createApp e gli passo configurazione
let app = Vue.createApp(configurazione);
console.log("applicazione inizializzata ma non montata", app);

app.mount('.app'); //funziona esattamente come il querySelector
console.log("Con questo monto e `applico app.mount('h1');`", app);