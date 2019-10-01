var season = {
    posterUrl: 'https://image.tmdb.org/t/p/w300',
    container: document.getElementById('season-content'),

    create: function (data, showId) {
        var episodesTableWrap = document.createElement('div');

        episodesTableWrap.classList.add('table-wrapper');
        episodesTableWrap.appendChild(episodesTable.create(data, showId));

        this.clearContainer();

        this.container.appendChild(season.createTopContainer(data));
        this.container.appendChild(episodesTableWrap);

        backButton.show(router.generateShowHash(showId));

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

    clearContainer: function () {
        this.container.innerHTML = '';
    },

    seasonDetailsSuccess: function (response, showId) {
        home.hide();
        singleShow.hide();

        season.create(response, showId);
        season.show();

        loader.hide();
    },

    seasonDetailsError: function () {
        notification.show();
    },

    load: function (params) {
        loader.show();

        apiClient.loadTvSeasonDetailsById(params, this.seasonDetailsSuccess, this.seasonDetailsError);
    },

    show: function () {
        this.container.style.display = 'flex';
    },

    hide: function () {
        this.container.style.display = 'none';
    }
};