<template>
  <div
    class="w-full h-screen flex flex-col items-start px-[20px] py-[50px] gap-3 sm:gap-5 lg:gap-6 xl:px-[120px] 2xl:px-[226px]">
    <div class="w-full border-b border-[#ccc] justify-center lg:justify-between pb-5 flex">
      <div class="hidden lg:flex items-center gap-4">
        <div class="flex flex-col text-[20px] font-semibold">
          <span>Download Paytm App</span>
          <span>to Pay from anywhere</span>
        </div>
        <nuxt-link to="/"
          class="bg-black flex gap-1 items-center px-3 pl-1 py-1 rounded-lg text-white border hover:border-black hover:bg-white hover:text-black transition-all duration-300">
          <Icon class="text-[35px]" name="ic:round-apple" />
          <div class="flex flex-col text-[20px]">
            <span class="text-[11px] tracking-wide">Download on the</span>
            <span>App Store</span>
          </div>
        </nuxt-link>
        <nuxt-link to="/"
          class="bg-black flex gap-1 items-center px-3 pl-1 py-1 rounded-lg text-white border hover:border-black hover:bg-white hover:text-black transition-all duration-300">
          <Icon class="text-[35px]" name="ion:logo-google-playstore" />
          <div class="flex flex-col text-[20px]">
            <span class="text-[11px] tracking-wide">GET IT ON</span>
            <span>Google Play</span>
          </div>
        </nuxt-link>
      </div>
      <div class="flex text-[28px] justify-center items-center gap-6 text-gray-500">
        <nuxt-link to="/">
          <Icon name="ri:twitter-x-line" />
        </nuxt-link>
        <nuxt-link to="/">
          <Icon name="uim:instagram" />
        </nuxt-link>
        <nuxt-link to="/">
          <Icon name="gg:facebook" />
        </nuxt-link>
        <nuxt-link to="https://github.com/">
          <Icon name="ri:github-fill" />
        </nuxt-link>
        <nuxt-link to="https://www.linkedin.com/">
          <Icon name="ri:linkedin-box-line" />
        </nuxt-link>
      </div>
    </div>
    <div class="w-full">
      <Acord />
    </div>
    <div class="w-full">
      <Slider :sliderWidth="500" :name="'Paytm Money'" />
    </div>
  </div>
</template>

