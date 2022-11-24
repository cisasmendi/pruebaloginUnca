let data = [];
function Requisitos(index) {
    console.log(index)
}

axios({
    method: 'GET',
    url: 'http://170.210.142.11:1347/api/becas',

}).then(res => {

    console.log(res.data);
    data = res.data;
    for (i = 0; i < res.data.data.length; i++) {
        document.getElementById('datos').innerHTML
            += "<h2>" + res.data.data[i].attributes.nombre + "</h2>" +
            "<p>" + res.data.data[i].attributes.comentario + "</p>" +
            "<img src=" + res.data.data[i].attributes.imag_url + ">" + "<br>" +
            "<button id='btn" + i + "'>Requisitos</button>" +
            "<div id='req" + i + "'></div>"
        // console.log()


    }
    for (  i = 0; i < res.data.data.length; i++) {

      let j = i
        let c=res.data.data[i].attributes.requisitos[0].text
        document.getElementById(`btn${i}`).addEventListener('click', () => {
            let y = document.getElementById(`req${j}`) ;
            console.log("dfsdf",y)
            document.getElementById(`req${j}`).innerHTML = "<p>"+c+"</p>"

        })
    }
    for (  i = 0; i < res.data.data.length; i++) {

        let y = i
          let c=res.data.data[i].attributes.requisitos[0].text
          document.getElementById(`btn${y}`).addEventListener('click', () => {
            document.getElementById(`req${y}`).innerHTML = "<p>"+c+"</p>"
    })
    }

})

    .catch(err => console.log(err))

//button.addEventListener ('click', () => {
//})