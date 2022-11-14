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

/********** Large devices only **********/
@media(min - width: 992px) {
    .col - lg - 4 {
        float: left;
        width: 33.33 %;
    }
}
/********** Medium devices only **********/
@media(min - width: 768px) and(max - width: 991px) {
    .col - md - 6,.col - md - 12 {
        float: left;
    }
    .col - md - 6 {
        width: 50 %;
    }
    .col - md - 12 {
        margin - left: -10px;
        width: 100 %;
    }
    .name3{
        margin - right: 65px;
        width: 100px;
    }
}

@media(min - width: 0px) and(max - width: 767px) {
    .col - sm - 12 {
        float: left;
        width: 100 %;
    }
    .content - name{
        margin - right: 30px;
    }
}