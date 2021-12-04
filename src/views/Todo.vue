<template>
  <div>
		<el-input class="width200px" v-model="todoName" placeholder="请输入代办事项" @keydown.enter="addTodo"></el-input>
		<div class="todo-item" v-for="item in todoList" :key="item.id">
			<div>{{ item.name }}</div>
			<el-checkbox v-model="item.completed"></el-checkbox>
		</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
type Todo = {
	id: number,
	name: string,
	completed: boolean
}
export default defineComponent({

	setup () {
		const todoList = ref([] as Todo[]);
		const todoName = ref('');
		todoList.value.push({
			id: 1,
			name: 'vue3',
			completed: false
		});
		const addTodo = () => {
			todoList.value.push({
				id: todoList.value.length + 1,
				name: todoName.value,
				completed: false
			});
			todoName.value = '';
		};
		return {
			todoList,
			todoName,
			addTodo
		};
	}
});
</script>

<style scoped>
.todo-item {
	margin-top: 10px;
	width: 200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
</style>
