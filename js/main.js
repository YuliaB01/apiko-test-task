var mainContent = document.getElementById('main-content');
var tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-wrapper', 'container');

apiClient.loadPopular(1, onSuccess, onError);

var topRatedBtn = document.getElementById('top');
var popularBtn = document.getElementById('popular');
var timerId = null;

var selectedSection = 'popular';

function onSuccess(response) {
    tableWrapper.innerHTML = '';
    mainContent.innerHTML = '';
    tableWrapper.appendChild(table.create(response.results));

    mainContent.appendChild(tableWrapper);
    mainContent.appendChild(pagination.create(response.page, response.total_pages));
    pagination.updatePagesInfo();
}

function onError(response) {
    console.log(response);
}

function topRatedLoadSuccess(response) {
    var mainContent = document.getElementById('main-content');
    tableWrapper.innerHTML = '';
    mainContent.innerHTML = '';

    tableWrapper.appendChild(table.create(response.results));
    mainContent.appendChild(tableWrapper);
    mainContent.appendChild(pagination.create(response.page, response.total_pages));
    pagination.updatePagesInfo();
}

function topRatedLoadError(response) {
    console.log(response);
}

function loadShowDetailsSuccess(response) {
    console.log(response);
}

function loadShowDetailsError(response) {
    console.log(response);
}

(function bindEvents() {
    document.addEventListener('input', function (event) {
        var target = event.target;
        if (target.hasAttribute('name') && target.name === 'current-page') {
            pagination.setCurrentPage(target.value);

            if (timerId) {
                clearTimeout(timerId);
                timerId = null;
            }

            timerId = setTimeout(function () {
                if (selectedSection === 'popular') {
                    apiClient.loadPopular(target.value, onSuccess, onError);
                } else {
                    apiClient.loadTopRated(target.value, topRatedLoadSuccess, topRatedLoadError);
                }
            }, 1000);
        }
    });

    document.addEventListener('click', function (event) {
        var target = event.target;
        if (target.hasAttribute('name') && target.name === 'current-page') {
            target.select();
        }
    });

    topRatedBtn.addEventListener('click', function () {
        popularBtn.classList.remove('is-info', 'is-selected');
        topRatedBtn.classList.add('is-info', 'is-selected');
        selectedSection = 'topRated';
        tableWrapper.innerHTML = '';
        mainContent.innerHTML = '';

        apiClient.loadTopRated(1, topRatedLoadSuccess, topRatedLoadError);
    });

    popularBtn.addEventListener('click', function () {
        topRatedBtn.classList.remove('is-info', 'is-selected');
        popularBtn.classList.add('is-info', 'is-selected');
        selectedSection = 'popular';
        tableWrapper.innerHTML = '';
        mainContent.innerHTML = '';

        apiClient.loadPopular(1, onSuccess, onError);
    });

    var currentPageValue = document.getElementsByName('current-page');

    document.addEventListener('click', function (event) {
        var target = event.target;

        if (target.hasAttribute('disabled')) {
            return;
        }

        if (target.classList.contains('pagination-previous')) {
            var page = +currentPageValue[0].value - 1;
            pagination.setCurrentPage(page);

            if (selectedSection === 'popular') {
                apiClient.loadPopular(page, onSuccess, onError);
            } else {
                apiClient.loadTopRated(page, topRatedLoadSuccess, topRatedLoadError);
            }
        }
    });

    document.addEventListener('click', function (event) {
        var target = event.target;

        if (target.hasAttribute('disabled')) {
            return;
        }

        if (target.classList.contains('pagination-next')) {
            var page = +currentPageValue[0].value + 1;
            pagination.setCurrentPage(page);

            if (selectedSection === 'popular') {
                apiClient.loadPopular(page, onSuccess, onError);
            } else {
                apiClient.loadTopRated(page, topRatedLoadSuccess, topRatedLoadError);
            }
        }
    });

    document.addEventListener('click', function(event) {
       var target = event.target;

       if (target.classList.contains('show-name') && target.hasAttribute('data-id')) {
           var showId = target.dataset.id;
           apiClient.loadShowDetailsById(showId, loadShowDetailsSuccess, loadShowDetailsError);
       }
    });
})();