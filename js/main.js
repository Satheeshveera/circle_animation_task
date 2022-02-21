$(document).ready(function(){
	fourWeek();
});

function fourWeek(){
	empty()
	setTimeout(() => {
	var greaterQ12 = .46;
	var strokeDashOffsetValue1 = 100 - (greaterQ12 * 100);
	var progressBar1 = $(".out_js-progress-bar");
	progressBar1.css("transition", "1s ease-in-out");
	progressBar1.css("stroke-dashoffset", strokeDashOffsetValue1); 

	var Q16 = .60;
	var strokeDashOffsetValue2 = 100 - (Q16 * 100);
	var progressBar2 = $(".in_js-progress-bar");
	progressBar2.css("transition", "1s ease-in-out");
	progressBar2.css("stroke-dashoffset", strokeDashOffsetValue2); 

	var Q12 = .48;
	var strokeDashOffsetValue3 = 100 - (Q12 * 100);
	var progressBar3 = $(".out2_js-progress-bar");
	progressBar3.css("transition", "1s ease-in-out");
	progressBar3.css("stroke-dashoffset", strokeDashOffsetValue3); 
 
	$(".labelQ12_val").html((Q12 * 100).toFixed(0)+"%");
	$(".labelQ16_val").html((Q16 * 100).toFixed(0)+"%");
	$(".labelQ121_val").html((greaterQ12 * 100).toFixed(0)+"%");
	},1000);
}

function twoWeek(){
	empty()
	setTimeout(() => {
		var greaterQ12 = .42;
	var strokeDashOffsetValue1 = 100 - (greaterQ12 * 100);
	var progressBar1 = $(".out_js-progress-bar");
	progressBar1.css("transition", "1s ease-in-out");
	progressBar1.css("stroke-dashoffset", strokeDashOffsetValue1); 
 
	var Q16 = .57;
	var strokeDashOffsetValue2 = 100 - (Q16 * 100);
	var progressBar2 = $(".in_js-progress-bar");
	progressBar2.css("transition", "1s ease-in-out");
	progressBar2.css("stroke-dashoffset", strokeDashOffsetValue2); 

	var Q12 = .52;
	var strokeDashOffsetValue3 = 100 - (Q12 * 100);
	var progressBar3 = $(".out2_js-progress-bar");
	progressBar3.css("transition", "1s ease-in-out");
	progressBar3.css("stroke-dashoffset", strokeDashOffsetValue3);

	$(".labelQ12_val").html((Q12 * 100).toFixed(0)+"%");
	$(".labelQ16_val").html((Q16 * 100).toFixed(0)+"%");
	$(".labelQ121_val").html((greaterQ12 * 100).toFixed(0) +"%");
	}, 1000);
} 

function empty(){
	 
	var progressBar1 = $(".out_js-progress-bar");
	progressBar1.css("transition", "0s ease-in-out");
	progressBar1.css("stroke-dashoffset", ""); 

	var progressBar2 = $(".in_js-progress-bar");
	progressBar2.css("transition", "0s ease-in-out");
	progressBar2.css("stroke-dashoffset", ""); 

	var progressBar3 = $(".out2_js-progress-bar");
	progressBar3.css("transition", "0s ease-in-out");
	progressBar3.css("stroke-dashoffset", "");
 
}