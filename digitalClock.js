const timeDiv = document.getElementById("time")

function getTime() {
    let now = new Date();
    let hour = formatNumber(now.getHours());
    let minute = formatNumber(now.getMinutes());
    let second = formatNumber(now.getSeconds());
    let noon = "AM";
    let month = now.getMonth();
    let date = formatNumber(now.getDate());
    let day = now.getDay();

    month = month + 1

    if(day == 1) {
        day = "월";
    }
    else if(day == 2) {
        day = "화";
    }
    else if(day == 3) {
        day = "수";
    }
    else if(day == 4) {
        day = "목";
    }
    else if(day == 5) {
        day = "금";
    }
    else if(day == 6) {
        day = "토";
    }
    else if(day == 0) {
        day = "일";
    }
    else if(day == 7) {
        day = "일";
    }

    if(hour > 12) {
        hour = hour - 12;
        noon = "PM";
    }

    timeDiv.textContent = now.getFullYear() + "년 " + month + "월 " + now.getDate() + "일 " + day + "요일 " + noon + " " + hour + ":" + minute + ":" + second;
}

getTime();
setInterval(getTime,1000);

function formatNumber(number) {
    if(number < 10) {
        return "0" + number;
    }
    return number;
}