<template>
    <div class="flex-container page">
      <form @submit.prevent="Register"> 
        <div class="row">
          <div class="email">
              <input v-model="User.email" type="email" id="inputEmail" placeholder="Email address">
          </div>
          <hr>
          <div class="password">
              <input v-model="User.password" type="password" id="inputPassword" placeholder="Password">
          </div>
          <hr>
          <div class="flex-item"><button class="signup-but" type="submit">SIGN UP</button></div>
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
  name: "Signup",
  data() {
    return {
      User: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    Register() {
      const newUser = {
        email: this.User.email,
        password: this.User.password
      };
      console.log("Your infos :", newUser);
      
      http
        .post("/user/signup", newUser)
        .then(res => {
          console.log(newUser, res.data);

          setTimeout(() => {
            this.$router.push({ name: "Login" });
          }, 500);
        })
        .catch(error => {
          console.log(error);
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
  margin: auto;
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

.signup-but {
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.goback {
  border-radius: 30px;
}
</style>
