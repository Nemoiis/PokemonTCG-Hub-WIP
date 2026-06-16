# PokemonTCG-Hub
# NemoDex

A Pokémon TCG card price tracking web app built with vanilla HTML, CSS, and JavaScript.

---

## Features

### Search
Search for any Pokémon TCG card by name. Results are fetched from the TCGDex API and displayed in a grid with card art, name, and a "View Card" button.

### Card Detail View
Click any card from search results to open a detailed view showing:
- Full card art
- Card name
- **Market Value** — TCGPlayer low, mid, and high prices pulled live from the TCGDex API
- **Card Details** — set name, card number, rarity, type, HP, and artist
- **Add to Collection** button that saves the card to your local collection

### My Collection
A dedicated page that reads your saved cards from localStorage and displays them in a grid. Shows card art, name, set, number, and rarity for each card you've added. If your collection is empty, a message prompts you to start adding cards.

---

## APIs Used

- **TCGDex API** (`https://api.tcgdex.net/v2/en`) — card data, images, and TCGPlayer pricing

---

## How to Run

1. Clone or download the repo
2. Open the project in VS Code
3. Run with Live Server (right-click `index.html` → Open with Live Server)
4. Navigate to any card and click "Add to Collection" to start building your collection

---

## File Structure

```
NemoDex/
├── index.html          # Homepage
├── search.html         # Search results page
├── cardView.html       # Card detail view
├── collection.html     # My collection page
├── styles.css          # Global styles
├── card.js             # Card detail view logic
├── collection.js       # Collection page logic
└── Logo/
    └── longLogo.png    # NemoDex logo
```

---

## Built With

- HTML, CSS, JavaScript (vanilla)
- [TCGDex API](https://api.tcgdex.net)
- [Google Fonts](https://fonts.google.com) — Plus Jakarta Sans, Space Grotesk, Exo 2