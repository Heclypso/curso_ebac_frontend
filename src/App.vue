<script setup>
import { reactive } from 'vue';
import Calculadora from './components/Calculadora.vue';

const estado = reactive({
  num1: 0,
  num2: 0,
  operation: 'adicao',
  result: 0
});
</script>

<template>
  <div class="container">
    <Calculadora :num1="estado.num1" :num2="estado.num2" :operation="estado.operation" :result="estado.result" />
  </div>
</template>

<style>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}
</style>
