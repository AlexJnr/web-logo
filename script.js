function scaleLogo(val){
	var translateFactor = (val-1)*50;
	document.getElementById("logo-container").style.setProperty('transform', `translate(${translateFactor}%, ${translateFactor}%) scale(${val})`);
}

function chooseDisplayMode(option){
	switch(option) {
	  case "black-only":
	    document.getElementById("logo-nj").style.setProperty('color', 'black');
	    document.getElementById("logo-wildlife").style.setProperty('color', 'black');
	    document.getElementById("logo-container").style.setProperty('background-color', 'white');
	    break;
	  case "reversed-out":
	    document.getElementById("logo-nj").style.setProperty('color', 'white');
	    document.getElementById("logo-wildlife").style.setProperty('color', 'white');
	    document.getElementById("logo-container").style.setProperty('background-color', 'black');
	    break;
	  default:
	    document.getElementById("logo-nj").style.setProperty('color', '#0a354f');
	    document.getElementById("logo-wildlife").style.setProperty('color', '#1a4018');
	    document.getElementById("logo-container").style.setProperty('background-color', 'white');
	}
}