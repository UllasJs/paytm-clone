<template>
  <div class="accordion w-full flex flex-col">
    <div class="py-2 w-full border-b border-[#ccc]">
      <div class="flex w-full h-[40px] bg-red-400 items-center justify-between p-[2px] text-black text-[12px] hover:cursor-pointer" @click="open = !open">
        <span>Investor Relations</span>
        <i class="material-icons text-[16px]">add</i>
      </div>
      <div class="overflow-hidden py-3 transition-all duration-200" :class="{ 'h-0 py-0': open, '': !open }">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequatur aliquid reiciendis
          cupiditate dolorem nesciunt nisi tenetur nostrum tempora quis minima recusandae, dolore veritatis adipisci?</p>
      </div>
    </div>
  </div>
</template>

<script setup>

const open = ref(false)

console.log(open.value);
</script>