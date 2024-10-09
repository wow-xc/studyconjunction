const conjunctions = [
    { conjunction: "Therefore", meaning: "결과적으로" },
    { conjunction: "Thus", meaning: "결과적으로" },
    { conjunction: "Hence", meaning: "결과적으로" },
    { conjunction: "So", meaning: "그래서" },
    { conjunction: "As a result", meaning: "그 결과" },
    { conjunction: "Consequently", meaning: "결과적으로" },
    { conjunction: "As a consequence", meaning: "그 결과" },
    { conjunction: "Accordingly", meaning: "따라서" },

    { conjunction: "As", meaning: "때문에" },
    { conjunction: "Because", meaning: "왜냐하면" },
    { conjunction: "Since", meaning: "왜냐하면" },
    { conjunction: "For", meaning: "왜냐하면" },
    { conjunction: "Owing to", meaning: "~때문에" },
    { conjunction: "Due to", meaning: "~로 인해" },
    { conjunction: "On account of", meaning: "~로 인해" },

    { conjunction: "But", meaning: "하지만" },
    { conjunction: "However", meaning: "그러나" },
    { conjunction: "On the other hand", meaning: "반면에" },
    { conjunction: "In contrast", meaning: "대조적으로" },
    { conjunction: "By contrast", meaning: "대조적으로" },
    { conjunction: "In comparison", meaning: "비교적으로" },
    { conjunction: "Conversely", meaning: "반대로" },
    { conjunction: "Contrarily", meaning: "반대로" },
    { conjunction: "On the contrary", meaning: "오히려" },
    { conjunction: "Yet", meaning: "그럼에도 불구하고" },
    { conjunction: "Still", meaning: "여전히" },
    { conjunction: "Nevertheless", meaning: "그럼에도 불구하고" },
    { conjunction: "Nonetheless", meaning: "그럼에도 불구하고" },
    { conjunction: "Rather", meaning: "오히려" },
    { conjunction: "Instead", meaning: "대신에" },
    { conjunction: "Otherwise", meaning: "그렇지 않으면" },
    { conjunction: "Alternatively", meaning: "대안으로" },

    { conjunction: "For example", meaning: "예를 들어" },
    { conjunction: "For instance", meaning: "예를 들어" },

    { conjunction: "Compared with", meaning: "~와 비교했을 때" },
    { conjunction: "Compared to", meaning: "~에 비해" },
    { conjunction: "In comparison to", meaning: "~에 비해" },

    { conjunction: "Similarly", meaning: "마찬가지로" },
    { conjunction: "Likewise", meaning: "마찬가지로" },
    { conjunction: "In the same way", meaning: "같은 방식으로" },
    { conjunction: "In the same manner", meaning: "같은 방식으로" },

    { conjunction: "So that", meaning: "~하기 위해" },
    { conjunction: "In order that", meaning: "~하기 위해" },
    { conjunction: "In order to", meaning: "~하기 위해" },
    { conjunction: "So as to", meaning: "~하기 위해" },
    { conjunction: "For the purpose of", meaning: "~의 목적으로" },
    { conjunction: "For the sake of", meaning: "~을 위하여" },

    { conjunction: "Also", meaning: "또한" },
    { conjunction: "Besides", meaning: "게다가" },
    { conjunction: "Additionally", meaning: "추가로" },
    { conjunction: "In addition", meaning: "게다가" },
    { conjunction: "Moreover", meaning: "게다가" },
    { conjunction: "Furthermore", meaning: "더 나아가" },
    { conjunction: "What's more", meaning: "더 나아가" },
    { conjunction: "On top of that", meaning: "더 나아가" },

    { conjunction: "In conclusion", meaning: "결론적으로" },
    { conjunction: "Briefly", meaning: "간단히" },
    { conjunction: "In brief", meaning: "간단히" },
    { conjunction: "In short", meaning: "요약하자면" },
    { conjunction: "To sum up", meaning: "요약하자면" },
    { conjunction: "To summarize", meaning: "요약하자면" },
    { conjunction: "In a nutshell", meaning: "간단히 말하자면" },
    { conjunction: "In a word", meaning: "한 마디로" },
    { conjunction: "In summary", meaning: "요약하자면" },

    { conjunction: "Ultimately", meaning: "궁극적으로" },
    { conjunction: "Essentially", meaning: "본질적으로" },
    { conjunction: "Eventually", meaning: "결국" },
    { conjunction: "Finally", meaning: "마침내" },
    { conjunction: "At last", meaning: "마침내" },
    { conjunction: "In the end", meaning: "결국" },

    { conjunction: "First of all", meaning: "우선" },
    { conjunction: "Above all", meaning: "무엇보다도" },
    { conjunction: "Most of all", meaning: "무엇보다도" },
    { conjunction: "First and foremost", meaning: "무엇보다도" },
    { conjunction: "In the first place", meaning: "우선" },
    { conjunction: "In particular", meaning: "특히" },
    { conjunction: "Indeed", meaning: "사실" },
    { conjunction: "In fact", meaning: "사실" },
    { conjunction: "In effect", meaning: "사실상" },

    { conjunction: "When it comes to", meaning: "~에 관해서" },
    { conjunction: "About", meaning: "~에 관해서" },
    { conjunction: "Concerning", meaning: "~에 관해서" },
    { conjunction: "Regarding", meaning: "~에 관해서" },
    { conjunction: "As regards", meaning: "~에 관해서" },
    { conjunction: "In regard to", meaning: "~에 관해서" },
    { conjunction: "In respect of", meaning: "~에 관해서" },

    { conjunction: "Regardless of", meaning: "~와 상관없이" },
    { conjunction: "Irrespective of", meaning: "~와 상관없이" },
    { conjunction: "Apart from", meaning: "~을 제외하고" },
    { conjunction: "Aside from", meaning: "~을 제외하고" },
    { conjunction: "With no regard to", meaning: "~에 상관없이" },

    { conjunction: "That is", meaning: "즉" },
    { conjunction: "That is to say", meaning: "즉" },
    { conjunction: "Namely", meaning: "즉" },
    { conjunction: "In other words", meaning: "다시 말해" }
];


