<template>
  <div :class="['wrapper',isCollapse?'hideSidebar':'']">
    <el-container>
      <el-aside :width="isCollapse?'64px':'210px'">
        <sidebar/>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <topbar/>
        </el-header>
        <el-main>
          <breadcrumb/>
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import Sidebar from './components/SideBar/Index'
import Topbar from './components/TopBar'
import Breadcrumb from './components/Breadcrumb.vue'
import AppMain from './components/AppMain.vue'
import { useStore } from 'vuex'
export default defineComponent({
	components: { Sidebar, Topbar, Breadcrumb, AppMain },
	setup () {
		const store = useStore()
		const isCollapse = computed(() => !store.state.app.sidebar.opened)
		return {
			isCollapse
		}
	}
})
</script>

<style lang="less" scoped>

/deep/ .el-main{
	padding: 0;
}
/deep/ .el-header {
	-webkit-box-shadow: 0 1px 4px rgba(0,21,41,.08);
	box-shadow: 0 1px 4px rgba(0,21,41,.08);
	padding-right: 20px;
	padding-left: 0;
}
/deep/ .el-aside {
  box-shadow: rgb(241, 241, 241) 2px 0px 6px;
}
</style>
