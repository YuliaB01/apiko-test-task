var apiClient = {
    apiKey: '9b9a6c97be18be80bb60acaad70949ea',
    baseUrl: 'https://api.themoviedb.org/3/tv/',
    genresUrl: 'https://api.themoviedb.org/3/genre/movie/list?language=en-US&api_key=',

    loadPopular: function (onSuccess, onError) {
        var data = {};

        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.baseUrl + 'popular?api_key=' + this.apiKey, true);
        xhr.addEventListener("readystatechange", function () {
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

    loadTopRated: function (onSuccess, onError) {
        var data = {};

        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.baseUrl + 'top_rated?api_key=' + this.apiKey, true);
        xhr.addEventListener("readystatechange", function () {
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

    loadGenresList: function(onSuccess, onError) {
        var data = {};

        var xhr = new XMLHttpRequest();

        xhr.open('GET', this.genresUrl + this.apiKey, true);
        xhr.addEventListener("readystatechange", function () {
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
    }
};