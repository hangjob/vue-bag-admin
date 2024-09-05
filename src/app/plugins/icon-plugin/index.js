import {getIcons} from "@/app/plugins/icon-plugin/plug.js";
import {
    BookOutline,
    PersonOutline,
    WineOutline,
} from '@vicons/ionicons5'

const icons = [BookOutline, PersonOutline, WineOutline]

export default class IconPlugin {

    constructor() {
        this.name = 'IconPlugin'
        this._enable = false
    }

    install({ctx}, options) {
        this._enable = true;
        ctx.icons = Object.assign(icons, options?.icons || {})
        ctx.helpers.getIcons = getIcons
    }

    disable() {
        this._enable = false;
    }

    enable() {
        this._enable = true;
    }

    destroy() {
    }

    inEnabled() {
        return this._enable
    }
}

export const useIconPlugin = new IconPlugin()
