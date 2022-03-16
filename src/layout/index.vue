<template>
  <div :class="classObj" class="app-wrapper clearfix">
    <sidebar class="sidebar-container" />
    <div
      :class="{ hasTagsView: true, sidebarHide: sidebar.hide }"
      class="main-container"
    >
      <div :class="{ 'fixed-header': true }">
        <navbar />
        <tags-view />
      </div>
      <app-main />
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { useWindowSize } from '@vueuse/core'
import { AppMain, Navbar, Settings, TagsView } from './components'

const store = useStore()
const sidebar = computed(() => store.state.app.sidebar)

const classObj = computed(() => ({
  hideSidebar: !sidebar.value.opened,
  openSidebar: sidebar.value.opened,
  withoutAnimation: sidebar.value.withoutAnimation
}))

const { width, height } = useWindowSize()
const WIDTH = 992 // refer to Bootstrap's responsive design
</script>

<style lang="less" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &.mobile.openSidebar {
    position: fixed;
    top: 0;
  }
}

.drawer-bg {
  background: #000;
  opacity: 0.3;
  width: 100%;
  top: 0;
  height: 100%;
  position: absolute;
  z-index: 999;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 200px);
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}
</style>
