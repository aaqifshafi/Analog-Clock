setInterval(() => {
    d = new Date();
    hh = d.getHours();
    mm = d.getMinutes();
    ss = d.getSeconds();

    hourRotate = 30 * hh + mm / 2;
    minRotate = 6 * mm;
    secRotate = 6 * ss;
    hour.style.transform = `rotate(${hourRotate}deg)`;
    minute.style.transform = `rotate(${minRotate}deg)`;
    second.style.transform = `rotate(${secRotate}deg)`;
}, 1000);
