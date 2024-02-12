<template>
  <div class="w-full flex justify-center items-center">
    <Test name="test" :sliderWidth="300" :limit="500" :left="0" :right="5000" :steps="15" />
    <!-- add height in the props -->
    <!-- <Slider name="slider" :sliderWidth="500" multiplyer="1"/> -->
  </div>
</template>