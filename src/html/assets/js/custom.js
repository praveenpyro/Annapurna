$(document).ready(function(){
    $(".open-sidebar").on("click", function(e){
        e.stopPropagation();
        $(".sidebar").toggleClass("active");
    });
    $(".close-sidebar").on("click", function(e){
        e.stopPropagation();
        $(".sidebar").removeClass("active");
    });
    
    $(document).click(function(e) {   
        e.stopPropagation();
        $(".sidebar").removeClass("active");
    });
    $('.open-info').click(function(e) {
        e.stopPropagation();
        if ($(this).hasClass('active')) {
            $('.open-info').next('.info-dropdown').slideUp('fast');
            $('.open-info').removeClass('active');
        } else {
            $('.open-info').removeClass('active');
            $('.open-info').next('.info-dropdown').slideUp('fast');
            $(this).addClass('active');
            $(this).next('.info-dropdown').slideDown('fast');
            $('.user-info-dropdown').slideUp('fast');
            $('.user-wrap').removeClass('active');
        }
    });

    $('html').click(function() {
        $('.open-info').removeClass('active');
        $('.info-dropdown').slideUp('fast');
    });

    $('.user-wrap').click(function(e) {
        e.stopPropagation();
        if ($(this).hasClass('active')) {
            $('.user-wrap').next('.user-info-dropdown').slideUp('fast');
            $('.user-wrap').removeClass('active');
        } else {
            $('.user-wrap').removeClass('active');
            $('.user-wrap').next('.user-info-dropdown').slideUp('fast');
            $(this).addClass('active');
            $(this).next('.user-info-dropdown').slideDown('fast');
            $('.info-dropdown').slideUp('fast');
            $('.user-profile-info').removeClass('active');
        }
    });
    $('html').click(function() {
        $('.user-wrap').removeClass('active');
        $('.user-info-dropdown').slideUp('fast');
    });
    /*** Show hide password ***/
    $('body').on('click', '.suffix-icon', function() {
        if ($(this).prev().attr('type') === 'password') {
            $(this).prev().attr('type', 'text');
            $(this).find(".eye-close").addClass('hide');
            $(this).find(".eye-open").removeClass('hide');
        } else {
            $(this).prev().attr('type', 'password');
            $(this).find(".eye-close").removeClass('hide');
            $(this).find(".eye-open").addClass('hide');
        }
    });

    $(".parent-menu").on("click", function(e){
        e.stopPropagation();
        $(this).next().slideToggle();
    }); 
});
