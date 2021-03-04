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
		console.log(slots);
		return () => {
			let { columns, data, rowKey, allowSelect, pagination } = props;

			return <div>
				<el-table
					border
					{...attrs}
					data={data}
					rowKey={rowKey}
					size='small'
					onSelectionChange={handleSelectionChange}
				>
					{allowSelect ? <el-table-column type="selection" width="55"></el-table-column> : ''}
					{columns.map((item: any) => (
						item.slot ? <el-table-column {...item}>{slots[item.slot]?.()} </el-table-column> : <el-table-column {...item}></el-table-column>)
					)}
					{slots.default && slots.default()}
				</el-table>
				<el-pagination
					background
					class="marginT10 text-right"
					onSizeChange={handleSizeChange}
					onCurrentChange={handleCurrentChange}
					current-page={pagination.page}
					page-sizes={[10, 20, 50]}
					page-size={pagination.pageSize}
					layout="total, sizes, prev, pager, next, jumper"
					total={pagination.total}>
				</el-pagination>
			</div>;
		};
	}
});
