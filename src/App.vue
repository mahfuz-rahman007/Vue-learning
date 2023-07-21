<script setup>
import { ref, reactive, computed } from "vue";

let name = ref("");

const todos = reactive([
  { task: "Make Homework", complete: false, id: 1 },
  { task: "Watch Movies", complete: false, id: 2 },
]);

const addTodo = (event) => {
  event.preventDefault();
  if (!name.value.length) {
    alert('Give a Valid Task');
    return
  }
  todos.push({
      task: name.value,
      complete: false,
      id: todos.length + 1,
    });
    name.value = "";
};

const filter = computed(() => {
  return {
    incomplete: todos.filter((task) => !task.complete),
    complete: todos.filter((task) => task.complete),
  };
});

</script>

<template>
  <div class="card card-body">
    <h2>Todo List</h2>
    <div class="d-flex my-3">
      <input
        type="text"
        v-model="name"
        class="form-control"
        placeholder="Create New Todo"
      />
      <button @click="addTodo" class="btn btn-success ml-2">Add</button>
    </div>

    <div class="my-3">
      <h5>Incomplete List</h5>
      <ul class="list-group" v-if="filter.incomplete.length">
        <li
          class="list-group-item"
          v-for="(todo, i) in filter.incomplete"
          :key="todo.id"
        >
          <label>
            {{ i + 1 + " . " }}
            <input type="checkbox" name="check" v-model="todo.complete" />
            {{ todo.task }}
          </label>
        </li>
      </ul>
      <p class="alert alert-primary text-center" v-else>No Task</p>
    </div>

    <div class="my-3">
      <h5>Complete List</h5>
      <ul class="list-group" v-if="filter.complete.length">
        <li
          class="list-group-item"
          v-for="(todo, i) in filter.complete"
          :key="todo.id"
        >
          <label>
            {{ i + 1 + " . " }}
            <input
              type="checkbox"
              name="check"
              checked
              v-model="todo.complete"
            />
            <del class="mx-1"> {{ todo.task }} </del>
          </label>
        </li>
      </ul>
      <p class="alert alert-primary text-center" v-else>No Task</p>
    </div>
  </div>
</template>
