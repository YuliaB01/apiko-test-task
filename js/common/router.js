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
            if (arrayOfStrings[i].startsWith('show')) {
                hashObject.showId = arrayOfStrings[i].substr(arrayOfStrings[i].indexOf('=') + 1);
            }

            if (arrayOfStrings[i].startsWith('season')) {
                hashObject.seasonNum = arrayOfStrings[i].substr(arrayOfStrings[i].indexOf('=') + 1);
            }

            if (arrayOfStrings[i].startsWith('episode')) {
                hashObject.episodeNum = arrayOfStrings[i].substr(arrayOfStrings[i].indexOf('=') + 1);
            }
        }

        router.load(hashObject);
    },

    load: function (hashObject) {
        if (hashObject.hasOwnProperty('showId') && hashObject.hasOwnProperty('seasonNum')) {
            seasonDetails.load({showId: hashObject.showId, seasonNum: hashObject.seasonNum});
        } else if (hashObject.hasOwnProperty('showId')) {
            tvShowDetails.load(hashObject.showId);
        }
    },

    getHash: function (data) {
        if (data.hasOwnProperty('showId') && data.hasOwnProperty('seasonNum') && data.hasOwnProperty('episodeNum')) {
           return '#/show=' + data.showId + '/season=' + data.seasonNum + '/episode=' + data.episodeNum;
        } else if (data.hasOwnProperty('showId') && data.hasOwnProperty('seasonNum')) {
            return '#/show=' + data.showId + '/season=' + data.seasonNum;
        } else if (data.hasOwnProperty('showId')) {
            return '#/show=' + data.showId;
        }

        return '#';
    }
};