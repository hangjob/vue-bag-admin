const CryptoJS = require("crypto-js");

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIICXgIBAAKBgQDGcFwssGIu0i7mGzlNvuUkLiQay5rtvdHs0B/qxlRhtbCbjUDu
HVAuYXJwMWV6e9zuxhxA9OhKLQGU7aOfenc47NfwPZav3i36b3w//LXpWGKWVziq
MalYnUcXyXKi1/Oec3eWN7NVoNiAuadGHnIkxGiu9J7AgmQ3LAHOvmX4qwIDAQAB
AoGBAIEeTSua3Vff1TpOjnvC8XAYQc/ZmYaGE5kGVy45PGCTi0W7pHsLQcfcCk1s
Jr6K59fJukqd0KOrIzNXaTb0xat0LzmNKjDixO+0JiByNq11zUvn4tCKewaIPgP3
2n/7As7X9qb26xzSisqfIvvQ1+9/3moL6t6WAAWxvEFsPir5AkEA508Mn8T6E4o2
HqJmWgQx4uV0v97ce7g5T4MdO60Pz8hE307UIW6kC8uTbpMjI7yaVkVhzzIHC19p
htDg7tUd5wJBANufFDqm1wzdD08UvT5lVQyqhi6SApqyA+QV7ERDoh1+kzAlkiED
ioVINXWxUnXw5MN1Lmg68qW9MQB42Q9wDp0CQQCe1O8sPowiIsPq4UU7BqpizYEP
x67K3cOsz7GhKsMywKhaVrzfgCPxXYcNZMe6YGXyW45AQnAH5SqHQqNSHNF9AkBH
405v1GTYJRP5wsQfRHQObVL2s3x+vn5fjn2D6s+J8ACl5eZrQAl7jyNQnvZq/Ksk
/5ptK755WfBMQ0JptzhRAkEAk/wZt48QE4v3NYeCjQzpYYBTvawVocH+jOx1rFha
anmR1KfX7wMctbqIfHnElJgxSX6PvWmUnyucc7VJNF4E7Q==
-----END RSA PRIVATE KEY-----`

let publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDGcFwssGIu0i7mGzlNvuUkLiQa
y5rtvdHs0B/qxlRhtbCbjUDuHVAuYXJwMWV6e9zuxhxA9OhKLQGU7aOfenc47Nfw
PZav3i36b3w//LXpWGKWVziqMalYnUcXyXKi1/Oec3eWN7NVoNiAuadGHnIkxGiu
9J7AgmQ3LAHOvmX4qwIDAQAB
-----END PUBLIC KEY-----`



let aesKey = CryptoJS.enc.Utf8.parse('0132456789ABCDEF');
let aesIv = CryptoJS.enc.Utf8.parse('0132456789ABCDEF');

module.exports = {
    privateKey,
    publicKey,
    aesKey,
    aesIv
}
