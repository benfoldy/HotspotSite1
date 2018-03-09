$(document).ready(function(){

	var superFunction = function () {
		$("#slide1").addClass("info_slides_show");
		$("#xbutton").addClass("button_close_show");
	}

	var superFunction2 = function () {
		$("#slide2").addClass("info_slides_show");
		$("#xbutton2").addClass("button_close_show");
	}

	var superFunction3 = function () {
		$("#slide3").addClass("info_slides_show");
		$("#xbutton3").addClass("button_close_show");
	}

	var superFunction4 = function () {
		$("#slide4").addClass("info_slides_show");
		$("#xbutton4").addClass("button_close_show");
	}

	$(".hotspot").click(function(){
		$(".hotspot").addClass("hide_button");
	})

	$("#spot1").click(function(){
		superFunction()
		$("#popIn").text("It found that bedtime phone use correlated negatively to sleep outcomes, resulting in worse sleep, more insomnia, more mid-night disturbances and higher fatigue during the day.");
		$("#popIn").addClass("popIn_text");
	})

	$("#study1").click(function(){
		superFunction()
		$("#popIn").html("<a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4733435/'> Media multitasking and memory: Differences in working memory and long-term memory, Psychonomic Bulletin & Review, April 2016</a>");
	})

	$("#xbutton").click(function (){
		$("#slide1").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})

	$("#spot2").click(function(){
		superFunction2()
		$("#popIn2").text("The study found that 'heavy media-multitaskers' performed worse on measures of both shorter-term 'working memory' and long-term memory, whether or not a phone is present.");
		$("#popIn2").addClass("popIn_text");
	})

	$("#study2").click(function(){
		superFunction2()
		$("#popIn2").html("<a href='https://link.springer.com/article/10.3758%2Fs13423-015-0907-3'> Media multitasking and memory: Differences in working memory and long-term memory, Psychonomic Bulletin & Review, April, 2016</a>");
	})


	$("#xbutton2").click(function (){
		$("#slide2").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})
	
	$("#spot3").click(function(){
		superFunction3()
		$("#popIn3").text("It found heavy wireless users became more anxious over time than moderate or light users, leading researchers to posit a kind of smartphone separation anxiety.");
		$("#popIn3").addClass("popIn_text");
	})

	$("#study3").click(function(){
		superFunction3()
		$("#popIn3").html("<a href='https://www.sciencedirect.com/science/article/pii/S0747563214002805'> Out of sight is not out of mind: The impact of restricting wireless mobile device use on anxiety levels among low, moderate and high users, August, 2014</a>");
	})



	$("#xbutton3").click(function (){
		$("#slide3").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})

	$("#spot4").click(function(){
		superFunction4()
		$("#popIn4").text("Crossing the square, subjects passed by a unicycling clown. Those on their phones were less likely to notice, walked more erratically and less likely to acknowledge other pedestrians.");
		$("#popIn4").addClass("popIn_text");
	})

	$("#study4").click(function(){
		superFunction4()
		$("#popIn4").html("<a href='http://onlinelibrary.wiley.com/doi/10.1002/acp.1638/full'> Did you see the unicycling clown? Inattentional blindness while walking and talking on a cell phone, Applied Cognitive Psychology, October, 2009</a>");
		
	})



	$("#xbutton4").click(function (){
		$("#slide4").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})




})