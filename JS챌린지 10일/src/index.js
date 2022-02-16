const clockTitle = document.querySelector(".js-clock");

function getClock() {
    const xmas = new Date("2022-12-25");
    const today = new Date();

    const gaps = xmas - today;

    const gapsDay = Math.floor(gaps / (1000 * 60 * 60 * 24));
    const gapsHour = Math.floor((gaps / (1000 * 60 * 60)) % 24);
    const gapsMinute = Math.floor((gaps / (1000 * 60)) % 60);
    const gapsSecond = Math.floor((gaps / 1000)) % 60;

    clockTitle.innerText = `${gapsDay}일 ${gapsHour}시간 ${gapsMinute}분 ${gapsSecond}초`;
}


getClock();
setInterval(getClock, 1000);



