function checkFull() {
    // @ts-ignore
    let isFull = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
    return Boolean(isFull);
}

function requestFullScreen(element?: any) {
    if (!element) {
        element = document.body;
    }
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

function exitFullScreen() {
    const _document: any = document; // 以免编辑器报红
    if (_document.cancelFullScreen) {
        _document.cancelFullScreen();
    } else if (_document.mozCancelFullScreen) {
        _document.mozCancelFullScreen();
    } else if (_document.webkitCancelFullScreen) {
        _document.webkitCancelFullScreen();
    } else if (_document.msExitFullscreen) {
        _document.msExitFullscreen()
    }
}


function switchScreen() {
    let full = checkFull();
    if (full) {
        exitFullScreen();
    } else {
        requestFullScreen();
    }
}

// 兼容监听浏览器事件
function fullscreenchange(handle: Function) {
    const _document: any = document; // 以免编辑器报红
    _document.addEventListener('fullscreenchange', handle);
    _document.addEventListener('webkitfullscreenchange', handle);
    _document.addEventListener('mozfullscreenchange', handle);
    _document.addEventListener('MSFullscreenChange', handle);
}

export {
    switchScreen,
    checkFull,
    fullscreenchange
}