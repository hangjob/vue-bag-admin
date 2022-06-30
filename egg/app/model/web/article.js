const dayjs = require('dayjs')
module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, TEXT } = app.Sequelize
    const Article = app.model.define('Article', {
        id: {
            type: INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: INTEGER,
            comment: '用户id',
            set(value) {
                if (value) {
                    this.setDataValue('user_id', value)
                } else {
                    this.setDataValue('user_id', 1)
                }
            },
        },
        channel_id: {
            type: INTEGER,
            comment: '栏目id',
            set(value) {
                if (value) {
                    this.setDataValue('channel_id', value)
                } else {
                    this.setDataValue('channel_id', 1)
                }
            },
        },
        image: {
            type: STRING,
            comment: '封面图',
        },
        images: {
            type: STRING,
            comment: '组图',
        },
        images_type: {
            type: INTEGER,
            comment: '组图预览类型',
        },
        content: {
            type: TEXT('long'),
            comment: '内容',
        },
        skip_url: {
            type: STRING,
            comment: '跳转链接-当需要外部跳转链接时',
        },
        describe: {
            type: STRING,
            comment: '描述',
        },
        views: {
            type: INTEGER,
            comment: '浏览次数',
            defaultValue: 1,
        },
        is_guest: {
            type: BOOLEAN,
            comment: '是否游客访问',
        },
        is_comment: {
            type: BOOLEAN,
            comment: '是否开启评论',
        },
        flag: {
            type: STRING,
            comment: '置顶，最新，推荐，热门',
        },
        dislikes: {
            type: INTEGER,
            comment: '点踩',
        },
        likes: {
            type: INTEGER,
            comment: '点赞',
            defaultValue: 1,
        },
        comments: {
            type: INTEGER,
            comment: '评论数量',
            defaultValue: 1,
        },
        tags: {
            type: STRING,
            comment: '标签',
        },
        title: {
            type: STRING,
            comment: '标题',
        },
        title_style: {
            type: STRING,
            comment: 'title样式', // 前端添加注意格式 {'font-size':'20px','color':'red'} // 用单引号起来
        },
        order: {
            type: INTEGER,
            comment: '排序',
        },
        keywords: {
            type: STRING,
            comment: '关键词',
            get() {
                const str = this.getDataValue('keywords')
                return str ? str.split(',') : []
            },
            set(value) {
                if (value) {
                    this.setDataValue('keywords', value.join(','))
                } else {

                }
            },
        },
        createTime: {
            type: DATE,
            comment: '创建时间',
            get() {
                return dayjs(this.getDataValue('createTime')).format('YYYY-MM-DD HH:mm:ss')
            },
        },
        updateTime: {
            type: DATE,
            comment: '更新时间',
            get() {
                return dayjs(this.getDataValue('updateTime')).format('YYYY-MM-DD HH:mm:ss')
            },
        },
    }, {
        createdAt: 'createTime', // 指定名字
        updatedAt: 'updateTime',
        tableName: 'yxs_web_article', // 定义实际表名 文章表
    })
    Article.associate = function() {
        // sourceKey 主键为Channel id
        app.model.Web.Article.belongsTo(app.model.Web.Channel, {
            foreignKey: 'channel_id',
            targetKey: 'id',
            sourceKey: 'id',
            as: 'channel',
        })
        app.model.Web.Article.belongsTo(app.model.Member, {
            foreignKey: 'user_id',
            targetKey: 'id',
            sourceKey: 'id',
            as: 'member',
        })
        app.model.Web.Article.hasMany(app.model.Web.Like, {
            foreignKey: 'pid',
            sourceKey: 'id',
            as: 'like',
        })
    }
    return Article
}
