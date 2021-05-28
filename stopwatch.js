function toglehandler2(){
	stopTimer();
	
	document.getElementById("2").innerHTML=document.getElementById("2").innerHTML=="Pause"?"Continue":"Pause"
	if(document.getElementById("2").innerHTML=="Pause"){
		start();
	}
	
    
    
    
}

function stop(){
	document.getElementById("2").innerHTML="Pause";
    document.getElementById("0").disabled=false
	document.getElementById("2").disabled=true
	document.getElementById("3").disabled=true
	stopTimer();
			ms = 0;
			s = 0;
			m = 0;
			stopwatchEl.textContent = getTimer();
	

}
var ms = 0, s = 0, m = 0,h=0;
		var timer;

		var stopwatchEl = document.querySelector('.stopwatch');
		

		function start() {
			document.getElementById("0").disabled=true
			document.getElementById("2").disabled=false
			document.getElementById("3").disabled=false
			
			if(!timer) {
				timer = setInterval(run, 10);
			}
		}

		function run() {
			stopwatchEl.textContent = getTimer();
			ms++;
			if(ms == 100) {
				ms = 0;
				s++;
			}
			if(s == 60) {
				s = 0;
				m++;
			}if(m==60){
				m=0;
				h++;
			}
		}

		
		

		

		function getTimer() {
			return (h < 10 ? "0" + h : h)+ ":" +(m < 10 ? "0" + m : m)+ ":" +(s < 10 ? "0" + s : s);
		}


		function stopTimer() {
			clearInterval(timer);
			timer = false;
		}


		//learning git 
		//git experiment
		