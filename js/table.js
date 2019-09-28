var table = {
    create: function(data) {
        console.log(data);
        var table = document.createElement('table');
        table.classList.add('table', 'is-hoverable', 'is-bordered', 'is-striped', 'is-narrow', 'is-hoverable', 'is-fullwidth');

        var tableBody = document.createElement('tbody');
        // tableBody.classList.add('');

        for(var i = 0; i < data.length; i++) {
            tableBody.appendChild(this.createRow(data[i]));
        }

        table.appendChild(tableBody);

        return table;
    },

    createRow: function(data) {
        var tableRow = document.createElement('tr');

        tableRow.appendChild(this.createPosterCell(data.poster_path));
        tableRow.appendChild(this.createData(data.name));

        return tableRow;
    },

    createPosterCell: function(posterPath) {
        var posterCell = document.createElement('td');
        posterCell.className = 'poster-cell';
        var imgWrapper = document.createElement('div');
        var posterImg = document.createElement('img');
        posterImg.src = posterPath ? 'https://image.tmdb.org/t/p/w200' + posterPath : 'images/no-image.png';
        imgWrapper.appendChild(posterImg);
        posterCell.appendChild(imgWrapper);

        return posterCell;
    },

    createData: function(data) {
        var dataCell = document.createElement('td');
        dataCell.innerText = data;

        return dataCell;
    }
};