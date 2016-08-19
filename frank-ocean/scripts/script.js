$( document ).ready(function() {
	$('.frank-image').show();
	$('.frank-image').addClass('animated bounceInLeft');
	$('.move').show();
	$('.move').addClass('animated bounceInLeft');
	$('.iMessage').show();
	$('.from-me').addClass('animated bounceInUp');
	setTimeout(function () {
		$('.from-them').show();
		$('.from-them').addClass('animated bounceInUp');
	}, 1500);
	setTimeout(function () {
		$('.number-container').show();
		$('.number-container').addClass('animated bounceInUp');
		$('.links').show();
		$('.links').addClass('animated bounceInUp');
		// $('.links').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		// 	$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		// });
	}, 3000);
	var link = "http://frank-ocean.herokuapp.com/";
	$.get(link+"/api/1/health", function(data){
		var userCount = data.users.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		$(".ago").html(data.iTunes);
		$(".users").html(userCount);
	});
});

function iMessage(){
	var number = $(".number-input").val();
	var link = "http://frank-ocean.herokuapp.com/";
	ga('send', 'event', 'Subscribte', 'text', 'Number added');
	$.post(link+"/api/1/new", { n: number });
	$(".iMessage").fadeOut();
	$(".share").hide();
	$(".links").hide();
	setTimeout(function () {
		$('.iMessage-done').show();
		$('.iMessage-done').addClass('animated bounceInUp');
		$('.share').show();
		$('.share').addClass('animated fadeInUp');
		$('.share').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		});
	}, 1000);
}