

$(document).ready(() => {
    $('#link-home').on('click', () => {
        $('#home').show();
        $('#home').siblings().hide();
        $('.navbar').show();
        
    })
    $('#link-products').on('click', () => {
        $('#products').siblings().hide();
        $('#products').show();
        $('.navbar').show();

    })
    $('#link-about').on('click', () => {
        $('#about').siblings().hide();
        $('#about').show();
        $('.navbar').show();

    })
    $('#link-contact').on('click', () => {
        $('#contact').siblings().hide();
        $('#contact').show();
        $('.navbar').show();
    })

});