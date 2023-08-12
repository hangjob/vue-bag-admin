<script setup lang="ts">
</script>

<template>
	<div>
        根目录
		<n-button>Default</n-button>
		<n-button type="tertiary">
			Tertiary
		</n-button>
		<n-button type="primary">
			Primary
		</n-button>
		<n-button type="info">
			Info
		</n-button>
		<n-button type="success">
			Success
		</n-button>
		<n-button type="warning">
			Warning
		</n-button>
		<n-button type="error">
			Error
		</n-button>
	</div>
</template>

<style scoped>
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
	transition: filter 300ms;
}
.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
