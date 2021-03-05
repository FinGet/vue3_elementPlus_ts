<template>
  <div>
    <el-form ref="form" :model="form" :label-width="labelWidth">
      <el-form-item
      v-for="item in formJson"
      :key="item.val"
      :label="item.label"
      :prop="item.val"
      :rules="{required: item.require, message:item.placeholder, trigger:'change'}"
      >
        <template v-if="item.type === 'input'">
          <el-input v-bind="item.other" v-model="form[item.val]" :placeholder="item.placeholder"></el-input>
        </template>
        <template v-if="item.type === 'select'">
          <el-select v-bind="item.other" v-model="form[item.val]" placeholder="">
            <el-option
              v-for="op in item.options"
              :key="op[item.selectVal]"
              :label="op[item.selectLabel]"
              :value="op[item.selectVal]">
            </el-option>
          </el-select>
        </template>
        <template v-if="item.type === 'date'">
          <el-date-picker
            v-bind="item.other"
            value-format="yyyy-MM-dd"
            v-model="form[item.val]"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            placeholder="选择日期">
          </el-date-picker>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, watch, watchEffect } from 'vue';
import dayjs from 'dayjs';
export default defineComponent({
	props: {
		labelWidth: {
			type: String,
			default: '80px'
		},
		formJson: {
			type: Array,
			default: () => []
		},
		modelValue: {
			type: Object,
			default: () => ({})
		}
	},
	setup (props, { emit }) {
		const state = reactive({
			form: computed(() => props.modelValue)
		});
		watch(() => state.form, (val) => {
			// console.log(dayjs(val.date[0]).format('YYYY-MM-DD'));
			emit('update:modelValue', val);
		}, { deep: true });

		return {
			...toRefs(state)
		};
	}
});
</script>

<style lang="less" scoped>

</style>
