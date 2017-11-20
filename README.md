# TG
## portal

TG 工作室门户网站v1.0.0从开发到上线耗时7天，使用的技术栈是(Pug+Express+TypeScript)(前端)+(Java+MySQL)(后端)。
该文档会介绍源代码的结构以及是如何划分开发环境和线上环境的。

开发者：
---

1. 前端+中间层：游朝阳
2. 后端：范知名

运行本项目的步骤指南
----------

在本地shell里分别运行如下命令：

1. `git clone git@github.com:TGclub/Portal_Front.git`
2. `cd Portal_Front`
3. `cnpm install`(或者npm install) （本地没有node的先去下载node
4. `npm run dev`
5. `在浏览器输入 http://localhost:4333`



项目技术栈简介
-------

*前端*：

 该项目前端开发用的不是单纯的HTML+CSS+JS的开发模式，而是对应的用的PUG+SCSS+TypeScript的技术栈，PUG是模板渲染引擎，SCSS
 是CSS的超集，TS也是JS的超集。用这三者的好处是带来了更高的开发效率以及带类型的变量约束。

*后端*：
      Spring+SpringMVC+Mybatis
      Spring是Java最流行的轻量级开源框架，SpringMVC是当前性能和开发速度最好的MVC框架，Mybatis是轻量级的数据库持久层开源框架，可以避免所有的JDBC代码和手动设置。


目前拥有功能和近期欲开发的功能
---------------

V1.0.0的前台网站主要提供给大家查看我们工作室信息以及项目信息，提供以下几个查看功能：

1. 根据分类查看项目
2. 根据项目id查看项目详情(项目进度，仓库地址，项目介绍等)
3. 查看项目的成员
4. 查看部门成员信息
5. 查看工作室的信息

V2.0.0会开发出后台模块,方便运营部管理增添项目信息和成员信息，主要涵盖以下内容：

4. 管理员登录
1. 添加一个初始化项目
2. 根据实情修改项目进度
3. 添加一个成员
5. 修改成员信息


代码结构介绍
------

前端

    -dist // build之后的文件，之后直接启动该文件夹里的server_portal.js
    -src // 源代码
        - config // 配置文件信息
        - controller // 匹配路由之后映射的controller
        - modles // 数据层
        - public // 静态数据诸如images font-family等
        - request // 基于request模块封装了一层调业务接口的XHR
        - utils // 工具函数，js武器库(滑稽
        - server_portal.ts // 整个中间层后端的express入口文件
    -views // 页面模板


后端

    - src/main 源代码
      - java应用代码
        - controller 匹配路由之后的controller
        - dao 数据库访问接口
        - exception 自定义异常类
        - interceptor 自定义拦截器类
        - model 实体类
        - service 数据库接口实现类
      - resources 框架的配置文件
      - test 测试类
      - webapp 根目录
        - WEB-INF 存放web配置文件
        - index.jsp 欢迎页面




















