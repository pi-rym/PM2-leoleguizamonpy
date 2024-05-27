console.log(tempData);

document.addEventListener("DOMContentLoaded", () => {
    const cardsUltimasEntradas = document.getElementById("ultimasEntradasChild");

    function createCard(movie) {
        const card = document.createElement("div");
        card.classList.add("ultimasEntradasChildCards");
        card.innerHTML = `
        <div class="ultimasEntradasChildCardsContent01">
            <img src="${movie.poster}" class="cardsImage">
        </div>
        <div class="ultimasEntradasChildCardsContent02">
            <h3 class="cardsTitle">${movie.title}</h3>
            <h4 class="cardsRate"><span class="material-symbols-rounded">grade</span>${movie.rate}</h4>
            <p class="cardsYear">${movie.year}</p>
        </div>
    `;
        return card;
    }

    function renderCards(movies) {
        movies.forEach((movie) => {
            const card = createCard(movie);
            cardsUltimasEntradas.appendChild(card);
        });
    }

    renderCards(tempData);
});
