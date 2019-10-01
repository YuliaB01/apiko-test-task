var topRatedBtn = document.getElementById('top');
var popularBtn = document.getElementById('popular');

var timerId = null;

router.bindEvents();
router.processHash();

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
                loader.show();

                home.load(target.value);
            }, 800);
        }
    });

    document.addEventListener('click', function (event) {
        var target = event.target;

        if (target.hasAttribute('name') && target.name === 'current-page') {
            target.select();
        }
    });

    topRatedBtn.addEventListener('click', function () {
        var mainContent = document.getElementById('main-content');

        if (topRatedBtn.classList.contains('is-info')) {
            return;
        }

        popularBtn.classList.remove('is-info', 'is-selected');
        topRatedBtn.classList.add('is-info', 'is-selected');
        home.selectedSection = 'topRated';
        tableWrapper.innerHTML = '';
        mainContent.innerHTML = '';

        home.load(1);
    });

    popularBtn.addEventListener('click', function () {
        var mainContent = document.getElementById('main-content');

        if (popularBtn.classList.contains('is-info')) {
            return;
        }

        topRatedBtn.classList.remove('is-info', 'is-selected');
        popularBtn.classList.add('is-info', 'is-selected');
        home.selectedSection = 'popular';
        tableWrapper.innerHTML = '';
        mainContent.innerHTML = '';

        home.load(1);
    });

    document.addEventListener('click', function (event) {
        var target = event.target;

        if (target.hasAttribute('disabled')) {
            return;
        }

        if (target.classList.contains('pagination-previous')) {
            var page = pagination.currentPage - 1;

            pagination.setCurrentPage(page);

            home.load(page);
        }
    });

    document.addEventListener('click', function (event) {
        var target = event.target;

        if (target.hasAttribute('disabled')) {
            return;
        }

        if (target.classList.contains('pagination-next')) {
            var page = pagination.currentPage + 1;

            pagination.setCurrentPage(page);

            home.load(page);
        }
    });

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('episode-name')) {
            episode.load(event.target.dataset);
            event.preventDefault();
        }
    });

    var closeBtn = document.getElementById('modal-close-btn');
    closeBtn.addEventListener('click', function () {
        modal.close('modal');
    });

    document.getElementById('delete-btn').addEventListener('click', function () {
        notification.hide();
    });
})();