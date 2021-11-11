// @ts-ignore
import Mock from "mockjs";
import {resData} from './baseCommon'

Mock.mock("/api/yxs/userinfo", 'post', (options: any) => {
    const data = Mock.mock({
        id: "@id",
        token: "@id",
        username: '@name',
        createTime: "@datetime(yy-MM-dd HH:mm:ss)",
        text: "@cparagraph(5)",
        roles:['zbdl','jgr'],
        "contentType|0-3": 0,
        "serviceUnreadCount|0-10": 0,
        headimgurl() {
            return Mock.Random.image(
                "40x40",
                Mock.Random.color(),
                "#FFF",
                "png",
            );
        }
    })
    const result: resData = {
        code: 1,
        message: '请求成功',
        data,
    }
    return result;
})



// 数据延迟
// Mock.setup({
//     timeout: "500-800"
// });
