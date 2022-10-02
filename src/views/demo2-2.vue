<template>
  <!-- This HTML is invalid and just for demo purposes. Don't use multiple main elements! -->
  <div class="doc-title">
    <h2>1.宽度不固定</h2>
    <!-- <p>
        li 的宽度是不固定的。所以，我们可能需要从 li 本身的宽度上做文章。
        既然每个 li 的宽度不一定，那么它对应的下划线的长度，肯定是是要和他本身相适应的。自然而然，我们就会想到使用它的 border-bottom 。
        </p>
        <p>
        推翻重来，借助伪元素: 这样好像不行，因为隐藏之后，hover li 的时候，需要下划线动画，而 li 本身肯定是不能移动的。所以，我们考虑借助伪元素。将下划线作用到每个 li 的伪元素之上。
        </p>
        <p>
        下面考虑第一步的动画，hover 的时候，下划线要从一侧运动展开。所以，我们利用绝对定位，将 li 的伪元素的宽度设置为0，在 hover 的时候，宽度从 width: 0 -> width: 100%，CSS 如下：
        </p> -->
    <h2>2.左移左出，右移右出</h2>
    <!-- <p>当从第一个 li 切换到第二个 li 的时候，第一个 li 下划线收回的方向不正确。所以，可以能我们需要将下划线的初始位置位移一下，设置为 left: 100%，这样每次下划线收回的时候，第一个 li 就正确了：</p> -->

    <h2>3.神奇的 ~ 选择符</h2>
    <!-- <p>
            所以，我们迫切需要一种方法，能够不改变当前 hover 的 li 的下划线移动方式却能改变它下一个 li 的下划线的移动方式（好绕口）。
            没错了，这里我们可以借助 ~ 选择符，完成这个艰难的使命，也是这个例子中，最最重要的一环。
            对于当前 hover 的 li ，其对应伪元素的下划线的定位是 left: 100%，而对于 li:hover ~ li::before，它们的定位是 left: 0
        </p> -->
  </div>
  <div class="doc-example">
    <ul>
      <li>不可思议的CSS</li>
      <li>导航栏</li>
      <li>光标下划线跟随</li>
      <li>PURE CSS</li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
/**
 * Trapezoid tabs
 */

.doc-example {
  padding: 20px;
  font-size: 12px;
  //   font: 130%/2 Frutiger LT Std, sans-serif;
}

ul {
  list-style: none;
  display: flex;
  position: absolute;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

li {
  position: relative;
  padding: 10px;
  color: #000;
  line-height: 1;
  transition: 0.2s all linear;
  cursor: pointer;
}

li::before {
  content: "";
  position: absolute;
  width: 0;
  height: 100%;
  top: 0;
  left: 100%;
  border-bottom: 2px solid #000;
  transition: 0.2s all linear;
}

li:hover::before {
  width: 100%;
  top: 0;
  left: 0;
  transition-delay: 0.1s;
  border-bottom-color: #000;
  z-index: -1;
}

li:hover ~ li::before {
  left: 0;
}

li:active {
  background: #000;
  color: #fff;
}
</style>
