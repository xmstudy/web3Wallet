<template>
  <div>
    <div @click="reqAccount">请求账户</div>
  </div>
</template>

<script setup>
import Web3 from "web3";
// import {ref} from 'vue'
import MTKContract from "../abi/MyToken.json";
// console.log(MTKContract);
const web3 = new Web3(
  Web3.givenProvider ||
    "wss://goerli.infura.io/ws/v3/d547befff99d4addbcf3327397907eab"
);
// 合约
const Mycontract = new web3.eth.Contract(
  MTKContract.abi,
  "0x6b7eccFAf6cb642bEAD5b9a5308fDe78e1E22AC8"
);

console.log(Mycontract);
const reqAccount = () => {
  window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      // 用户已授权连接到以太坊账户
      console.log("Connected accounts:", accounts);
    })
    .catch((error) => {
      // 处理错误情况
      console.error("Error requesting accounts:", error);
    });
};
Mycontract.methods
  .name()
  .call()
  .then((res) => {
    console.log(res);
  });

</script>

<style lang="scss" scoped></style>
