document.addEventListener("DOMContentLoaded", () => {
    const cardsSeriesDixon = document.getElementById("containerSeriesDixon");
    const cardsCastDixon = document.getElementById("containerCastDixon");

    function createCard(serie) {
        const card = document.createElement("div");
        card.classList.add("cardLeft");
        card.innerHTML = `
            <div class="cardLeftImg">
                <img src="${serie.poster}" alt="Poster de ${serie.season} ${serie.episode}">
                <i class="fa-solid fa-circle-play play-icon"></i>
            </div>
            <div class="cardLeftTxt">
                <h3 class="txth3 white">${serie.season}</h3>
                <h2 class="txth2 yellow">${serie.episode}</h2>
                <h4 class="txth3 blackLight"><i class="fa-solid fa-star"></i>${serie.rate}</h4>
                <p class="txtp blackLight">${serie.description}</p>
            </div>
        `;
        return card;
    }

    function renderCards(series) {
        series.forEach((serie) => {
            const card = createCard(serie);
            cardsSeriesDixon.appendChild(card);
        });
    }

    renderCards(dixonTemp01);

    function createCast(castMember) {
        const cast = document.createElement("div");
        cast.classList.add("cardReparto");
        cast.innerHTML = `
            <div class="cardReparto">
                <img src="${castMember.image}" alt="">
                <p class="txtp white">${castMember.name}</p>
                <p class="txtp blackLight">${castMember.character}</p>
            </div>
        `;
        return cast;
    }

    function renderCasts(casts) {
        casts.forEach((castMember) => {
            const cast = createCast(castMember);
            cardsCastDixon.appendChild(cast);
        });
    }

    renderCasts(dixonCast);
});
