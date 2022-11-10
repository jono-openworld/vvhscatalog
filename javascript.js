
 let showAllClassDescriptions = true;

function toggleDisplay(divId) {
  var divElement;
  if (document.getElementById(divId)) 
  {
  	divElement = document.getElementById(divId);
  	if (divElement.style.display == 'none')
  	{	
		/* if hidden, then show */
		divElement.style.display = 'block'; 
  	}
  	else 
  	{	/* if shown, then hide */
  		divElement.style.display = 'none'; 
  	}
  } 
}

function toggleShowHideAll(){

	let courselists = document.getElementsByClassName("course-description");

	for (i = 0; i < courselists.length; i++) {
		if (showAllClassDescriptions){
			/* show */
			courselists[i].style.display="block";
		}
		else {
			/* hide */
			courselists[i].style.display="none";
		}
	}

	/* toggle value */
	if(showAllClassDescriptions) {
		showAllClassDescriptions = false;
	}
	else{
		showAllClassDescriptions = true;
	}
}
