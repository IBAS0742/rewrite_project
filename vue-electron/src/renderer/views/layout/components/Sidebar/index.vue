<template>
  <ScrollBar>
    <Menu
      mode="vertical"
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <SidebarItem :routes="routes"></SidebarItem>
    </Menu>
  </ScrollBar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
import ScrollBar from '@/components/ScrollBar'
import 'element-ui/lib/theme-chalk/index.css'
import { Menu } from 'element-ui'

export default {
  components: { SidebarItem, ScrollBar, Menu },
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    routes() {
      return this.$router.options.routes
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
