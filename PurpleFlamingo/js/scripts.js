$(document).ready(() => {
    $('#link-home').on('click', () => {
        $('#home').show();
        $('#products').hide();
        $('#about').hide();
        $('#contact').hide();
    })
    $('#link-products').on('click', () => {
        $('#home').hide();
        $('#products').show();
        $('#about').hide();
        $('#contact').hide();
    })
    $('#link-about').on('click', () => {
        $('#home').hide();
        $('#products').hide();
        $('#about').show();
        $('#contact').hide();
    })
    $('#link-contact').on('click', () => {
        $('#home').hide();
        $('#products').hide();
        $('#about').hide();
        $('#contact').show();
    })

});