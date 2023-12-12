<template>
	<nav class="py-2 pl-2 lg:pl-20 flex items-center justify-between">
		<div>
			<span class="text-custom-yellow font-medium text-3xl font-inter"
				>L8D&reg;</span
			>
		</div>
		<div class="hidden lg:flex text-lg space-x-6 font-inter">
			<NuxtLink
				v-for="(item, index) in appMenu"
				:key="index"
				>{{ item }}</NuxtLink
			>
		</div>
		<div class="w-fit h-fit lg:hidden">
			<button
				disabled
				class="hover:bg-transparent pointer-events-none p-2">
				<Icon
					name="mdi:menu"
					color="rgb(255 204 0)"
					size="27" />
			</button>
		</div>
	</nav>
</template>

<script setup lang="ts">
	const appMenu: readonly string[] = [
		"Home",
		"Services",
		"Work",
		"About",
		"Blog",
		"Contact",
	];
</script>
