<template>
  <div class="doc-title">
    <h2>transform-origin 去改变 transform: scale() 的原点实现线条运动的方向</h2>
    <ul>
        <li>1. 我们给线条设置一个默认的 transform-origin 记为状态1;</li>
        <li>2. hover 的时候，设置另外一个不同的 transform-origin, 记为状态2</li>
    </ul>
    <p>
      所以，当然我们 hover 的时候，会读取状态2的transform-origin，从该原点开始放大至 scaleX(1),
      hover 离开的时候，会读取状态1的transform-origin，从scaleX(1)状态缩小至该原点。
    </p>
  </div>
  <div class="doc-example">
    <div class="animate-target">Hover Me</div>
  </div>
</template>
<style lang="scss" scoped>
.animate-target {
  width: 200px;
  height: 60px;
  line-height: 60px;
  font-size: 32px;
  cursor: pointer;
  color: #333;
  text-align: center;
  transition: color 0.5s;
  margin: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.animate-target::before {
  content: "";
  position: absolute;
  left: 0%;
  bottom: 0;
  width: 200px;
  transform: scaleX(0);
  height: 2px;
  background: deeppink;
  z-index: -1;
  transition: transform 0.5s;
  transform-origin: 100% 0;
}

.animate-target:hover::before {
  transform: scaleX(1);
  transform-origin: 0 0;
}
</style>
