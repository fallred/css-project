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
      <el-sub-menu index="5">
        <template #title>transition动画</template>
        <el-menu-item index="5-1">
          <RouterLink to="/demo5-1">transition1</RouterLink>
        </el-menu-item>
        <el-menu-item index="5-2">
          <RouterLink to="/demo5-2">transition2</RouterLink>
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
