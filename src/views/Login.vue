<template>
  <div class="display-flex j-c-c a-i-c height100">
    <div class="login-form">
			<el-form ref="ruleForm" :model="form">
				<el-form-item prop="email" :rules="{required:true, message:'请输入账号', trigger:'change'}">
					<el-input placeholder="请输入账号" v-model="form.email"></el-input>
				</el-form-item>
				<el-form-item prop="pass" :rules="{required:true, message:'请输入密码', trigger:'change'}">
					<el-input type="password" placeholder="请输入密码" v-model="form.pass"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button class="width100" type="primary" @click="onSubmit">登陆</el-button>
				</el-form-item>
			</el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

interface UserForm {
	email: string;
	pass: string | number;
}

export default defineComponent({
	setup () {
		const router = useRouter();
		const state = reactive({
			form: {
				email: 'admin',
				pass: 'admin123'
			} as UserForm,
			ruleForm: ref<any>(null)
		});

		// const ruleForm = ref<any>(null)

		const onSubmit = () => {
			// ruleForm.value.validate
			state.ruleForm.validate().then((valid: boolean) => {
				if (valid) {
					if (state.form.email === 'admin') {
						router.push({ path: '/' });
					}
				}
			});
		};

		return {
			...toRefs(state),
			onSubmit
		};
	}
});
</script>

<style lang="less" scoped>
.login-form {
	width: 300px;
	margin: 0 auto;
	padding: 30px;
	border-radius: 2px;
	box-shadow: 3px 3px 10px 8px #f1f1f1;
}
</style>
