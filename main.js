const {createApp} = Vue;
const app = createApp({
    data(){
      
        return{
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:55',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                }
            ],
            newMessage:{
                    date: '',
                    message: '',
                    status: 'sent',
            },
            activeIndex: 0,
            
        };
    },
    computed: {
        activContact(){
            return this.contacts[this.activeIndex];
        }
            
    },
    
    
    
    methods: {
        maxLengthMessage(message, maxLength){
            return  message.length > maxLength ?  message.substring(0, maxLength) + '...' : message;
        },
        getLastMessage(messages){
            const lastMessage = messages[messages.length - 1];
            return lastMessage ? this.maxLengthMessage(lastMessage.message, 15) : '';
        },
        getTimeLastMessage(messages){
            const receivedMessages = messages.filter((message)=>message.status === 'received');
            const lastMessage = receivedMessages[receivedMessages.length - 1];
            return lastMessage ? lastMessage.date.slice(-9) : '';
        },
        
        setActiveIndex(index){
            this.activeIndex = index;
        },
        getTime(){
            const now = new Date();
            return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        },

        sendMessage(){
            const newMessage = {...this.newMessage};
            newMessage.date = this.getTime();
            this.activContact.messages.push(newMessage);
            setTimeout(this.reciveMessage, 5000);
            this.newMessage.message = '';
        },
        reciveMessage(){
          const newMessage ={
            message : 'ok!',
            date: this.getTime(),
            status: 'received',
          };
          this.activContact.messages.push(newMessage);
        },
    },
   
    mounted(){
    },
});
app.mount('#app');




