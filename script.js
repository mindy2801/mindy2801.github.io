function showOptions() {
    var questionType = document.getElementById("questionType").value;
    var mcqOptions = document.getElementById("multipleChoiceOptions");
    var essayOptions = document.getElementById("essayOptions");

    if (questionType === "multipleChoice") {
        mcqOptions.style.display = "block";
        essayOptions.style.display = "none";
    } else if (questionType === "essay") {
        mcqOptions.style.display = "none";
        essayOptions.style.display = "block";
    }
}

function submitQuestion() {
    var questionType = document.getElementById("questionType").value;
    var question = document.getElementById("question").value;
    var mcqChoices = document.getElementById("mcqChoices").value;
    var modelAnswer = document.getElementById("modelAnswer").value;
    var gradingCriteria = document.getElementById("gradingCriteria").value;

    console.log("문제 타입:", questionType);
    console.log("문제:", question);

    if (questionType === "multipleChoice") {
        console.log("객관식 선택지:", mcqChoices);
    } else if (questionType === "essay") {
        console.log("모범답안:", modelAnswer);
        console.log("채점 기준:", gradingCriteria);
    }

    // 여기에 추가적인 로직을 넣어서 문제를 관리하거나 서버에 저장할 수 있습니다.
}
