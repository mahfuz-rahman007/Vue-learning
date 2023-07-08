<script setup>
import { ref, reactive } from 'vue'

let name = ref('');

let users = reactive([
  { name: 'David' },
  { name: 'Kevin' },
]);

const addUser = (event) => {
  event.preventDefault();
  let isAvailableUser =  users.filter((user) => user.name == name.value);
  if(isAvailableUser.length > 0){
    alert('User already Available');
  } else {
    users.push({name: name.value});
  }

};

</script>

<template>
  <div class="card card-body">
    <h2>Todo List</h2>
    <div class="d-flex w-50 my-3">
      <input type="text" v-model="name" class="form-control">
      <button @click="addUser" class="btn btn-success">Add</button>
    </div>

    <ul class="list">
      <li class="list-item" v-for="(user, i) in users" :key="i">
        <label for="">
          <input type="checkbox" name="check" id="">
          {{ user.name }}
        </label>
      </li>
    </ul>
  </div>
</template>
