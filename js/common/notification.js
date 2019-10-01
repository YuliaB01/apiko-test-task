var notification = {
    notificationItem: document.getElementById('notification'),

    show: function () {
        this.notificationItem.style.display = 'block';
    },

    hide: function () {
        this.notificationItem.style.display = 'none';
    }
};