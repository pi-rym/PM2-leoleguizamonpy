document.addEventListener("DOMContentLoaded", () => {
    const cardsUltimasEntradas = document.getElementById("seriesChild");

    function createCard(movie) {
        const card = document.createElement("div");
        card.classList.add("seriesChildCard");
        card.innerHTML = `
        <div class="seriesChildCardimg">
            <img src="${movie.poster}" alt="">
            <i class="fa-solid"></i>
        </div>
        <div class="seriesChildCardtxt">
            <h4>${movie.title}</h4>
            <h6><i class="fa-solid fa-star"></i> ${movie.rate} | 10</h6>
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