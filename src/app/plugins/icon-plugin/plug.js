import {
    BookOutline,
    PersonOutline,
    WineOutline,
} from '@vicons/ionicons5'

const icons = [BookOutline, PersonOutline, WineOutline]


function getIcons(ctx, icon) {
    for (const iconsKey in icons) {
        if (icons[iconsKey].name === icon) {
            return icon ? ctx.helpers.renderIcon(icons[iconsKey]) : null
        }
    }
}


export {
    getIcons
}

