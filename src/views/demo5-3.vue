<template>
  <div class="doc-title">
    <h2>动态改变 transition-duration</h2>
    <p>利用上述的，小技巧，我们可以实现一个纯 CSS 的签名板。</p>
    <p>
      首先，在高宽都为 500px 的容器中，实现一个 100x100 的 HTML 网格布局，利用
      flex、grid 都行
    </p>
  </div>
  <div class="doc-example">
    <div class="g-container">
        <div class="g-wrap">
        </div>
        <div class="g-btn"></div>
        <div class="g-box">
            <div v-for="i in num" class="g-row" :key="i">
                <div  v-for="j in num" class="g-item" :key="j">
                    <!-- {{`${i}-${j}`}} -->
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const num = 100;
// function genTablecell() {
//     const arr1 = [];
//     for (let i =0; i< 100; i++) {
//         arr1.push(i);
//         const arr2 = [];
//         for (let j = 0; j < 100; j++) {
//             arr2.push(j);
//         }
//     }
// }

</script>
<style lang="scss" scoped>
// .doc-title {
//     margin-bottom: 30px;
//     h2 {
//         font-size: 15px;
//         margin-bottom: 10px;
//     }
// }
.doc-example {
}
body,
html {
  width: 100%;
  height: 100%;
  display: flex;
  caret-color: transparent;
}

.g-container {
  position: relative;
  width: 500px;
  height: 500px;
  margin: auto;
  border: 2px solid #333;
}

.g-box {
  position: relative;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  z-index: 1;
}

.g-wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;

  &:active {
    display: none;
    // z-index: 0;
  }
}

.g-btn {
  position: absolute;
  top: -36px;
  border: 1px solid #666;
  padding: 5px;
  cursor: pointer;
  background: #fff;
  &:active {
    user-select: none;
    filter: contrast(0.8);
  }
}

.g-btn:active ~ .g-box .g-item {
  transition: 0s;
  display: none;
}

.g-row {
  width: 500px;
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.g-item {
  flex-grow: 1;
  transition: 999999s;
}

.g-item:hover {
  background: #000;
  transition: 0s;
}
</style>
