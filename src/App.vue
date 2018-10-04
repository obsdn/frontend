<template>
<div id="app">
    <div class="header">
      <!-- test here -->
    </div>

  <div class="container">

    <transition name="router-anim">
      <router-view/>
    </transition>
  </div>
</div>
</template>

<script>
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Chat from './components/Chat'
import Profile from './components/Profile'

export default {
  name: "App",
  components: {
    Home,
    Login,
    Signup,
    Profile,
    Chat
  }
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css";
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Poiret+One");
@import url("https://fonts.googleapis.com/css?family=Barlow+Condensed");
@import url('https://fonts.googleapis.com/css?family=Voltaire|Yanone+Kaffeesatz');
@import url('https://fonts.googleapis.com/css?family=Lato:400,700');

* {
  margin: 0;
  padding: 0;
}

body {
  width: 100%;
  background: teal;
  font-family: "Lato", sans-serif;
}

.container {
  margin: auto;
  width: 350px;
  height: 534px;
  overflow: hidden;
  position: relative;
  top: 50px;
  left: 0;
  right: 0;
  background: url(https://78.media.tumblr.com/5003c4ecbfae05fe21a5a10e4576d6b8/tumblr_p8xhf2OG5U1shb15mo7_1280.jpg)
    center no-repeat;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.container:before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  content: "";
  position: absolute;
  background: rgba(90, 93, 165, 0.8);
  background: linear-gradient(
    to bottom,
    rgba(90, 93, 165, 1),
    rgba(0, 0, 0, 0.7)
  );
  opacity: 0.9;
}

.page {
  position: fixed;
  width: inherit;
}

.router-anim-enter-active {
  animation: coming 1s;
  animation-delay: 0.5s;
  opacity: 0;
}

.router-anim-leave-active {
  animation: going 1s;
}

@keyframes going {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50px);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-50px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

input,
select {
  width: 310px;
  padding: 10px;
  margin-top: 4px;
  background: rgba(131,119,144,0.0);
  font-size: 13px;
  box-sizing: border-box;
  border: none;
  text-align: center;
  color: #211833;
}

textarea:focus,
input:focus {
  outline: none;
  color: #211833;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
border: none !important;
-webkit-text-fill-color: #211833 !important;
background-color: rgba(131,119,144,0.0) !important;
-webkit-box-shadow: 0 0 0px 10px rgba(131,119,144,0.0) inset;
transition: background-color 5000s ease-in-out 0s;
}

::placeholder {
  color: #211833;
}

button {
  height: 40px;
  width: 310px;
  background: linear-gradient(to right, #69468A 0%, #966B9D 51%, #69468A 100%);
  /* color: #666; */
  border: none;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  /* padding: 15px 20px; */
  color: #CABED5;
  font-family: 'Lato', sans-serif; 
  font-size: 15px;
  outline: none;
}

button:hover {
  background-position: right center;
}

hr {
  border-top: 1px solid #c6afd3;
  height: 1px;
  padding: 0;
  margin: 0;
  border: 0;
}
</style>
