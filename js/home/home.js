var tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-wrapper', 'container');

var home = {
    selectedSection: 'popular',
    startPage: 1,

    load: function (page) {
        if (this.selectedSection === 'popular') {
            this.loadPopular(page);
        } else {
            this.loadTopRated(page);
        }
    },

    loadPopular: function (page) {
        loader.show();

        apiClient.loadPopular(page, this.loadSuccess, this.loadError);
    },

    loadTopRated: function (page) {
        loader.show();

        apiClient.loadTopRated(page, this.loadSuccess, this.loadError);
    },

    loadSuccess: function (response) {
        var mainContent = document.getElementById('main-content');

        singleShow.hide();
        backButton.hide();
        season.hide();

        home.show();

        tableWrapper.innerHTML = '';
        mainContent.innerHTML = '';

        tableWrapper.appendChild(table.create(response.results));

        mainContent.appendChild(tableWrapper);
        mainContent.appendChild(pagination.create(response.page, response.total_pages));

        pagination.updatePagesInfo();

        loader.hide();
    },

    loadError: function () {
        loader.hide();
        notification.show();
    },

    show: function () {
        document.getElementById('main-content').style.display = 'block';
        document.getElementById('header').style.display = 'flex';
    },

    hide: function () {
        document.getElementById('main-content').style.display = 'none';
        document.getElementById('header').style.display = 'none';
    }
};
