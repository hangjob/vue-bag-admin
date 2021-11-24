// @ts-ignore
import Mock from "mockjs";
import {resData} from './baseCommon'
import userhead from '../src/packages/assets/image/yanghang.jpg';

Mock.mock("/api/yxs/userinfo", 'post', (options: any) => {
    const data = Mock.mock({
        id: "@id",
        token: "@id",
        username: '羊先生',
        createTime: "@datetime(yy-MM-dd HH:mm:ss)",
        text: "@cparagraph(5)",
        roles: ['admin', 'editor'],
        type: 'admin',
        "contentType|0-3": 0,
        "serviceUnreadCount|0-10": 0,
        userhead: userhead,
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

Mock.mock("/api/yxs/notice", 'post', () => {
    const data = Mock.mock({
        "array|5": [
            {
                id: "@id",
                text: "@cword(10)",
                createTime: "@datetime(MM-dd HH:mm:ss)",
            }
        ]
    })
    const result: resData = {
        code: 1,
        message: '请求成功',
        data: data.array,
    }
    return result;
})


//数据延迟
// Mock.setup({
//     timeout: "500-800"
// });
