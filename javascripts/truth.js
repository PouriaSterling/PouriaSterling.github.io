var count = 0;
var prayers = -1;

function giveTruth(e){
	var a = document.getElementById("change");
	var b = document.getElementById("title");
	var c = document.getElementById("button1");
	var d = document.getElementById("count");

	a.innerHTML="YES XDDD";	
	a.style.color='#'+(Math.random()*0xFFFFFF<<0).toString(16);
	
	if (count >= 20){
		b.innerHTML="LOGAN IS NOOB!"
		a.innerHTML="RIP XDDD";
		c.innerHTML="1 CLICK = 1 PRAYER";
		prayers = prayers + 1;
		d.innerHTML="Prayers: " + prayers;
	}else{
		count = count + 1;
		d.innerHTML="Truths: " + count;
	}
}
