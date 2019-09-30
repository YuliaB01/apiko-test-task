var tvShowDetails = {
    showContainer: document.getElementById('single-show-content'),
    posterUrl: 'https://image.tmdb.org/t/p/w300',

    create: function (data) {
        var seasonsTableWrap = document.createElement('div');

        seasonsTableWrap.classList.add('table-wrapper');
        seasonsTableWrap.appendChild(seasonsTable.create(data));

        this.showContainer.appendChild(this.createTopContainer(data));
        this.showContainer.appendChild(seasonsTableWrap);

        return seasonsTableWrap;
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
        detailsContainer.innerHTML = '<div class="content"><div class="single-show-name">' + data.name + '</div>'
            + '<div class="details show-vote-average"><span>Vote average: </span>' + data.vote_average + '</div>'
            + '<div class="details show-seasons-count"><span>Seasons: </span>' + data.number_of_seasons + '</div>'
            + '<div class="details show-episodes-count"><span>Episodes: </span>' + data.number_of_episodes + '</div>'
            + '<div class="details show-description"><span>Overview: </span>' + data.overview + '</div></div>';

        p.appendChild(posterImg);
        posterContainer.appendChild(p);
        topContainer.appendChild(posterContainer);
        topContainer.appendChild(detailsContainer);

        return topContainer;
    },

    loadShowDetailsSuccess: function (response) {
        var mainContainer = document.getElementById('main-content');
        mainContainer.style.display = 'none';

        var topButtons = document.getElementById('top-buttons');
        topButtons.style.display = 'none';

        tvShowDetails.create(response);

        var showContainer = document.getElementById('single-show-content');
        showContainer.style.display = 'flex';

        loader.hide();
    },

    loadShowDetailsError: function (response) {
        loader.hide();
        console.log(response);
    },

    load: function (params) {
        loader.show();

        apiClient.loadShowDetailsById(params, this.loadShowDetailsSuccess, this.loadShowDetailsError);
    }
};