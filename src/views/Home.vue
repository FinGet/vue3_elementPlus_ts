<template>
  <div class="home">
    <h1>首页</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from '@/utils/request';

export default defineComponent({
	setup () {
		axios('api/query?type=yuantong&postid=11111111111').then(res => {
			console.log(res);
		});
	}
});
</script>
