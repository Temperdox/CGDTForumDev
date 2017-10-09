// remove the ad below the website header
$(function() {
    $('#main-content > div').has('script[data-cfasync]').remove();
});