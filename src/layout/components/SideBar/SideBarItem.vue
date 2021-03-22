<template>
  <div v-if="!item.hidden" class="menu-wrapper">
   <template v-if="hasOneShowingChild(item.children,item) && !onlyOneChild.children && onlyOneChild.noShowingChildren && !item.alwaysShow">
      <el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
				<i :class="[onlyOneChild.meta.icon||(item.meta&&item.meta.icon), 'icon']"></i>
				<template #title><span>{{onlyOneChild.meta.title}}</span></template>
      </el-menu-item>
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)">
			<template v-slot:title>
				<i :class="[item.meta && item.meta.icon, 'icon']"></i>
				<span>{{item.meta.title}}</span>
			</template>
      <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />
    </el-submenu>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive, defineComponent } from 'vue';
import path from 'path';

export default defineComponent({
	name: 'SidebarItem',
	props: {
		item: {
			type: Object,
			required: true
		},
		isNest: {
			type: Boolean,
			default: false
		},
		basePath: {
			type: String,
			default: ''
		}
	},
	setup (props) {
		const state = reactive({
			onlyOneChild: { children: null, path: '', meta: { icon: '', title: '' } }
		});
		const hasOneShowingChild = (children = [], parent: any) => {
			const showingChildren = children.filter((item: any) => {
				if (item.hidden) {
					return false;
				} else {
					state.onlyOneChild = item;
					return true;
				}
			});

			if (showingChildren.length === 1) {
				return true;
			}
			if (showingChildren.length === 0) {
				state.onlyOneChild = { ...parent, path: '', noShowingChildren: true };
				return true;
			}
			return false;
		};
		const resolvePath = (routePath: any) => {
			return path.resolve(props.basePath, routePath);
		};
		return {
			hasOneShowingChild,
			resolvePath,
			...toRefs(state)
		};
	}
});
</script>

<style lang="less" scoped>
.icon {
	// margin-bottom: 3px;
	display: inline-block;
	vertical-align: top;
}
</style>
