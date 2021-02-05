<template>
  <section class="app-main">
    <div class="main-wrapper">
      <router-view v-slot="{ Component }">
        <transition name="router-fade" mode="out-in">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </transition>
      </router-view>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';
export default defineComponent({
	setup () {
		const router = useRoute();
		const key = computed(() => router.path);
		return {
			key
		};
	}

});
</script>

<style lang="less" scoped>
.app-main {
  /* 50= topbar  50  */
  min-height: calc(100vh - 212px);
  // width: 100%;
  position: relative;
	overflow: hidden;
	background: #f0f2f5;
	padding: 20px;
}
.main-wrapper{
	background: #fff;
	padding: 20px;
}
</style>
