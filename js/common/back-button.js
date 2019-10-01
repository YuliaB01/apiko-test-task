var backButton = {
    button: document.getElementById('back-btn'),
    buttonLink: document.getElementById('back-btn-link'),

    show: function (href) {
        this.button.style.display = 'flex';
        this.buttonLink.href = (href ? href : '#');
    },

    hide: function () {
        this.button.style.display = 'none';
    }
};