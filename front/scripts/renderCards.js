const seriesChild = document.getElementById("seriesChild");

const renderCards = (data) => {
    data.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("seriesChildCard");

        const imgSection = document.createElement("div");
        imgSection.classList.add("seriesChildCardimg");

        const poster = document.createElement("img");
        poster.src = movie.poster;

        const iconoFaSolid = document.createElement("i");
        iconoFaSolid.classList.add("fa-solid");

        const txtSection = document.createElement("div");
        txtSection.classList.add("seriesChildCardtxt");

        const title = document.createElement("h4");
        title.innerHTML = movie.title;

        const rateContainer = document.createElement("div");
        rateContainer.classList.add("seriesChildCardtxtRate")

        const iconoFaStar = document.createElement("i");
        iconoFaStar.classList.add("fa-solid", "fa-star");

        const rate = document.createElement("h6");
        rate.innerHTML = movie.rate;

        card.appendChild(imgSection);
        card.appendChild(txtSection);
        imgSection.appendChild(poster);
        imgSection.appendChild(iconoFaSolid);
        txtSection.appendChild(title);
        txtSection.appendChild(rateContainer);
        rateContainer.appendChild(iconoFaStar);
        rateContainer.appendChild(rate);

        seriesChild.appendChild(card);
    });
};

module.exports = renderCards;
