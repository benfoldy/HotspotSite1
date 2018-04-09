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
		$("#popIn").text("'Three mechanisms have been put forward to explain how media use might affect sleep quality...Exposure to bright light, such as that emitted by a television, computer or mobile phone screen, suppresses the secretion of melatonin, delaying sleep onset and disrupting our sleep...Media use is an unstructured leisure activity. Unlike dance lessons or sports games, it has no predefined beginning or end points...Third, sleep can also be affected by media content. There is much violent and sexual content in the media.'");
		$("#popIn").addClass("popIn_text");
	})

	$("#study1").click(function(){
		superFunction()
		$("#popIn").html("<a href='https://www.sciencedirect.com/science/article/pii/S0277953615302458?via%3Dihub' target='_blank'>Bedtime Mobile Phone Use and Sleep in Adults, Social Science and Medicine, January, 2016</a>");
	})

	$("#xbutton").click(function (){
		$("#slide1").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})

	$("#spot2").click(function(){
		superFunction2()
		$("#popIn2").text("'Chronic media multitasking is associated with a wider attentional scope/higher attentional impulsivity, which may allow goal-irrelevant information to compete with goal-relevant information. As a consequence, heavy media multitaskers (HMM) are able to hold fewer or less precise goal-relevant representations in working memory (WM). HMMs' wider attentional scope, combined with their diminished WM performance, propagates forward to yield lower long-term memory performance. As such, chronic media multitasking is associated with a reduced ability to draw on the past - be it very recent or more remote - to inform present behavior.'");
		$("#popIn2").addClass("popIn_text");
	})

	$("#study2").click(function(){
		superFunction2()
		$("#popIn2").html("<a href='https://link.springer.com/article/10.3758%2Fs13423-015-0907-3' target='_blank'> Media multitasking and memory: Differences in working memory and long-term memory, Psychonomic Bulletin & Review, April, 2016</a>");
	})


	$("#xbutton2").click(function (){
		$("#slide2").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})
	
	$("#spot3").click(function(){
		superFunction3()
		$("#popIn3").text("'Overuse of wireless mobile devices (WMDs) may be associated with a form of psychological dependency, of which a prominent feature may be anxiety arising from separation from these devices.'");
		$("#popIn3").addClass("popIn_text");
	})

	$("#study3").click(function(){
		superFunction3()
		$("#popIn3").html("<a href='https://www.sciencedirect.com/science/article/pii/S0747563214002805' target='_blank'> Out of sight is not out of mind: The impact of restricting wireless mobile device use on anxiety levels among low, moderate and high users, August, 2014</a>");
	})



	$("#xbutton3").click(function (){
		$("#slide3").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})

	$("#spot4").click(function(){
		superFunction4()
		$("#popIn4").text("'In the first study, we found that cell phone users walked more slowly, changed directions more frequently, and were less likely to acknowledge other people than individuals in the other conditions. In the second study, we found that cell phone users were less likely to notice an unusual activity along their walking route (a unicycling clown).'");
		$("#popIn4").addClass("popIn_text");
	})

	$("#study4").click(function(){
		superFunction4()
		$("#popIn4").html("<a href='http://onlinelibrary.wiley.com/doi/10.1002/acp.1638/full' target='_blank'> Did you see the unicycling clown? Inattentional blindness while walking and talking on a cell phone, Applied Cognitive Psychology, October, 2009</a>");
		
	})



	$("#xbutton4").click(function (){
		$("#slide4").removeClass("info_slides_show")
		$(".hotspot").removeClass("hide_button")
	})




})