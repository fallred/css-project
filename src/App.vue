<template>
  <div class="page-root">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">
        <RouterLink to="/">首页</RouterLink>
      </el-menu-item>
      <el-sub-menu index="2">
        <template #title>背景滚动</template>
        <el-menu-item index="2-1">
          <RouterLink to="/demo1">背景滚动1</RouterLink>
        </el-menu-item>
        <el-menu-item index="2-2">
          <RouterLink to="/demo2">背景滚动2</RouterLink>
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
