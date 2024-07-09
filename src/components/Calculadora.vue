<script setup>
import { ref } from 'vue';

const num1 = ref(0);
const num2 = ref(0);
const operation = ref('adicao');
const result = ref(0);

const calcularResultado = () => {
    switch (operation.value) {
        case 'adicao':
            result.value = num1.value + num2.value;
            break;
        case 'subtracao':
            result.value = num1.value - num2.value;
            break;
        case 'multiplicacao':
            result.value = num1.value * num2.value;
            break;
        case 'divisao':
            result.value = num1.value / num2.value;
            break;
        default:
            result.value = 0;
    }
};
</script>

<template>
    <div class="calculator">
        <h2 class="mb-4">Calculadora Aritmética</h2>
        <div>
            <label for="num1">Insira o primeiro número:</label>
            <input type="number" id="num1" v-model.number="num1" @input="calcularResultado">
        </div>
        <div>
            <label for="num2">Insira o primeiro número:</label>
            <input type="number" id="num2" v-model.number="num2" @input="calcularResultado">
        </div>
        <div>
            <label for="operation">Operação:</label>
            <select id="operation" v-model="operation" @change="calcularResultado">
                <option value="adicao">Adição</option>
                <option value="subtracao">Subtração</option>
                <option value="multiplicacao">Multiplicação</option>
                <option value="divisao">Divisão</option>
            </select>
        </div>
        <div>
            <label class="pt-3">Resultado:</label>
            <span>{{ result }}</span>
        </div>
    </div>
</template>

<style>

.calculator {
    max-width: 400px;
    margin: 200px auto;
    color: rgb(61, 61, 61);
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

label {
    font-weight: bold;
}

input[type="number"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0 15px;
}

select {
    width: 100%;
    padding: 8px;
    margin: 5px 0 15px;
}

span {
    font-size: 18px;
    font-weight: bold;
}
    
</style>