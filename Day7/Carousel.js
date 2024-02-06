let images = Array.from(document.querySelectorAll('#carousel img'));
let current = 0;
let prevButton = document.querySelector('#prev');
let nextButton = document.querySelector('#next');
let dots = []; // dot elements를 저장하기 위한 배열

function hideImage(index) {

    images[index].classList.remove('active');
    dots[index].classList.remove('active'); // 해당 dot을 비활성화
}

function showImage(index) {

    images[index].classList.add('active');
    dots[index].classList.add('active'); // 해당 dot을 활성화
}


// 점(dot) 생성
for (let i = 0; i < images.length; i++) {
    let dot = document.createElement('span');
    dot.addEventListener('click', () => { // dot을 클릭했을 때 해당 이미지로 이동
        if (i != current) { // 현재 이미지가 아닐 때만 처리
            hideImage(current);
            current = i;
            showImage(current);
        }
    });
    document.querySelector('#dots').appendChild(dot);
    dots.push(dot); // 생성된 dot을 배열에 추가
}

function updateButtons() {
    prevButton.disabled = current === 0; // 첫 번째 이미지면 이전 버튼 비활성화
    nextButton.disabled = current === images.length - 1; // 마지막 이미지면 다음 버튼 비활성화
}

// 초기 이미지 보여주기
showImage(current);
updateButtons(); // 초기 버튼 상태 설정

// 이전 이미지 버튼 기능
prevButton.addEventListener('click', () => {
    if (prevButton.disabled) return;
    hideImage(current);
    current = (current - 1 + images.length) % images.length;
    showImage(current);
    updateButtons(); // 버튼 상태 업데이트
});

// 다음 이미지 버튼 기능
nextButton.addEventListener('click', () => {
    if (nextButton.disabled) return;
    hideImage(current);
    current = (current + 1) % images.length;
    showImage(current);
    updateButtons(); // 버튼 상태 업데이트
});

// 자동 슬라이드 기능
setInterval(() => {
    hideImage(current);
    current = (current + 1) % images.length;
    showImage(current);
    updateButtons(); // 버튼 상태 업데이트
}, 2000); // 2초마다 실행