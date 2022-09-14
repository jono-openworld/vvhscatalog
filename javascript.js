let show_hide_all_classes = true;

function toggleDisplay(divId) {
  var divElement;
  if (document.getElementById(divId)) 
  {
  	divElement = document.getElementById(divId);
  	if (divElement.style.display == 'none')
  	{	
		divElement.style.display = 'block'; 
  	}
  	else 
  	{	
  		divElement.style.display = 'none'; 
  	}
  } 
}

function toggleShowHideAll(){

	toggleShowHideDept("eng");
	toggleShowHideDept("math");
	
	if(show_hide_all_classes){
		show_hide_all_classes = false;
	}
	else{
		show_hide_all_classes = true;
	}
}


function toggleShowHideDept(dept) {

	let courselists = document.getElementsByClassName(`${dept}-courselist`);

	for (i = 0; i < courselists.length; i++) {
		if (show_hide_all_classes){
			courselists[i].style.display="";
		}
		else {
			courselists[i].style.display="none";
		}
	}


	let coursenames = document.getElementsByClassName(`${dept}-coursename`);

	for (i = 0; i < coursenames.length; i++) {
		if (show_hide_all_classes){
			coursenames[i].style.display="";
		}
		else {
			coursenames[i].style.display="none";
		}
	}

	let courses = document.getElementsByClassName(`${dept}-course`);

	for (i = 0; i < courses.length; i++) {
		if (show_hide_all_classes){
			courses[i].style.display="";
		}
		else {
			courses[i].style.display="none";
		}

		courses[i].style.display="none";
	}
}



function search_coursenames() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('coursename');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}


function search_grades_ninth() {
	var checkBox = document.getElementById("ninth-grade-checkbox");

	let x = document.getElementsByClassName('ninth');
      
    for (i = 0; i < x.length; i++) { 
		if (checkBox.checked == true){
            x[i].style.display="";
        }
        else {
            x[i].style.display="none";                 
        }
    }
}