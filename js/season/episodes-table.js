var episodesTable = {
    create: function (data, showId) {
        console.log(data);
        var table = document.createElement('table');
        table.classList.add('table', 'episodes-table', 'is-hoverable', 'is-bordered', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth');

        var tableBody = document.createElement('tbody');

        var episodes = data.episodes;
        for (var i = 0; i < episodes.length; i++) {
            tableBody.appendChild(this.createRow(episodes[i], data, showId));
        }

        table.appendChild(tableBody);

        return table;
    },

    createRow: function (episode, data, showId) {
        var tableRow = document.createElement('tr');

        tableRow.appendChild(this.createPosterCell(episode.still_path));
        tableRow.appendChild(this.createData(episode, data, showId));

        return tableRow;
    },

    createPosterCell: function (posterPath) {
        var posterCell = document.createElement('td');
        posterCell.className = 'poster-cell';
        var imgWrapper = document.createElement('div');
        var posterImg = document.createElement('img');
        posterImg.src = posterPath ? 'https://image.tmdb.org/t/p/w200' + posterPath : 'images/no-image.png';
        imgWrapper.appendChild(posterImg);
        posterCell.appendChild(imgWrapper);

        return posterCell;
    },

    createData: function (episode, data, showId) {
        var dataCell = document.createElement('td');

        var hash = router.getHash({
            showId: showId,
            seasonNum: data.season_number,
            episodeNum: episode.episode_number
        });

        dataCell.innerHTML =
            '<a class="episode-name" href="' + hash + '" data-id=' + showId + ' data-seasonNum='+ data.season_number +' data-episodeNum='+ episode.episode_number +'>' + episode.name + '</a>';

        return dataCell;
    }
};