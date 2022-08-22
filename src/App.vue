<template>
  <div class="page-root">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <!-- <el-menu-item index="1">
        <RouterLink to="/">首页</RouterLink>
      </el-menu-item> -->
      <el-sub-menu index="1">
        <template #title>背景滚动</template>
        <el-menu-item index="1-1">
          <RouterLink to="/demo1-1">背景滚动1</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-2">
          <RouterLink to="/demo1-2">背景滚动2</RouterLink>
        </el-menu-item>
        <el-menu-item index="1-3">
          <RouterLink to="/demo1-3">背景滚动3</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>导航</template>
        <el-menu-item index="2-1">
          <RouterLink to="/demo2-1">Trapezoid tabs</RouterLink>
        </el-menu-item>
        <el-menu-item index="2-2">
          <RouterLink to="/demo2-2">nav line</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>盒子模型</template>
        <el-menu-item index="3-1">
          <RouterLink to="/demo3-1">width:auto</RouterLink>
        </el-menu-item>
        <el-menu-item index="3-2">
          <RouterLink to="/demo3-2">首选最小宽度</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>css小技巧</template>
        <el-menu-item index="4-1">
          <RouterLink to="/demo4-1">Linear Loading</RouterLink>
        </el-menu-item>
        <el-menu-item index="4-2">
          <RouterLink to="/demo4-2">scroll snap</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>transition动画</template>
        <el-menu-item index="5-1">
          <RouterLink to="/demo5-1">transition-delay</RouterLink>
        </el-menu-item>
        <!-- <el-menu-item index="5-2">
          <RouterLink to="/demo5-2">transition2</RouterLink>
        </el-menu-item> -->
        <el-menu-item index="5-3">
          <RouterLink to="/demo5-3">transition-duration</RouterLink>
        </el-menu-item>
        <el-menu-item index="5-4">
          <RouterLink to="/demo5-4">animation-play-state</RouterLink>
        </el-menu-item>
        <!-- <el-menu-item index="5-5">
          <RouterLink to="/demo5-5">scroll-timeline</RouterLink>
        </el-menu-item> -->
        <el-menu-item index="5-6">
          <RouterLink to="/demo5-6">进度条</RouterLink>
        </el-menu-item>
        <el-menu-item index="5-7">
          <RouterLink to="/demo5-7">transform-origin</RouterLink>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="6">
        <template #title>mask</template>
        <!-- <el-menu-item index="6-1">
          <RouterLink to="/demo6-1">linear gradient</RouterLink>
        </el-menu-item> -->
        <el-menu-item index="6-2">
          <RouterLink to="/demo6-2">mask实现弹幕人物遮罩过滤 </RouterLink>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
    <div class="page-view">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
<style scoped>
.page-view {
  padding: 10px;
}
</style>
