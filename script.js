var a = 0;
$(document).ready(function () {
	$(".left").on("click", sliderLeft);
	$(".right").on("click", sliderRight);
});

function sliderLeft(){
	a = a - 128;
	if (a < -384) {
		$(".polosa").css({
			"left": "0",
		});
		a = 0;
	}
	else{
		$(".polosa").css({
			"left": a+"px",
		});
	}
}
function sliderRight(){
	a = a + 128;
	if (a > 0) {
		$(".polosa").css({
			"left": "-384px",
		});
		a = -384;
		
	}
	else{
		$(".polosa").css({
			"left": a+"px",
		});
	}
}