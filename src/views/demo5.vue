<template>
    <div>
        111
    </div>
</template>
<style lang="scss" scoped>
.animate {
    width: 140px;
    border: 1px solid #ccc;

    // height: unset;
    // transition: height 0.3s linear;
   // transition: .8s transform linear;

    // max-height: 0;
    // transition: max-height 0.3s linear;

    // transition: height 1s linear, transform 0.5s ease-in, color 2s ease-in-out;

    // 可以这样
    // transition: all 1s linear;

    // 也可以这样
    // transition: height 1s linear, transform 0.5s ease-in, color 2s ease-in-out;
    // transition: .8s transform 1s linear;

    transition: .8s transform 1s linear;
    &.up {
        // height: 0;
        max-height: 0;
    }
    &.down {
        // height: unset;
        max-height: 1000px;
    }
}
.animate:hover {
    // transform: translate(120px, 0);
    // transition: .8s transform 1s linear;
    transform: translate(120px, 0);
}

div {
    width: 200px;
    position: relative;
    height: 64px;
    box-shadow: inset 0 0 0 3px #ddd;
}
// div::before {
//     content: "";
//     position: absolute;
//     width: 0;
//     height: 0;
//     top: 0; left: 0; width: 0; height: 0;
//     box-sizing: border-box;
//     transition: width .25s, height .25s, border-bottom-color;
//     transition-delay: .25s, 0s, .25s;
// }
// div:hover::before {
//     width: 200px;
//     height: 64px;
//     border-left: 3px solid #00e2ff;
//     border-bottom: 3px solid #00e2ff;
// }

div::after {
    right: 0;
    bottom: 0;
}
div:hover::after{
    transition: height .25s, width .25s, border-top-color .25s;
    transition-delay: 0.5s, 0.75s, 0.75s;
    width: 200px;
    height: 64px;
    border-top: 3px solid #00e2ff;
    border-right: 3px solid #00e2ff;
}
</style>
