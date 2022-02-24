const loadDog = () =>{
    fetch('https://api.thedogapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => outDog (data))
}

const outDog = (dogList) =>{

    const dogOut = document.getElementById('dog-out')
    const first10Dog = dogList.slice(0,10)
    const div = document.createElement('div')
    for(const dog of first10Dog){
       
    }
}