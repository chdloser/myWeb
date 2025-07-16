/* shortcut.js —— 监听 Ctrl + 1~6 触发六个引擎按钮 */
(function () {
    // 页面加载完成后执行
    window.addEventListener('DOMContentLoaded', () => {
      document.addEventListener('keydown', e => {
        if (!e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) return;
  
        const keyMap = ['1', '2', '3', '4', '5', '6']; // 对应 1-6
        const idx = keyMap.indexOf(e.key);
        if (idx === -1) return;
  
        e.preventDefault();                       // 阻止浏览器默认行为
        const btns = document.querySelectorAll('.up button'); // 六个按钮
        if (btns[idx]) btns[idx].click();         // 触发点击
      });
    });
  })();