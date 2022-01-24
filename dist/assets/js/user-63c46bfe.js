import { M as Mock } from "./mockjs-475bec84.js";
import { a as _imports_0 } from "./install-41f7cb8d.js";
Mock.mock("/api/user/userinfo", "post", (options) => {
  let { body } = options;
  let type = "admin";
  let roles = ["admin", "editor", "test"];
  if (body) {
    body = JSON.parse(body);
    if (body.type !== "admin") {
      type = body.type;
      roles = [body.type];
    }
  }
  const data = Mock.mock({
    id: "@id",
    token: Mock.Random.string(30),
    username: "\u7F8A\u5148\u751F",
    createTime: "@datetime(yy-MM-dd HH:mm:ss)",
    text: "@cparagraph(5)",
    roles,
    type,
    "contentType|0-3": 0,
    "serviceUnreadCount|0-10": 0,
    userhead: _imports_0,
    expiredTime: 3600 * 12,
    headimgurl() {
      return Mock.Random.image("40x40", Mock.Random.color(), "#FFF", "png");
    }
  });
  const result = {
    code: 1,
    message: "\u8BF7\u6C42\u6210\u529F",
    data
  };
  return result;
});
Mock.mock("/api/app/notice", "post", () => {
  const data = Mock.mock({
    "array|5": [
      {
        id: "@id",
        text: "@cword(10)",
        createTime: "@datetime(MM-dd HH:mm:ss)"
      }
    ]
  });
  const result = {
    code: 1,
    message: "\u8BF7\u6C42\u6210\u529F",
    data: data.array
  };
  return result;
});
Mock.mock("/api/user/login", "post", () => {
  const result = {
    code: 1,
    message: "\u767B\u5F55\u6210\u529F",
    data: ""
  };
  return result;
});
const apis = ["/api/member/all", "/api/branch/all", "/api/role/all", "/api/menu/all"];
apis.forEach((item) => {
  Mock.mock(item, "post", () => {
    const result = {
      code: 1,
      message: "\u8BF7\u6C42\u6210\u529F",
      data: []
    };
    return result;
  });
});
Mock.mock("/api/user/logout", "post", () => {
  const result = {
    code: 1,
    message: "\u9000\u51FA\u6210\u529F",
    data: ""
  };
  return result;
});
Mock.setup({
  timeout: "500-800"
});
