// 定义了一些用于调整设置的函数。
/*随机壁纸接口：https://bing.img.run/rand_uhd.php? bing每日壁纸
https://t.mwm.moe/pc 二次元美图
https://t.mwm.moe/fj 二次元风景
https://api.paugram.com/wallpaper/ 纯色背景
http://www.98qy.com/sjbz/api.php 随机壁纸1
https://imgapi.xl0408.top/index.php 随机壁纸2

*/
var papersource = new Array(
  "https://bing.img.run/rand_uhd.php?",
  "https://t.mwm.moe/pc",
  "https://t.mwm.moe/fj",
  "https://api.paugram.com/wallpaper/",
  "http://www.98qy.com/sjbz/api.php",
  "https://imgapi.xl0408.top/index.php"
);
function change_wallpaper() {
  var div = document.body;
  let index = Number(localStorage.getItem("papermirror"));
  if (index == 0) {
    //用bing壁纸
    var timestamp = new Date().getTime(); // 获取当前时间戳
    var imageURL = papersource[index] + timestamp; // 将时间戳附加到URL末尾
  } else {
    var imageURL = papersource[index];
  }
  img = new Image();
  div.style.backgroundImage =
    "url('" + imageURL + "?" + Math.random() * 5 + "')"; // 设置背景图片为新图片)";  // 设置背景图片为新图片
  img.src = imageURL; // 加载新图片
}