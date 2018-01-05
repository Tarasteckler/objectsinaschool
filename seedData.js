//seed data

var albinson = new Teacher("Matt", "Albinson", "Computer Science");
var jimenez = new Teacher("Melissa", "Jimenez", "English");
var clegg = new Teacher ("Keldon", "Clegg", "History");
allTeachers.push(albinson);
allTeachers.push(jimenez);
allTeachers.push(clegg);

var s1 = new Student("Leah", "Kirsch", 12);
var s2 = new Student("Barack", "Obama", 11);
var s3 = new Student("Beyoncé", "Knowles", 12);
allStudents.push(s1);
allStudents.push(s2);
allStudents.push(s3);

var section1 = new Section("English", 30, "Melissa Jimenez");
var section2 = new Section("Computer science", 30, "Matt Albinson");
var section3 = new Section("Theory of Knowledge", 25, "Richard Conn");
allSections.push(section1);
allSections.push(section2);
allSections.push(section3);