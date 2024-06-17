document.addEventListener("DOMContentLoaded", () => {
    const cardsSeriesDixon = document.getElementById("selectSeriesChild");
    const cardsCastDixon = document.getElementById("repartoChild");
    const cardsInteresar = document.getElementById("interesarChild");

    function createSerieCard(serie) {
        const card = document.createElement("div");
        card.classList.add("selectSeriesChildCard");
        card.innerHTML = `
            <div class="selectSeriesChildCardimg">
                <img src="${serie.poster}" alt="Poster de ${serie.season} ${serie.episode}">
                <i class="fa-solid fa-circle-play play-icon"></i>
            </div>
            <div class="selectSeriesChildCardtxt">
                <h5>${serie.season}</h5>
                <h2>${serie.episode}</h2>
                <h6><i class="fa-solid fa-star"></i>${serie.rate} | 10</h6>
                <p>${serie.description}</p>
            </div>
        `;
        return card;
    }

    function renderSerieCards(series) {
        series.forEach((serie) => {
            const card = createSerieCard(serie);
            cardsSeriesDixon.appendChild(card);
        });
    }

    renderSerieCards(dixonTemp01);

    function createCastCard(castMember) {
        const cast = document.createElement("div");
        cast.classList.add("repartoChildCard");
        cast.innerHTML = `
        <div class="repartoChildCardimg">
            <img src="${castMember.image}">
        </div>
        <div class="repartoChildCardtxt">
            <h5>${castMember.name}</h5>
            <h6>${castMember.character}</h6>
        </div>
        `;
        return cast;
    }

    function renderCastCards(casts) {
        casts.forEach((castMember) => {
            const cast = createCastCard(castMember);
            cardsCastDixon.appendChild(cast);
        });
    }

    renderCastCards(dixonCast);

    function createMovieCard(movie) {
        const card = document.createElement("div");
        card.classList.add("interesarChildCard");
        card.innerHTML = `
        <div class="interesarChildimg">
            <img src="${movie.poster}" alt="">
        </div>
        <div class="interesarChildtxt">
            <h4>${movie.title}</h4>
            <h6><i class="fa-solid fa-star"></i> ${movie.rate} | 10</h6>
        </div>
    `;
        return card;
    }

    function renderMovieCards(movies) {
        movies.forEach((movie) => {
            const card = createMovieCard(movie);
            cardsInteresar.appendChild(card);
        });
    }

    renderMovieCards(tempData);
});
