<template>
	<div class="flex min-h-screen max-w-full">
		<div class="w-full lg:w-3/4">
			<HeaderBar />
			<main class="pl-2 md:pl-24 mt-10 md:mt-44">
				<h2 class="tagline">The</h2>
				<h2 class="tagline">Most Ambitious</h2>
				<h2 class="tagline">Companies Hire Us</h2>
				<div
					class="mt-10 border-b-2 border-b-black w-fit space-x-12 flex items-center pb-3 text-lg md:text-2xl">
					<a href="#">Schedule A Free Discovery Session</a>
					<!-- Arrow right icon -->
					<Icon
						name="mdi:arrow-right"
						color="black" />
				</div>
				<div class="mt-24">
					<h1 class="text-5xl md:text-9xl font-semibold">
						Level8Digital&reg;
					</h1>
					<div
						class="w-fit flex flex-col md:flex-row space-x-0 md:space-x-20 space-y-20 md:space-y-0 mt-10 font-inter">
						<div
							v-for="(item, index) in welcomeMessages"
							:key="index"
							class="w-full md:w-96">
							<h1 class="text-xl md:text-2xl mb-2">{{ item.title }}</h1>
							<span class="text-custom-light-gray">{{
								item.text
							}}</span>
						</div>
					</div>
				</div>
			</main>
		</div>
		<div class="w-1/3 hidden 2xl:flex justify-end">
			<img
				src="/images/side-img.png"
				alt="sidebar-support-image"
				class="w-[24rem] object-cover mr-5" />
		</div>
	</div>
	<div
		class="flex flex-col lg:flex-row mt-10 md:mt-44 px-2 lg:px-24 space-x-0 lg:space-x-4 space-y-4 lg:space-y-0">
		<div class="w-full lg:w-1/3">
			<h1 class="text-custom-light-gray font-inter text-lg">
				Featured Case Study
			</h1>
			<h2 class="font-inter text-3xl md:text-6xl mt-10">
				Glossier UK Website Design
			</h2>
			<p class="max-w-[85%] mt-16">
				Elon is the Nordic region's largest retail chain for consumer
				electronics and home appliances, with over 400 stores in Sweden
				alone. Learn about their recent new online store launch on the
				Magento Commerce below.
			</p>
			<a
				href="#"
				class="inline-flex items-center space-x-10 mt-16 text-lg">
				<span>View Case Study</span>
				<!-- TODO: There is a bug with the placement of icon in button. Figure it out later -->
				<button
					class="flex justify-center items-center p-2 rounded-full bg-custom-yellow">
					<Icon
						name="mdi:arrow-top-right"
						color="white" />
				</button>
			</a>
		</div>
		<div class="w-full lg:w-3/4">
			<img
				src="/images/img-1.png"
				alt=""
				class="w-full h-34 rounded-md object-cover" />
			<div
				class="grid grid-cols-1 lg:grid-cols-4 w-full gap-x-0 lg:gap-x-2 gap-y-2 lg:gap-y-0 mt-2">
				<div
					v-for="(item, index) in caseStudyGridData"
					:key="index"
					class="font-inter">
					<img
						:src="item.img"
						alt="sample-image"
						class="w-full h-72 rounded-md object-cover mb-4" />
					<h1>{{ item.title }}</h1>
					<h2 class="text-custom-light-gray">{{ item.subtitle }}</h2>
				</div>
			</div>
		</div>
	</div>
	<div
		class="flex flex-col lg:flex-row rounded h-[35rem] mt-10 md:mt-44 mb-10 md:mb-44 mx-4 lg:mx-24">
		<div class="w-full lg:w-2/5 bg-[#333333] h-full p-4 md:p-10 font-inter">
			<hr
				class="w-[90%] h-1 my-4 border-0 rounded md:my-10 bg-custom-dark-yellow" />
			<h1 class="text-white text-4xl">
				We Believe In the Simplicity of Good Solutions
			</h1>
			<p class="mt-10 text-[#6E6E6E] font-inter">
				Elon is the Nordic region's largest retail chain for consumer
				electronics and home appliances, with over 400 stores in Sweden
				alone. Learn about their recent new online store launch on the
				Magento Commerce below.
			</p>
			<a
				href="#"
				class="inline-flex items-center space-x-10 mt-14 text-base lg:text-lg text-white">
				<span>View All Our Services</span>
				<!-- TODO: There is a bug with the placement of icon in button. Figure it out later -->
				<button
					class="flex justify-center items-center p-2 rounded-full bg-custom-yellow">
					<Icon
						name="mdi:arrow-top-right"
						color="black" />
				</button>
			</a>
		</div>
		<div class="w-full lg:w-3/5 h-full">
			<div
				class="bg-custom-dark-yellow flex items-end justify-between pb-5 px-3 h-1/2">
				<h1 class="text-4xl lg:text-7xl font-inter">Branding</h1>
				<Icon
					name="mdi:arrow-top-right"
					color="black"
					size="35" />
			</div>
			<div
				class="bg-[#333333] flex items-end justify-between pb-5 px-3 h-1/2">
				<h1
					class="text-4xl lg:text-7xl font-inter text-custom-dark-yellow">
					Development
				</h1>
				<Icon
					name="mdi:arrow-top-right"
					color="rgb(255 204 0)"
					size="35" />
			</div>
		</div>
	</div>
	<div class="bg-[#333333] pt-14 pb-8 px-4 lg:px-24">
		<div class="flex justify-between">
			<h1 class="text-2xl lg:text-6xl text-white font-inter w-10/12">
				Clients We've Worked With
			</h1>
			<div class="w-[1/2] lg:w-[15%] text-end">
				<span class="text-[#6E6E6E]"
					>Over our 8 year career we’ve worked withover 50
					companies</span
				>
				<div class="flex justify-end mt-14 space-x-6">
					<button
						class="flex justify-center items-center p-2 rounded-full bg-custom-yellow">
						<Icon
							name="mdi:arrow-left"
							color="black" />
					</button>
					<button
						class="flex justify-center items-center p-2 rounded-full bg-custom-yellow">
						<Icon
							name="mdi:arrow-right"
							color="black" />
					</button>
				</div>
			</div>
		</div>
		<div
			class="grid grid-cols-1 lg:grid-cols-4 mt:10 md:mt-36 gap-x-0 lg:gap-x-5 gap-y-5 lg:gap-y-0">
			<div
				v-for="(a, index) in 4"
				:key="index"
				class="p-1 md:p-4">
				<img
					src="/images/accenture-logo.png"
					alt="accenture-logo"
					class="w-44 object-cover mb-10" />
				<p class="pb-4 max-w-[95%] text-white/90">
					“When looking for someone to do a good job in a tight time
					frame, it can prove difficult or expensive. I was very happy
					with the work done by Creative Brand Design, I had to have a
					website up and running before the start of my season and
					they were able to get it done with time to spare.”
				</p>
				<div
					class="mt-4 flex justify-between items-center border-t-2 border-dashed text-white font-inter">
					<span>Branding Services For</span>
					<span>John Doe - CEO </span>
				</div>
			</div>
		</div>
	</div>
	<div class="mt-16 grid grid-cols-1 lg:grid-cols-8 lg:h-[40rem] border-y">
		<div
			v-for="(item, index) in rotatedGrid"
			:key="index"
			class="border-y lg:border-x p-2 pb-4 flex items-end justify-start lg:justify-end"
			:class="
				index === rotatedGrid.length - 1
					? 'bg-[#333333] justify-between mb-33'
					: ''
			">
			<span
				class="transform -rotate-0 lg:-rotate-90 text-custom-light-gray font-inter text-2xl lg:text-6xl"
				:class="
					index === rotatedGrid.length - 1
						? '-translate-x-0 lg:-translate-y-40'
						: ''
				"
				>{{ item }}</span
			>
		</div>
	</div>
	<div class="px-2 lg:px-24 my-44 flex flex-col lg:flex-row font-inter">
		<div class="w-full lg:w-1/4">
			<h1 class="text-3xl max-w-[75%]">
				We believe in an even playing field for all.
			</h1>
			<div class="py-4 flex justify-between items-center">
				<span class="text-lg opacity-90"
					>Browse Our Entire Collection of Articles</span
				>
				<Icon
					name="mdi:arrow-right"
					size="30"
					color="black" />
			</div>
			<hr class="w-full h-1 border-0 rounded bg-custom-dark-yellow" />
		</div>
		<div
			class="w-full lg:w-3/4 flex flex-col lg:flex-row space-x-0 lg:space-x-5 space-y-5 lg:space-y-0 text-custom-light-gray items-center justify-center">
			<div class="w-5/6" />
			<p
				v-for="(a, index) in 2"
				:key="index">
				We are a leading full-service omnichannel agency building
				digital experiences for clients across the globe. Our goal is to
				accelerate sales for our B2B and B2C clients by delivering
				award-winning digital storefronts, solutions and mobile apps.
			</p>
		</div>
	</div>
	<div
		class="grid grid-cols-1 lg:grid-cols-4 gap-x-0 md:gap-x-4 gap-y-4 md:gap-y-0 divide-y md:divide-x px-2 md:px-24 my-16">
		<div
			v-for="(item, index) in serviceArticleGrid"
			:key="index"
			class="w-full px-1 lg:px-6 font-inter">
			<img
				:src="item.image"
				alt="service-image"
				class="w-full h-96 object-cover rounded-md shadow-md mb-7" />
			<span class="mt-10 text-custom-light-gray">Website Work</span>
			<h1 class="text-black/80 text-3xl mb-8">{{ item.title }}</h1>
			<p class="text-custom-light-gray">
				Level 8 Digital is a leading full-service omnichannel agency
				building digital experiences for clients across the globe. Our
				goal is to accelerate sales for our B2B and B2C clients by
				delivering award-winning digital storefronts, solutions and
				mobile apps.
			</p>
			<div class="mt-14 text-base md:text-lg opacity-80">
				<a href="#"
					><span>Schedule a free discovery session</span
					><Icon
						name="mdi:arrow-top-right"
						color="rgb(255 204 0)"
						size="15"
						class="ml-2 w-fit h-fit bg-black rounded-full p-1"
				/></a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	definePageMeta({
		name: "homepage",
		layout: "shared-layout",
	});
	const welcomeMessages: readonly object[] = [
		{
			title: "Driving Success In Digital Commerce",
			text: "Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.",
		},
		{
			title: "Here Is What You Should Do For Design",
			text: "Level 8 Digital is a leading full-service omnichannel agency building digital experiences for clients across the globe. Our goal is to accelerate sales for our B2B and B2C clients by delivering award-winning digital storefronts, solutions and mobile apps.",
		},
	];

	const caseStudyGridData: readonly object[] = [
		{
			title: "Apollo Web Design",
			subtitle: "Website Work",
			img: "/images/img-2.jpeg",
		},
		{
			title: "Cenita Marketing Campaign",
			subtitle: "Marketing",
			img: "/images/img-3.jpeg",
		},
		{
			title: "Resurgance Brand Takeover",
			subtitle: "Branding",
			img: "/images/img-4.png",
		},
		{
			title: "Lamaran Garage",
			subtitle: "Branding",
			img: "/images/img-5.png",
		},
	];

	const rotatedGrid: readonly string[] = [
		"01",
		"02",
		"03",
		"04",
		"05",
		"06",
		"07",
		"Level8Digital",
	];

	const serviceArticleGrid: readonly object[] = [
		{
			title: "Why Understanding Your Tools Is Essential",
			image: "/images/service-image-1.png",
		},
		{
			title: "What Design Teams Can Learn From Nature",
			image: "/images/service-image-2.png",
		},
		{
			title: "Design Culture Has Changed, Here’s How.",
			image: "/images/service-image-3.png",
		},
		{
			title: "The Importance Of Understanding Color",
			image: "/images/service-image-4.png",
		},
	];
</script>
