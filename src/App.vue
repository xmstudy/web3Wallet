<template>
  <HelloWorld></HelloWorld>
</template>
<script setup>

import HelloWorld from "./components/HelloWorld.vue";

// let isRequesting = false;

// function requestAccounts () {
//          window.ethereum.enable().then(res=>{
//           console.log(res);
//          });

//   // window.addEventListener("load", async () => {
//   //   // Modern dapp browsers...
//   //   if (window.ethereum) {
//   //     let ethereum = window.ethereum;
//   //     window.web3 = new Web3(ethereum);
//   //     try {
//   //       // Request account access if needed
//   //       await ethereum.enable();
//   //       // Acccounts now exposed
//   //       window.web3.eth.sendTransaction({
//   //         /* ... */
//   //       });
//   //     } catch (error) {
//   //       // User denied account access...
//   //     }
//   //   }
//   //   // Legacy dapp browsers...
//   //   else if (window.web3) {
//   //     window.web3 = new Web3(window.web3.currentProvider);
//   //     // Acccounts always exposed
//   //     window.web3.eth.sendTransaction({
//   //       /* ... */
//   //     });
//   //   }
//   //   // Non-dapp browsers...
//   //   else {
//   //     console.log(
//   //       "Non-Ethereum browser detected. You should consider trying MetaMask!"
//   //     );
//   //   }
//   // });
//   //   if (!isRequesting) {
//   //     isRequesting = true;
//   //     window.ethereum
//   //       .request({ method: "eth_requestAccounts" })
//   //       .then((accounts) => {
//   //         isRequesting = false;
//   //         // 用户已授权，accounts 中包含用户账户地址
//   //         console.log(accounts);
//   //       })
//   //       .catch((error) => {
//   //         isRequesting = false;
//   //         // 用户拒绝了授权或发生了错误
//   //         console.log(error);
//   //       });

//   //     // 设置一个超时，如果一段时间后仍然没有得到响应，取消请求
//   //     setTimeout(() => {
//   //       if (isRequesting) {
//   //         isRequesting = false;
//   //         // 取消请求或执行相应的操作
//   //         console.log("请求超时");
//   //         alert('你拒绝了 请重启')
//   //       }
//   //     }, 10000); // 设置超时时间，单位为毫秒（这里设置为10秒）
//   //   }
// }
</script>
<!-- <script setup>
import BtnBiew from '@/components/Wallet.vue'
import { ref } from "vue";
import Web3 from "web3";
// import Tx from "ethereumjs-tx";
const Tx = require("ethereumjs-tx");
const web3 = new Web3(
  Web3.givenProvider ||
    "wss://goerli.infura.io/ws/v3/d547befff99d4addbcf3327397907eab"
);
//https://app.infura.io/dashboard/ethereum/d547befff99d4addbcf3327397907eab/settings/endpoints 在这里查看
console.log(web3);
// 高频API
//1. 创建账号
// const account = web3.eth.accounts.create()  //这里会有当前账号地址 签名 私钥 ...
const account = ref("0xC879bb2e0EA832CfC3be9Ac4b0566730ae559F44");
// const account = ref("0x3bcF0250cdB3C09078a2e16E1bE395133D01eD41");
const privateKey = ref(
  "0x52d2933ad8524eff95859e164945ec84704ad89ea0f0641a93d3df78a297c262"
  // "9bc91168f14e862632581768d7fc7e4b20d599f15a838012b8da1d79116926d8"
);
// 2.余额获取
// web3.eth.getBalance('账号地址')
web3.eth.getBalance(account.value).then((res) => {
  console.log("res", res);
});
//3. 单位转换转 单位 wei
const wei = web3.utils.toWei("0.3", "ether");
const ether = web3.utils.fromWei("300000000000000000", "ether");
console.log("wei", wei);
console.log("ether", ether);
// const send = async () => {
//   // 4. 转账
//   const nonce = await web3.eth.getTransactionCount(account.value); //交易次数
//   // 获取gas 费用
//   const gasPrice = await web3.eth.getGasPrice();
//   console.log(gasPrice);
//   const value = web3.utils.toWei("0.01", "ether");
//   console.log("value", value);
//   const rawTx = {
//     from: account.value,
//     to: "0x01ed4Fc9D2B2a5df56592667087B4e35eB310960",
//     nonce: nonce, //次数
//     gasPrice,
//     value, //价值
//     data: "0x00",
//   };
//   console.log("rawTx", rawTx);
//   // 生成 serializedTx
//   // 转化私钥
//   const privateKey1 = Buffer(privateKey.value.slice(2), "hex");
//   console.log("privateKey1", privateKey1);

//   // gas估算
//   // const gas = await web3.eth.estimateGas(rawTx);
//   // console.log("gas", gas);
//   // rawTx.gas = gas;
//   console.log("rawTx", rawTx);
//   // 加密
//   // console.log(Tx, rawTx);
//   const tx = new Tx(rawTx);
//   tx.sign(privateKey1);
//   console.log(tx);
//   const serializedTx = tx.serialize();
//   console.log("serializedTx", serializedTx);

//   // var serializedTx = tx.serialize();
//   // console.log("serializedTx", serializedTx);

//   // const serializedTx = `0x${tx.serialize().tostring('hex')}`
//   //   // 转账
//   //   const trans = web3.eth.sendSignedTransaction(serializedTx)
//   //   trans.on('transactionHash',(txid)=>{

//   //   })
//   //   trans.on('receipt',()=>{
//   //     // 第一个节点确认
//   //   })
//   //   trans.on('confirmation',()=>{
//   //     // 第n个
//   // })
// };
</script> -->

<style lang="scss" scoped></style>
