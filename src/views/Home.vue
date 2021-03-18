<template>
  <div class="home">
    <h1>首页</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
// import axios from '@/utils/request';

export default defineComponent({
	setup () {
		const { ctx } = getCurrentInstance() as any;

		ctx.$http('api/query?type=yuantong&postid=11111111111').then(res => {
			console.log(res);
		});
	}
});
</script>
