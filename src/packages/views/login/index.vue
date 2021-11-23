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
						<input type="text" placeholder="输入你的账户">
					</div>
					<div class="login-input">
						<i></i>
						<input type="text" v-model="pas" placeholder="输入你的密码">
					</div>
					<div class="login-btn">
						<button @click="handleLogin">登录</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts">
import {defineComponent, inject, ref} from 'vue'
import {useStore} from "vuex";
import {useRouter} from "vue-router";
import locaStore from '@/packages/utils/persistence'

export default defineComponent({
	name: 'login',
	setup() {
		const pas = ref('');
		const store = useStore()
		const router = useRouter();

		const handleLogin = () => {
			if (pas.value) {
				locaStore.set('token', pas.value, 3600 * 12);
				store.commit('user/updateToken');
				router.push('/home')
			}
		}
		return {
			handleLogin,
			pas
		}
	}
})
</script>
<style lang="less" scoped>
.login {
	width: 100vw;
	height: 100vh;
	background-color: #ff9595;

	&-container {
		width: 75%;
		height: 80%;
		background-color: #ffffff;
		border-radius: 40px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		min-height: 600px;
		min-width: 1200px;
	}

	&-content {
		display: flex;
		width: 100%;
		height: 100%;
		padding: 100px;
		box-sizing: border-box;

		.slide-left {
			flex: 1;
		}

		.slide-right {
			flex: 1;

			h2 {
				font-size: 30px;
				color: #333333;
			}

			p {
				color: #d2d0d1;
				font-size: 14px;
			}
		}


		.login-input {
			&:nth-of-type(1) {
				margin-top: 80px;
			}

			margin-bottom: 20px;

			input {
				background-color: #fff9f9;
				border-radius: 10px;
				padding: 12px 10px;
				width: 80%;
				border: none;
				outline: 0;
				font-size: 16px;
			}
		}

		.login-btn {
			button {
				background-image: linear-gradient(to right, #e34c44, #f59178);
				border: none;
				color: white;
				width: 80%;
				padding: 12px 10px;
				text-align: center;
				border-radius: 30px;
				text-decoration: none;
				display: inline-block;
				font-size: 16px;
				cursor: pointer;
			}
		}
	}
}
</style>