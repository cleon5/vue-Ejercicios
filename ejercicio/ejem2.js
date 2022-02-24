var app = new Vue({
    el: '#app',

    data: {
        bin: false,  
        pick: 'nada seleccionado',
        pick2: 'nada seleccionado',
        modelos:'pocox3.jpg',
        marcas: [
            {
                id: 1,
                nombre: "xiaomi",
                
            },
            {
                id: 2,
                nombre: "samsumg",
                
            },
            {
                id: 3,
                nombre: "apple",
                
            }
            ],
        
            xiaomi: [
                "Poco X3","Redmi note 10","Mi 11"
            ],
            samsumg: [
                "Note 22","A72","Galaxy S22"
            ],
            apple: [
                "Iphone 10","Iphone 11","Iphone 12"
            ]
    },
    methods: {
        cambiarCel: function(){
            if(this.pick=='xiaomi'){
                this.modelos='pocox3.jpg'
            }
            else if (this.pick=='samsumg'){
                this.modelos='samsumg.jpg'
            }else{
                this.modelos='apple.jpg'
            }
            console.log(this.modelos,this.pick);
        }   
    }
})
