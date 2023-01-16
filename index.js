// Add your code here
const  submitData = (name, email) => {

    
    const formData = {
        "name": name,
        "email": email,
    }
     const configurationObject =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData)
    }
     return fetch("http://localhost:3000/users", configurationObject)
       .then(resp => resp.json())
       .then(data => {  
        console.log(data)
        const p = document.createElement('p')
        const body = document.querySelector('body')
        body.appendChild(p)
        p.innerHTML = data.id;
    } )
       .catch(error => {
        const p = document.createElement('p')
        const body = document.querySelector('body')
        body.appendChild(p)
         p.innerHTML =  error;
    } )
    }

    document.addEventListener('DOMContentLoaded', e => {
        submitData()
        
    })








