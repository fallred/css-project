<template>
    <div id="g-content">
        <div id="g-box">F</div>
    </div>

</template>
<style lang="scss" scoped>
body, html {
    width: 100%;
    height: 100%;
    display: flex;
}

#g-content {
    width: 300px;
    height: 170vh;
    margin: auto;
    background: #999;
    display: flex;
}

#g-box {
    font-size: 150px;
    margin: 70vh auto;
}

@supports (animation-timeline: works) {
@keyframes rotate {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@scroll-timeline box-rotate {
    source: selector("#g-content");
    // orientation: "vertical";
    // scroll-offsets: 0, 10px, 50vh;
}
#g-box {
    animation-name: rotate;
    animation-duration: 3s;
    animation-direction: alternate;
    animation-easing-function: linear;
    animation-timeline: box-rotate;
}
}

</style>
