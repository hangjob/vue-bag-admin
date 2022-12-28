// 生成一个1024长度的密钥对
// const nodeRSA = require("node-rsa");
// const key = new nodeRSA({b: 1024})
// const publicKey = key.exportKey('pkcs8-public') // 公钥
// const privateKey = key.exportKey('pkcs8-private') // 私钥

const rsa = {
    publicKey: '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCGZ9nIiSJT+N66Y44G4R1exi9Zg7C141cCzHL9avlYdpxGHtXUWvUX2wcOXe2AtCTH54cBVbWdudlFpN0M2PBUDfFE+rx5KzRWqDm3vAolAb8Tr7+LHVLdcPGc3j8h/XUnsM6rVCxDGM/PcdMp1sM5Nec5BJ3oGwCgt92HgT8BtwIDAQAB-----END PUBLIC KEY-----',
    privateKey: '-----BEGIN PRIVATE KEY-----MIICdwIBADANBgkqhkiG9w0BAQEFAASCAmEwggJdAgEAAoGBAIZn2ciJIlP43rpjjgbhHV7GL1mDsLXjVwLMcv1q+Vh2nEYe1dRa9RfbBw5d7YC0JMfnhwFVtZ252UWk3QzY8FQN8UT6vHkrNFaoObe8CiUBvxOvv4sdUt1w8ZzePyH9dSewzqtULEMYz89x0ynWwzk15zkEnegbAKC33YeBPwG3AgMBAAECgYByudCvGUdhECzmQrZn7t4IGPkv2nYLPAv4ipWY9SfzuAL647U4N4/AFii2vbxOQPaoYFvf6s5E3O+2P9yj68Vvas25Z/gw5t+BcpliMCTM7Va2r3KZkozng+KakKqEXvRT8O0X8Tb/0fwoRCM62gOrFWQRq7BneOyEPiuFBUATUQJBANL/WO9SWISrtFXtre6Y8ZlDHILCcSaL67301WJo2l0hTwctcSMBjf3ROvk0X+dX1cU39dUCCyynMgcia8S4/+8CQQCjEoW1Elw4ImiIOEGSI3ySlTLopnWNZvdVYAbhwkbeeXDSXzqvVGkgRDKCt8CW47mdgh89mkiRSWoszs7oJNK5AkA1wm2sfHSlSQJnqmlYk4trG1hWUKh3w8rK2WjM7B5HAEecco2S98Bv3TGDcT7GOPD0kO+H2D90nxz2CGUg+GntAkEAiOak33Wxe+LPFQT9b11hWIHvAke0ymgV3lPGk0MRUfZr1ADkeIsJ0m/OY9U11rcJfgTei035/BbBDyrzowo+6QJBAJyl3vn3DlFgONWMsndXzB/GJSLTJhWuIuWcEV4I3b38HcTJkidkoKGNAOY+IZo2b9ww/X9FBhB+jstfQnQEU2M=-----END PRIVATE KEY-----'
}

module.exports = rsa;
