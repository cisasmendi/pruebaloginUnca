let data = [];
function Requisitos(bienestar) {
    console.log(bienestar)
}


axios({
    method:'GET',
    url: 'http://170.210.142.11:1347/api/becas',
}).then(res => {

    console.log(res.data);
    data = res.data;
    for(let i=0;i<res.data.data.length;i++) {
        document.getElementById("box").innerHTML
        += "<div id='info'> <img src=" + res.data.data[i].attributes.imag_url + ">" + "<br>" +
            "<h2>" + res.data.data[i].attributes.nombre + "</h2>" +
            "<p>" + res.data.data[i].attributes.comentario + "</p>" + 
            "<button id='btn" + i + "'>Ver Requisitos</button>" +
            "<div id='req" + i + "'></div></div>"
        //fragment.appendChild(atributes)
    }

    for (  i = 0; i < res.data.data.length; i++) {

        let j = i
          let c=res.data.data[i].attributes.requisitos[0].text
          document.getElementById(`btn${i}`).addEventListener('click', () => {
              document.getElementById(`req${j}`).innerHTML = "<p>"+c+"</p>"
  
          })
      }

    //list.appendChild(fragment)
    console.log(res.data.data[0].attributes.imag_url)   
    console.log(res.data.data.length)     
})
