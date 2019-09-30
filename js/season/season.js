var seasonDetails = {
    posterUrl: 'https://image.tmdb.org/t/p/w300',

    create: function (data, showId) {
        var episodesTableWrap = document.createElement('div');
        var seasonContainer = document.getElementById('season-content');

        episodesTableWrap.classList.add('table-wrapper');
        episodesTableWrap.appendChild(episodesTable.create(data, showId));

        seasonContainer.appendChild(seasonDetails.createTopContainer(data));
        seasonContainer.appendChild(episodesTableWrap);

        return episodesTableWrap;
    },

    createTopContainer: function (data) {
        var topContainer = document.createElement('article');
        topContainer.id = 'top-container';
        topContainer.classList.add('top-container', 'media');

        var posterContainer = document.createElement('figure');
        posterContainer.classList.add('poster-container', 'media-left');

        var p = document.createElement('p');
        p.classList.add('image');

        var posterImg = document.createElement('img');
        posterImg.src = data.poster_path ? this.posterUrl + data.poster_path : 'images/no-image.png';
        posterImg.className = 'poster-image';

        var detailsContainer = document.createElement('div');
        detailsContainer.classList.add('details-container', 'media-content');
        detailsContainer.innerHTML = '<div class="content"><div class="season-name">' + data.name + '</div>'
            + '<div class="details show-seasons-count"><span>Season number: </span>' + data.season_number + '</div>'
            + '<div class="details show-episodes-count"><span>Season episodes: </span>' + data.episodes.length + '</div>'
            + '<div class="details show-description"><span>Overview: </span>' + (data.overview ? data.overview : 'No overview') + '</div></div>';

        p.appendChild(posterImg);
        posterContainer.appendChild(p);
        topContainer.appendChild(posterContainer);
        topContainer.appendChild(detailsContainer);

        return topContainer;
    },

    seasonDetailsSuccess: function (response, showId) {
        var mainContainer = document.getElementById('main-content');
        mainContainer.style.display = 'none';

        var showContainer = document.getElementById('single-show-content');
        showContainer.style.display = 'none';

        var topButtons = document.getElementById('top-buttons');
        topButtons.style.display = 'none';

        seasonDetails.create(response, showId);

        var seasonContainer = document.getElementById('season-content');
        seasonContainer.style.display = 'flex';

        loader.hide();
    },

    seasonDetailsError: function (response) {
        console.log(response);
    },

    load: function (params) {
        loader.show();

        apiClient.loadTvSeasonDetailsById(params, this.seasonDetailsSuccess, this.seasonDetailsError);
    }
};