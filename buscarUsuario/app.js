const button = document.getElementById('button')

button.addEventListener ('click', () => {
    const user= document.getElementById('user').value        
    const pass=document.getElementById('pass').value

    axios({
        method:'POST',
        url: 'http://170.210.142.11:1346/api/auth/local',
        data: {
            identifier:user, 
            password:pass
        }
    }).then(res => {
        document.getElementById('nom').value= res.data.user.first_name
        document.getElementById('ape').value= res.data.user.last_name
        document.getElementById('dni').value= res.data.user.dni
        console.log(res.data)        
    })
    .catch(err => console.log(err))

    
})