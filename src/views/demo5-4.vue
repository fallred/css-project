<template>
  <div class="doc-title">
    <h2>反向利用 animation-play-state 实现 hover 触发动画行进</h2>
    <p>
      而动画通过 hover 驱动，只有用户 hover 元素的时候，动画才进行这一点，利用
      animation-play-state 即可。
    </p>
    <p>
      我们都知道，正常情况下，动画应该是运行状态，那如果我们将动画的默认状态设置为暂停，只有当鼠标点击或者
      hover 的时候，才设置其 animation-play-state: running，这样就可以利用 hover
      控制动画的行进！
    </p>
    <p>
      基于上述两点，我们来实现一个有意思的打字动画，做到动画只触发单次，并且只有
      hover 的时候动画会运行。
    </p>
    <p>
      当然，这里还运用了几个小技巧，一并解释下：
      打字动画运用了逐帧动画，而不是补间动画，主要利用了 CSS 动画的
      step-timing-function 步骤缓动函数，也就是代码中的 steps(15, end) ch 是 CSS
      当中的一个相对单位，这一单位代表元素所用字体 font 中 “0” 这一字形的宽度
      font-family: monospace
      表示等宽字体，每个字符占据的宽度是一样，因为我们使用了 26ch
      来充当元素的宽度，而 Hover Me - You are a pig 这一段文字算上空格刚好 26
      个字符，26ch 刚好表示这一段文本的长度 一开始展示的文本 Hover me -
      算上空格是 11ch 宽度，而最后整个文本展示完需要 26ch 的宽度，中间需要经过
      15 步的逐帧动画，这里的元素刚好和代码中的一一对应上 借助上面 4
      步及搭配我们上文介绍的 animation-fill-mode: both、animation-play-state:
      paused 的应用，我们就完美的实现了这样一个非常有意思的打字动画。
    </p>
  </div>
  <div class="doc-example">
    <div class="animate-target">Hover Me - You are a pig!</div>
  </div>
</template>

<script lang="ts" setup></script>
<style lang="scss" scoped>
.doc-example {
}
html,
body {
  width: 100vw;
  height: 100vh;
  font-family: monospace;
  padding: 20px;
}
.doc-title p {
  margin-bottom: 10px;
}
.animate-target:hover {
  animation-play-state: running;
}

.animate-target {
  position: relative;
  width: 26ch;
  color: #000;
  font-size: 48px;
  animation: typing 3s steps(15, end);
  animation-fill-mode: both;
  animation-play-state: paused;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  &::before {
    position: absolute;
    content: "";
    width: 4px;
    top: 0;
    bottom: 0;
    right: 0;
    animation: blink 0.8s infinite;
  }
}

@keyframes blink {
  0%,
  50% {
    border-right: 4px solid transparent;
  }
  50%,
  100% {
    border-right: 4px solid #000;
  }
}

@keyframes typing {
  from {
    width: 11ch;
  }
  to {
    width: 26ch;
  }
}
</style>
