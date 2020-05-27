/*eslint-env jquery*/
$(document).ready(function () {
    $('#login-button').click(function () {
        $('#loginModal').modal('toggle');
    })

    $('#register-button').click(function () {
        $('#registerModal').modal('toggle');
    })

    $(".clickable-row").click(function() {
        alert('CLICK')
    });
})
