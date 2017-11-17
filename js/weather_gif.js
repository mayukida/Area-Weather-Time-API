	// Weather api
	// http://openweathermap.org/weather-conditions


	var xhr = new XMLHttpRequest();

	xhr.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Vancouver&APPID=68187827843834e0808a4f86296338e1", false);
	xhr.send();

	resp = JSON.parse(xhr.response);

	console.log(resp);

	var condition = resp.weather[0].main;
	var code = resp.weather[0].id;

	var contact = document.getElementById("contact");
	var weather = document.createElement("div");
	var bg = "";
	var bgColor = "";

	var message = document.getElementById("weather-message");
	var title = document.getElementById("weather-title");
	var fed = document.getElementById("fed");
	var form = document.getElementById("form");
	var copyright = document.getElementById("copyright");

	var currentTime;
	getCurrentTime();


	var now = Date();
	console.log(now);



	// var currentTime = new Date().getHours();
	console.log(code);
	//console.log(currentTime);

	

	// code=800;
	function main(){

		console.log("currentTime is: "+currentTime);


		if (code >=200 && code <=202 || code >= 210 && code <= 212 || code == 221 || code >= 230 && code <= 232 || code == 781 || code >= 900 && code <= 902 || code >= 960 && code <= 962){
					if (21 <= currentTime || currentTime < 5) {
				bg = "img/weather/star.gif";
				bgColor = "#021535";
				message.style.color = "#ffffff";
				message.style.fontSize = "20px";
				title.style.color = "#ffffff";
				fed.style.color = "#ffffff";
				form.style.color = "#ffffff";
				copyright.style.color = "#ffffff";
				message.style.fontSize = "20px";
				weather.innerHTML = "It's night time in "+resp.name+".<br>Hope tomorrow will be a nice day again.<br><br><br>Waiting for your contact.<br>Thank you for your interest!";
		}else{
		bg = "img/weather/rain_new.gif";
		bgColor = "#3e567e";
		message.style.color = "#ffffff";
		message.style.fontSize = "20px";
		title.style.color = "#ffffff";
		fed.style.color = "#ffffff";
		form.style.color = "#ffffff";
		copyright.style.color = "#ffffff";
		weather.innerHTML = "Oh no!<br>It's STORMY today in "+resp.name+".<br>Looking forward to seeing you<br>when it stops!<br><br>Thank you for your interest!";
		}
	}

	if (code >=300 && code <=302 || code >= 310 && code <= 314 || code == 321 || code >= 500 && code <= 504 || code >= 520 && code <= 522 || code == 531 || code == 771){
					if (21 <= currentTime || currentTime < 5) {
				bg = "img/weather/star.gif";
				bgColor = "#021535";
				message.style.color = "#ffffff";
				message.style.fontSize = "20px";
				title.style.color = "#ffffff";
				fed.style.color = "#ffffff";
				form.style.color = "#ffffff";
				copyright.style.color = "#ffffff";
				message.style.fontSize = "20px";
				weather.innerHTML = "It's night time in "+resp.name+".<br>Hope tomorrow will be a nice day again.<br><br><br>Waiting for your contact.<br>Thank you for your interest!";
		}else{
		bg = "img/weather/rain_new.gif";
		bgColor = "#3e567e";
		message.style.color = "#ffffff";
		message.style.fontSize = "20px";
		title.style.color = "#ffffff";
		fed.style.color = "#ffffff";
		form.style.color = "#ffffff";
		copyright.style.color = "#ffffff";
		weather.innerHTML = "It's RAINING in "+resp.name+" now,<br>but please contact me<br>and let's have a cup of tea!<br><br>Thank you for your interest!";
		}
	}

	if (code >=600 && code <=602 || code >= 611 && code <= 612 || code >= 615 && code <= 616 || code >= 620 && code <= 622 || code == 906){
					if (21 <= currentTime || currentTime < 5) {
				bg = "img/weather/star.gif";
				bgColor = "#021535";
				message.style.color = "#ffffff";
				message.style.fontSize = "20px";
				title.style.color = "#ffffff";
				fed.style.color = "#ffffff";
				form.style.color = "#ffffff";
				copyright.style.color = "#ffffff";
				message.style.fontSize = "20px";
				weather.innerHTML = "It's night time in "+resp.name+".<br>Hope tomorrow will be a nice day again.<br><br><br>Waiting for your contact.<br>Thank you for your interest!";
		}else{
		bg = "img/weather/snow_new.gif";
		bgColor = "#C9c9c9";
		message.style.color = "#ffffff";
		message.style.fontSize = "20px";
		title.style.color = "#ffffff";
		fed.style.color = "#ffffff";
		form.style.color = "#ffffff";
		copyright.style.color = "#ffffff";
		weather.innerHTML = "Woohoo!<br>It's SNOWING in "+resp.name+" today.<br>Please contact me and<br>let's play with snow together!<br><br>Thank you for your visit!";
		}
	}

	if (code == 771 || code == 905 || code >= 955 && code <= 959){
		if (21 <= currentTime || currentTime < 5) {
				bg = "img/weather/star.gif";
				bgColor = "#021535";
				message.style.color = "#ffffff";
				message.style.fontSize = "20px";
				title.style.color = "#ffffff";
				fed.style.color = "#ffffff";
				form.style.color = "#ffffff";
				copyright.style.color = "#ffffff";
				message.style.fontSize = "20px";
				weather.innerHTML = "It's night time in "+resp.name+".<br>Hope tomorrow will be a nice day again.<br><br><br>Waiting for your contact.<br>Thank you for your interest!";
		}else{
		bg = "img/weather/wind_new.gif";
		bgColor = "#B9BD51";
		message.style.color = "#ffffff";
		message.style.fontSize = "20px";
		title.style.color = "#ffffff";
		fed.style.color = "#ffffff";
		form.style.color = "#ffffff";
		copyright.style.color = "#ffffff";
		weather.innerHTML = "So WINDY in "+resp.name+" today!<br>Don't be blown away.<br>I'll get you a coffee.<br><br>Contact me and let's talk coding!";
		}
	}

	if (code == 701 || code == 711 || code == 721 || code == 731 || code == 741 || code == 751 || code >= 761 && code <= 762 || code == 804){
				if (21 <= currentTime || currentTime < 5) {
				bg = "img/weather/star.gif";
				bgColor = "#021535";
				message.style.color = "#ffffff";
				message.style.fontSize = "20px";
				title.style.color = "#ffffff";
				fed.style.color = "#ffffff";
				form.style.color = "#ffffff";
				copyright.style.color = "#ffffff";
				message.style.fontSize = "20px";
				weather.innerHTML = "It's night time in "+resp.name+".<br>Hope tomorrow will be a nice day again.<br><br><br>Waiting for your contact.<br>Thank you for your interest!";
		}else{
		bg = "img/weather/cloud_new.gif";
		bgColor = "#A118AD";
		message.style.color = "#ffffff";
		message.style.fontSize = "20px";
		title.style.color = "#ffffff";
		fed.style.color = "#ffffff";
		form.style.color = "#ffffff";
		copyright.style.color = "#ffffff";
		message.style.fontSize = "20px";
		weather.innerHTML = "It's CLOUDY today in "+resp.name+".<br>The best day for coding!<br>Please contact me.<br><br>Thank you for your interest!";
		}
	}

	if (code >= 800 && code <= 803 || code >= 951 && code <= 954 || code >= 903 && code <= 904){
		if (21 <= currentTime || currentTime <= 5) {
				bg = "img/weather/star.gif";
				bgColor = "#021535";
				message.style.color = "#ffffff";
				message.style.fontSize = "20px";
				title.style.color = "#ffffff";
				fed.style.color = "#ffffff";
				form.style.color = "#ffffff";
				copyright.style.color = "#ffffff";
				message.style.fontSize = "20px";
				weather.innerHTML = "It's night time in "+resp.name+".<br>Hope tomorrow will be a nice day again.<br><br><br>Waiting for your contact.<br>Thank you for your interest!";
		}else{
		bg = "img/weather/sun_new.gif";
		// alert("sunny!");
		bgColor = "rgb(67,196,211)";
		//alert("sunny!");
		message.style.fontSize = "20px";
		weather.innerHTML = "What a beautiful day today!<br>It's SUNNY in "+resp.name+".<br>So why don't you contact me and<br>go to the beach together!<br><br>Thank you for your visit!";
		}
	}




	console.log(weather);

	console.log(bg);
	
		// alert(bgColor);
	$('#contact').css('background-image', 'url(' + bg + ')');
	$('#contact').css('background-color', bgColor);
	$('footer').css('background-color', bgColor);
	$("#weather-message").append(weather);

	// console.log($('#contact').css('background-image', 'url(' + "img/rain.gif" + ')'));

	}//end main

	

	function getCurrentTime () {
		console.log("getCurrentTime");
		$.ajax({
			url:"getCurrentTime.php",
			type:"POST",
			dataType: "JSON",
			success: function(resp){
				//console.log(resp.time);
				currentTime = resp.time;
				main();



			}

		});


	}
	

