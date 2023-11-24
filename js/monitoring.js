//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    //离开当前页面时标签显示内容
    document.title = "😣走丢了";
    clearTimeout(titleTime);
  } else {
    //返回当前页面时标签显示内容
    document.title = "🤪欢迎回来" + OriginTitile;
    //两秒后变回正常标题
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});

// 设置键盘监听事件

document.addEventListener('keydown', function(event) {
    // 使用event.keyCode或event.key来检查按下的键是否是F12
    if (event.keyCode === 123 || event.key === 'F12') {
      // F12键被按下
      new Vue({
        data: function() {
            this.$notify({
            title: "你已被发现",
            message: "小伙子，扒源请遵循GPL协议！",
            position: "top-left",
            offset: 50,
            showClose: !0,
            type: "warning",
            duration: 3500
                        })
                    }
                })
    }

    // 使用event.keyCode或event.key来检查按下的键是否是C，并且同时按下了Ctrl键
  if ((event.keyCode === 67 || event.key === 'c') && event.ctrlKey) {
    // Ctrl+C组合键被按下
    new Vue({
        data: function() {
            this.$notify({
                title: "复制成功",
                message: "若要转载最好保留原文链接哦~",
                position: "top-left",
                offset: 50,
                showClose: !0,
                type: "warning",
                duration: 2500
            })
        }
    })
     }

  });

/* 控制台输出字符画 start */
var now1 = new Date();

function createtime1() {
  // var grt = new Date("28/07/2023 00:00:00"); //此处修改你的建站时间或者网站上线时间
  // now1.setTime(now1.getTime() + 250);
  // var days = (now1 - grt) / 1000 / 60 / 60 / 24;
  // var dnum = Math.floor(days);

  var ascll = [
    `欢迎来到Alan&博客!`,
    "©2023 By Alan",
  ];

  setTimeout(
    console.log.bind(
      console,
      `\n%c${ascll[0]} %c ${ascll[1]}\n`,
      "color:#39c5bb",
      "",
    )
  );
}

createtime1();

function createtime2() {
  setTimeout(console.log.bind(console, "%c W23-12 %c 系统监测到你已打开控制台", "color:white; background-color:#4f90d9", ""));
  setTimeout(
    console.warn.bind(console, "%c S013-782 %c 你现在正处于监控中", "color:white; background-color:#d9534f", "")
  );
}
createtime2();

// 重写console方法
console.log = function () { };
console.error = function () { };
console.warn = function () { };

/* 控制台输出字符画 end */

