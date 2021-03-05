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
				<template v-slot:header>
					<slot :name="item.slot.header">{{item.label || '自定义header'}}</slot>
				</template>
				<template v-slot:default="scope">
					<slot :name="item.slot.body" :data="scope.row">{{scope.row[item.prop] || '需要自定义' }}</slot>
				</template>
			</el-table-column>
			<el-table-column v-else v-bind="item"></el-table-column>
		</template>
		<slot/>
	</el-table>
	<HeroPaging
		v-if="showPaging"
		class="marginT10 text-right"
		:pagination="pagination"
		@pagingChange="handlePagingChange"/>
</div>
</template>

<script>
import { defineComponent, PropType } from 'vue';
import HeroPaging from '../HeroPaging/index';
export default defineComponent({
	components: { HeroPaging },
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
		},
		showPaging: {
			type: Boolean,
			default: true
		}
	},
	setup (props, { emit, slots, attrs }) {
		let multipleSelection = [];
		const handleSelectionChange = (val) => {
			multipleSelection = val;
			emit('select', multipleSelection);
		};
		const handlePagingChange = (option) => {
			emit('pagingChange', option);
		};
		return {
			handleSelectionChange,
			handlePagingChange
		};
	}
});
</script>
