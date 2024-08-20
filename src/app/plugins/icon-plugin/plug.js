import {
    BookOutline,
    PersonOutline,
    WineOutline,
} from '@vicons/ionicons5'
import {isString} from "radash"

const icons = [BookOutline, PersonOutline, WineOutline]


function getIcons(ctx, icon) {
    if(!isString(icon)){
        return icon
    }
    for (const iconsKey in icons) {
        if (icons[iconsKey].name === icon) {
            return icon ? ctx.helpers.renderIcon(icons[iconsKey]) : null
        }
    }
}


export {
    getIcons
}

