var apiClient = {
    apiKey: ' -- PLACE THEMOVIEDB API KEY HERE -- ',
    baseUrl: 'https://api.themoviedb.org/3/tv/',

    loadPopular: function (page, onSuccess, onError) {
        var data = {};

        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.baseUrl + 'popular?api_key=' + this.apiKey + '&page=' + page, true);
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    onSuccess(response);
                } else {
                    onError(this);
                }
            }
        });

        xhr.send(data);
    },

    loadTopRated: function (page, onSuccess, onError) {
        var data = {};

        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.baseUrl + 'top_rated?api_key=' + this.apiKey + '&page=' + page, true);
        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    onSuccess(response);
                } else {
                    onError(this);
                }
            }
        });

        xhr.send(data);
    },

    loadShowDetailsById: function(tvShowId, onSuccess, onError) {
        var data = '{}';

        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    onSuccess(response);
                } else {
                    onError(this);
                }
            }
        });

        xhr.open('GET', this.baseUrl + tvShowId + '?language=en-US&api_key=' + this.apiKey);

        xhr.send(data);
    },

    loadTvSeasonDetailsById: function(params, onSuccess, onError) {
        var data = '{}';

        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    onSuccess(response, params.showId);
                } else {
                    onError(this);
                }
            }
        });

        xhr.open('GET', this.baseUrl + params.showId + '/season/' + params.seasonNum + '?language=en-US&api_key=' + this.apiKey);

        xhr.send(data);
    },

    loadEpisodeDetails: function(params, onSuccess, onError) {
        var url = params.showId + '/season/' + params.seasonNum + '/episode/' + params.episodeNum + '?language=en-US';
        this.sendRequest(url, onSuccess, onError);
    },

    sendRequest: function(url, onSuccess, onError) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function () {
            if (this.readyState === this.DONE) {
                if (this.status === 200) {
                    var response = JSON.parse(this.responseText);
                    onSuccess(response);
                } else {
                    onError(this);
                }
            }
        });

        xhr.open('GET', this.baseUrl + url + '&api_key=' + this.apiKey);

        xhr.send({});
    }
};