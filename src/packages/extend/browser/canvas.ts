/**
 * 自定义封装canvas文字换行
 * @param text
 * @param x
 * @param y
 * @param maxWidth 宽度 默认300
 * @param lineHeight 行高
 */
// @ts-ignore
CanvasRenderingContext2D.prototype.wrapText = function (text, x, y, maxWidth?, lineHeight?) {
    if (typeof text != 'string' || typeof x != 'number' || typeof y != 'number') {
        return;
    }

    let context = this;
    let canvas = context.canvas;

    if (typeof maxWidth == 'undefined') {
        maxWidth = (canvas && canvas.width) || 300;
    }
    if (typeof lineHeight == 'undefined') {
        lineHeight = (canvas && parseInt(window.getComputedStyle(canvas).lineHeight)) || parseInt(window.getComputedStyle(document.body).lineHeight);
    }

    // 字符分隔为数组
    let arrText = text.split('');
    let line = '';

    for (let n = 0; n < arrText.length; n++) {
        let testLine = line + arrText[n];
        let metrics = context.measureText(testLine);
        let testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = arrText[n];
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);
};