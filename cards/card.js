const searchButton = () =>{
    const inputValue = document.getElementById('input-value')
    const error = document.getElementById('error')
    const searchInput = parseInt(inputValue.value)

    if(isNaN(searchInput) || searchInput == ''){
        error.innerText = 'Please give a number'
        inputValue.value = '';
    }
    else if(searchInput <= 0 ){
        error.innerText = 'Please give a positive number'
        inputValue.value = '';
    }
    else if (searchInput > 52){
        error.innerText = "Please give a number what isn't bigger then 52 "
    }
    else{
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${searchInput}`)
    .then(res => res.json())
    .then(data => cardDisplay(data))
         inputValue.value = '';
    }
        
}

const cardDisplay = (cards) =>{
    console.log(cards)
}