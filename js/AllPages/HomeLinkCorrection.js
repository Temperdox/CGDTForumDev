// change all link to "/forum" as pointing to "/"
$(function() {
    $('a[href="/forum"]').attr('href', '/');
});