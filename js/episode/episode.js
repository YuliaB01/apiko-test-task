var episode = {
    create: function (episode) {
        var contentWrapper = document.getElementById('box');

        var modalHead = document.createElement('h2');
        modalHead.classList.add('modal-head');
        modalHead.innerText = episode.name;

        var modalPosterWrap = document.createElement('div');
        modalPosterWrap.className = 'modal-poster';

        var poster = document.createElement('img');
        poster.className = 'poster-img';
        poster.src = episode.still_path ? 'https://image.tmdb.org/t/p/w400' + episode.still_path : 'images/no-image.png';

        var modalBody = document.createElement('div');
        modalBody.classList.add('modal-body');
        modalBody.innerHTML =
            '<div class="season-num"><span class="is-bold">Season: </span><span>' + episode.season_number + '</span></div>'
            + '<div class="episode-num"><span class="is-bold">Episode: </span><span>' + episode.episode_number + '</span></div>'
            + '<div class="episode-overview"><span class="is-bold">Episode overview: </span>' + episode.overview + '</div>';

        modalPosterWrap.appendChild(poster);
        contentWrapper.appendChild(modalHead);
        contentWrapper.appendChild(modalPosterWrap);
        contentWrapper.appendChild(modalBody);

        return contentWrapper;
    },

    episodeDetailsSuccess: function (episodeResponse) {
        episode.create(episodeResponse);

        modal.open('modal');

        loader.hide();
    },

    episodeDetailsError: function () {
        loader.hide();
        notification.show();
    },

    load: function (params) {
        loader.show();
        apiClient.loadEpisodeDetails(params, this.episodeDetailsSuccess, this.episodeDetailsError);
    }
};