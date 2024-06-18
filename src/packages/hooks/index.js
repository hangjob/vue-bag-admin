import closeTabBarJump from "@/packages/hooks/closeTabBarJump.js";
import cutColorTheme from "@/packages/hooks/cutColorTheme.js";

function useCloseTabBarJump(ctx) {
    return function (options) {
        closeTabBarJump(ctx, options)
    }
}

function useCutColorTheme(ctx) {
    return function (options) {
        cutColorTheme(ctx, options)
    }
}


export {
    useCloseTabBarJump,
    useCutColorTheme
}
