function $(id){
	return document.getElementById(id);
}

	
	
	//Whenever we click on one of our dots
	//we want to change the background color of our card
	
	//1st we need to access the correct HTML elementFromPoint
	//Then we add an event listener to determine when its been clicked on
	$("red").addEventListener("click", function(){
		
		//Next we need to access the HTML element of our card
		$("card").style.backgroundColor = "red";
	});
	
	//Now we're gonna do the same thing with the rest of the dots
	$("yellow").addEventListener("click", function(){
		
		//Next we need to access the HTML element of our card
		$("card").style.backgroundColor = "yellow";
	});
	
	$("blue").addEventListener("click", function(){
		
		//Next we need to access the HTML element of our card
		$("card").style.backgroundColor = "blue";
	});
	
	$("green").addEventListener("click", function(){
		
		//Next we need to access the HTML element of our card
		$("card").style.backgroundColor = "green";
	});
