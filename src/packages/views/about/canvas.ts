interface ParameItem {
    el: HTMLElement,
    userInfo: object,
    width: string | number,
    height: string | number
}

export default class UserCanvasBg {
    protected options: any;
    protected userInfo: any;
    protected ctx: any;

    protected centerX: any;
    protected centerY: any;

    constructor(parame: ParameItem) {
        this.options = {
            ...parame
        }
        this.userInfo = parame.userInfo || {};
        this.init()
    }

    init() {
        let canvas = this.options.el; // dom元素
        canvas.width = this.options.width
        canvas.height = this.options.height
        this.ctx = canvas.getContext("2d");
        this.centerX = canvas.width / 2 - 50
        this.centerY = canvas.height / 2 - 50
        this.create()
    }

    // 创建
    create() {
        this.circle()
    }

    // 绘制 圆形
    circle() {
        this.loadImage(this.userInfo.userhead, (res: any) => {
            // let solar = ['水星','金星','地球','火星','木星','土星','天王星','海王星'];
            this.line({
                lines: [{x: 30, y: 30}, {x: -100, y: -10}, {x: -200, y: -10}],
                direction: 'left',
                str: this.userInfo.username,
                size: 24
            })
            this.line({
                lines: [{x: 30, y: 30}, {x: 100, y: -10}, {x: +200, y: -10}],
                direction: 'right',
                str: this.userInfo.sex,
            })
            this.line({
                lines: [{x: 30, y: 70}, {x: -50, y: 100}, {x: -200, y: 100}],
                direction: 'left',
                str: `${this.userInfo.usertime}，留下了你的脚印`
            })

            this.line({
                lines: [{x: 100, y: 50}, {x: 100, y: 50}, {x: 300, y: 50}],
                direction: 'right',
                str: this.userInfo.userhome
            })

            this.line({
                lines: [{x: 30, y: 70}, {x: 100, y: 100}, {x: 200, y: 100}],
            })
            this.drawText({str: this.userInfo.description, x: -40, y: 106, direction: 'right'})
            this.circleImg(res)
        })
    }

    // 绘制 文本
    drawText(parame: any) {
        let {str, x, y, size, direction, color = '#fff'} = parame;
        x = this.centerX + x;
        y = this.centerY + y;
        //设置用户文本填充颜色
        this.ctx.fillStyle = color;
        //设置用户文本的大小字体等属性
        this.ctx.textAlign = direction;
        this.ctx.font = "small-caps " + size + "px Arial";
        this.ctx.fontSize = size
        //绘制文字
        if (direction === 'left') {
            x = x - this.ctx.measureText(str).width - 20
        } else {
            x = x + this.ctx.measureText(str).width + 20
        }
        this.ctx.textBaseline = 'center';
        this.ctx.wrapText(str, x, y, 400);
    }

    // 处理img下载完成后在调用drawImage https://www.zhaokeli.com/article/8018.html
    loadImage(url: string, callback: Function) {
        //创建一个Image对象，
        let img = new Image();
        img.src = url;
        // 如果图片已经存在于浏览器缓存，直接调用回调函数
        if (img.complete) {
            callback && callback(img);
            return;
        }
        //图片下载完毕时异步调用callback函数。
        img.onload = function () {
            //将回调函数的this替换为Image对象
            callback && callback(img);
        };
    }

    // 圆形
    circleImg(img: string,) {
        this.ctx.save();
        let d = 2 * 50;
        let cx = this.centerX + 50;
        let cy = this.centerY + 50;
        this.ctx.arc(cx, cy, 50, 0, 2 * Math.PI); // 画个圆
        this.ctx.clip();
        this.ctx.drawImage(img, this.centerX, this.centerY, d, d);
        this.ctx.restore();
    }

    // 绘制线条
    line(parame: any) {

        const {direction, str, size = 18, lines} = parame
        //开始一个新的绘制路径
        this.ctx.beginPath();
        //设置线条颜色为白色
        this.ctx.strokeStyle = "white";
        // 设置线条粗细
        this.ctx.lineWidth = "2"
        lines.forEach((item: any, idx: number) => {
            let x = this.centerX + item.x;
            let y = this.centerY + item.y;
            if (idx === 0) {
                this.ctx.moveTo(x, y);  //设置路径起点坐标
            } else {
                this.ctx.lineTo(x, y);  //定义终点坐标
            }
            if (idx === lines.length - 1) { // 最后一项
                this.ctx.stroke();
                //关闭绘制路径
                this.ctx.closePath();
                this.dots(x, y)
                if (str) {
                    this.drawText({str, x: item.x, y: item.y + 6, size, direction})
                }
            }
        })
    }

    // 绘制小圆点 传入坐标轴即可
    dots(x: number, y: number) {
        // 绘制边缘灰色半透明小圆点
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(226,235,250,0.2)'
        this.ctx.arc(x, y, 12, 0, 2 * Math.PI, false)
        this.ctx.closePath()
        this.ctx.fill()

        // 绘制边缘灰色半透明小圆点
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(226,235,250,0.5)'
        this.ctx.arc(x, y, 9, 0, 2 * Math.PI, false)
        this.ctx.closePath()
        this.ctx.fill()

        // 绘制边缘灰色半透明小圆点
        this.ctx.beginPath()
        this.ctx.fillStyle = 'rgba(226,235,250,0.7)'
        this.ctx.arc(x, y, 6, 0, 2 * Math.PI, false)
        this.ctx.closePath()
        this.ctx.fill()

        // 绘制小圆点
        this.ctx.beginPath()
        this.ctx.fillStyle = '#fff'
        this.ctx.arc(x, y, 3, 0, 2 * Math.PI, false)
        this.ctx.closePath()
        this.ctx.fill()
    }
}