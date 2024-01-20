// 문제 배열을 저장할 전역 변수
var questionsArray = [];

// 문제 타입에 따라 입력 폼을 동적으로 표시/숨김하는 함수
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

// 문제 출제 함수 수정
function submitQuestion() {
    var questionType = document.getElementById("questionType").value;
    var question = document.getElementById("question").value;
    var mcqChoices = document.getElementById("mcqChoices").value;
    var modelAnswer = document.getElementById("modelAnswer").value;
    var gradingCriteria = document.getElementById("gradingCriteria").value;

    // 새로운 문제 객체 생성
    var newQuestion = {
        questionType: questionType,
        question: question,
        mcqChoices: mcqChoices,
        modelAnswer: modelAnswer,
        gradingCriteria: gradingCriteria
    };

    // 생성한 문제를 배열에 추가
    questionsArray.push(newQuestion);

    // 문제 배열을 로컬 스토리지에 저장
    saveQuestionsToLocalStorage();

    // 문제 목록 갱신
    updateQuestionList();

    // 디버깅을 위해 콘솔에 출력
    console.log("새로운 문제가 추가되었습니다:", newQuestion);

    // 추가적인 로직을 넣어서 문제를 관리하거나 서버에 저장할 수 있습니다.
}

// 문제 목록 갱신 함수
function updateQuestionList() {
    var questionsUl = document.getElementById("questionsUl");
    questionsUl.innerHTML = ""; // 기존 목록 초기화

    // 각 문제에 대해 목록에 추가
    questionsArray.forEach(function (question, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>문제 ${index + 1}</strong>: ${question.question}
            <button onclick="editQuestion(${index})">수정</button>
        `;
        questionsUl.appendChild(listItem);
    });
}

// 문제 수정 함수
function editQuestion(index) {
    var question = questionsArray[index];

    // 수정 폼에 기존 데이터로 채우기
    document.getElementById("questionType").value = question.questionType;
    document.getElementById("question").value = question.question;

    if (question.questionType === "multipleChoice") {
        document.getElementById("mcqChoices").value = question.mcqChoices;
    } else if (question.questionType === "essay") {
        document.getElementById("modelAnswer").value = question.modelAnswer;
        document.getElementById("gradingCriteria").value = question.gradingCriteria;
    }

    // 문제 목록 갱신
    updateQuestionList();
}

// 로컬 스토리지에 문제 배열을 저장하는 함수
function saveQuestionsToLocalStorage() {
    localStorage.setItem('questions', JSON.stringify(questionsArray));
}

// 페이지 로드 시 로컬 스토리지에서 문제 배열을 가져오는 함수
function loadQuestionsFromLocalStorage() {
    var storedQuestions = localStorage.getItem('questions');
    if (storedQuestions) {
        questionsArray = JSON.parse(storedQuestions);
    }
}

// 페이지 로드 시 로컬 스토리지에서 문제 배열을 가져옴
loadQuestionsFromLocalStorage();
// 문제 목록 초기화
updateQuestionList();
