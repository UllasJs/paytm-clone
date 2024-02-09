<template>
  <div :style="{ width: `${sliderWidth + 100}px` }" class="border border-black rounded-lg p-3">
    <div class="flex flex-col items-center gap-4">
      <h1 class="text-[25px] font-bold">{{ name }}</h1>
      <p class="text-2xl capitalize font-serif">percent : {{ parseInt(percentageX / 5) * 5 }}%</p>
      <div @mousedown="clickButton" :style="{ width: `${sliderWidth}px` }"
        class="h-[5px] rounded-[35px] relative bg-green-300 my-5 silder_outter_div">
        <div ref="slider"
          class="w-[35px] h-[15px] rounded-full shadow-2xl top-[50%] translate-y-[-50%] absolute bg-red-400 slider_button cursor-pointer"
          :style="{ left: `${posX}px` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

const { sliderWidth, name } = defineProps(['sliderWidth', 'name']);

console.log(sliderWidth);
console.log(name);

const offsetX = ref(0)
const offsetY = ref(0)
const posX = ref(0)
const percentageX = ref(0);

const clickButton = (e) => {
  offsetX.value = e.clientX - e.target.getBoundingClientRect().left
  offsetY.value = e.clientY - e.target.getBoundingClientRect().top
  document.addEventListener('mousemove', dragButton)
  document.addEventListener('mouseup', saveBtnPos)
}

const dragButton = (e) => {
  const newX = e.clientX - offsetX.value - document.querySelector('.silder_outter_div').getBoundingClientRect().left;
  const minPosX = 0
  const maxPosX = document.querySelector('.silder_outter_div').clientWidth - document.querySelector('.slider_button').clientWidth;
  posX.value = Math.max(minPosX, Math.min(maxPosX, newX))

  // Calculate percentage
  const percentage = (posX.value / maxPosX) * 100;
  percentageX.value = Math.round(percentage);
}

const saveBtnPos = () => {
  document.removeEventListener('mousemove', dragButton);
  document.removeEventListener('mouseup', saveBtnPos);
}


onMounted(() => {
  const maxPositionX = document.querySelector('.silder_outter_div').clientWidth - document.querySelector('.slider_button').clientWidth;
  const percentage = (posX.value / maxPositionX) * 100;
  percentageX.value = Math.round(percentage);
});

</script>