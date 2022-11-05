//const button = document.getElementById('button')

axios({
    method:'GET',
    url: 'http://170.210.142.11:1347/api/becas',
    
}).then(res => {

    console.log(res.data);
    for(i=0; i<6; i++){
        document.getElementById('datos').innerHTML
            += "<h2>"+res.data.data[i].attributes.nombre+"</h2>" + 
                "<p>"+res.data.data[i].attributes.comentario+"</p>" +
                "<img src="+res.data.data[i].attributes.imag_url+">"
                
    }
})
.catch(err => console.log(err))

//button.addEventListener ('click', () => {
//})