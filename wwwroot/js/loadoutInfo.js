var submit = document.getElementById("submitButton");

submit.addEventListener("click", function () {
    alert("Primary:  " + document.getElementById("primary").value + ", Secondary:  " +
        document.getElementById("secondary").value + ", Lethal:  " + document.getElementById("lethal").value +
        ", Misc Comments:  " + document.getElementById("misc").value);
});