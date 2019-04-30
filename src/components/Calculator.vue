<template>
  <div class="Calculator">
   <table cellspacing="10">
      <tr>
        <td colspan="4">
          <input type="text" v-model="result" disabled>
        </td>
      </tr>
      <tr>
        <td class="button seven" @click="addNumber(7)">7</td>
        <td class="button eight" @click="addNumber(8)">8</td>
        <td class="button nine" @click="addNumber(9)">9</td>
        <td class="operator times" @click="setOperator('*')">x</td>
      </tr>
      <tr>
        <td class="button four" @click="addNumber(4)">4</td>
        <td class="button five" @click="addNumber(5)">5</td>
        <td class="button six" @click="addNumber(6)">6</td>
        <td class="operator subtract" @click="setOperator('-')">-</td>
      </tr>
      <tr>
        <td class="button one" @click="addNumber(1)">1</td>
        <td class="button two" @click="addNumber(2)">2</td>
        <td class="button three" @click="addNumber(3)">3</td>
        <td class="operator add" @click="setOperator('+')">+</td>
      </tr>
      <tr>
        <td class="button zero" @click="addNumber(0)">0</td>
        <td class="button clear" @click="clear">C</td>
        <td class="operator divide" @click="setOperator('/')">÷</td>
        <td class="operator equals" @click="equal">=</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        result: 0,
        tmp_value: 0,
        reset: false,
        operator: undefined
      }
    },
    methods: {
      
      clear() {
        this.result = 0;
        this.tmp_value = 0;
        this.operator = undefined;
      },
      addNumber(number) {
        if(this.result == 0 || this.reset === true) {
          this.result = '';
          this.reset = false;
        }
        this.result += number.toString();
      },
      setOperator(operator) {
        if(this.tmp_value != 0)
        this.calculate();
        this.tmp_value = this.result;
        this.operator = operator;
        this.reset = true;
      },
      equal() {
        this.calculate();
        this.tmp_value = 0;
        this.operator = undefined;
      },
      calculate() {
        let value = 0;
        let firstNum = parseFloat(this.tmp_value);
        let secondNum = parseFloat(this.result);
        switch(this.operator) {
          case '+':
            value = firstNum + secondNum;
            break;
          case '-':
            value = firstNum - secondNum;
            break;
          case '*':
            value = firstNum * secondNum;
            break;
          case '/':
            value = firstNum / secondNum;
        }
        this.result = value.toString();
    }
  }
}
</script>

<style>
.Calculator {
  display: flex;
  margin: 0 auto;
  height: 100vh;
  width: 200px;
  font-size: 25px;
}

table {
      width: 370px;
}

input {
      display: block;
      text-align: right;
      height: 30px;
}

.operator {
    background-color: orange;
    border: 1px solid gray;
}

.button {
    background-color:whitesmoke;
    border: 1px solid gray;
}
</style>
