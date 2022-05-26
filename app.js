const app = Vue.createApp({
    data(){
        return{
            botChoice: "",
            playerChoice: ""
        }
    },
    methods: {
        roll(){
            const choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            if(choice === 1){
                this.botChoice = "./assets/paper.png"
            }else if(choice === 2){
                this.botChoice = "./assets/rock.png"
            }else if(choice === 3){
                this.botChoice = "./assets/scissors.png"
            }
        },
        playerClick(choice){
            this.roll()
            if(choice === "rock"){
                this.playerChoice = "./assets/rock.png"
            }else if(choice === "paper"){
                this.playerChoice = "./assets/paper.png"
            }else if(choice === "scissors"){
                this.playerChoice = "./assets/scissors.png"
            }
        }
    }
})

app.mount("#app")