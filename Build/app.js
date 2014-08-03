$(document).ready(function() {
	var heroList = ["Browse", "Plan", "Cook", "Serve"];
	var delayTime = 1500;
	var index = 0;
	var updaterFunction = function() {
		$("#hero__juggle").html(heroList[index]);
		$("#hero__juggle").fadeIn(500).delay(500).fadeOut(500);
		index = (index + 1)%heroList.length;
	};
	window.setInterval(updaterFunction, delayTime);
});