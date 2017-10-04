// allow empty location in new event form
$(function() {
    var $eventForm = $('#EV_Form').on('submit', function(e) {
        var $address = $(this).find('[name="address"]');
        // set "no location" to 'Greenwich' to have hour in GMT
        if (!$address.val())
            $address.val('Greenwich, UK');
    });

    // in event form
    if ($eventForm.length) {
        var $address = $eventForm.find('[name="address"]');

        // add instructions for global events in the address label
        var $addressLabel = $address.closest('dl').find('dt label');
        $addressLabel.append('<br><span style="font-weight: normal">(leave empty if global)</span>');

        // remove location when it is Greenwich (global)
        var currentLocation = $address.val();
        if (currentLocation.indexOf('Greenwich, London') === 0 || currentLocation.indexOf('Greenwich, UK') === 0)
            $address.val('');
    }



    // when viewing event details
    var $eventLocation = $('.EV_MainInfos > div').has('.ion-ios-location').find('.EV_MainInfosDesc');
    var eventLocation = $eventLocation.text();
    if (eventLocation.indexOf('Greenwich, London') === 0 || eventLocation.indexOf('Greenwich, UK') === 0) {
        // set event location to global 
        $eventLocation.text('Global');
        // remove map
        $('#modalShowMap').remove();
    }
});