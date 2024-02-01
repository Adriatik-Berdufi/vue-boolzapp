const {createApp} = Vue;
const app = createApp({
    data(){
        return{
            title: 'New Project',
        };
    },
    methods: {
       
    },
    
    mounted(){
        console.log('App montata');
        
    },
});
app.mount('#app');




