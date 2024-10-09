const conjunctions = [
    { conjunction: "Therefore", meaning: "결과" },
    { conjunction: "Thus", meaning: "결과" },
    { conjunction: "Hence", meaning: "결과" },
    { conjunction: "So", meaning: "결과" },
    { conjunction: "As a result", meaning: "결과" },
    { conjunction: "Consequently", meaning: "결과" },
    { conjunction: "As a consequence", meaning: "결과" },
    { conjunction: "Accordingly", meaning: "결과" },

    { conjunction: "As", meaning: "원인" },
    { conjunction: "Because", meaning: "원인" },
    { conjunction: "Since", meaning: "원인" },
    { conjunction: "For", meaning: "원인" },
    { conjunction: "Owing to", meaning: "원인" },
    { conjunction: "Due to", meaning: "원인" },
    { conjunction: "On account of", meaning: "원인" },

    { conjunction: "But", meaning: "역접, 대조" },
    { conjunction: "However", meaning: "역접, 대조" },
    { conjunction: "On the other hand", meaning: "역접, 대조" },
    { conjunction: "In contrast", meaning: "역접, 대조" },
    { conjunction: "By contrast", meaning: "역접, 대조" },
    { conjunction: "In comparison", meaning: "역접, 대조" },
    { conjunction: "Conversely", meaning: "역접, 대조" },
    { conjunction: "Contrarily", meaning: "역접, 대조" },
    { conjunction: "On the contrary", meaning: "역접, 대조" },
    { conjunction: "Yet", meaning: "역접, 대조" },
    { conjunction: "Still", meaning: "역접, 대조" },
    { conjunction: "Nevertheless", meaning: "역접, 대조" },
    { conjunction: "Nonetheless", meaning: "역접, 대조" },
    { conjunction: "Rather", meaning: "역접, 대조" },
    { conjunction: "Instead", meaning: "역접, 대조" },
    { conjunction: "Otherwise", meaning: "역접, 대조" },
    { conjunction: "Alternatively", meaning: "역접, 대조" },

    { conjunction: "For example", meaning: "예시" },
    { conjunction: "For instance", meaning: "예시" },

    { conjunction: "Compared with", meaning: "비교" },
    { conjunction: "Compared to", meaning: "비교" },
    { conjunction: "In comparison to", meaning: "비교" },

    { conjunction: "Similarly", meaning: "유사" },
    { conjunction: "Likewise", meaning: "유사" },
    { conjunction: "In the same way", meaning: "유사" },
    { conjunction: "In the same manner", meaning: "유사" },

    { conjunction: "So that", meaning: "목적" },
    { conjunction: "In order that", meaning: "목적" },
    { conjunction: "In order to", meaning: "목적" },
    { conjunction: "So as to", meaning: "목적" },
    { conjunction: "For the purpose of", meaning: "목적" },
    { conjunction: "For the sake of", meaning: "목적" },

    { conjunction: "Also", meaning: "첨가, 열거, 보강" },
    { conjunction: "Besides", meaning: "첨가, 열거, 보강" },
    { conjunction: "Additionally", meaning: "첨가, 열거, 보강" },
    { conjunction: "In addition", meaning: "첨가, 열거, 보강" },
    { conjunction: "Moreover", meaning: "첨가, 열거, 보강" },
    { conjunction: "Furthermore", meaning: "첨가, 열거, 보강" },
    { conjunction: "What's more", meaning: "첨가, 열거, 보강" },
    { conjunction: "On top of that", meaning: "첨가, 열거, 보강" },

    { conjunction: "In conclusion", meaning: "요약" },
    { conjunction: "Briefly", meaning: "요약" },
    { conjunction: "In brief", meaning: "요약" },
    { conjunction: "In short", meaning: "요약" },
    { conjunction: "To sum up", meaning: "요약" },
    { conjunction: "To summarize", meaning: "요약" },
    { conjunction: "In a nutshell", meaning: "요약" },
    { conjunction: "In a word", meaning: "요약" },
    { conjunction: "In summary", meaning: "요약" },

    { conjunction: "Ultimately", meaning: "결말" },
    { conjunction: "Essentially", meaning: "결말" },
    { conjunction: "Eventually", meaning: "결말" },
    { conjunction: "Finally", meaning: "결말" },
    { conjunction: "At last", meaning: "결말" },
    { conjunction: "In the end", meaning: "결말" },

    { conjunction: "First of all", meaning: "강조" },
    { conjunction: "Above all", meaning: "강조" },
    { conjunction: "Most of all", meaning: "강조" },
    { conjunction: "First and foremost", meaning: "강조" },
    { conjunction: "In the first place", meaning: "강조" },
    { conjunction: "In particular", meaning: "강조" },
    { conjunction: "Indeed", meaning: "강조" },
    { conjunction: "In fact", meaning: "강조" },
    { conjunction: "In effect", meaning: "강조" },

    { conjunction: "When it comes to", meaning: "관해서" },
    { conjunction: "About", meaning: "관해서" },
    { conjunction: "Concerning", meaning: "관해서" },
    { conjunction: "Regarding", meaning: "관해서" },
    { conjunction: "As regards", meaning: "관해서" },
    { conjunction: "In regard to", meaning: "관해서" },
    { conjunction: "In respect of", meaning: "관해서" },

    { conjunction: "Regardless of", meaning: "관련없이" },
    { conjunction: "Irrespective of", meaning: "관련없이" },
    { conjunction: "Apart from", meaning: "관련없이" },
    { conjunction: "Aside from", meaning: "관련없이" },
    { conjunction: "With no regard to", meaning: "관련없이" },

    { conjunction: "That is", meaning: "재진술, 강조 부연설명" },
    { conjunction: "That is to say", meaning: "재진술, 강조 부연설명" },
    { conjunction: "Namely", meaning: "재진술, 강조 부연설명" },
    { conjunction: "In other words", meaning: "재진술, 강조 부연설명" }
];

const meanings = [
    "결과", "원인", "역접, 대조", "예시", "유사", "목적", "첨가",
    "요약", "결말", "강조", "관해서", "관련없이", "부연설명"
];

let correctMeaning = '';

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
    if (selectedMeaning === correctMeaning) {
        button.classList.add('btn-success');
    } else {
        button.classList.add('btn-danger');
        const correctButton = Array.from(document.querySelectorAll('button')).find(btn => btn.textContent === correctMeaning);
        correctButton.classList.add('btn-success');
    }

    // 2초 후에 다음 문제를 생성
    setTimeout(() => {
        button.classList.remove('btn-success', 'btn-danger'); // 버튼 색상 초기화
        generateQuiz();
    }, 2000);
}
