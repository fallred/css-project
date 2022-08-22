<template>
    <div class="doc-title">
        <h2>动态改变 transition-duration</h2>
        <p>
            还有一个非常有意思的技巧，我们可以利用元素的一些伪类，动态的去改变元素的 transition-duration。
        </p>
        <p>
        当鼠标 hover 元素时，将元素的过渡动画的持续时间 transition-duration 从 3s 改成 0.5s，这样可以做到元素 hover 的时候，过渡动画持续的时间是 0.5s，但是过渡复位的持续时间却是 3s：
        </p>
    </div>
    <div class="doc-example">111</div>
</template>

<script lang="ts"></script>
<style lang="scss" scoped>
// .doc-title {
//     margin-bottom: 30px;
//     h2 {
//         font-size: 15px;
//         margin-bottom: 10px;
//     }
// }
.doc-example {
    width: 140px;
    height: 64px;
    border: 2px solid red;
    transition: 3s all linear;
}
.doc-example:hover {
    transition-duration: .5s; 
    border: 2px solid blue;
}
</style>
