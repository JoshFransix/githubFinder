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
import UI from "./classes/ui";
import Github from "./classes/github";
export default {
  data() {
    return {
      value: "",
    };
  },

  methods: {
    search() {
      // Init Github
      const github = new Github();
      // Init UI
      const ui = new UI();
      // Get Input Text
      const userText = this.value;
      if (userText != "") {
        // Make HTTP call
        github.getUser(userText).then((data) => {
          if (data.profile.message === "Not Found") {
            // Show Alert
            ui.showAlert(`${userText} not found`, "alert alert-danger");
          } else {
            // Show Profile
            ui.showProfile(data.profile);
            // Show repos
            ui.showRepos(data.repos);
          }
        });
      } else {
        // Clear Profile
        ui.clearProfile();
      }
    },
  },
};
</script>

<style>
img {
  border-radius: 50%;
}

div {
  font-family: "Montserrat", sans-serif;
}
</style>
