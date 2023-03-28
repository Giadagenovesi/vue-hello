// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

const {createApp} = Vue;

createApp ({
    data(){
        return{
            greetings: "Hello",
            username: "",
            imageSrc: "https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg",
            imageClass: ""
        }
    },
    methods: {
        sayHello() {
            const message = `${this.greetings} ${this.username} `
            console.log(message);
        },
        showPicture() {
            this.imageClass = "block"
        }
    }
}).mount("#app")