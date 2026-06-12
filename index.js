/* ============================================================
   HOT CARDS DATA
   ============================================================ */
const hotCards = [
    {
        cardNumber: "232/091",
        currency: "USD",
        game: "pokemon",
        id: "019bffac-ba79-773e-9b06-670b19752af1",
        image: "https://cdn.poketrace.com/cards/344d7bc70916cec8.webp",
        nmTCGAvgPrice: "926.80",
        nmEbayAvgPrice: "934.99",
        name: "Mew ex",
        varient:"Holofoil"

    },
    {
        cardNumber: "125/094",
        currency: "USD",
        game: "pokemon",
        id: "019c0012-d832-755f-9d0c-103a3da1be59",
        image: "https://cdn.poketrace.com/cards/dbd7db298f3e1da6.webp",
        nmTCGAvgPrice: "882.24",
        nmEbayAvgPrice: "1084",
        name: "Mega Charizard X ex",
        varient:"Holofoil"
    },
    {
        cardNumber: "199/165",
        currency: "USD",
        game: "pokemon",
        id: "019bffab-58b9-77cf-912b-acdfb23b0a46",
        image: "https://cdn.poketrace.com/cards/bcbd209ec5cc6e23.webp",
        nmTCGAvgPrice: "489.28",
        nmEbayAvgPrice: "393.33",
        name: "Charizard ex",
        varient:"Holofoil"
    },
    {
        cardNumber: "085",
        currency: "USD",
        game: "pokemon",
        id: "019bffab-58b9-77cf-912c-577566af1091",
        image: "https://cdn.poketrace.com/cards/eba3150becc83ce2.webp",
        nmTCGAvgPrice: "985.28",
        nmEbayAvgPrice: "950",
        name: "Pikachu with Grey Felt Hat",
        varient: "Normal"
    },
    {
        cardNumber: "170/181",
        currency: "USD",
        game: "pokemon",
        id: "019bff91-e4dd-7702-a538-17f24d2594fa",
        image: "https://cdn.poketrace.com/cards/6dccf169a7751f14.webp",
        nmTCGAvgPrice: "2782.80",
        nmEbayAvgPrice: "2300",
        name: "Latias & Latios GX",
        varient:"Holofoil"
    },
    {
        cardNumber: "156/131",
        currency: "USD",
        game: "pokemon",
        id: "019bfff1-0ac7-70ee-b9dc-c8fc19bcfb8f",
        image: "https://cdn.poketrace.com/cards/c1bf975b4c9fb57a.webp",
        nmTCGAvgPrice: "492.17",
        nmEbayAvgPrice: "249.23",
        name: "Sylveon ex",
        varient:"Holofoil"
        
    }
];


/* ============================================================
   UTILITY FUNCTIONS
   ============================================================ */
function getRand(max) {
    return Math.floor(Math.random() * max);
}

function cardHTML(card) {
    return `<img src="${card.image}">
    <div class="innerCardContainer">
        <span class="var">${card.varient}</span>
        <span class="name">${card.name}</span>
        <div class="priceContainer">
            <div class="priceRowOne">
                <span class="priceLabel">eBay Sold</span>
                <span class="ebayPrice">$${card.nmEbayAvgPrice}</span>
            </div>
            <div class="priceRowTwo">
                <span class="priceLabel">TCGPlayer</span>
                <span class="tcgPrice">$${card.nmTCGAvgPrice}</span>
            </div>
        </div>
    </div>`;
}
/* ============================================================
   CAROUSEL BUILDER
   Params:
     animation — 'spin-left' or 'spin-right'
     setName   — TCGdex set ID (e.g. 'sv03.5') — only used when hotCards is not passed
     hotCards  — optional array of card objects for the hot cards carousel
   ============================================================ */
