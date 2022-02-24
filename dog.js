const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => outDog (data))
}

const outDog = (dogList) =>{

    const dogOut = document.getElementById('dog-out')
    const first10Dog = dogList.slice(0,10)
    
    for(const dog of first10Dog){
       const div = document.createElement('div')
       div.classList.add('col-lg-4')
       console.log(dog);
       div.innerHTML = `
       <h2>${dog.name}</h2>
       <p> height  ${dog.height.metric}</p>
       <img width="400px" height="300px" src="${dog.image.url}"/>
       `
      dogOut.appendChild(div)
    }
}