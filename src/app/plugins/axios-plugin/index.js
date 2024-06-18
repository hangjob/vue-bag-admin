export default class AxiosPlugin {

    constructor() {
        this.name = 'AxiosPlugin'
        this._enable = false
    }

    install(options) {
        console.log(`${this.name}安装了`);
        this._enable = true;
    }

    disable() {
        console.log(`${this.name}被禁用了`);
        this._enable = false;
    }

    enable() {
        console.log(`${this.name}启用了`);
        this._enable = true;
    }

    destroy() {
        console.log(`${this.name}要被卸载了`);
    }

    inEnabled() {
        console.log(`${this.name}目前时是${this._enable}`);
        return this._enable
    }
}

