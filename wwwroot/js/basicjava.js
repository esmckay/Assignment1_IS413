var submit = document.getElementById("submitButton");



submit.addEventListener("click", function () {

    var assingscore = parseInt(document.getElementById("assignments").value);
    var quizscore = parseInt(document.getElementById("quizzes").value);
    var gpscore = parseInt(document.getElementById("groupprojects").value);
    var examscore = parseInt(document.getElementById("exams").value);
    var intexscore = parseInt(document.getElementById("intex").value);
    var finalGrade;
    var letterGrade;

    finalGrade = Math.round((assingscore * .5) + (quizscore * .1) + (gpscore * .1) + (examscore * .2) + (intexscore * .1))

    if (finalGrade >= 94)
        letterGrade = "A";
    else if (finalGrade >= 90)
        letterGrade = "A-";
    else if (finalGrade >= 87)
        letterGrade = "B+";
    else if (finalGrade >= 84)
        letterGrade = "B";
    else if (finalGrade >= 80)
        letterGrade = "B-";
    else if (finalGrade >= 77)
        letterGrade = "C+";
    else if (finalGrade >= 74)
        letterGrade = "C";
    else if (finalGrade >= 70)
        letterGrade = "C-";
    else if (finalGrade >= 67)
        letterGrade = "D+";
    else if (finalGrade >= 64)
        letterGrade = "D";
    else if (finalGrade >= 60)
        letterGrade = "D-";
    else
        letterGrade = "E";

    alert("Final grade = " + finalGrade + "% with a letter grade of: " + letterGrade);
});

function defaultvalues() {
    document.getElementById("assignments").value = 95;
    document.getElementById("quizzes").value = 95;
    document.getElementById("groupprojects").value = 95;
    document.getElementById("exams").value = 95;
    document.getElementById("intex").value = 95;
}