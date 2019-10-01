var router = {
    bindEvents: function () {
        window.addEventListener('hashchange', function () {
            router.processHash();
        });
    },

    processHash: function () {
        var hash = window.location.hash;
        var arrayOfStrings = hash.split('/').slice(1);
        var hashObject = {};

        for (var i = 0; i < arrayOfStrings.length; i++) {
            var arr = arrayOfStrings[i].split('=');

            if (arr[0] === 'show') {
                hashObject.showId = +arr[1];
            }

            if (arr[0] === 'season') {
                hashObject.seasonNum = +arr[1];
            }
        }

        router.load(hashObject);
    },

    load: function (hashObject) {
        if (hashObject.hasOwnProperty('showId') && hashObject.hasOwnProperty('seasonNum')) {
            season.load(hashObject);
        } else if (hashObject.hasOwnProperty('showId')) {
            singleShow.load(hashObject.showId);
        } else {
            home.load(1);
        }
    },

    getHash: function (data) {
        if (data.hasOwnProperty('showId') && data.hasOwnProperty('seasonNum')) {
            return this.generateSeasonHash(data.showId, data.seasonNum);
        } else if (data.hasOwnProperty('showId')) {
            return this.generateShowHash(data.showId);
        }

        return this.generateDefaultHash();
    },

    generateShowHash: function (showId) {
        return '#/show=' + showId;
    },

    generateSeasonHash: function (showId, seasonNum) {
        return '#/show=' + showId + '/season=' + seasonNum;
    },

    generateDefaultHash: function () {
        return '#';
    }
};