<template>
  <div>
		<el-form :inline="true" :model="form" class="demo-form-inline">
			<el-form-item label="姓名">
				<el-input v-model="form.user" placeholder="姓名"></el-input>
			</el-form-item>
			<el-form-item label="年级">
				<el-select v-model="form.grade" placeholder="选择年级">
					<el-option label="一年级" value="1"></el-option>
					<el-option label="二年级" value="2"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit">查询</el-button>
			</el-form-item>
		</el-form>
    <div>
			<HeroTable
				:allowSelect="true"
				:data="tableData"
				:columns="columns"
				@select="handleSelect"
				@pagingChange="handlePagingChange"
			>
				<template v-slot:dateHeader>
					<el-tag type="success">日期</el-tag>
				</template>
				<template v-slot:date="scope" >
					{{scope.data.date}}自定义slot
				</template>
				<template v-slot:action="scope">
					<span class="btn" @click="handleCLick('edit', scope.data)">编辑</span >
					<el-divider direction="vertical"></el-divider>
					<span class="btn red" @click="handleCLick('del', scope.data)">删除</span>
				</template>
			</HeroTable>
		</div>
		<el-dialog
			title="提示"
			v-model="dialogVisible"
			width="30%"
			:before-close="handleClose">
			<span>这是一段信息</span>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="dialogVisible = false">确 定</el-button>
				</span>
			</template>
		</el-dialog>
  </div>
</template>

<script lang="ts">
import { HeroTable } from '@/components';
import { ElMessageBox } from 'element-plus';
import { defineComponent, reactive, toRefs, getCurrentInstance } from 'vue';
export default defineComponent({
	components: { HeroTable },
	setup () {
		const { ctx } = getCurrentInstance() as any;
		const tableData = [{
			id: 1,
			date: '2016-05-03',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}, {
			id: 2,
			date: '2016-05-02',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}, {
			id: 3,
			date: '2016-05-04',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}, {
			id: 4,
			date: '2016-05-01',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}, {
			id: 5,
			date: '2016-05-08',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}, {
			id: 6,
			date: '2016-05-06',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}, {
			id: 7,
			date: '2016-05-07',
			name: '王小虎',
			address: '上海市普陀区金沙江路 1518 弄',
			class: '三年级二班',
			school: '成都市泡桐树小学'
		}];
		const columns = [
			{ prop: 'date', label: '日期', fixed: true, width: 200, slot: { body: 'date', header: 'dateHeader' } },
			{ prop: 'name', label: '姓名', width: 200 },
			{ prop: 'address', label: '地址', width: 500 },
			{ prop: 'class', label: '班级', width: 200 },
			{ prop: 'school', label: '学校', width: 200 },
			{ prop: '', label: '操作', width: 110, slot: { body: 'action' }, fixed: 'right' }
		];
		const state = reactive({
			form: {
				user: '',
				grade: ''
			},
			dialogVisible: false
		});

		const methods = {
			handleSelect: (val) => {
				console.log(val);
			},
			handlePagingChange: (option) => {
				console.log(option);
			},
			onSubmit: () => {
				console.log('onSubmit');
				ElMessageBox.alert('', '', {
					title: '提示',
					message: 'This is a essageBox',
					type: 'warning',
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					showCancelButton: true
				});
			},
			handleCLick: (type, scope) => {
				console.log(type);
				if (type === 'edit') {
					state.dialogVisible = true;
				} else {
					ctx.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
						confirmButtonText: '确定',
						cancelButtonText: '取消',
						type: 'warning'
					}).then(() => {
						ctx.$message({
							type: 'success',
							message: '删除成功!'
						});
					}).catch(() => {
						ctx.$message({
							type: 'info',
							message: '已取消删除'
						});
					});
				}
			},
			handleClose: () => {
				state.dialogVisible = false;
			}
		};

		return {
			...toRefs(state),
			tableData,
			columns,
			...methods
		};
	}
});
</script>

<style lang="less" scoped>

</style>
