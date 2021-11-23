// 1至20位 以字母开头，字母，数字，减号，下划线
const reg1 = /^[a-zA-Z][-_a-zA-Z0-9]{1,19}$/;

// /开头，数字和字母 组合
const reg2 = /^([\/]([a-zA-Z]+))*[0-9a-zA-Z]+$/

export {
    reg1,
    reg2
}
