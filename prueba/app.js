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
        document.getElementById('res').value= res.data.user.first_name        
    })
    .catch(err => console.log(err))

    
})