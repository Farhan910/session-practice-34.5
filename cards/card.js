const cardDiv = document.getElementById("div1");


const searchButton = () => {
  const inputValue = document.getElementById("input-value");
  const error = document.getElementById("error");
  const searchInput = parseInt(inputValue.value);

  if (isNaN(searchInput) || searchInput == "") {
    error.innerText = "Please give a number";
    inputValue.value = "";
    cardDiv.innerHTML = '';
  }
   else if (searchInput <= 0) {
    error.innerText = "Please give a positive number";
    inputValue.value = "";
    cardDiv.innerHTML = '';
  }
   else if (searchInput > 52) {
    error.innerText = "Please give a number what isn't bigger then 52 ";
    cardDiv.innerHTML = '';
  }
   else {
    fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=${searchInput}`)
      .then((res) => res.json())
      .then((data) => cardDisplay(data.cards));
    inputValue.value = "";
    error.innerText ='';
  }
};

const cardDisplay = (cards) => {
  for (const card of cards) {
    const div = document.createElement("div");
    div.classList.add('col-lg-4')
    div.classList.add('mb-5')
    console.log(card);
    div.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${card.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${card.suit}</h5>
                <p class="card-text">${card.code}</p>
                <a href="#" class="btn btn-success">TRY TO WIN</a>
            </div>
        </div>
    `
    cardDiv.appendChild(div)

  }
};
