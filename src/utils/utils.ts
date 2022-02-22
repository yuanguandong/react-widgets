/**
 *复制字符串到系统剪切板
 *
 * @param {*} str
 */
 export const copy = (str: string) => {
  var save = function (e: any) {
    e.clipboardData.setData('text/plain', str);
    e.preventDefault(); //阻止默认行为
  };
  document.addEventListener('copy', save);
  document.execCommand('copy');
  setTimeout(() => {
    document.removeEventListener('copy', save);
  }, 1000);
};