const meanings = [
    "결과적으로", "그래서", "그 결과", "따라서", "~때문에", 
    "왜냐하면", "~로 인해", "하지만", "그러나", "반면에", 
    "대조적으로", "비교적으로", "반대로", "오히려", "그럼에도 불구하고", 
    "여전히", "대신에", "그렇지 않으면", "대안으로", "예를 들어", 
    "~와 비교했을 때", "~에 비해", "마찬가지로", "같은 방식으로", 
    "~하기 위해", "~의 목적으로", "~을 위하여", "또한", "게다가", 
    "추가로", "더 나아가", "결론적으로", "간단히", "요약하자면", 
    "한 마디로", "궁극적으로", "본질적으로", "결국", "마침내", 
    "우선", "무엇보다도", "특히", "사실", "즉", "다시 말해", 
    "~에 관해서", "~와 상관없이", "~을 제외하고"
];


let totalQuestions = 0;
let correctAnswers = 0;

document.getElementById('start-btn').addEventListener('click', startQuiz);
document.getElementById('stop-btn').addEventListener('click', stopQuiz);

function startQuiz() {
    document.getElementById('start-page').classList.add('d-none');
    document.getElementById('quiz-page').classList.remove('d-none');
    generateQuiz();
}

function stopQuiz() {
    document.getElementById('quiz-page').classList.add('d-none');
    document.getElementById('start-page').classList.remove('d-none');
    totalQuestions = 0;  // 문제 수 초기화
    correctAnswers = 0;  // 맞춘 문제 수 초기화
    updateCorrectRate();  // 정답률 초기화
}

function updateCorrectRate() {
    const rate = totalQuestions === 0 ? 0 : Math.round((correctAnswers / totalQuestions) * 100);
    document.getElementById('correct-rate').textContent = `정답률: ${rate}%`;
    document.getElementById('score').textContent = `${correctAnswers} / ${totalQuestions}`;
}

function generateQuiz() {
    const randomConjunction = conjunctions[Math.floor(Math.random() * conjunctions.length)];
    document.getElementById('conjunction-text').textContent = randomConjunction.conjunction;
    correctMeaning = randomConjunction.meaning;

    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';

    // 랜덤 의미를 선택하여 중복 방지
    const shuffledMeanings = meanings.sort(() => 0.5 - Math.random()).slice(0, 4);
    if (!shuffledMeanings.includes(correctMeaning)) {
        shuffledMeanings[Math.floor(Math.random() * 4)] = correctMeaning; // 정답을 포함시키기
    }

    shuffledMeanings.forEach(meaning => {
        const button = document.createElement('button');
        button.textContent = meaning;
        button.classList.add('btn', 'btn-outline-secondary', 'm-2');
        button.onclick = () => handleAnswer(button, meaning);
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(button, selectedMeaning) {
    totalQuestions++;  // 총 문제 수 증가

    if (selectedMeaning === correctMeaning) {
        correctAnswers++;  // 맞춘 문제 수 증가
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-success');
    } else {
        button.classList.remove('btn-outline-secondary');
        button.classList.add('btn-danger');
        const correctButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === correctMeaning);
        correctButton.classList.remove('btn-outline-secondary');
        correctButton.classList.add('btn-success');
    }

    updateCorrectRate();  // 정답률 업데이트

    // 2초 후에 다음 문제를 생성
    setTimeout(() => {
        button.classList.remove('btn-success', 'btn-danger');
        button.classList.add('btn-outline-secondary');
        generateQuiz();
    }, 2000);
}
