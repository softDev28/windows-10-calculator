//Loading Animation
$(window).on('load', () => {
    $('#preloaderOverlay').fadeOut(300);
    $('#app').fadeIn(300);
});

//Tooltip  Animation
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});

//Side Navigation Drawer Animation
const showSideNavDrawer = document.getElementById('bars');
showSideNavDrawer.addEventListener('click', () => {
    document.getElementById('sideNavDrawer').classList.toggle('active');
    $('#sideNavDrawerOverlay').fadeIn('fast');
});

const hideSideNavDrawer = document.getElementById('sideNavDrawerOverlay');
hideSideNavDrawer.addEventListener('click', () => {
    document.getElementById('sideNavDrawer').classList.toggle('active');
    $('#sideNavDrawerOverlay').fadeOut('fast');
});