<template>
  <div class="accordion w-full flex flex-col">
    <div class="py-2 w-full border-b border-[#ccc]">
      <div class="flex w-full h-[40px] items-center gap-2 p-[2px] text-black text-[16px] hover:cursor-pointer"
        @click="toggle">
        <i class="material-icons text-[16px] transition-all duration-300" :class="{ 'rotate-[-45deg]': !initialOpen }">close</i>
        <span>{{ title }}</span>
      </div>
      <div class="w-full overflow-hidden transition-all px-2 duration-200"
        v-show="initialOpen">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>

const { title, initialOpen } = defineProps(['title', 'initialOpen'])
const emit = defineEmits(['toggle'])

const toggle = () => {
  emit('toggle');
};

</script>