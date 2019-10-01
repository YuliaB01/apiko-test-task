var modal = {
    open: function (modalId) {
        var modal = document.getElementById(modalId);
        var body = document.getElementsByTagName('BODY');

        modal.classList.add('is-active');
        body[0].classList.add('is-clipped');
    },

    close: function (modalId) {
        var modal = document.getElementById(modalId);
        var body = document.getElementsByTagName('BODY');

        modal.classList.remove('is-active');
        document.getElementById('box').innerHTML = '';
        body[0].classList.remove('is-clipped');
    }
};