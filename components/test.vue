<template>
  <div class="bg-blue-300 h-[100px] flex flex-col" :style="{ width: `${sliderWidth + 100}px` }">
    <div class="flex w-full justify-center items-center gap-10">
      <p>Min: {{ minVal }}</p>
      <p>Max: {{ maxVal }}</p>
    </div>
    <div class="bg-white w-full h-full flex justify-center items-center">
      <div class="h-2 bg-red-600 relative silder_outter_div" :style="{ width: `${sliderWidth}px` }">
        <div @mousedown="clickButtonLeft"
          class="w-4 h-4 bg-green-500 absolute top-[50%] translate-y-[-50%] cursor-pointer slider_button_left z-10"
          :style="{ left: `${minPosX}px` }"></div>
        <div @mousedown="clickButtonRight"
          class="w-4 h-4 bg-orange-500 absolute top-[50%] translate-y-[-50%] cursor-pointer z-10 slider_button_right"
          :style="{ left: `${maxPosX}px` }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { sliderWidth, name, multiplyer } = defineProps(['sliderWidth', 'name', 'multiplyer']);


const minPosX = ref(0)
const offsetMin = ref(0)
const minVal = ref(0)
const maxVal = ref(100)

const maxPosX = ref(sliderWidth - 100)
const offsetMax = ref(0)

const clickButtonLeft = (e) => {
  offsetMin.value = e.clientX - e.target.getBoundingClientRect().left
  document.addEventListener('mousemove', dragButtonLeft)
  document.addEventListener('mouseup', saveBtnPosLeft)
}
const clickButtonRight = (e) => {
  offsetMax.value = e.clientX - e.target.getBoundingClientRect().right
  document.addEventListener('mousemove', dragButtonRight)
  document.addEventListener('mouseup', saveBtnPosRight)
}

const dragButtonLeft = (e) => {
  const newX = e.clientX - offsetMin.value - document.querySelector('.silder_outter_div').getBoundingClientRect().left;
  const min = 0
  const max = document.querySelector('.silder_outter_div').clientWidth - document.querySelector('.slider_button_left').clientWidth;
  minPosX.value = Math.max(min, Math.min(max, newX))

  // Calculate percentage
  const percentage = (minPosX.value / max) * 100;
  minVal.value = Math.round(percentage);
}

const dragButtonRight = (e) => {
  const newX = e.clientX - offsetMax.value - document.querySelector('.silder_outter_div').getBoundingClientRect().left;
  const min = 0
  const max = document.querySelector('.silder_outter_div').clientWidth - document.querySelector('.slider_button_right').clientWidth;
  maxPosX.value = Math.max(min, Math.min(max, newX))

  // Calculate percentage
  const percentage = (maxPosX.value / max) * 100;
  maxVal.value = Math.round(percentage);
}

const saveBtnPosLeft = () => {
  document.removeEventListener('mousemove', dragButtonLeft);
  document.removeEventListener('mouseup', saveBtnPosLeft);
}
const saveBtnPosRight = () => {
  document.removeEventListener('mousemove', dragButtonRight);
  document.removeEventListener('mouseup', saveBtnPosRight);
}

</script>

<style scoped></style>