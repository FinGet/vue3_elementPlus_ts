<template>
  <div>
    <HeroForm ref="formRef" :formJson="formJson" v-model="form"/>
    <el-button type="primary" @click="onSubmit">提交</el-button>
  </div>
</template>

<script>
import { HeroForm } from '@/components';
import { defineComponent, reactive, ref, toRefs } from '@vue/runtime-core';
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
			},
			{
				type: 'radio',
				label: '是否及格',
				val: 'rank',
				selectLabel: 'label',
				selectVal: 'val',
				options: [{ val: 1, label: '及格' }, { val: 0, label: '没及格' }]
			},
			{
				require: true,
				type: 'switch',
				label: '是否公开',
				val: 'public'
			},
			{
				type: 'checkbox',
				label: '兴趣爱好',
				val: 'hobby',
				selectLabel: 'label',
				selectVal: 'val',
				options: [{ val: 1, label: '篮球' }, { val: 2, label: '足球' }, { val: 3, label: '游戏' }]
			},
			{
				type: 'textarea',
				label: '个人评价',
				val: 'desc'
			}
		];
		const state = reactive({
			form: { name: '', rank: [], hobby: [] }
		});
		const formRef = ref(null);
		const onSubmit = () => {
			formRef.value.validate().then(valid => {
				console.log(valid);
				if (valid) {

				}
			});
		};
		return {
			...toRefs(state),
			onSubmit,
			formJson,
			formRef
		};
	}
});
</script>

<style lang="less" scoped>

</style>
