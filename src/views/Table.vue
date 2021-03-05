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
				<a href="#" class="btn" @click="handleCLick(scope.data)">编辑</a>
				<a href="#" class="btn red">删除</a>
			</template>
    </HeroTable>
  </div>
</template>

<script>
import { HeroTable } from '@/components';
import { defineComponent, reactive, toRefs } from 'vue';
export default defineComponent({
	components: { HeroTable },
	setup () {
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
			{ prop: '', label: '操作', width: 90, slot: { body: 'action' }, fixed: 'right' }
		];
		const state = reactive({
			form: {
				user: '',
				grade: ''
			}
		});
		const handleSelect = (val) => {
			console.log(val);
		};
		const handlePagingChange = (option) => {
			console.log(option);
		};
		const onSubmit = () => {
			console.log('onSubmit');
		};
		const handleCLick = (scope) => {
			console.log(scope);
		};
		return {
			...toRefs(state),
			tableData,
			columns,
			handleSelect,
			handlePagingChange,
			onSubmit,
			handleCLick
		};
	}
});
</script>

<style lang="less" scoped>

</style>
