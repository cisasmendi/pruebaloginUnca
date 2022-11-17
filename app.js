const button = document.getElementById("button")

button.addEventListener ('click',() => {
      axios({
        method:'GET',
        url: 'http://170.210.142.11:1347/api/becas',
    }).then(res => {
        /*document.getElementById("list").value= res.data.data[0].attributes.nombre
        document.getElementById("list1").value= res.data.data[0].attributes.comentario
        const imagen= res.data.data[0].attributes.imag_url
        document.getElementById("imag").innerHTML= "<img src="+imagen+">" */

        //const fragment = document.createDocumentFragment()
        for(let i=0;i<res.data.data.length;i++) {
          const nombre=res.data.data[i].attributes.nombre
          const contenido=res.data.data[i].attributes.comentario
          const imagen=res.data.data[i].attributes.imag_url
          document.getElementById("box").innerHTML+=nombre + contenido + "<img src="+imagen+">"
          //fragment.appendChild(atributes)
      }
      //list.appendChild(fragment)
      console.log(res.data.data[0].attributes.imag_url)   
      console.log(res.data.data.length)     
  })
})