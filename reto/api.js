
var app = new Vue({
    
    el: '#app',
    data:{
        x: '',
        console:''
    },
    
    
    mounted () {
        axios.get('http://deveduc.ddns.net:88/listadocursos/agenda/galerias.json')
        .then(response => (this.x = response))
        .catch(e => {
            console.log(e)
        })
}
})
