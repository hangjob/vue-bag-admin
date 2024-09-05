# 开发背景

::: tip 🍁🍁🍁
开发过很多管理后台系统，也使用了很多优秀的开源项目，到后来需要**每次重新搭建**，**不能重复使用**
，所以开发了这个框架，包含了前端和后端，开发方式只需要集成框架，相当于基座应用，我们只需要基于基座应用进行上层开发。希望能帮助到大家，也希望能让大家少走弯路，少踩坑，少花时间，多花时间在业务上
，开发宗旨在让开发者能够以最小的成本完成开发，降低开发量
<a href="https://github.com/hangjob/vue-bag-admin" target="_blank" rel="noreferrer"><img src="https://img.shields.io/github/stars/hangjob/vue-bag-admin?style=social" alt="star"></a>
:::

Bag-Aadmin v5版本从2024年开始开发，到现在已经有大半年多的时间，目前已经开发完成，并发布到npm上，欢迎大家使用，如果有任何问题，欢迎反馈，一起交流

## 在线体验

- Bag-Aadmin官网：https://vite.itnavs.com/
- 演示地址： https://vite.itnavs.com/admin
- 代码下载： [https://github.com](https://github.com/hangjob/vue-bag-admin/archive/refs/heads/master.zip)

## Bag-Admin跟其他开源库的区别

采用npm包安装方式进行开发，无需配置路由、权限、状态管理等等，只需要`main.js`
集成框架，即可开发，特别适合在企业中有很多管理系统，又需要一个框架来约束它，我觉这种开发方式是一个很好的选择， 能快速开发，提升开发效率.

在对比同类型开源仓库中，大家常见的管理系统，一般都是下载源码开发，这样代码复用能力差，当所有系统中同样的功能，需要写同样的代码，导致代码冗余，维护成本高，而且不利于项目的扩展，当一处出现`bug`，所有系统都得更新

