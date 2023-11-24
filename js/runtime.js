setInterval(() => {
    let create_time = Math.round(new Date('2023-07-28 00:00:00').getTime() / 1000); //在此行修改建站时间
    let timestamp = Math.round((new Date().getTime()) / 1000);
    let second = timestamp - create_time;
    let time = new Array(0, 0, 0, 0, 0);

    var nol = function (h) {
        return h > 9 ? h : '0' + h;
    }
    if (second >= 365 * 24 * 3600) {
        time[0] = parseInt(second / (365 * 24 * 3600));
        second %= 365 * 24 * 3600;
    }
    if (second >= 24 * 3600) {
        time[1] = parseInt(second / (24 * 3600));
        second %= 24 * 3600;
    }
    if (second >= 3600) {
        time[2] = nol(parseInt(second / 3600));
        second %= 3600;
    }
    if (second >= 60) {
        time[3] = nol(parseInt(second / 60));
        second %= 60;
    }
    if (second > 0) {
        time[4] = nol(second);
    }
    if ((Number(time[2]) < 22) && (Number(time[2]) > 7)) {
        currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/Alan&屋-摸鱼中-6adea8?style=social&logo=cakephp' title='距离百年老店也就差不到一百年~'><div id='runtime'>😎💖本站已经运行了:" + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    else {
        currentTimeHtml = "<img class='boardsign' src='https://img.shields.io/badge/Alan&屋-安眠中-6adea8?style=social&logo=coffeescript' title='这个点了应该去睡觉啦，晚安好梦~'><div id='runtime'>😎💖本站已经运行了:" + time[0] + ' 年 ' + time[1] + ' 天 ' + time[2] + ' : ' + time[3] + ' : ' + time[4] + '</div>';
    }
    document.getElementById("workboard").innerHTML = currentTimeHtml;
}, 1000);