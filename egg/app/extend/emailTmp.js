const emailTmp = ({userEmail,downloads}) => {
    return `<div>
        <includetail>
            <div align="center">
                <div class="open_email" style="margin-left: 8px; margin-top: 8px; margin-bottom: 8px; margin-right: 8px;">
                    <div>
                        <br>
                        <span class="genEmailContent">
                            <div id="cTMail-Wrap"
                                 style="word-break: break-all;box-sizing:border-box;text-align:center;min-width:320px; max-width:660px; border:1px solid #f6f6f6; background-color:#f7f8fa; margin:auto; padding:20px 0 30px; font-family:'helvetica neue',PingFangSC-Light,arial,'hiragino sans gb','microsoft yahei ui','microsoft yahei',simsun,sans-serif">
                                <div class="main-content" style="">
                                    <table style="width:100%;font-weight:300;margin-bottom:10px;border-collapse:collapse">
                                        <tbody>
                                        <tr style="font-weight:300">
                                            <td style="width:3%;max-width:30px;"></td>
                                            <td style="max-width:600px;">
                                                <div id="cTMail-logo" style="width:92px; height:25px;">
                                                    <a href="">
                                                        <img src="https://s1.ax1x.com/2022/05/16/OhlBlt.png"
                                                             style="width:92px;display:block">
                                                    </a>
                                                </div>
                                                <p style="height:2px;background-color: #00e6ff;border: 0;font-size:0;padding:0;width:100%;margin-top:20px;"></p>

                                                <div id="cTMail-inner" style="background-color:#fff; padding:23px 0 20px;box-shadow: 0px 1px 1px 0px rgba(122, 55, 55, 0.2);text-align:left;">
                                                    <table style="width:100%;font-weight:300;margin-bottom:10px;border-collapse:collapse;text-align:left;">
                                                        <tbody>
                                                        <tr style="font-weight:300">
                                                            <td style="width:3.2%;max-width:30px;"></td>
                                                            <td style="max-width:480px;text-align:left;">
                                                                <h1 id="cTMail-title" style="font-size: 20px; line-height: 36px; margin: 0px 0px 22px;">
                                                                    【Bag】博客开源门户系统
                                                                </h1>

                                                                <p id="cTMail-userName" style="font-size:14px;color:#333; line-height:24px; margin:0;">
                                                                    尊敬的${userEmail}用户，您好！
                                                                </p>
                                                                <p style="font-size:14px;color:#333; line-height:24px; margin:0; margin-top: 6px;">
                                                                    优秀的你，才能遇到优秀的世界，Bag管理系统框架
                                                                </p>
                                                                <p class="cTMail-content" style="line-height: 24px; margin: 6px 0px 0px; overflow-wrap: break-word; word-break: break-all;">
                                                                    <span style="color: rgb(51, 51, 51); font-size: 14px;">
                                                                        欢迎下载Bag，下载次数超过 <strong>${downloads}</strong>
                                                                    </span>
                        </p>

                        <p class="cTMail-content" style="line-height: 24px; margin: 6px 0px 0px; overflow-wrap: break-word; word-break: break-all;">
                            <span style="color: rgb(51, 51, 51); font-size: 14px;">完成下载，请点击下面按钮进行下载。
                                                                        <span style="font-weight: bold;">非本人操作可忽略。</span>
                            </span>
                        </p>
                        <p class="cTMail-content" style="font-size: 14px; color: rgb(51, 51, 51); line-height: 24px; margin: 6px 0px 0px; word-wrap: break-word; word-break: break-all;">
                            <a id="cTMail-btn" href="" title="" style="font-size: 16px; line-height: 45px; display: block; background-color: #00e6ff; color: rgb(255, 255, 255); text-align: center; text-decoration: none; margin-top: 20px; border-radius: 3px;">
                                                                        点击此处下载
                                                                    </a>
                        </p>

                        <p class="cTMail-content" style="line-height: 24px; margin: 6px 0px 0px; overflow-wrap: break-word; word-break: break-all;">
                            <span style="color: rgb(51, 51, 51); font-size: 14px;">
                                                                        <br>
                                                                        无法正常下载？请复制以下链接至浏览器打开：
                                                                        <br>
                                                                        <a href="" title=""
                                                                           style="color: rgb(0, 164, 255); text-decoration: none; word-break: break-all; overflow-wrap: normal; font-size: 14px;">
                                                                            联系管理员
                                                                        </a>
                                                                    </span>
                        </p>

                        <dl style="font-size: 14px; color: rgb(51, 51, 51); line-height: 18px;">
                            <dd style="margin: 0px 0px 6px; padding: 0px; font-size: 12px; line-height: 22px;">
                                <p id="cTMail-sender" style="font-size: 14px; line-height: 26px; word-wrap: break-word; word-break: break-all; margin-top: 32px;">
                                    此致作者
                                    <br>
                                    <strong>羊先生</strong></strong>
                                    </strong>
                                </p>
                            </dd>
                        </dl>
                        </td>
                        <td style="width:3.2%;max-width:30px;"></td>
                        </tr>
                        </tbody>
                        </table>
                    </div>

                    <div id="cTMail-copy" style="text-align:center; font-size:12px; line-height:18px; color:#999">
                        <table style="width:100%;font-weight:300;margin-bottom:10px;border-collapse:collapse">
                            <tbody>
                                <tr style="font-weight:300">
                                    <td style="width:3.2%;max-width:30px;"></td>
                                    <td style="max-width:540px;">
                                        <p style="text-align:center; margin:20px auto 14px auto;font-size:12px;color:#999;">
                                            此为系统邮件，请勿回复。
                                            <a href="" style="text-decoration:none;word-break:break-all;word-wrap:normal; color: #333;" target="_blank">
                                                                        取消订阅
                                                                    </a>
                                        </p>

                                        <p id="cTMail-rights" style="max-width: 100%; margin:auto;font-size:12px;color:#999;text-align:center;line-height:22px;">
                                            <img border="0" src="https://s1.ax1x.com/2022/05/16/Oh3AVU.png" style="width:100px; height:100px; margin:0 auto;">
                                            <br> 关注服务号，全栈导航
                                            <br>
                                            <p style="line-height: 16px;margin: 0;margin-top: 5px;">Copyrights © 2019-2025</p>
                                            <p style="line-height: 16px;margin: 0;">All rights reserved 鄂ICP备17016349号-3</p>
                                        </p>
                                    </td>
                                    <td style="width:3.2%;max-width:30px;"></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </td>
                    <td style="width:3%;max-width:30px;"></td>
                    </tr>
                    </tbody>
                    </table>
                </div>
            </div>
            </span>
    </div>
    </div>
    </div>
    </includetail>
    </div>`;
}

module.exports = emailTmp;
