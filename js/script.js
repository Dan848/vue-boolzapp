import Picker from './emoji-picker.js';

const { createApp } = Vue;

createApp({
    data(){
        return{
            contacts: [
                {
                    id:1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 1 + "-" + 1,
                            date: '10/01/2020  15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 1 + "-" + 2,
                            date: '10/01/2020  15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 1 + "-" + 3,
                            date: '10/01/2020  16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 2 + "-" + 1,
                            date: '20/03/2020  16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 2 + "-" + 2,
                            date: '20/03/2020  16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            id: "msg-" + 2 + "-" + 3,
                            date: '20/03/2020  16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 3 + "-" + 1,
                            date: '28/03/2020  10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            id: "msg-" + 3 + "-" + 2,
                            date: '28/03/2020  10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 3 + "-" + 3,
                            date: '28/03/2020  16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 4 + "-" + 1,
                            date: '10/01/2020  15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 4 + "-" + 2,
                            date: '10/01/2020  15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 5 + "-" + 1,
                            date: '10/01/2020  15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 5 + "-" + 2,
                            date: '10/01/2020  15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 6 + "-" + 1,
                            date: '10/01/2020  15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 6 + "-" + 2,
                            date: '10/01/2020  15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            id: "msg-" + 6 + "-" + 3,
                            date: '10/01/2020  15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id:7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 7 + "-" + 1,
                            date: '10/01/2020  15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 7 + "-" + 2,
                            date: '10/01/2020  15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id:8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    state: "offline",
                    messages: [
                        {
                            id: "msg-" + 8 + "-" + 1,
                            date: '10/01/2020  15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            id: "msg-" + 8 + "-" + 2,
                            date: '10/01/2020  15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            id: "msg-" + 8 + "-" + 3,
                            date: '10/01/2020  15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            answers: [
                "Non sono un mago, ma ci provo", 
                "Non sono un robot, ma ci sto lavorando", 
                "Non mi chiedere di fare miracoli, al massimo posso fare un trucco di magia", 
                "Ho l'impressione che tu stia cercando un supereroe, ma sono già impegnato stendendo il bucato", 
                "Aspetta un attimo, devo chiedere al mio consulente spirituale", 
                "Mi piacerebbe aiutarti, ma sto ancora cercando di capire il significato della vita", 
                "Non posso darti una risposta definitiva, ma posso darti una risposta che sembra definitiva", 
                "Non ho la risposta giusta, ma ho un'infinità di battute", 
                "Non so come rispondere, ma ho una teoria su come gli unicorni hanno perso la loro coda", 
                "Non ho una risposta, ma ho un meme che potrebbe farti sorridere"
            ],
            contId: "",
            msgId: "",
            searchText: "",
            messToSendText: "",
            msgIdCounter: 4,
            contactsIdCounter: 9,
            filteredAll: {
                filteredContacts: '',
                filteredChats: ''
            },
            logoSection: true,
            showEmoji: false,
            showDeleteMenu: false,
            mobile: window.innerWidth < 576 ? true : false,
        }
    },
    methods: {
        onSelectEmoji(emoji) {
            this.messToSendText += emoji.i;
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min;
        },
        getDate (){
            return new Date().toLocaleString('it-IT', { timeZone: 'Europe/Rome', day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        },
        formatDateHour(date){
            return date.slice(11, 17)
        },
        formatDateDay(date){
            return date.slice(0, 10)
        },
        lastMessageText(message) {
            if (message.length > 40){
                return `${message.substring(0,40)}...`;
            }
            else {
                return message
            }
        },
        lastMessageDate (date){
            if (this.formatDateDay(date) === this.formatDateDay(this.getDate())){
                return this.formatDateHour(date)
            }
            else {
                return this.formatDateDay(date)
            }
        },
        stateUser(cont, date){
            if (cont.state === "writing"){
                return "Sta scrivendo..."
            }
            else if (cont.state === "online") {
                return "Online"
            }
            else {
                return `Ultimo accesso ${this.lastMessageDate(date)}` 
            }
        },
        moveUpChat(arr, indexMoving){
            let contactMoving = arr.splice(indexMoving, 1)[0];
            arr.splice(0, 0, contactMoving);
        },
        findIndexToId (arr, id){
            return arr.findIndex((item) => item.id == id);
        },
        deleteSearchText(){
            this.searchText = "";
            this.filteredAll.filteredContacts = "";
            this.filteredAll.filteredChats = "";
        },
        makeActive(id){
            this.contId = id;
            this.messToSendText = "";
            this.msgId = "";
            this.logoSection = false;
        },
        searchFor(){
            //Filter based on contact name
            this.filteredAll.filteredContacts = this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchText.trim().toLowerCase()))
            //Filter based on message
            this.filteredAll.filteredChats = this.contacts.filter((contact) => contact.messages.some((mess) => mess.message.toLowerCase().includes(this.searchText.trim().toLowerCase())))
            //Both array filtered are contained in this object
            return this.filteredAll;
        },
        scrollMsgs() {
            this.$nextTick(() => {
                this.$refs.msg[this.$refs.msg.length - 1].scrollIntoView({
                    behavior: "smooth",
                });
            }); 
        },
        sendMessage(){
            if (this.messToSendText.trim()){
                this.showEmoji = false
                //Push Message Object into Messages Array based on Id selected                        
                this.contacts[this.findIndexToId(this.contacts, this.contId)].messages.push(
                    {
                        id: "msg-" + this.contId + "-" + this.msgIdCounter,
                        date: this.getDate(),
                        message: this.messToSendText.trim(),
                        status: "sent"
                    }
                    );
                this.msgIdCounter++;    
                this.scrollMsgs();
                //Move up the chat on the list
                this.moveUpChat(this.contacts, this.findIndexToId(this.contacts, this.contId))
                //Clear input box
                this.messToSendText = "";
                //Change Status to Writing
                this.contacts[this.findIndexToId(this.contacts, this.contId)].state = "writing";
                //Taking current id so it doesn't change if we click on another contact
                const actualId = this.contId;
                setTimeout(() =>{
                    //Change Status to Online                
                    this.contacts[this.findIndexToId(this.contacts, actualId)].state = "online";
                    //Push answer back
                    this.contacts[this.findIndexToId(this.contacts, actualId)].messages.push(
                        {
                            id: "msg-" + actualId + "-" + this.msgIdCounter,
                            date: this.getDate(),
                            message: this.answers[this.getRndInteger(0,9)],
                            status: "received"
                        },
                        
                    );
                    this.msgIdCounter++; 
                    this.scrollMsgs();
                },3000)
                //Change Status to Offline            
                setTimeout(() => this.contacts[this.findIndexToId(this.contacts, actualId)].state = "offline", 6000);
            }
        },
        dropdownShow(id){
            if(this.msgId === id){
                this.msgId = "";
            }
            else {
                this.msgId = id
            }
        },
        deleteSingleItem(arr, id){
            if(arr.length === 1){
                arr.length = 0;
            }
            else{
                arr.splice(this.findIndexToId(arr, id), 1);
            }
        },
        deleteAllMsg(){
            this.contacts[this.findIndexToId(this.contacts, this.contId)].messages.length = 0;
            this.showDeleteMenu = false;
        },
        deleteSingleContact(arr, id){
            this.deleteSingleItem(arr, id);
            this.contactsIdCounter --;
            this.logoSection = true;
            this.showDeleteMenu = false;
        }
    },
    mounted(){
    }
}).component('Picker', Picker).mount('#app');