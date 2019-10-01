var table = {
    create: function (data) {
        var table = document.createElement('table');
        table.classList.add('table', 'is-hoverable', 'is-bordered', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth');

        var tableBody = document.createElement('tbody');

        for (var i = 0; i < data.length; i++) {
            tableBody.appendChild(this.createRow(data[i]));
        }

        table.appendChild(tableBody);

        return table;
    },

    createRow: function (data) {
        var tableRow = document.createElement('tr');

        tableRow.appendChild(this.createPosterCell(data.poster_path));
        tableRow.appendChild(this.createData(data));

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

    createData: function (data) {
        var dataCell = document.createElement('td');
        var link = router.getHash({
            showId: data.id
        });

        dataCell.innerHTML =
            '<a class="show-name" href="' + link + '">' + data.name + '</a>' +
            '<div class="show-rate">Average rate: ' + data.vote_average + '</div>' +
            '<div class="show-votes-count">Votes count: ' + data.vote_count + '</div>';

        return dataCell;
    }
};