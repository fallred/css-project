<template>
  <div class="doc-example">
    <div class="g-yasuo"></div>

    <div class="g-barrage-container">
        <div v-for="i in num" :key="i" class="g-barrage">6666666666666</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const num = 30;
</script>
<style lang="scss">
$count: 30;
$img: "https://test-files.genshuixue.com/umeng-content-platform/image/c5a90c6a-5257-48ef-b163-5eeecac1bf4b.jpg";

.doc-example {
  width: 100%;
  height: 500px;
  display: flex;
  background: url($img);
  background-size: cover;
}
// body {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   background: url($img);
//   background-size: cover;
// }

.g-yasuo {
  position: absolute;
  top: 40px;
  left: 40px;
  width: 120px;
  height: 120px;
  background: url(https://s3.ax1x.com/2021/02/06/ytA3T0.png);
  background-size: cover;
  animation: move 10s infinite alternate;
}

@keyframes move {
  100% {
    transform: translate(calc(85vw), 0);
  }
}

.g-barrage-container {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  // background: radial-gradient(circle at 100px 100px, transparent 60px, #fff 80px, #fff 100%);
  mask: radial-gradient(
    circle at 100px 100px,
    transparent 60px,
    #fff 80px,
    #fff 100%
  );
  animation: mask 10s infinite alternate;
}

@keyframes mask {
  100% {
    mask-position: 85vw 0;
  }
}

.g-barrage {
  position: absolute;
  color: #fff;
  font-size: 24px;
  opacity: 0.8;
}

@for $i from 1 to $count + 1 {
  .g-barrage:nth-child(#{$i}) {
    color: rgb(255, 255, calc(#{$i} * 10));
    top: calc(#{$i % 10} * 18px);
    animation: move
      calc(#{$i * 0.2}s + 10s)
      infinite
      calc(#{$i * 2} * -1s)
      linear;
  }
}
</style>
