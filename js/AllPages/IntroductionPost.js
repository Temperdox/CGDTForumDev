// transform introduction post field in user info into a link
$(function() {
    $('#profile-tab-field-profil #field_id9 .field_uneditable').each(function() {
        var $this = $(this);
        var link = $this.text();
        $this.html('<a href="' + link + '">' + $this.html() + '</a>');
    });
});