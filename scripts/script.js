$( document ).ready(function() {
	atvImg();
	$('.me-image').show();
    $('.me-image').addClass('animated bounceInUp');
    $('.me-info').show();
    $('.me-info').addClass('animated bounceInRight');
});
document.body.onselectstart = function() {
        return false;
    }