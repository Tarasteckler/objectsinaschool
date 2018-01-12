var allStudents = [];
var allTeachers = [];
var allSections = [];
var wholeSchool = [];
var stuId = 0;
var secId = 0;

function Student(firstName, lastName, grade){
    this.id = stuId++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade= grade;
}

function Teacher(firstName, lastName, subject) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.subject = subject;
}

function Section(name, maxSize, teacher){
    this.name = name;
    this.maxSize = maxSize;
    this.id = secId++;
    this.students = [];
    this.currentSize = this.students.length;
    this.teacher = teacher;
    this.seatsRemaining = (maxSize - this.currentSize);
}

function hideEverything(){
    document.getElementById("div1").style.display = "none";
    document.getElementById("div2").style.display = "none";
    document.getElementById("div3").style.display = "none";
    document.getElementById("div4").style.display = "none";
    document.getElementById("div5").style.display = "none";
    document.getElementById("div6").style.display = "none";
    document.getElementById("div7").style.display = "none";
}

function toggle(id, div) {
    var allDisplays = document.getElementsByClassName("display");
    for (i = 0; i < allDisplays.length; i++){
        allDisplays[i].style.display = "none";
    }
    document.getElementById(id).style.display = "inline";

    var wantedOutputs = document.getElementsByClassName(div);
    var allOutputs = document.getElementsByClassName("output");

    var allThings = document.getElementsByClassName("things");
    for(j=0; j<allThings.length; j++){
        allThings[j].innerHTML = "";
    }

    for (y = 0; y < allOutputs.length; y++){
        allOutputs[y].style.display = "none";
        allOutputs[y].innerHTML = "";
    }
    for (x = 0; x < wantedOutputs.length; x++){
        wantedOutputs[x].style.display = "block";
    }
}

function addStudent() {
    var first = document.getElementById("stuFirst").value;
    var last = document.getElementById("stuLast").value;
    var grade = document.getElementById("stuGrade").value;
    if (grade < 9 || grade > 12){
        document.getElementById("error").innerHTML = "Error: The student you have entered is not in high school. Please enter a grade between 9 and 12.";
        return;
    }
    var student = new Student(first, last, grade);
    allStudents.push(student);
    wholeSchool.push(student);
    document.getElementById("confirmStudent").innerHTML = student.firstName + " added.";
    clearBoxes("stuBox");
}

function findStudentById(id){
    for (var i = 0; i < allStudents.length; i++){
        if (allStudents[i].id === id){
            return allStudents[i];
        }
    }
}

function findSectionById(id) {
    for (var i = 0; i < allSections.length; i++){
        if (allSections[i].id === id){
            return allSections[i];
        }
    }
}

function addStudentToSection (){
    var stuId = parseInt(document.getElementById("students").value);
    var secId = parseInt(document.getElementById("sections").value);
    var student = findStudentById(stuId);
    var section = findSectionById(secId);
    section.students.push(student);
    section.currentSize ++;
    section.seatsRemaining --;
    document.getElementById("confirmAddition").innerHTML = student.firstName + " added to " + section.name + ".";
}

function removeStudentFromSection(){
    var stuToRemoveId = parseInt(document.getElementById("students2").value);
    var secToRemoveFromId = parseInt(document.getElementById("sections2").value);
    var stuToRemove = findStudentById(stuToRemoveId);
    var secToRemoveFrom = findSectionById(secToRemoveFromId);
    var index = secToRemoveFrom.students.indexOf(stuToRemove);
    secToRemoveFrom.students.splice(index, 1);
    secToRemoveFrom.currentSize --;
    secToRemoveFrom.seatsRemaining ++;
    document.getElementById("confirmRemoval").innerHTML = stuToRemove.firstName + " removed from " + secToRemoveFrom.name + ".";

}

function addTeacher(){
    var first = document.getElementById("teaFirst").value;
    var last = document.getElementById("teaLast").value;
    var subject = document.getElementById("teaSubject").value;
    var teacher = new Teacher(first, last, subject);
    allTeachers.push(teacher);
    wholeSchool.push(teacher);
    document.getElementById("confirmTeacher").innerHTML = teacher.firstName + " added.";
    clearBoxes("teaBox");
}

function addSection(){
    var subject = document.getElementById("secName").value;
    var count = parseInt(document.getElementById("secCount").value);
    var teacher = document.getElementById("secTeacher").value;
    var section = new Section (subject, count, teacher);
    allSections.push(section);
    wholeSchool.push(section);
    document.getElementById("confirmSection").innerHTML = section.name + " added.";
    clearBoxes("secBox");
}

function listSectionInfo(){
    document.getElementById("sectionInfo").innerHTML = "";
    document.getElementById("studentsEnrolled").innerHTML = "";

    var id = parseInt(document.getElementById("allSecs").value);
    output = "";
    for (var i = 0; i < allSections.length; i++){
        if (allSections[i].id === id){
            console.log(allSections[i]);
            var thisSection = allSections[i];
            output += "<tr><td>" + "NAME" + "</td>";
            output += "<td>" + "TEACHER" + "</td>";
            output += "<td>" + "MAX SIZE" + "</td>";
            output += "<td>" + "CURRENT SIZE" + "</td>";
            output += "<td>" + "SEATS REMAINING" + "</td>";
            output += "<td>" + "STUDENTS ENROLLED" + "</td>";
            output += "<tr></tr><td>" + thisSection.name + "</td>";
            output += "<td>" + thisSection.teacher + "</td>";
            output += "<td>" + thisSection.maxSize + "</td>";
            output += "<td>" + thisSection.currentSize + "</td>";
            output += "<td>" + thisSection.seatsRemaining + "</td>";
            output += "<td>" + "<button id= 'listStudents' onclick='listStudents()' >Click to see enrolled students!</button>" + "</td>";
            document.getElementById("sectionInfo").innerHTML = output;
            return;
        }
    }
}

