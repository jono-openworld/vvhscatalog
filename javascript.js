
class Grades {
    constructor(ninth, tenth, 
                eleventh, twelveth) {
      this.ninth = ninth;
      this.tenth = tenth;
      this.eleventh = eleventh;
      this.twelveth = twelveth;
    }
}

class Departments {
    constructor( cte, ela, fa, jrotc,
                 math, mcnl, pe, sci,
                 sped, ss, stu) {
        this.cte = cte;
        this.ela = ela;
        this.fa = fa;
        this.jrotc = jrotc;
        this.math = math;
        this.mcnl = mcnl;
        this.pe = pe;
        this.sci = sci;
        this.sped = sped;
        this.ss = ss;
        this.stu = stu;
    }
}

// initialize state with default checkbox values
let state = {
    departments: new Departments(true, true, true, true,
                                 true, true, true, true, 
                                 true, true, true),
    grades: new Grades(true, true, true, true),
    courseDetails: false,
    electives: true,
}

const checkboxes = {
    deptCTE: document.querySelector('#Dept-CTE'),
    deptELA: document.querySelector('#Dept-ELA'),
    deptFA: document.querySelector('#Dept-FA'),
    deptJROTC: document.querySelector('#Dept-JROTC'),
    deptMATH: document.querySelector('#Dept-MATH'),
    deptMCNL: document.querySelector('#Dept-MCNL'),
    deptPE: document.querySelector('#Dept-PE'),
    deptSCI: document.querySelector('#Dept-SCI'),
    deptSPED: document.querySelector('#Dept-SPED'),
    deptSS: document.querySelector('#Dept-SS'),
    deptSTU: document.querySelector('#Dept-STU'),

    gradeNinth: document.querySelector('#ninthCheck'),
    gradeTenth: document.querySelector('#tenthCheck'),
    gradeEleventh: document.querySelector('#eleventhCheck'),
    gradeTwelveth: document.querySelector('#twelvethCheck'), 

    courseDetails: document.querySelector('#detailsCheck'),
    electives: document.querySelector('#electives'),

}

init();

function readState() {
    var obj;

    try {
        obj = JSON.parse(sessionStorage.state);
    } catch (e) {
        console.error(e instanceof SyntaxError);
        console.error(e.message);
        console.error(e.name);
        console.error(e.fileName);
        console.error(e.lineNumber);
        console.error(e.columnNumber);
        console.error(e.stack);
    }

    return obj;
}

function writeState(obj) {
    sessionStorage.setItem('state', JSON.stringify(obj));
}

function init() {
    console.log('init()');

    var newState = readState();
    if (newState != null){
        state = newState;
    }
    else {
        writeState(state);
    }
    updatePage();  
}

function updatePage() {

    if (checkboxes != null){

        // Departments checkboxes
        if (checkboxes.deptCTE != null) {
            checkboxes.deptCTE.checked = state.departments.cte;
        }
        if (checkboxes.deptELA != null) {
            checkboxes.deptELA.checked = state.departments.ela;
        }
        if (checkboxes.deptFA != null) {
            checkboxes.deptFA.checked = state.departments.fa;
        }
        if (checkboxes.deptJROTC != null) {
            checkboxes.deptJROTC.checked = state.departments.jrotc;
        }
        if (checkboxes.deptMATH != null) {
            checkboxes.deptMATH.checked = state.departments.math;
        }
        if (checkboxes.deptMCNL != null) {
            checkboxes.deptMCNL.checked = state.departments.mcnl;
        }
        if (checkboxes.deptPE != null) {
            checkboxes.deptPE.checked = state.departments.pe;
        }
        if (checkboxes.deptSCI != null){
            checkboxes.deptSCI.checked = state.departments.sci;
        }
        if (checkboxes.deptSPED != null) {
            checkboxes.deptSPED.checked = state.departments.sped;
        }
        if (checkboxes.deptSS != null){
            checkboxes.deptSS.checked = state.departments.ss;
        }
        if (checkboxes.deptSTU != null) {
            checkboxes.deptSTU.checked = state.departments.stu;
        }  
        
        // Grades checkboxes
        if (checkboxes.gradeNinth != null){
            checkboxes.gradeNinth.checked = state.grades.ninth;
        }
        if (checkboxes.gradeTenth != null){
            checkboxes.gradeTenth.checked = state.grades.tenth;
        }
        if (checkboxes.gradeEleventh != null){
            checkboxes.gradeEleventh.checked = state.grades.eleventh;
        }
        if (checkboxes.gradeTwelveth != null){
            checkboxes.gradeTwelveth.checked = state.grades.twelveth;
        }

        // Course Details checkbox
        if (checkboxes.courseDetails != null){
            checkboxes.courseDetails.checked = state.courseDetails;
        }

        // Electives checkbox
        if (checkboxes.electives != null){
            checkboxes.electives.checked = state.electives;
        }
        
        
    }

    // Show or hide departments
    showHideDepartments();   

    // Show or hide grade levels
    showHideGrades();

    // Show or hide course details
    showHideCourseDetails();

    // Show or hide electives
    showHideElectives();
}

