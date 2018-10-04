<template>
    <div class="flex-container page">
    <form @submit.prevent="login"> 
    <div class="row">
      <div class="email">
          <input v-model="email" type="email" id="inputEmail" placeholder="Email address">
      </div>
      <hr>
      <div class="password">
          <input v-model="password" type="password" id="inputPassword" placeholder="Password">
      </div>
      <hr>
      <div class="flex-item"><button class="login-but" type="submit">LOGIN</button></div>
      <br/>
      <div class="flex-item"><button @click="toGoBack" class="goback" type="submit" >GO BACK</button></div>
    </div>
    </form> 
  </div>
</template>

<script>
import axios from "axios";
import http from "../helpers/http.js";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      error: false
    };
  },

  methods: {
    login(evt) {
      evt.preventDefault();
      const logInfo = {
        email: this.email,
        password: this.password
      };
      console.log("Your infos :", logInfo);

      http
        .post("/user/login", logInfo)
        .then(res => {
          console.log("User just logged! Yay!", res.data);
          localStorage.setItem("token", res.data.token);
          if (localStorage) {
            console.log(
              "There is a localstorage for your token!! Here :",
              res.data.token
            );
            setTimeout(() => {
              this.$router.push({ name: "Chat" });
            }, 500);
          } else {
            console.log("Unauthorized");
          }
        })
        .catch(function(error) {
          console.log("Error :", error.response);
        });
    },
    toGoBack() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>

<style>
.flex-container {
  top: 0;
  height: 100%;
  padding: 0;
  margin: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row {
  width: auto;
  position: relative;
}

.flex-item {
  padding: 0;
  margin: 0;
  text-align: center;
}

.email {
  height: 40px;
  width: 310px;
  background: rgba(131,119,144,0.4);
  border: none;
  text-align: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.password {
  height: 40px;
  width: 310px;
  background: rgba(131,119,144,0.4);
  position: relative;
  border: none;
  margin: auto;
  text-align: center;
}

.login-but {
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.goback {
  border-radius: 30px;
}
</style>
