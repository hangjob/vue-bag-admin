<template>
    <div class="login">
        <div class="login-container">
            <div class="login-content">
                <div class="slide-left">1</div>
                <div class="slide-right">
                    <h2>欢迎您登录</h2>
                    <p>你可以直接输入您的账号和密码登录</p>
                    <div class="login-input">
                        <i></i>
                        <input type="text" placeholder="账户">
                    </div>
                    <div class="login-input">
                        <i></i>
                        <input type="text" placeholder="账户">
                    </div>
                    <div class="login-btn">
                        <button>登录</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .login{
        width: 100vw;
        height: 100vh;
        background-color: #ff9595;
        &-container{
            width: 75%;
            height: 80%;
            background-color: #ffffff;
            border-radius: 40px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
        }
        &-content{
            display: flex;
            width: 100%;
            height: 100%;
            padding: 100px;
            box-sizing: border-box;
            .slide-left{
                flex: 1;
            }
            .slide-right{
                flex: 1;
                h2{
                    font-size: 30px;
                    color: #333333;
                }
                p{
                    color: #d2d0d1;
                    font-size: 14px;
                }
            }
            .login-input{
                margin-bottom: 15px;
                input{
                    background-color: #fff9f9;
                    border-radius: 10px;
                    padding: 10px;
                    width: 80%;
                    border: none;
                }
            }
            .login-btn{
                button{
                    
                }
            }
        }
    }
</style>