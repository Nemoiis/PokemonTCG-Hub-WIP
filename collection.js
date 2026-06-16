const collection = JSON.parse(localStorage.getItem('nemodex-collection') || '{}');
const grid = document.getElementById('collectionGrid');

if (Object.keys(collection).length === 0) {
    grid.innerHTML = `<p style="color: var(--text-muted); font-family: var(--font-Jans);">No cards in your collection yet.</p>`;
} else {
    Object.values(collection).forEach(function(card) {
        const cardEl = document.createElement('div');
        cardEl.classList.add('resultCard');
        cardEl.innerHTML = `
            <img class="pokeImg" src="${card.image}/high.png" alt="${card.name}">
            <p class="pokeName">${card.name}</p>
            <p style="color: var(--text-muted); font-size: 13px; font-family: var(--font-Jans); margin-top: 6px;">${card.set} · #${card.number}</p>
            <p style="color: var(--text-muted); font-size: 13px; font-family: var(--font-Jans); margin-top: 4px;">${card.rarity}</p>
        `;
        grid.appendChild(cardEl);
    });
}