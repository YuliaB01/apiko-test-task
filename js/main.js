var mainContent = document.getElementById('mainContent');
var tableWrapper = document.createElement('div');
tableWrapper.classList.add('table-wrapper', 'container');

apiClient.loadPopular(onSuccess, onError);

var topRatedBtn = document.getElementById('top');
var popularBtn = document.getElementById('popular');

topRatedBtn.addEventListener('click', function () {
    popularBtn.classList.remove('is-info', 'is-selected');
    topRatedBtn.classList.add('is-info', 'is-selected');
    tableWrapper.innerHTML = '';
    mainContent.innerHTML = '';
    apiClient.loadTopRated(topRatedLoadSuccess, topRatedLoadError);
});

popularBtn.addEventListener('click', function () {
    topRatedBtn.classList.remove('is-info', 'is-selected');
    popularBtn.classList.add('is-info', 'is-selected');
    tableWrapper.innerHTML = '';
    mainContent.innerHTML = '';
    apiClient.loadPopular(onSuccess, onError);
});

function onSuccess(response) {
    console.log(response);
    tableWrapper.appendChild(table.create(response.results));

    mainContent.appendChild(tableWrapper);
    mainContent.appendChild(pagination.create(response.page, response.total_pages));
}

function onError(response) {
    console.log(response);
}

function topRatedLoadSuccess(response) {
    console.log(response);
    tableWrapper.appendChild(table.create(response.results));

    var mainContent = document.getElementById('mainContent');
    mainContent.appendChild(tableWrapper);
    mainContent.appendChild(pagination.create(response.page, response.total_pages));
}

function topRatedLoadError(response) {
    console.log(response);
}
