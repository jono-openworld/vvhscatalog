
let showAllClassDescriptions = true;
let showNinthGrade = true;
let showTenthGrade = true;
let showEleventhGrade = true;
let showTwelvethGrade = true;

let showDeptCTE = true;
let showDeptELA = true;
let showDeptFA = true;
let showDeptMATH = true;
let showDeptMCNL = true;
let showDeptPE = true;
let showDeptSCI = true;
let showDeptSS = true;




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
    
    
    /* Hide all courses with class ".grade-level" first */
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
    
    /* Then select courses to show
       For example, the selector statement . . .
       ".ninth-grade, .tenth-grade, .eleventh-grade, .twelveth-grade"
       ==
       .ninth-grade || .tenth-grade || .eleventh-grade || .twelveth-grade
       
       selects any element with one or more of these classes.
    */
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


function toggleShowHideDept(deptName){
    switch(deptName) {
        case "Dept-CTE":
            showDeptCTE = !showDeptCTE;
            break;

        case "Dept-ELA":
            showDeptELA = !showDeptELA;
            break;

        case "Dept-FA":
            showDeptFA = !showDeptFA;
            break;
                
        case "Dept-MATH":
            showDeptMATH = !showDeptMATH;
            break;

        case "Dept-MCNL":
            showDeptMCNL = !showDeptMCNL;
            break;
    
        case "Dept-PE":
            showDeptPE = !showDeptPE;
            break;

        case "Dept-SCI":
            showDeptSCI = !showDeptSCI;
            break;

        case "Dept-SS":
            showDeptSS = !showDeptSS;
            break;

        default:
            break;
    }
    
    let showSelector = '';
    let hideSelector = '.department-div';

    if (showDeptCTE == true) {
        showSelector += '.Dept-CTE,';
    }

    if (showDeptELA == true) {
        showSelector += '.Dept-ELA,';
    }

    if (showDeptFA == true) {
        showSelector += '.Dept-FA,';
    }

    if (showDeptMATH == true) {
        showSelector += '.Dept-MATH,';
    }

    if (showDeptMCNL == true) {
        showSelector += '.Dept-MCNL,';
    }

    if (showDeptPE == true) {
        showSelector += '.Dept-PE,';
    }

    if (showDeptSCI == true) {
        showSelector += '.Dept-SCI,';
    }

    if (showDeptSS == true) {
        showSelector += '.Dept-SS,';
    }

    // Remove the final character from selectors
    showSelector = showSelector.slice(0, -1);
    
    
    /* Hide all departments with ".department-div" first */
    try {
        console.log(hideSelector);
        var departmentList = document.querySelectorAll(hideSelector);
        var count = 0;
        
        if (departmentList != null) {
            /* Loop over departments in list, each department.style.diplay to block */
            departmentList.forEach((department) => {
              department.style.display="none";
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
    
    /* Then select departments to show
       For example, the selector statement . . .
       ".Dept-CTE, .Dept-MATH, .Dept-SCI"
       ==
       .Dept-CTE || .Dept-MATH || .Dept-SCI
       selects any element with one or more of these classes.
    */
    try {
        console.log(showSelector);
        if (showSelector !== ''){           
            var departmentList = document.querySelectorAll(showSelector);
            var count = 0;
            
            if (departmentList != null) {
                /* Loop over departments in list, each department.style.diplay to block */
                departmentList.forEach((department) => {
                  department.style.display="block";
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

