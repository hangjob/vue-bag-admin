<script lang="ts">
import HelloWorld from '../../components/HelloWorld.vue'
import { defineComponent, computed, onMounted, onUnmounted } from 'vue'
export default defineComponent({
	name: 'App',
	components:{HelloWorld}
})
</script>

<template>
	<img alt="Vue logo" src="../../assets/logo.png" />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
