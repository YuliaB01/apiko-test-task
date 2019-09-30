var pagination = {
    currentPage: 1,
    totalPages: 1,
    minPagesCount: 1,

    create: function (currentPage, totalPages) {
        this.currentPage = currentPage;
        this.totalPages = totalPages;
        var container = document.createElement('div');
        container.classList.add('container');

        var pagination = document.createElement('nav');
        pagination.classList.add('pagination-nav');
        pagination.setAttribute('role', 'navigation');
        pagination.id = 'pagination';

        var buttonsWrapper = document.createElement('div');
        buttonsWrapper.className = 'nav-btns-wrap';
        buttonsWrapper.appendChild(this.createPrevNav());
        buttonsWrapper.appendChild(this.createInput());
        buttonsWrapper.appendChild(this.createNextNav());

        pagination.appendChild(this.createPagesInfo());
        pagination.appendChild(buttonsWrapper);

        container.appendChild(pagination);

        return container;
    },

    createPagesInfo: function () {
        var pagesInfo = document.createElement('div');
        pagesInfo.className = 'pages-count-info';
        pagesInfo.innerHTML = 'Page <b>' + this.currentPage + '</b><span> of </span><b>' + this.totalPages + '</b>';

        return pagesInfo;
    },

    updatePagesInfo: function () {
        var pagesInfo = document.getElementsByClassName('pages-count-info');
        pagesInfo[0].innerHTML = 'Page <b>' + this.currentPage + '</b><span> of </span><b>' + this.totalPages + '</b>';
    },

    createInput: function () {
        var paginationInput = document.createElement('input');
        paginationInput.name = 'current-page';
        paginationInput.type = 'number';
        paginationInput.min = this.minPagesCount.toString();
        paginationInput.max = this.totalPages.toString();
        paginationInput.classList.add('pagination-current');
        paginationInput.value = this.currentPage.toString();

        return paginationInput;
    },

    createNavItem: function (className, innerText) {
        var paginationNav = document.createElement('a');
        paginationNav.setAttribute('type', 'button');
        paginationNav.classList.add('pagination-item', className);
        paginationNav.innerText = innerText;

        return paginationNav;
    },

    createPrevNav: function () {
        var prev = this.createNavItem('pagination-previous', 'Previous');

        if (this.currentPage <= this.minPagesCount) {
            prev.setAttribute('disabled', 'disabled');
        }

        return prev;
    },

    createNextNav: function () {
        var next = this.createNavItem('pagination-next', 'Next');

        if (this.currentPage >= this.totalPages) {
            next.setAttribute('disabled', true);
        }

        return next;
    },

    setCurrentPage: function (currentPage) {
        var input = document.getElementsByName('current-page');
        this.currentPage = currentPage;

        if (+currentPage < this.minPagesCount) {
            this.currentPage = this.minPagesCount;
        }

        if (+currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
        }

        input[0].value = this.currentPage;
    },

    setPreviousPage: function (page) {
        if (this.currentPage < this.minPagesCount) {
            var prev = document.getElementsByClassName('pagination-previous');
            prev.setAttribute('disabled', true);
            this.currentPage = this.minPagesCount;
        }

        if (+currentPage > this.totalPages) {
            this.currentPage = this.totalPages;
        }

        input[0].value = this.currentPage;
        this.updatePagesInfo();
    }
};