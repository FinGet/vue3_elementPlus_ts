<template>
  <div>
    <HeroForm :formJson="formJson" v-model="form"/>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import { HeroForm } from '@/components';
import { defineComponent, reactive, toRefs } from '@vue/runtime-core';
export default defineComponent({
	components: { HeroForm },
	setup () {
		const formJson = [
			{
				require: true,
				type: 'input',
				label: '姓名',
				placeholder: '请输入姓名',
				val: 'name',
				other: { style: 'width:220px' }
			},
			{
				require: true,
				type: 'select',
				label: '年级',
				placeholder: '请选择年级',
				val: 'grade',
				selectLabel: 'label',
				selectVal: 'val',
				options: [{ val: 1, label: '一年级' }, { val: 2, label: '二年级' }]
			},
			{
				require: true,
				type: 'date',
				label: '入校时间',
				placeholder: '请选择入校时间',
				val: 'date',
				other: { type: 'daterange' }
			}
		];
		const state = reactive({
			form: { name: '' }
		});
		const onSubmit = () => {
			console.log(state.form);
		};
		return {
			...toRefs(state),
			onSubmit,
			formJson
		};
	}
});
</script>

<style lang="less" scoped>

</style>
