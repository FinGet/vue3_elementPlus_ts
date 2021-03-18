<!--
format: https://day.js.org/docs/zh-CN/display/format
-->
<template>
  <div>
    <el-date-picker
      v-bind="$attrs"
      v-model="value"
      :type="type"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
import { defineComponent, watch, reactive, toRefs } from 'vue';
import dayjs from 'dayjs';
export default defineComponent({
	props: {
		type: {
			type: String,
			default: 'date'
		},
		modelValue: {
			type: [String, Object, Array],
			default: ''
		},
		valueFormat: {
			type: String,
			default: 'YYYY-MM-DD'
		}
	},
	setup (props, { emit }) {
		const state = reactive({
			value: props.modelValue || ''
		});
		watch(() => state.value, (val) => {
			let formatVal = null;
			if (Array.isArray(val)) {
				formatVal = [dayjs(val[0]).format(props.valueFormat), dayjs(val[1]).format(props.valueFormat)];
			} else {
				formatVal = dayjs(val).format(props.valueFormat);
			}
			console.log(formatVal);
			emit('update:modelValue', formatVal);
		});
		return {
			...toRefs(state)
		};
	}
});
</script>

<style lang="less" scoped>

</style>
