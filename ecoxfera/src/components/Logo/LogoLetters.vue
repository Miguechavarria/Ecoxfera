<template>
  <div class="logo-letters" :key="renderKey">
    <img
      v-for="(letter, i) in letters"
      :key="letter.name"
      :src="letter.src"
      class="logo-letter"
      :class="{ [letter.animClass]: animState }"
      alt=""
    />
  </div>
</template>

<script setup>
  import { defineProps, ref, watch } from 'vue'

  const props = defineProps({
    animState: { type: Boolean, required: true}
})

const renderKey = ref(0)

watch(() => props.animState, val =>{
  if(val){
    renderKey.value++
  }
})

import L_E from '@/assets/logo/L_E.svg'
import L_A from '@/assets/logo/L_A.svg'
import L_C from '@/assets/logo/L_C.svg'
import L_E2 from '@/assets/logo/L_E2.svg'
import L_O from '@/assets/logo/L_O.svg'
import L_R from '@/assets/logo/L_R.svg'
import L_X from '@/assets/logo/L_X.svg'
import L_F from '@/assets/logo/L_F.svg'

const letters = [
 { name: 'L_E', src: L_E, animClass:'fadeIN-LE'},
 { name: 'L_A', src: L_A, animClass:'fadeIN-LA'},
 { name: 'L_C', src: L_C, animClass:'fadeIN-LE'},
 { name: 'L_E2', src: L_E2, animClass:'fadeIN-LE'},
 { name: 'L_O', src: L_O, animClass:'fadeIN-LE'},
 { name: 'L_R', src: L_R, animClass:'fadeIN-LE'},
 { name: 'L_X', src: L_X, animClass:'fadeIN-LE'},
 { name: 'L_F', src: L_F, animClass:'fadeIN-LE'}
]

</script>

<style scoped>
.logo-letters{
  position: relative;
  display: flex;
  opacity: 0;
  width: 80px;
  height: auto;
}


</style>

