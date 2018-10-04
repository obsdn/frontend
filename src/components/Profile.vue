<template>
<div class="profile page">
    <form @submit.prevent="Profile" enctype="multipart/form-data">
        <input v-model="username" type="text" placeholder="username">
        <input type="file" @change="addProfile" name="profileImage">
        <button type="submit">upload</button>
    </form>

    <form @submit.prevent="Billets">
        <input type="text" v-model="title" placeholder="title">
        <input type="text" v-model="post" placeholder="bullet">
        <button type="submit" >send a bullet</button>
    </form>

      <div class="bullets-container">
        <div class="bullets" v-for="blt in bullets">
          <span class="title">{{ blt.title }} // </span>{{ blt.post }}
        </div>
      </div>

</div>
</template>

<script>
import axios from "axios";
import http from "../helpers/http.js";

export default {
  name: "Profile",
  data() {
    return {
      username: "",
      profileImage: "",
      title: "",
      post: "",
      bullets: [],
      error: false
    };
  },
  mounted(){
        http
        .get("/billets/all")
        .then(res => {
          console.log(res.data);

            this.bullets = res.data.billets;
        })
       .catch(error => {
          console.log(error);
        });
  },
  methods: {
    Profile(event) {
      const fd = new FormData();
      fd.append("username", this.username);
      fd.append("profileImage", this.profileImage, this.profileImage.name);
      let config = { headers: { "Content-Type": false } };

      http
        .post("/profile/create-profile", fd, config)
        .then(res => {
          console.log("User already logged! Yay!", res.data);
          localStorage.setItem("token", res.data.token);
          if (localStorage) {
          setTimeout(() => {
          this.$router.push({ name: "Profile" });
            }, 500);
          } else {
            console.log("Unauthorized");
          }
        })
        .catch(err => {
          console.log("Error : profile not saved");
        });
    },
    addProfile(event) {
      this.profileImage = event.target.files[0];
      let files = event.target.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let fileReader = new FileReader();
      fileReader.onload = event => {
        this.imageURL = event.target.result;
      };
      fileReader.readAsDataURL(file);
    },
    Billets(evt) {
        evt.preventDefault();
        const billetInfos = {
        title: this.title,
        post: this.post
      };
      console.log("Your post :", billetInfos);
      http
      .post("/billets/create-post", billetInfos)
      .then(res => {
          console.log(billetInfos, res.data);
        })
       .catch(error => {
          console.log(error);
        });
    },
  }
}
</script>

<style>
img {
  max-width: 200px;
  max-height: 200px;
}

.bullets-container{
  overflow: auto;
  height: 150px;
}
</style>
