var episode = {
    create: function (episode) {
        var modal = document.createElement('div');
        modal.className = 'modal';

        var modalBg = document.createElement('div');
        modalBg.className = 'modal-background';

        var modalCard = document.createElement('div');
        modalCard.className = 'modal-card';

        var modalHead = document.createElement('header');
        modalHead.classList.add('modal-card-head');

        var modalCardBody = document.createElement('section');
        modalCardBody.classList.add('modal-card-body');

        modalCard.appendChild(modalHead);
        modalCard.appendChild(modalCardBody);

        modal.appendChild(modalBg);
        modal.appendChild(modalCard);

        return modal;
    },

    episodeDetailsSuccess: function (response) {
        console.log(response);
        loader.hide();
    },

    episodeDetailsError: function (response) {
        console.log(response);
        loader.hide();
    },

    load: function (params) {
        loader.show();
        apiClient.loadEpisodeDetails(params, this.episodeDetailsSuccess, this.episodeDetailsError);
    }
};