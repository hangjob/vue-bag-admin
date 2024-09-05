function getIcons(ctx, icon) {
    if(!ctx.radash.isString(icon)){
        return icon
    }
    for (const iconsKey in ctx.icons) {
        if (ctx.icons[iconsKey].name === icon) {
            return icon ? ctx.helpers.renderIcon(ctx.icons[iconsKey]) : null
        }
    }
}


export {
    getIcons
}

