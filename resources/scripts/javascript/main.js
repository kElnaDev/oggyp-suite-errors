"use strict";
console.info("OggyP Suite Error Page v3 | Created by kElnaDev");
var moreInfoOpen = false;
$('#more-info-open').click(function () {
    if (!moreInfoOpen) {
        $('#more-info').fadeIn(250);
        moreInfoOpen = true;
    }
});
$('#more-info-close').click(function () {
    if (moreInfoOpen) {
        $('#more-info').fadeOut(250);
        moreInfoOpen = false;
    }
});
