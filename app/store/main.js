import addonMenu from "./addons/menu.js";
import addonSearch from "./addons/addon-search.js";
import bsModal from "./addons/bs-modal.js";
addonMenu();
addonSearch();
bsModal();

$(document).ready(function() {

    function scroll() {
        var h = $('#header').height();
        $(window).scroll(function() {
            if ($(window).scrollTop() > h) {
                $('#header').addClass('active');
            } else {
                $('#header').removeClass('active');
            }
        });
    };
    scroll();


})