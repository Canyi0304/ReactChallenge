let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let memos = {};

function drawCalendar(year, month) {
    let firstDate = new Date(year, month, 1);
    let lastDate = new Date(year, month + 1, 0);
    let firstDay = firstDate.getDay();
    let lastDay = lastDate.getDay();
    
    let calendar = document.getElementById('dates');
    calendar.innerHTML = '';
    
    for(let i = 0; i < firstDay; i++) {
        let emptyDate = document.createElement('div');
        calendar.appendChild(emptyDate);
    }
    
    for(let i = 1; i <= lastDate.getDate(); i++) {
        let date = document.createElement('div');
        date.className = 'date';
        date.innerText = i;
        
        if(memos[`${year}-${month}-${i}`]) {
            date.classList.add('memo');
        }
        
        date.addEventListener('click', function() {
            document.getElementById('calendar').style.display = 'none';
            document.getElementById('memo').style.display = 'block';
            document.getElementById('selectedDate').innerText = `${year}년 ${month + 1}월 ${i}일`;
            document.getElementById('memoInput').value = memos[`${year}-${month}-${i}`] || '';
        });
        
        calendar.appendChild(date);
    }
    
    document.getElementById('monthDisplay').innerText = `${year}년 ${month + 1}월`;
}

drawCalendar(year, month);

document.getElementById('prevBtn').addEventListener('click', function() {
    if(month === 0) {
        year--;
        month = 11;
    } else {
        month--;
    }
    
    drawCalendar(year, month);
});

document.getElementById('nextBtn').addEventListener('click', function() {
    if(month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }
    
    drawCalendar(year, month);
});

document.getElementById('saveBtn').addEventListener('click', function() {
    let selectedDate = document.getElementById('selectedDate').innerText;
    let [year, month, day] = selectedDate.split(' ').map((word) => word.slice(0, -1));
    let memo = document.getElementById('memoInput').value;
    
    memos[`${year}-${month - 1}-${day}`] = memo;
    
    document.getElementById('calendar').style.display = 'block';
    document.getElementById('memo').style.display = 'none';
    
    drawCalendar(year, month - 1);
});
