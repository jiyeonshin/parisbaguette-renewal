/*D-day 구하기*/


function getTime() {
    now = new Date();
    dday = new Date(2018, 06, 30, 00, 00, 00); // 원하는 날짜, 시간 정확하게 초단위까지 기입.
    dday2 = new Date(2018, 07, 31, 00, 00, 00); // 원하는 날짜, 시간 정확하게 초단위까지 기입.
    days = (dday - now) / 1000 / 60 / 60 / 24;
    days2 = (dday2 - now) / 1000 / 60 / 60 / 24;
    dRound = Math.floor(days);
    dRound2 = Math.floor(days2);
    /*hours = (dday - now) / 1000 / 60 / 60 - (24 * dRound);
    hRound = Math.floor(hours);
    minutes = (dday - now) / 1000 / 60 - (24 * 60 * dRound) - (60 * hRound);
    mRound = Math.floor(minutes);
    seconds = (dday - now) / 1000 - (24 * 60 * 60 * dRound) - (60 * 60 * hRound) - (60 * mRound);
    sRound = Math.round(seconds);*/

    document.getElementById("target_day").innerHTML = dRound;
    document.getElementById("target_day2").innerHTML = dRound;
    document.getElementById("target_day3").innerHTML = dRound2;
    document.getElementById("target_day4").innerHTML = dRound2;
    newtime = window.setTimeout("getTime();", 1000);
}

getTime();

