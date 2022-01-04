module.exports = app => {
    const {validator} = app;
    validator.addRule('userName', (rule, value) => {
        if (/^\d+$/.test(value)) {
            return {
                state: 0
            };
        } else if (value.length < 6 || value.length > 20) {
            return {
                state: 1,
                msg: '用户名的长度应该在6-20之间'
            };
        }
    });
};
