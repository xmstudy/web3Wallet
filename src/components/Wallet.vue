<template>
  <div>
    hello
    <button @click="func">检测</button>
  </div>
  <!-- <div>
    <van-button type="primary" @click="create">创建钱包</van-button>
    <van-button type="primary">导入钱包</van-button>
  </div>
  <div>密码: <input type="text" v-model="pwd" /></div> -->
</template>

<script setup>
// import web3 from "web3";
// import { ref } from "vue";
// // import * as bip39 from 'bip39'
// // 创建钱包
// const create = () => {};
// const pwd = ref();
const func = async () => {
  const accounts = await window.ethereum

    .request({ method: "eth_requestAccounts" })
    // .catch(function () {
    //   alert("哦！NO, 好像发生了点意外。别着急, 我们很快修复它");
    // })
      console.log("account", accounts);
};
</script>

<style lang="scss" scoped></style>
