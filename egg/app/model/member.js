const dayjs = require('dayjs')
const {customAlphabet} = require('nanoid')
const nanoid = customAlphabet('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ', 22)
module.exports = app => {
    const {STRING, INTEGER, BOOLEAN, DATE} = app.Sequelize
    const Member = app.model.define('Member', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: STRING,
            comment: '姓名',
        },
        userhead: {
            type: STRING,
            comment: '用户头像',
            defaultValue:`/public/upload/image/2022-03-05/${parseInt(Math.random() * 21)}.png`
        },
        password: {
            type: STRING,
            comment: '密码',
        },
        sex: {
            type: INTEGER,
            comment: '用户性别',
            defaultValue: 1,
        },
        age: {
            type: INTEGER,
            comment: '用户年龄',
            defaultValue: 27,
        },
        email: {
            type: STRING,
            comment: '用户邮箱',
        },
        phone: {
            type: STRING,
            comment: '用户手机号',
            validate: {
                len: [3, 11],
            },
        },
        roles: {
            type: INTEGER,
            comment: '用户角色',
        },
        did: {
            type: INTEGER,
            comment: '部门id',
        },
        login_number: {
            type: INTEGER,
            comment: '登录次数',
            defaultValue: 1
        },
        bag_money: {
            type: INTEGER,
            comment: 'bag币',
            defaultValue: 100
        },
        state: {
            type: BOOLEAN,
            defaultValue: false,
            comment: '状态',
        },
        nanoid: {
            type: STRING,
            comment: 'nanoid',
            defaultValue: nanoid(),
        },
        describe: {
            type: STRING,
            comment: '描述',
            validate: {
                len: [0, 200],
            },
        },
        job: {
            type: STRING,
            comment: '职业',
        },
        birthday: {
            type: STRING,
            comment: '出生年月',
        },
        company: {
            type: STRING,
            comment: '公司名称',
        },
        address: {
            type: STRING,
            comment: '地址',
        },
        software: {
            type: STRING,
            comment: '擅长编程语言',
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
            },
            hidden: true
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY-MM-DD HH:mm:ss')
            },
            hidden: true
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_member', // 定义实际表名
    })

    Member.associate = function () {
        // sourceKey 主键为Member id
        app.model.Member.belongsTo(app.model.Branch, {
            foreignKey: 'did',
            targetKey: 'id',
            sourceKey: 'id',
            as: 'branch',
        })
        app.model.Member.hasMany(app.model.Web.Article, {
            foreignKey: 'user_id',
            sourceKey: 'id',
            as: 'article'
        })
    }
    return Member
}

