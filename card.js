const params = new URLSearchParams(window.location.search);
const id = params.get('id');

function getVariantLabels(variants) {
    const labels = [];
 
    for (let cardType in variants) {
        if (variants[cardType]) {
            if (cardType === "holo") {
                labels.push("Holofoil");
            } else if (cardType === "reverse") {
                labels.push("Reverse Holo");
            } else if (cardType === "firstEdition") {
                labels.push("1st Edition");
            } else if (cardType === "normal") {
                labels.push("Normal");
            } else if (cardType === "wPromo") {
                labels.push("Promo");
            }
        }
    }
 
    return labels;
}

fetch(`https://api.tcgdex.net/v2/en/cards/${id}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    const extension = "/high.png"
    const high = data.pricing?.tcgplayer?.holofoil?.highPrice; 
    const mid = data.pricing?.tcgplayer?.holofoil?.midPrice;  
    const low = data.pricing?.tcgplayer?.holofoil?.lowPrice; 

    const container = document.querySelector('.detailedCardViewContainer');

    const cardImg = document.createElement('img');
    cardImg.classList.add('detailedImg');
    cardImg.src = `${data.image}${extension}`;
    container.appendChild(cardImg);

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('cardInfoContainer');
    container.appendChild(cardInfo);

    const cardHeader = document.createElement('div');
    cardHeader.classList.add('cardHeader');
    cardHeader.innerHTML = `<h1 class="pokeName">${data.name}</h1>`;
    cardInfo.appendChild(cardHeader);

    const infoBox = document.createElement('div');
    infoBox.classList.add('orangeBox');
    cardInfo.appendChild(infoBox);

    const marketLabel = document.createElement('p');
    marketLabel.classList.add('marketLabel');
    marketLabel.textContent = 'Market Value';
    infoBox.appendChild(marketLabel);

    const tcgBox = document.createElement('div');
    tcgBox.classList.add('marketBoxes');
    tcgBox.innerHTML = `
        <div class="tcgPriceLeft">
            <p class="market-box-label">TCGPlayer mid</p>
            <p class="market-box-value">${mid ? '$' + mid.toFixed(2) : '—'}</p>
        </div>
        <div class="tcgPriceRight">
            <p class="tcg-stat">Low <span>${low ? '$' + low.toFixed(2) : '—'}</span></p>
            <p class="tcg-stat">Mid <span>${mid ? '$' + mid.toFixed(2) : '—'}</span></p>
            <p class="tcg-stat">High <span>${high ? '$' + high.toFixed(2) : '—'}</span></p>
        </div>
    `;
    infoBox.appendChild(tcgBox);

    const cardDetailBox = document.createElement('div');
    cardDetailBox.classList.add('detailsBox');
    cardInfo.appendChild(cardDetailBox);

    const cardDetailsLabel = document.createElement('p');
    cardDetailsLabel.classList.add('marketLabel');
    cardDetailsLabel.textContent = 'Card Details';
    cardDetailBox.appendChild(cardDetailsLabel);

    const cardDetailsWrapper = document.createElement('div');
    cardDetailsWrapper.classList.add('cardDetailsContainer');
    cardDetailBox.appendChild(cardDetailsWrapper);

    const details = [
        { key: 'Set', val: data.set.name },
        { key: 'Number', val: `${data.localId} / ${data.set.cardCount.official}` },
        { key: 'Rarity', val: data.rarity ?? '—' },
        { key: 'Type', val: data.types?.join(', ') ?? '—' },
        { key: 'HP', val: data.hp ?? '—' },
        { key: 'Artist', val: data.illustrator ?? '—' },
    ];

    details.forEach(function(detail) {
        const row = document.createElement('div');
        row.classList.add('cardDetailRow');
        row.innerHTML = `
            <p class="detail-key">${detail.key}</p>
            <p class="detail-val">${detail.val}</p>
        `;
        cardDetailsWrapper.appendChild(row);
    });

    const collectionBox = document.createElement('div');
collectionBox.classList.add('collectionBox');
cardInfo.appendChild(collectionBox);

const collectionLabel = document.createElement('p');
collectionLabel.classList.add('marketLabel');
collectionLabel.textContent = 'My Collection';
collectionBox.appendChild(collectionLabel);

const addBtn = document.createElement('button');
addBtn.classList.add('addToCollectionBtn');
addBtn.textContent = 'Add to Collection';
collectionBox.appendChild(addBtn);

addBtn.addEventListener('click', function() {
    const collection = JSON.parse(localStorage.getItem('nemodex-collection') || '{}');
    collection[id] = {
        name: data.name,
        image: data.image,
        set: data.set.name,
        number: data.localId,
        rarity: data.rarity ?? '—'
    };
    localStorage.setItem('nemodex-collection', JSON.stringify(collection));
    addBtn.textContent = 'Added!';
    addBtn.disabled = true;
});

})