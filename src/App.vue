<!-- <script setup>
import { ref } from 'vue'

let message = ref('Hello World!');

</script>

<template>

  <div>
    <h1>{{ message }}</h1>
    <input type="text" name="" id="" v-model="message.value">
  </div>

</template> -->

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
  <div>
    <h1>{{ message }}</h1>
    <input type="text" v-model="name">
    <button @click="addUser">Add</button>
    <ul>
      <li v-for="(user, i) in users" :key="i">{{ user.name }}</li>
    </ul>
  </div>
</template>

