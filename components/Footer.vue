<template>
	<footer class="bg-[#333333] px-2 lg:px-24 py-10 lg:py-32 h-fit">
		<div class="flex flex-col lg:flex-row">
			<div class="w-full lg:w-3/4">
				<div
					class="flex w-full text-custom-light-gray font-inter space-x-10">
					<div>
						<h1 class="text-xl md:text-3xl mb-6">Find Us On</h1>
						<ul>
							<li
								v-for="(item, index) in [
									'Work',
									'Services',
									'About',
									'Blog Archive',
									'Contact Us',
								]"
								:key="index"
								class="my-2 text-lg md:text-xl">
								<a href="#">{{ item }}</a>
							</li>
						</ul>
					</div>
					<div>
						<h1 class="text-xl md:text-3xl mb-6">Discover</h1>
						<ul>
							<li
								v-for="(item, index) in socialLinks"
								:key="index"
								class="my-2 text-lg md:text-xl">
								<a
									href="#"
									class="inline-flex space-x-3">
									<Icon
										:name="item.icon"
										color=""
										size="25" />
									<span>{{ item.text }}</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div
					class="flex justify-evenly items-center mr-0 lg:mr-32 mt-8 flex-wrap">
					<img
						v-for="(item, index) in 9"
						:key="index"
						:src="`/images/tech-logo-${item}.png`"
						alt="tech-logo"
						class="h-10 m-2" />
				</div>
			</div>
			<div class="w-full lg:w-1/4 px-4">
				<div>
					<span class="font-inter text-sm text-custom-light-gray"
						>Interested in keeping up-to-date about the latest in
						design trends in Manchester, England? We’ve got you
						covered.</span
					>
					<div class="w-fit relative h-fit mb-8">
						<input
							type="email"
							name="client-email"
							placeholder="Enter Email Address Here"
							class="email-address-box" />
						<Icon
							name="mdi:arrow-right"
							color="rgb(255 204 0)"
							size="30"
							class="absolute top-[40%] right-2" />
					</div>
					<span class="font-inter text-xs text-custom-light-gray"
						>By subscribing to our newsletter you agree to our
						privacy policy and will get commercial
						communication.</span
					>
				</div>
				<div
					class="bg-custom-yellow rounded-md px-10 py-5 mt-20 h-14 flex justify-center items-center">
					<a href="#"
						><span>Schedule a free discovery session</span
						><Icon
							name="mdi:arrow-top-right"
							color="rgb(255 204 0)"
							size="13"
							class="ml-2 w-fit h-fit bg-black rounded-full p-1"
					/></a>
				</div>
			</div>
		</div>
		<div>
			<hr class="w-full mt-10 rounded bg-custom-light-gray font-inter" />
			<div
				class="h-fit flex flex-col lg:flex-row justify-between items-center mt-2">
				<h1 class="text-custom-light-gray text-3xl">
					Level8Digital&reg;
				</h1>
				<span class="text-custom-light-gray text-sm"
					>Copyright ©2022 level8digital.com. All rights
					reserved.</span
				>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
	const socialLinks: readonly object[] = [
		{
			icon: "entypo-social:facebook",
			text: "Facebook",
		},
		{
			icon: "ri:instagram-fill",
			text: "Instagram",
		},
		{
			icon: "mdi:youtube",
			text: "Youtube",
		},
		{
			icon: "mdi:linkedin",
			text: "LinkedIn",
		},
		{
			icon: "mdi:twitter",
			text: "Twitter",
		},
	];
</script>
