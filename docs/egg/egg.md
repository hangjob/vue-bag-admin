如果你对`egg.js`陌生的话，可以粗略浏览下，我写的[egg.js教程](https://hangjob.github.io/docs/#/egg/)

### 如何启动

获取项目后，打开`egg/config/config.default.js`
请在username填写自己的数据名

```js
config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'xxxx', // 数据库用户名
    password: '**123456**', // 数据库密码
    database: 'egg',
    define: { // model的全局配置
        timestamps: true, // 添加create,update,delete时间戳
        paranoid: false, // 添加软删除
        freezeTableName: true, // 防止修改表名为复数
        underscored: false // 防止驼峰式字段被默认转为下划线
    }
}
```

不会在本地安装数据库的同学，我推荐安装[XAMPP](https://www.apachefriends.org/zh_tw/index.html),一键集成mysql数据，安装数据库图形管理工具[Navicat
Premium](https://www.bonnenuit.top/index.php/archives/49/)
，此工具可能需要破解，请安照教程破解

### 启动服务

```bash
cd /vue-bag-admin/egg  // 进入这个目录
```

```bash
npm run serve
```

?> 访问:http://127.0.0.1:8001，比如我启动完成后的地址，会在命令行提示出来

如果以上配置完毕，启动服务完成，访问服务后，会自动创建数据表名以及字段相关，因为我在路由上开启了自动模型添加字段同步数据库

```js
module.exports = app => {
    const {router, controller} = app;
    // 模型添加字段同步数据库
    app.beforeStart(async () => {
        await app.model.sync({alter: true});//force  false 为不覆盖 true会删除再创建; alter true可以 添加或删除字段;
    });
};
```

?>至此，后端服务已经部署完成，剩下的数据逻辑

在这个vue-bag-admin中后端服务，我写了一个完整的增删的改查，使用的`sequelize`
，它可以帮你很好的写sql查询语句，因为它全部帮你封装好了，我们只需要调用即可，比如简单的增删改查，复杂的点的关联查询，一对多，多对一，多对多，多表关联，查插件已经帮我们内置了，我们使用只需要配置关联字段即可

?> 此处我写一个完整的增删改查

```js
'use strict';

const baseController = require('./baseController');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

class MenuController extends baseController {

    /**
     * 添加数据
     * @returns {Promise<void>}
     */
    async create() {
        const {ctx} = this;
        const result = await ctx.model.Menu.create({...ctx.request.body})
        this.result({data: result})
    }

    /**
     * 删除数据
     * @returns {Promise<void>}
     */
    async delete() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Menu.destroy({
            where: {id}
        })
        this.result({data: result})
    }

    /**
     * 删除多个路由
     * @returns {Promise<void>}
     */
    async deletes() {
        const {ctx} = this;
        const {ids} = ctx.request.body;
        const result = await ctx.model.Menu.destroy({
            where: {
                id: [...ids]
            }
        })
        this.result({data: result})
    }


    /**
     * 查找
     * @returns {Promise<void>}
     */
    async find() {
        const {ctx} = this;
        const {id} = ctx.request.body;
        const result = await ctx.model.Menu.findOne({
            where: {id}
        })
        this.result({data: result})
    }

    /**
     * 获取所有数据，可以带条件查询
     * @returns {Promise<void>}
     */
    async all() {
        const {ctx} = this;
        const {ks} = ctx.request.body;
        const where = {}
        if (ks) {
            where.name = {[Op.like]: `%${ks}%`} // 模糊查詢 https://www.sequelize.com.cn/core-concepts/model-querying-basics
        }
        const result = await ctx.model.Menu.findAll({
            where: {...where}
        })
        this.result({data: result})
    }

    /**
     * 编辑数据
     * @returns {Promise<void>}
     */
    async update() {
        const {ctx} = this;
        const body = ctx.request.body;
        const result = await ctx.model.Menu.update({
            ...body,
        }, {
            where: {
                id: body.id
            }
        })
        this.result({data: result})
    }
}

module.exports = MenuController;
```

不同的同学，请看我egg.js教程，继承baseController，是因为我需要做很多公共的事情，方便子集继承调用

关于不同ES6 class 语法的同学，强烈推荐看[阮一峰-Class 基本教程](https://es6.ruanyifeng.com/#docs/class)

### 自己后端业务对接

?>不管你的服务是Java还是php也好，需要完成以下4个相关接口

```javascript
['/api/user/userinfo'] 
```

?>/api/user/userinfo接口详见mock数据返回结构

```javascript
['/api/app/router', '/api/user/logout', '/api/user/login']
```

返回数据格式如下：

```typescript
interface resultData {
    code: number,
    message: string,
    data: any,
}
```
