const params = new URLSearchParams(window.location.search);
const query = params.get('q');

const extensions = "/high.png";

if(query){
fetch(`https://api.tcgdex.net/v2/en/cards?name=${query}`)

.then(function(response){
    return response.json();
})

.then(function(data){
    console.log(data);

    const searchResultText = document.querySelector('.searchContainer');
    const resultCount = document.createElement('div');
    resultCount.innerHTML= `<h1 class="rCount">Showing ${data.length} results for "${query}"</h1>`
    searchResultText.prepend(resultCount);

    for (let results = 0; results < data.length; results++){
        const resultsList = document.querySelector('.searchResults')
        const searchCard = document.createElement('div')
        searchCard.classList.add("resultCard");
        
        let cardName = data[results].name;
        let cardImg = data[results].image;

        if(cardImg){    
            searchCard.innerHTML = `<img class="pokeImg"src="${cardImg}${extensions}">
            <span class="pokeName">${cardName}</span>
            <div class="buttonContainer"><button class="viewCard "type="button">View Card</button></div>`

            detailedCardView = searchCard.querySelector('.viewCard');
            
            detailedCardView.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href = `cardView.html?id=${data[results].id}`
            })

            resultsList.appendChild(searchCard);
        }
    }
    
})
}

else{
    console.log("Error. No Search Param.")
}