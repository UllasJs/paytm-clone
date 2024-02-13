<template>
  <div
    class="w-full flex flex-col items-start px-[20px] py-[50px] gap-3 sm:gap-5 lg:gap-6 xl:px-[120px] 2xl:px-[226px]">
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
      <Acord title="Investor Relations" :initialOpen="openAcord === 1" @toggle="toggleAccord(1)">
        <ul class="w-full flex flex-col justify-around">
          <li>
            <InneraccordAccordion title="Home" :initialOpen="innerAcord === 1" @toggle="toggleInnerAcord(1)">
              <ul class="flex flex-col sm:flex-row gap-5 px-2 py-3 transition-all duration-300 text-[#ccc] text-[13.5px] tracking-wider">
                <li>
                  <nuxt-link class="hover:text-[#1d2c38] transition-all duration-300 hover:text-[14px]" to="/">Overview</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="hover:text-[#1d2c38] transition-all duration-300 hover:text-[14px]" to="/">Our Business</nuxt-link>
                </li>
              </ul>
            </InneraccordAccordion>
          </li>
          <li>
            <InneraccordAccordion title="Financials" :initialOpen="innerAcord === 2" @toggle="toggleInnerAcord(2)">
              <ul class="flex flex-col sm:flex-row gap-5 px-2 py-3 transition-all duration-300 text-[#ccc] text-[13.5px] tracking-wider">
                <li>
                  <nuxt-link class="hover:text-[#1d2c38] transition-all duration-300 hover:text-[14px]" to="/">Financial Results</nuxt-link>
                </li>
                <li>
                  <nuxt-link class="hover:text-[#1d2c38] transition-all duration-300 hover:text-[14px]" to="/">Our Business</nuxt-link>
                </li>
              </ul>
            </InneraccordAccordion>
          </li>
        </ul>
      </Acord>
      <Acord title="Investor Relations" :initialOpen="openAcord === 2" @toggle="toggleAccord(2)">
        test
      </Acord>
      <Acord title="Investor Relations" :initialOpen="openAcord === 3" @toggle="toggleAccord(3)">
        test
      </Acord>
      <Acord title="Investor Relations" :initialOpen="openAcord === 4" @toggle="toggleAccord(4)">
        test
      </Acord>
    </div>
    <!-- <Slider :sliderWidth="500" name="Range" multiplyer="1" /> -->
  </div>
</template>

<script setup>
const openAcord = ref(0)

const innerAcord = ref(0)

const toggleInnerAcord = (index) => {
  if (innerAcord.value === index) {
    innerAcord.value = 0;
  } else {
    innerAcord.value = index
  }
}

const toggleAccord = (index) => {
  if (openAcord.value === index) {
    openAcord.value = 0;
  } else {
    openAcord.value = index
  }
}

</script>

