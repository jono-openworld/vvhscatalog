
let showAllClassDescriptions = true;
let showNinthGrade = true;
let showTenthGrade = true;
let showEleventhGrade = true;
let showTwelvethGrade = true;

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

	let coursesList = document.getElementsByClassName("course-details");

	for (i = 0; i < coursesList.length; i++) {
		if (showAllClassDescriptions){
			/* show */
			coursesList[i].style.display="block";
		}
		else {
			/* hide */
			coursesList[i].style.display="none";
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

function toggleShowHideGrade(gradeName){
    switch(gradeName) {
        case "ninth-grade":
            showNinthGrade = !showNinthGrade;
            break;
        
        case "tenth-grade":
            showTenthGrade = !showTenthGrade;
            break;
           
        case "eleventh-grade":
            showEleventhGrade = !showEleventhGrade;
                break;
        
        case "twelveth-grade":
            showTwelvethGrade = !showTwelvethGrade;
            break;
        
        default:
            break;
    }
    
    let showSelector = '';
    let hideSelector = '.grade-level';
    
    if (showNinthGrade == true) {
        showSelector += '.ninth-grade,';
    }
    if (showTenthGrade == true) {
        showSelector += '.tenth-grade,';
    }
    if (showEleventhGrade == true) {
        showSelector += '.eleventh-grade,';
    }
    if (showTwelvethGrade == true) {
        showSelector += '.twelveth-grade,';
    }
    // Remove the final character from selectors
    showSelector = showSelector.slice(0, -1);
    
    
    /* Hide all courses first */
    try {
        console.log(hideSelector);
        var coursesList = document.querySelectorAll(hideSelector);
        var count = 0;
        
        if (coursesList != null) {
            /* Loop over courses in list, each course.style.diplay to block */
            coursesList.forEach((course) => {
              course.style.display="none";
              count++;
            });
        }
        
        console.log(count);

    }
    catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    }    
    
    /* Select courses to show */
    try {
        console.log(showSelector);
        if (showSelector !== ''){           
            var coursesList = document.querySelectorAll(showSelector);
            var count = 0;
            
            if (coursesList != null) {
                /* Loop over courses in list, each course.style.diplay to block */
                coursesList.forEach((course) => {
                  course.style.display="block";
                  count++;
                });
                console.log(count);
            }
        }
    }
    catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    }

    

   
    
    
}
