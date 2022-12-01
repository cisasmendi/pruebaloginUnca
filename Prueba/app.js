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
            += `<div id="info" class="info">
                <h2> ${res.data.data[i].attributes.nombre}</h2>
                <p> ${res.data.data[i].attributes.comentario} </p>
                <img src="${res.data.data[i].attributes.imag_url}">
                <br>
                <button id='btn${i}'>Requisitos</button>
                <div id='req${i}'></div> 
                </div>`
    }

    for (let i = 0; i < res.data.data.length; i++) {

        let c = "<ul>"
        res.data.data[i].attributes.requisitos.forEach(element => {
            c += "<li>" + element.text + "</li>"
        });
        c += "</ul>"

        document.getElementById(`btn${i}`).addEventListener('click', () => {

            let y = document.getElementById(`req${i}`).outerHTML
            console.log(y)
            if (y == `<div id="req${i}"></div>`) {
                document.getElementById(`req${i}`).innerHTML = c
            } else { document.getElementById(`req${i}`).innerHTML = "" }



        })
    }

})
    .catch(err => console.log(err))

//button.addEventListener ('click', () => {
//})