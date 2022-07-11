<template>
  <div>
    <nav class="navbar navbar-dark bg-primary text-white mb-3">
      <div class="container">
        <a href="#" class="navbar-brand">Github Finder</a>
      </div>
    </nav>
    <div class="container searchContainer">
      <div class="search card card-body">
        <h1>Search Github Users</h1>
        <p class="lead">Enter a username to fetch user profile and repos</p>
        <input
          type="text"
          id="searchUser"
          class="form-control"
          placeholder="Github Username..."
          @keyup="search()"
          v-model="value"
        />
      </div>
      <br />
      <div id="profile"></div>
    </div>

    <footer class="text-center mt-5 p-3 bg-light">Github Finder &copy;</footer>
  </div>
</template>

<script >
export default {
  data() {
    return {
      value: "",
    };
  },

  methods: {
    search() {
      const userText = this.value;
      if (userText != "") {
        console.log(userText);
      } else {
      }
    },
  },
};
</script>

<style>
</style>
