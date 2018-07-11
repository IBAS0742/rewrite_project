<template>
  <ElmElMenu class="navbar" mode="horizontal">
    <hamburger class="hamburger-container" :toggleClick="toggleSideBar" :isActive="sidebar.opened"></hamburger>
    <breadcrumb></breadcrumb>
    <ElmElDropdown style="float: right;right: 80px;" trigger="click">
      <span class="el-dropdown-link">
        国际化【{{curLanguage}}】
      </span>
      <ElmElDropdownMenu slot="dropdown">
        <ElmElDropdownItem>
          <span @click="changeLang('CN')">中文</span>
        </ElmElDropdownItem>
        <ElmElDropdownItem>
          <span @click="changeLang('EN')">English</span>
        </ElmElDropdownItem>
      </ElmElDropdownMenu>
    </ElmElDropdown>
    <!--<el-dropdown class="avatar-container" trigger="click">-->
      <!--<div class="avatar-wrapper">-->
        <!--<img class="user-avatar" :src="avatar+'?imageView2/1/w/80/h/80'">-->
        <!--<i class="el-icon-caret-bottom"></i>-->
      <!--</div>-->
      <!--<el-dropdown-menu class="user-dropdown" slot="dropdown">-->
        <!--<router-link class="inlineBlock" to="/">-->
          <!--<el-dropdown-item>-->
            <!--Home-->
          <!--</el-dropdown-item>-->
        <!--</router-link>-->
        <!--<el-dropdown-item divided>-->
          <!--<span @click="logout" style="display:block;">LogOut</span>-->
        <!--</el-dropdown-item>-->
      <!--</el-dropdown-menu>-->
    <!--</el-dropdown>-->
  </ElmElMenu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import 'element-ui/lib/theme-chalk/index.css'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  data() {
    return {
      curLanguage: 'EN'
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    },
    changeLang(tar) {
      this.curLanguage = tar
      this.$i18n.locale = tar
      console.log(this.$i18n)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

