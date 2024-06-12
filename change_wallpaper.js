
function change_wallpaper() {    
    var div = document.body;
    var timestamp = new Date().getTime();  // 获取当前时间戳
    var imageURL = 'https://bing.img.run/rand_uhd.php?' + timestamp;  // 将时间戳附加到URL末尾

    var img = new Image();
    img.onload = function() {
        div.style.backgroundImage = "url('" + imageURL + "')";  // 设置背景图片为新图片
    }
    img.src = imageURL;  // 加载新图片
}

