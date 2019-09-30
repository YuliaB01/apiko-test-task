var seasonsTable = {
    create: function (data) {
        console.log(data);
        var table = document.createElement('table');
        table.classList.add('table', 'seasons-table', 'is-hoverable', 'is-bordered', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth');

        var tableBody = document.createElement('tbody');

        var seasons = data.seasons;
        for (var i = 0; i < seasons.length; i++) {
            tableBody.appendChild(this.createRow(seasons[i], data.id));
        }

        table.appendChild(tableBody);

        return table;
    },

    createRow: function (season, tvShowId) {
        var tableRow = document.createElement('tr');

        tableRow.appendChild(this.createPosterCell(season.poster_path));
        tableRow.appendChild(this.createData(season, tvShowId));

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

    createData: function (season, tvShowId) {
        var dataCell = document.createElement('td');
        var hash = router.getHash({
            showId: tvShowId,
            seasonNum: season.season_number
        });

        dataCell.innerHTML =
            '<a class="season-name" href="' + hash + '" data-id=' + tvShowId + ' data-seasonNum='+ season.season_number +'>' + season.name + '</a>';

        return dataCell;
    }
};