function listStudents(){
    var id = parseInt(document.getElementById("allSecs").value);
    for (var i = 0; i < allSections.length; i++) {
        if (allSections[i].id === id) {
            var thisSection = allSections[i];
            if (thisSection.currentSize === 0){
                document.getElementById("studentsEnrolled").innerHTML = "No students are currently enrolled in " + thisSection.name + ".";
            }
            for (var x = 0; x < thisSection.students.length; x++) {
                 document.getElementById("studentsEnrolled").innerHTML += thisSection.students[x].firstName + " " + thisSection.students[x].lastName + "<br>";
            }
            return;
        }
    }
}


function list(){
    output = "";
    if(document.getElementById("listItems").value==="1"){
        output += "<tr id='theList'><td>" + "FIRST NAME" + "</td>";
        output += "<td>" + "LAST NAME" + "</td>";
        output += "<td>" + "GRADE" + "</td>";

        for(var i = 0; i< allStudents.length;i++){
            output+= "<tr><td>" + allStudents[i].firstName  + "</td>";
            output+= "<td>" + allStudents[i].lastName  + "</td>";
            output+= "<td>" + allStudents[i].grade  + "</td></tr>";
        }
    }
    if(document.getElementById("listItems").value === "2"){
        output += "<tr><td>" + "FIRST NAME" + "</td>";
        output += "<td>" + "LAST NAME" + "</td>";
        output += "<td>" + "SUBJECT" + "</td>";
        for(var x = 0; x< allTeachers.length;x++){
            output+= "<tr><td>" + allTeachers[x].firstName  + "</td>";
            output+= "<td>" + allTeachers[x].lastName  + "</td>";
            output+= "<td>" + allTeachers[x].subject  + "</td></tr>";
        }
    }
    if(document.getElementById("listItems").value === "3"){
        output += "<tr><td>" + "SECTION NAME" + "</td>";
        output += "<td>" + "MAX # STUDENTS" + "</td>";
        output += "<td>" + "TEACHER" + "</td>";
        for(var y = 0; y< allSections.length;y++){
            output+= "<tr><td>" + allSections[y].name  + "</td>";
            output+= "<td>" + allSections[y].maxSize  + "</td>";
            output+= "<td>" + allSections[y].teacher  + "</td></tr>";
        }
    }
    document.getElementById("listing").innerHTML = output;
}

function clearBoxes(elements) {
    var boxes = document.getElementsByClassName(elements);
    for (var i = 0; i < boxes.length; i++) {
        if (boxes[i].type === "text") {
            boxes[i].value = "";
        }
    }
}

function populateLists(){
    document.getElementById("students").innerHTML = "<option value='0'>Select a student</option>";
    for(var i = 0; i < allStudents.length; i++){
        document.getElementById("students").innerHTML +=
            "<option value='" + allStudents[i].id + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }

    document.getElementById("sections").innerHTML = "<option value='0'>Select a section</option>";
    for(var x = 0; x < allSections.length; x++){
        document.getElementById("sections").innerHTML +=
            "<option value='" + allSections[x].id + "'>" + allSections[x].name + "</option>";
    }
    document.getElementById("allSecs").innerHTML = "<option value='0'>Select a section</option>";
    for(var z = 0; z < allSections.length; z++){
        document.getElementById("allSecs").innerHTML +=
            "<option value='" + allSections[z].id + "'>" + allSections[z].name + "</option>";
    }
    document.getElementById("students2").innerHTML = "<option value='0'>Select a student</option>";
    for(var y = 0; y < allStudents.length; y++){
        document.getElementById("students2").innerHTML +=
            "<option value='" + allStudents[y].id + "'>" + allStudents[y].firstName + " " + allStudents[y].lastName + "</option>";
    }
    document.getElementById("sections2").innerHTML = "<option value='0'>Select a section</option>";
    for(var j = 0; j < allSections.length; j++){
        document.getElementById("sections2").innerHTML +=
            "<option value='" + allSections[j].id + "'>" + allSections[j].name + "</option>";
    }
    document.getElementById("studentsAgain").innerHTML =  "<option value='0'>Select a student to learn about</option>";
    for (var q = 0; q < allStudents.length; q++){
        document.getElementById("studentsAgain").innerHTML +=
            "<option value='" + allStudents[q].id + "'>" + allStudents[q].firstName + "</option>";
    }
}

function searchForStudent(){
    document.getElementById("studentToLearnAbout").innerHTML = "";
    var output = "";
    var student = parseInt(document.getElementById("studentsAgain").value);
    for (i = 0; i < allStudents.length; i++){
        if (allStudents[i].id === student){
            output += "<tr><td>" + "NAME" + "</td>";
            output += "<td>" + "ID" + "</td>";
            output += "<td>" + "GRADE" + "</td>";
            output += "<tr><td>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</td>";
            output += "<td>" + allStudents[i].id + "</td>";
            output += "<td>" + allStudents[i].grade + "</td></tr>";
        }
    }
    document.getElementById("studentToLearnAbout").innerHTML = output;
}