//////////////////////////////////////
// Department event listeners
//
//
checkboxes.deptCTE.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.cte = !state.departments.cte;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptELA.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.ela = !state.departments.ela;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptFA.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.fa = !state.departments.fa;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptJROTC.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.jrotc = !state.departments.jrotc;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptMATH.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.math = !state.departments.math;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptMCNL.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.mcnl = !state.departments.mcnl;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptPE.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.pe = !state.departments.pe;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptSCI.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.sci = !state.departments.sci;
        writeState(state);
        updatePage();
    }  
});

checkboxes.deptSS.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.ss = !state.departments.ss;
        writeState(state);
        updatePage();
    }  
});

/**********************************************88888888888
// Uncomment when SPED courses are added to the catalog
checkboxes.deptSPED.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.sped = !state.departments.sped;
        writeState(state);
        updatePage();
    }  
});
*/


checkboxes.deptSTU.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.departments.stu = !state.departments.stu;
        writeState(state);
        updatePage();
    }  
});

/////////////////////////////////
// Grades event listener
//
checkboxes.gradeNinth.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.ninth = !state.grades.ninth;
        writeState(state);
        updatePage();
    }  
});

checkboxes.gradeTenth.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.tenth = !state.grades.tenth;
        writeState(state);
        updatePage();
    }  
});

checkboxes.gradeEleventh.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.eleventh = !state.grades.eleventh;
        writeState(state);
        updatePage();
    }  
});

checkboxes.gradeTwelveth.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.grades.twelveth = !state.grades.twelveth;
        writeState(state);
        updatePage();
    }  
});


/////////////////////////////////
// Course details event listener
//
checkboxes.courseDetails.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.courseDetails = !state.courseDetails;
        writeState(state);
        updatePage();
    }  
});

/////////////////////////////////
// Electives event listener
//
checkboxes.electives.addEventListener('change', function () {
    state = readState();

    if (state != null){
        state.electives = !state.electives;
        writeState(state);
        updatePage();
    }  
});

////////////////////////////////////
// Show / Hide elements functions
//
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


function showHideCourseDetails(){
	let coursesList = document.getElementsByClassName("course-details");

	for (i = 0; i < coursesList.length; i++) {
		if (state.courseDetails){
			/* show */
			coursesList[i].style.display="block";
		}
		else {
			/* hide */
			coursesList[i].style.display="none";
		}
	}
}

function showHideElectives(){
	let coursesList = document.getElementsByClassName("electives");

	for (i = 0; i < coursesList.length; i++) {
		if (state.electives){
			/* show */
			coursesList[i].style.display="block";
		}
		else {
			/* hide */
			coursesList[i].style.display="none";
		}
	}
}

function getGradesSelector(grades){
    let showSelector = '';
    
    if (grades.ninth == true) {
        showSelector += '.ninth-grade,';
    }
    if (grades.tenth == true) {
        showSelector += '.tenth-grade,';
    }
    if (grades.eleventh == true) {
        showSelector += '.eleventh-grade,';
    }
    if (grades.twelveth == true) {
        showSelector += '.twelveth-grade,';
    }
    // Remove the final character from selectors
    showSelector = showSelector.slice(0, -1);

    return showSelector;
}

function showHideGrades(){
    let showSelector = getGradesSelector(state.grades);
    let hideSelector = '.grade-level';

    showHide(showSelector, hideSelector);  
}

function getDepartmentsSelector(departments){
    let showSelector = '';

    if (departments.cte == true) {
        showSelector += '.Dept-CTE,';
    }

    if (departments.ela == true) {
        showSelector += '.Dept-ELA,';
    }

    if (departments.fa == true) {
        showSelector += '.Dept-FA,';
    }

    if (departments.jrotc == true) {
        showSelector += '.Dept-JROTC,';
    }

    if (departments.math == true) {
        showSelector += '.Dept-MATH,';
    }

    if (departments.mcnl == true) {
        showSelector += '.Dept-MCNL,';
    }

    if (departments.pe == true) {
        showSelector += '.Dept-PE,';
    }

    if (departments.sci == true) {
        showSelector += '.Dept-SCI,';
    }

    if (departments.ss == true) {
        showSelector += '.Dept-SS,';
    }

    if (departments.stu == true) {
        showSelector += '.Dept-STU,';
    }

    // Remove the final character from selectors
    showSelector = showSelector.slice(0, -1);
    
    return showSelector;
}


function showHideDepartments(){
    let showSelector = getDepartmentsSelector(state.departments);
    let hideSelector = '.department-div'; 

    showHide(showSelector, hideSelector);
}


function showHide(showSelector, hideSelector) {
    try {
        console.log(hideSelector);
        var list = document.querySelectorAll(hideSelector);
        var count = 0;
        
        if (list != null) {
            list.forEach((element) => {
              element.style.display="none";
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
    

    try {
        console.log(showSelector);
        if (showSelector !== ''){           
            var list = document.querySelectorAll(showSelector);
            var count = 0;
            
            if (list != null) {
                list.forEach((department) => {
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


