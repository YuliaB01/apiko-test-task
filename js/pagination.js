var pagination = {
    create: function(currentPage, pagesCount) {
        var container = document.createElement('div');
        container.classList.add('container');

        var pagination = document.createElement('nav');
        pagination.classList.add('pagination', 'is-centered');
        pagination.setAttribute('role', 'navigation');
        pagination.id = 'pagination';

        pagination.appendChild(this.createPaginationNavItem('pagination-previous', 'Previous'));
        pagination.appendChild(this.createPaginationList(currentPage, pagesCount));
        pagination.appendChild(this.createPaginationNavItem('pagination-next', 'Next'));

        container.appendChild(pagination);

        return container;
    },

    createPaginationList: function(currentPage, pagesCount) {
        var paginationItemsList = document.createElement('ul');
        paginationItemsList.classList.add('pagination-list');
        paginationItemsList.id = 'pagination-list';

        for (var i = 1; i <= pagesCount; i++) {
            paginationItemsList.appendChild(this.createPaginationItem(i, currentPage));
        }

        return paginationItemsList;
    },

    createPaginationItem: function(item, currentPage) {
        var paginationItem = document.createElement('li');
        paginationItem.appendChild(this.createPaginationLink(item, '#', currentPage));

        return paginationItem;
    },

    createPaginationLink: function(item, href, currentPage) {
        var paginationLink = document.createElement('a');
        paginationLink.classList.add('pagination-link');
        paginationLink.href = href;
        paginationLink.innerText = '' + item;

        if (item === currentPage) {
            paginationLink.classList.add('is-current');
        }

        return paginationLink
    },

    createPaginationNavItem: function(className, innerText) {
        var paginationNav = document.createElement('a');
        paginationNav.classList.add('pagination-item', className);
        paginationNav.innerText = innerText;

        return paginationNav;
    }
};