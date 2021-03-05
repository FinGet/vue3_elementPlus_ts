<template>
<div>
	<el-table
		border
		v-bind="$attrs"
		:data="data"
		:rowKey="rowKey"
		size='small'
		:onSelectionChange="handleSelectionChange"
	>
		<el-table-column v-if="allowSelect" type="selection" width="55"></el-table-column>
		<template v-for="item in columns" :key="item.prop">
			<el-table-column v-bind="item" v-if="item.slot" >
				<template v-slot="scope">
					<slot :name="item.slot" :data="scope.row"/>
				</template>
			</el-table-column>
			<el-table-column v-else v-bind="item"></el-table-column>
		</template>
		<slot/>
	</el-table>
	<el-pagination
		background
		class="marginT10 text-right"
		:onSizeChange="handleSizeChange"
		:onCurrentChange="handleCurrentChange"
		:current-page="pagination.page"
		:page-sizes="[10, 20, 50]"
		:page-size="pagination.pageSize"
		layout="total, sizes, prev, pager, next, jumper"
		:total="pagination.total">
	</el-pagination>
</div>
</template>

<script>
import { defineComponent, PropType } from 'vue';
export default defineComponent({
	props: {
		data: {
			type: Array,
			default: () => []
		},
		columns: {
			type: Array,
			default: () => []
		},
		rowKey: {
			type: String,
			default: 'id'
		},
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
		allowSelect: {
			type: Boolean,
			default: false
		}
	},
	setup (props, { emit, slots, attrs }) {
		let multipleSelection = [];
		const handleSizeChange = (pageSize) => {
			emit('pagingChange', { type: 'pageSize', val: pageSize });
		};
		const handleCurrentChange = (page) => {
			emit('pagingChange', { type: 'page', val: page });
		};
		const handleSelectionChange = (val) => {
			multipleSelection = val;
			emit('select', multipleSelection);
		};
		return {
			handleSizeChange,
			handleCurrentChange,
			handleSelectionChange
		};
	}
});
</script>
