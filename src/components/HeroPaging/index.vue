<template>
  <el-pagination
		background
    v-bind="$attrs"
		:onSizeChange="handleSizeChange"
		:onCurrentChange="handleCurrentChange"
		:current-page="pagination.page"
		:page-sizes="pageSizes"
		:page-size="pagination.pageSize"
		:layout="layout"
		:total="pagination.total">
	</el-pagination>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
	props: {
		pagination: {
			type: Object,
			default: () => {
				return {
					page: 1,
					pageSize: 10,
					total: 100
				};
			}
		},
		layout: {
			type: String,
			default: 'total, sizes, prev, pager, next'
		},
		pageSizes: {
			type: Array,
			default: () => [10, 20, 50]
		}
	},
	setup (props, { emit }) {
		const handleSizeChange = (pageSize) => {
			emit('pagingChange', { type: 'pageSize', val: pageSize });
		};
		const handleCurrentChange = (page) => {
			emit('pagingChange', { type: 'page', val: page });
		};
		return {
			handleSizeChange,
			handleCurrentChange
		};
	}
});
</script>

<style lang="less" scoped>

</style>
