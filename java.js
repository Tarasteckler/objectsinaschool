var allStudents = [];
var allTeachers = [];
var allSections = [];
var wholeSchool = [];
var nextId = 1;

function Student(firstName, lastName, grade){
    this.id = nextId++;
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
    this.id = nextId++;
    //this.currentSize = currentSize;
    this.teacher = teacher;
   // this.students = [];
    // this.addStudent = addStudentToSection();
    // this.removeStudent = removeStudentFromSection();
    // this.sectionSeatsRemaining = maxSize - currentSize;
}

function addStudent() {
    var first = document.getElementById("stuFirst").value;
    var last = document.getElementById("stuLast").value;
    var grade = document.getElementById("stuGrade").value;
    var student = new Student(first, last, grade);
    allStudents.push(student);
    wholeSchool.push(student);
    document.getElementById("confirm").innerHTML = "Student added";
    clearBoxes();
}

function addStudentToSection(studentId, sectionId){
    var stuId = document.getElementById("students").value
}

function addTeacher(){
    var first = document.getElementById("teaFirst").value;
    var last = document.getElementById("teaLast").value;
    var subject = document.getElementById("teaSubject").value;
    var teacher = new Teacher(first, last, subject);
    allTeachers.push(teacher);
    wholeSchool.push(teacher);
    document.getElementById("confirm").innerHTML = "Teacher added";
    clearBoxes();
}

function addSection(){
    var subject = document.getElementById("sectionName").value;
    var count = parseInt(document.getElementById("sectionCount").value);
    var teacher = document.getElementById("secTeacher").value;
    var section = new Section (subject, count, teacher);
    allSections.push(section);
    document.getElementById("confirm").innerHTML = "Section added";
    clearBoxes();
}

// function removeStudentFromSection(studentId, sectionId){
//
// }

// function listSectionInfo(sectionId){
//
// }


function list(){
    output = "";
    if(document.getElementById("listItems").value==="1"){
        output += "<tr><td>" + "FIRST NAME" + "</td>";
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

function clearBoxes() {
    var boxes = document.getElementsByTagName("input");
    for (var i=0; i<boxes.length; i++) {
        if (boxes[i].type === "text") {
            boxes[i].value = "";
        }
    }
}
//
// function findTeacherById(id) {
//
//     //look up teacher in all teachers
//
//     return teacher;
//
// }

function populateLists(){
    document.getElementById("students").innerHTML = "<option value='0'>Select a student</option>";

    for(i=0; i < allStudents.length; i++){
        document.getElementById("students").innerHTML +=
            "<option value= '" + i + "'>" + allStudents[i].firstName + " " + allStudents[i].lastName + "</option>";
    }
    for(x=0; x<allSections.length; x++){
        document.getElementById("sections").innerHTML +=
            "<option>" + allSections[x].name + "</option>";
    }
}

// function updateLists(){
//     for(i=0; i<allStudents.length; i++){
//         if (allStudents[i] )
//     }
// }