function buildCarousel(animation, setName, hotCards) {

    /* --- HOT CARDS PATH --- */
    if (hotCards) {
        let containerTwo = document.createElement('div');
        containerTwo.classList.add("caroselTwo");

        containerTwo.innerHTML =
        `<div aria-hidden class="groupTwo ${animation}">
            <div class="dupeCardTwo"><a class="dupePicTwo"></a></div>
            <div class="dupeCardTwo"><a class="dupePicTwo"></a></div>
            <div class="dupeCardTwo"><a class="dupePicTwo"></a></div>
            <div class="dupeCardTwo"><a class="dupePicTwo"></a></div>
            <div class="dupeCardTwo"><a class="dupePicTwo"></a></div>
            <div class="dupeCardTwo"><a class="dupePicTwo"></a></div>
        </div>
        <div class="groupTwo ${animation}">
            <div class="cardTwo"><a class="picTwo"></a></div>
            <div class="cardTwo"><a class="picTwo"></a></div>
            <div class="cardTwo"><a class="picTwo"></a></div>
            <div class="cardTwo"><a class="picTwo"></a></div>
            <div class="cardTwo"><a class="picTwo"></a></div>
            <div class="cardTwo"><a class="picTwo"></a></div>
        </div>`;

        document.getElementById('secondCaro').appendChild(containerTwo);

        const cardsTwo = containerTwo.querySelectorAll('.cardTwo');
        const cardsDupeTwo = containerTwo.querySelectorAll('.dupeCardTwo');


        for (let i = 0; i < hotCards.length; i++) {
            cardsTwo[i].innerHTML = cardHTML(hotCards[i]);
            cardsDupeTwo[i].innerHTML = cardHTML(hotCards[i]);
        }

        return containerTwo;
    }

    /* --- STANDARD CAROUSEL PATH (fetches from TCGdex) --- */
    let container = document.createElement('div');
    container.classList.add("carosel");

    if (animation === "spin-right") {
        container.innerHTML =
        `<div aria-hidden class="group ${animation}">
            <div class="dupeCard"><a class="dupePic"></a></div>
            <div class="dupeCard"><a class="dupePic"></a></div>
            <div class="dupeCard"><a class="dupePic"></a></div>
            <div class="dupeCard"><a class="dupePic"></a></div>
            <div class="dupeCard"><a class="dupePic"></a></div>
            <div class="dupeCard"><a class="dupePic"></a></div>
        </div>
        <div class="group ${animation}">
            <div class="card"><a class="pic"></a></div>
            <div class="card"><a class="pic"></a></div>
            <div class="card"><a class="pic"></a></div>
            <div class="card"><a class="pic"></a></div>
            <div class="card"><a class="pic"></a></div>
            <div class="card"><a class="pic"></a></div>
        </div>`;
    } else {
        container.innerHTML =
        `<div class="group ${animation}">
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
        </div>`;
    }

    document.getElementById('heroWrapper').appendChild(container);

    fetch(`https://api.tcgdex.net/v2/en/sets/${setName}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const caroselCards = [];
            for (let i = 0; i < 6; i++) {
                let index = getRand(data.cardCount.total);
                caroselCards.push(data.cards[index]);
            }
            return caroselCards;
        })
        .then(function(caroselCards) {
            const cards = container.querySelectorAll('.card');
            const cardsDupe = container.querySelectorAll('.dupeCard');
            const extension = "/low.png";

            for (let i = 0; i < caroselCards.length; i++) {
                cards[i].innerHTML = `<img src="${caroselCards[i].image + extension}"><span>${caroselCards[i].name}</span>`;
                cardsDupe[i].innerHTML = `<img src="${caroselCards[i].image + extension}"><span>${caroselCards[i].name}</span>`;
            }
        });

    return container;
}


/* ============================================================
   BUILD CAROUSELS
   ============================================================ */
const carOne   = buildCarousel('spin-left',  'sv03.5');
const carTwo   = buildCarousel('spin-right', 'sv04.5');
const carThree = buildCarousel('spin-left',  'me03');
const carFour  = buildCarousel('spin-left',  null, hotCards);
/* ============================================================
   BUILD CAROUSELS
   ============================================================ */

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        console.log('firing', entry.isIntersecting);
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
});

observer.observe(document.getElementById('secondCaro'));

/* ============================================================
    SEARCH BAR
   ============================================================ */

   document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    const search = document.getElementById('query').value;

    window.location.href = `search.html?q=${search}`

   });