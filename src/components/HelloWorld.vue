<template>
  <div>
    <!-- <div @click="reqAccount">获取账户</div> -->
    <div @click="Login">登录</div>
    <div>
      当前账户: {{ account }} || 0x3bcf0250cdb3c09078a2e16e1be395133d01ed41
    </div>
    <div @click="zhuanzhang">转账</div>
  </div>
</template>

<script setup>
import Web3 from "web3";
import MTKContract from "../abi/MyToken.json";
import { ref } from "vue";
const web3 = new Web3(
  Web3.givenProvider ||
    "wss://goerli.infura.io/ws/v3/d547befff99d4addbcf3327397907eab"
);
// 合约
const Mycontract = new web3.eth.Contract(
  MTKContract.abi,
  "0x6b7eccFAf6cb642bEAD5b9a5308fDe78e1E22AC8"
);

// console.log(Mycontract);
const account = ref();
// 登录获取 授权metamask
const Login = () => {
  window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      // 用户已授权连接到以太坊账户
      console.log("Connected accounts:", accounts);
      account.value = accounts[0];
    })
    .catch((error) => {
      // 处理错误情况
      console.error("Error requesting accounts:", error);
    });
};
// 转账
const zhuanzhang = async () => {
  // 从私钥中导入账户
  const privateKey = "YOUR_PRIVATE_KEY";
  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  console.log('axxount',account);
  debugger
  // 账户
  // const account = "0x3bcf0250cdb3c09078a2e16e1be395133d01ed41";

  // 设置默认账户
  web3.eth.defaultAccount = account.address;

  // 接收方地址
  const toAddress = "0xF04F3a4f7D9a9c6807DbEa2e23848b809e293E9d";

  // 转账金额（以 wei 为单位，1 ether = 10^18 wei）
  const amountInWei = web3.utils.toWei("0.1", "ether");

  // 构建交易对象
  const txObject = {
    from: account.address,
    to: toAddress,
    value: amountInWei,
    gas: 21000, // gas 限额
    gasPrice: web3.utils.toWei("10", "ether"), // gas 价格
    nonce: await web3.eth.getTransactionCount(account.address), // 交易的 nonce 值
  };

  // 签名交易
  const signedTx = await web3.eth.accounts.signTransaction(
    txObject,
    privateKey
  );

  // 发送交易
  web3.eth
    .sendSignedTransaction(signedTx.rawTransaction)
    .on("transactionHash", (hash) => {
      console.log(`Transaction hash: ${hash}`);
    })
    .on("receipt", (receipt) => {
      console.log("Transaction receipt:", receipt);
    })
    .on("error", (error) => {
      console.error("Error:", error);
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
