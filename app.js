const app = Vue.createApp({
    data(){
        return{
            greetings:'Hello World',
            title:'',
            writer:'',
            age:50,
            showBooks:true,
            x:0,
            y:0,
            books:[
                {tl:"Something", ath:"Something Else", img:"assets/1.jpg", isFav:true},
                {tl:"Something", ath:"Something Else", img:"assets/2.jpg",isFav:false},
                {tl:"Something", ath:"Something Else", img:"assets/3.jpg",isFav:true},
                {tl:"Something", ath:"Something Else", img:"assets/3.jpg",isFav:true},
            ]
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book) => book.isFav)
        }
    },
    methods:{
        changeTitle(){
            this.title="Black and Red"
        },
        changeWriter(writer){
            this.writer=writer
        },
        decreaseAge(){
            this.age--
        },
        toggleShowBooks(){
            this.showBooks=!this.showBooks
        },
        handleEvent(e, data){
            console.log(e, e.type)
            
            if(data){
                console.log(data)
                alert(`This is the data: ${data}`)
            }else{

                alert(`No data in the parameters`)
            }
        },
        handleMouseMove(e){
            this.x=e.offsetX
            this.y=e.offsetY
        },
        toggleFav(book){
            book.isFav = !book.isFav
            },

        }
    }
)

app.mount('#app') 
//this mount is controlling everything is inside the div with the id=app
//everything outside will not be rendered