<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        <span>{{ item }}</span>
        <button @click="deleteFromList(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: ["john", "doe", "jane"]
    };
  },
  methods: {
    deleteFromList(index) {
      this.list.splice(index, 1);
    }
  }
};
</script>