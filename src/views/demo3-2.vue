<template>
    <span class="ao"></span>
    <span class="tu"></span>
</template>
<style lang="scss" scoped>
.ao,
.tu {
  display: inline-block;
  width: 0;
  font-size: 14px;
  line-height: 18px;
  margin: 35px;
  color: #fff;
}
.ao:before,
.tu:before {
  outline: 2px solid #cd0000;
  font-family: Consolas, Monaco, monospace;
}
.ao:before {
  content: "love你love";
}
.tu {
  direction: rtl;
}
.tu:before {
  content: "我love你";
}
</style>
