<template>
  <div class="bg-blue-300 h-[100px] flex flex-col border border-black" :style="{ width: `${sliderWidth + 100}px` }">
    <div class="flex w-full justify-center items-center gap-10">
      <p>Min: {{ minVal }}</p>
      <p>Max: {{ maxval }}</p>
    </div>
    <div class="bg-white w-full h-full flex justify-center items-center">
      <div class="h-full flex justify-center items-center">
        <div class="h-[2px] bg-red-600 relative silder_outter_div" :style="{ width: `${sliderWidth}px` }">
          <div @mousedown="clickButtonLeft" @mouseup="stopBtn"
            class="w-4 h-4 bg-green-500 rounded-full absolute top-[50%] translate-y-[-50%] cursor-pointer slider_button_left z-30 shadow-2xl"
            :style="{ left: `${minPosX}px` }"></div>
          <div class="absolute translate-y-[-50%] z-10 h-[5px] bg-gray-400 min-w-[100px] text-center overflow-hidden"
            :style="{
              width: `${limitSlider}px`,
              left: `${minPosX}px`,
              right: `${maxPosX}`,
            }"></div>
          <div @mousedown="clickButtonRight" @mouseup="stopBtn"
            class="w-4 h-4 bg-orange-500 rounded-full absolute top-[50%] translate-y-[-50%] cursor-pointer z-30 slider_button_right shadow-xl"
            :style="{ left: `${maxPosX}px` }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { sliderWidth, name, left, right, limit } = defineProps([
  "sliderWidth",
  "name",
  "left",
  "right",
  "limit",
]);
const limitSlider = ref(sliderWidth);

const minLimit = ref(100);

const minVal = ref(left)
const maxval = ref(right)

const minPosX = ref(0);
const offsetMin = ref(0);
const percentX = ref(0);

const maxPosX = ref(sliderWidth);
const offsetMax = ref(0);
const percentXmax = ref(1);

const clickButtonLeft = (e) => {
  offsetMin.value = e.clientX - e.target.getBoundingClientRect().left;
  document.addEventListener("mousemove", dragButtonLeft);
  document.addEventListener("mouseup", saveBtnPosLeft);
};

const clickButtonRight = (e) => {
  offsetMax.value = e.clientX - e.target.getBoundingClientRect().right;
  document.addEventListener("mousemove", dragButtonRight);
  document.addEventListener("mouseup", saveBtnPosRight);
};

const dragButtonLeft = (e) => {
  const newX =
    e.clientX -
    offsetMin.value -
    document.querySelector(".silder_outter_div").getBoundingClientRect().left;
  const min = 0;
  const max =
    document.querySelector(".silder_outter_div").clientWidth -
    document.querySelector(".slider_button_left").clientWidth;
  minPosX.value = Math.max(min, Math.min(max, newX));
};

const dragButtonRight = (e) => {
  const newX =
    e.clientX -
    offsetMax.value -
    document.querySelector(".silder_outter_div").getBoundingClientRect().left;
  const min = 0;
  const max =
    document.querySelector(".silder_outter_div").clientWidth -
    document.querySelector(".slider_button_right").clientWidth;
  maxPosX.value = Math.max(min, Math.min(max, newX));
};

onUpdated(() => {
  limitSlider.value = maxPosX.value - minPosX.value;
  const max =
    document.querySelector(".silder_outter_div").clientWidth -
    document.querySelector(".slider_button_right").clientWidth;

  const minPercent = Math.round((minPosX.value / max) * 100)
  const maxPercent = Math.round((maxPosX.value / max) * 100)

  percentX.value = minPercent
  minVal.value = right * percentX.value / 100

  percentXmax.value = maxPercent
  maxval.value = right * percentXmax.value / 100

  
});

const saveBtnPosLeft = () => {
  if (minLimit.value >= limitSlider.value) {
    minPosX.value = maxPosX.value - minLimit.value;
  }
  document.removeEventListener("mousemove", dragButtonLeft);
  document.removeEventListener("mouseup", saveBtnPosLeft);
};
const saveBtnPosRight = () => {
  if (minLimit.value >= limitSlider.value) {
    maxPosX.value = minPosX.value + minLimit.value;
  }
  document.removeEventListener("mousemove", dragButtonRight);
  document.removeEventListener("mouseup", saveBtnPosRight);
};
</script>

<style scoped></style>
