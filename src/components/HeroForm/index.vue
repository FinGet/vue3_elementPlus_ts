<template>
  <div>
    <el-form ref="formRef" label-suffix=":" :model="form" :label-width="labelWidth">
      <el-form-item
      v-for="item in formJson"
      :key="item.val"
      :label="item.label"
      :prop="item.val"
      :rules="{required: item.require, message:item.errMsg || item.placeholder || item.label + '是必填项', trigger:'change'}"
      >
        <template v-if="['input','textarea'].includes(item.type)">
          <el-input :type="item.type" v-bind="item.other" v-model="form[item.val]" :placeholder="item.placeholder"></el-input>
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
          <HeroDatePicker v-bind="item.other" v-model="form[item.val]"/>
        </template>
        <template v-if="item.type === 'radio'">
          <el-radio-group v-bind="item.other" v-model="form[item.val]">
            <el-radio v-for="op in item.options" :key="op[item.selectVal]" :label="op[item.selectVal]">{{op[item.selectLabel]}}</el-radio>
          </el-radio-group>
        </template>
        <template v-if="item.type === 'checkbox'">
          <el-checkbox-group v-bind="item.other" v-model="form[item.val]">
            <el-checkbox v-for="op in item.options" :key="op[item.selectVal]" :label="op[item.selectVal]">{{op[item.selectLabel]}}</el-checkbox>
          </el-checkbox-group>
        </template>
        <template v-if="item.type === 'switch'">
          <el-switch
            v-bind="item.other"
            v-model="form[item.val]">
          </el-switch>
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { computed, defineComponent, reactive, toRefs, ref, watch, watchEffect } from 'vue';
import HeroDatePicker from '@/components/HeroDatePicker/index';
export default defineComponent({
	components: { HeroDatePicker },
	props: {
		labelWidth: {
			type: String,
			default: '90px'
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
		const formRef = ref(null);
		const state = reactive({
			form: computed(() => props.modelValue)
		});
		watch(() => state.form, (val) => {
			emit('update:modelValue', val);
		}, { deep: true });

		const validate = () => {
			return new Promise((resolve, reject) => {
				formRef.value.validate().then((valid) => {
					resolve(valid);
				}).catch(err => { reject(err); });
			});
		};

		return {
			...toRefs(state),
			validate,
			formRef
		};
	}
});
</script>

<style lang="less" scoped>

</style>
