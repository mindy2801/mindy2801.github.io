// 문제 타입에 따라 입력 폼을 동적으로 표시/숨김하는 함수
function showOptions() {
    var questionType = document.getElementById("questionType").value;
    var mcqOptions = document.getElementById("multipleChoiceOptions");
    var essayOptions = document.getElementById("essayOptions");

    // 객관식 문제인 경우
    if (questionType === "multipleChoice") {
        mcqOptions.style.display = "block";
        essayOptions.style.display = "none";
    }
    // 주관식 문제인 경우
    else if (questionType === "essay") {
        mcqOptions.style.display = "none";
        essayOptions.style.display = "block";
    }
}

// 문제 출제 함수 수정
function submitQuestion() {
    var question = document.getElementById("question").value;
    var questionType = document.getElementById("questionType").value;
    var mcqChoices = document.getElementById("mcqChoices").value;
    var modelAnswer = document.getElementById("modelAnswer").value;
    var gradingCriteria = document.getElementById("gradingCriteria").value;

    // 여기에서 새로운 문제를 처리하는 로직을 추가해야 합니다.

    // Debug: 콘솔에 출력
    console.log("Question:", question);
    console.log("Question Type:", questionType);
    console.log("MCQ Choices:", mcqChoices);
    console.log("Model Answer:", modelAnswer);
    console.log("Grading Criteria:", gradingCriteria);
}


function submitQuestion() {
    // 사용자가 입력한 문제 가져오기
    var question = document.getElementById("question").value;
    var mcq = document.getElementById("mcq").value;
    var essay = document.getElementById("essay").value;

    // ChatGPT API로 전송 및 채점 (이 부분은 실제 ChatGPT API와 연동되어야 함)
    var gradingResult = gradeQuestion(question, mcq, essay);

    // 채점 결과 표시
    displayResult(gradingResult);
}

function gradeQuestion(question, mcq, essay) {
    // 여기에서 ChatGPT API와 통신하여 채점 로직을 구현해야 합니다.
    // ChatGPT에 문제를 전송하고, 채점 결과를 받아옵니다.
    // 이 예시에서는 간단한 더미 데이터를 반환합니다.
    return {
        score: Math.random() * 100,
        feedback: "좋은 시도였습니다!"
    };
}

function displayResult(result) {
    // 채점 결과를 HTML로 표시
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<p>점수: ${result.score.toFixed(2)}</p><p>피드백: ${result.feedback}</p>`;
}
