<template>
  <div class="count-box">
    <button @click="handleMinus" class="minus">-</button>
    <input :value="value" @change="handleChange" class="inp" type="text"/>
    <button @click="handleAdd" class="add">+</button>
  </div>
</template>

<script>
export default {
  name: 'CountBox',
  props: {
    value: {
      type: Number,
      default: 1
    }
  },
  methods: {
    handleAdd () {
      this.$emit('input', this.value + 1)
    },
    handleMinus () {
      this.$emit('input', Math.max(1, this.value - 1))
    },
    handleChange (e) {
      const num = +e.target.value
      if (isNaN(num) || num < 1) {
        e.target.value = this.value
        return
      }
      this.$emit('input', num)
    }
  }
}
</script>

<style lang="less">
.count-box {
  width: 110px;
  height: 30px;
  display: flex;

  .minus, .add {
    width: 30px;
    height: 30px;
    outline: none;
    border: none;
    background: #efefef
  }

  .inp {
    width: 40px;
    height: 30px;
    text-align: center;
    outline: none;
    border: none;
    background: #efefef;
    margin: 0 5px;
  }
}
</style>
