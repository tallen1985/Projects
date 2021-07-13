var blur = false;
$('.showButton').on('click', () => {
        if (blur == true) {
            $('#goofyImage').css('filter', '')
            $('.stuffAbout').css('visibility', 'hidden')
            blur = false;
        } else {
            blur = true;
            $('.stuffAbout').css('visibility', 'visible')
            $('#goofyImage').css('filter', 'blur(4px)')
        };
    
})