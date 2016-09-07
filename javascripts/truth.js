var count = 0;

function giveTruth(e){
	var a = document.getElementById("change");
	var b = document.getElementById("title");
	var c = document.getElementById("button1");
	var d = document.getElementById("count");

	a.innerHTML="YES XDDD";	
	a.style.color='#'+(Math.random()*0xFFFFFF<<0).toString(16);;
	count = count + 1;

	if (count >= 20){
		b.innerHTML="LOGAN IS NOOB!"
		a.innerHTML="RIP XDDD";
		c.innerHTML="1 CLICK = 1 PRAYER"
		d.innerHTML="Prayers: " + count;
	}else{
		d.innerHTML="Truths: " + count;
	}
}
		// var rainbow = ["red", "orange", "yellow", "green", "blue", "Indigo", "violet"];