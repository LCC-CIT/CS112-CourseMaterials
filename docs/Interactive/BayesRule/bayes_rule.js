// Reusable function to check MCQ answers
function checkMCQAnswer(formId, correctValue) {
    var form = document.getElementById(formId);
    var radios = form.elements['mcq'];
    var feedback = document.getElementById(formId + '-feedback');
    var selected = null;
    if (radios.length) {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                selected = radios[i].value;
                break;
            }
        }
    } else {
        if (radios.checked) selected = radios.value;
    }
    if (selected === null) {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    } else if (selected === correctValue) {
        feedback.textContent = "Correct!";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "Incorrect. Try again!";
        feedback.style.color = "red";
    }
    return false; // Prevent form submission
}
