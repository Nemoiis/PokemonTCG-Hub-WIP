function getRand(max){
    return Math.floor(Math.random() * max);
}
console.log("building cara");
function buildCarousel(animation, setName){
    let container = document.createElement('div');
    container.classList.add("carosel");

    if(animation === "spin-right"){
        container.innerHTML = 
    `<div aria-hidden class="group ${animation}">
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
    </div>
    <div class="group ${animation} ">
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
    </div>`
    }

    else{
    container.innerHTML = 
    `<div class="group ${animation} ">
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
        <div class="card"><a class="pic"></a></div>
    </div>
    <div aria-hidden class="group ${animation}">
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
        <div class="dupeCard"><a class="dupePic"></a></div>
    </div>`
    }
    document.getElementById('heroWrapper').appendChild(container);

    fetch(`https://api.tcgdex.net/v2/en/sets/${setName}`)
.then(function(response){
    return response.json();
})

.then(function(data){
    const caroselCards = [];

    for (let i = 0; i < 6; i++){
        let index = getRand(data.cardCount.total);
        caroselCards.push(data.cards[index]);
    }
    console.log(caroselCards);
    return caroselCards;
})

.then(function(caroselCards){
    const cards = container.querySelectorAll('.card');
    const cardsDupe = container.querySelectorAll('.dupeCard');

    const extension = "/low.png";

    for(let i = 0; i < caroselCards.length;i++){
        cards[i].innerHTML = `<img src="${caroselCards[i].image + extension}"><span>${caroselCards[i].name}</span>`
    }

    for(let i = 0; i < caroselCards.length;i++){
        cardsDupe[i].innerHTML = `<img src="${caroselCards[i].image + extension}"><span>${caroselCards[i].name}</span>`
    }
})
    
    return container;

}

const carOne = buildCarousel('spin-left','sv03.5');
const carTwo = buildCarousel('spin-right',"sv04.5");
const carThree = buildCarousel('spin-left',"me03");
