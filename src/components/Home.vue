<template>
<div class="home page">
  <div class="titre-container">
    <h1 class="threed">overdone</h1>
  </div>

  <div class="container-logo">
  <div class="batman">
    <div class="swag">
      <div class="planet1"></div>
      <div class="planet2"></div>
       <div class="logo"></div>
    </div>
  </div>
</div>

<div class="homepage">
  <div class="flex-item"><button @click="toLogin" class="button-style" type="submit">Sign In</button>
  <br><hr>
  <button @click="toSignup" class="button-style" type="submit">Sign Up</button>
</div>
</div>
</div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    toLogin() {
      this.$router.push('/login');
    },
    toSignup() {
      this.$router.push('/signup');
    }
  }
}
</script>

<style>
html {
  -webkit-font-smoothing: antialiased;
}

/*test logo */
.container-logo {
  display: table;
}

.batman {
  display: table-cell;
  vertical-align: middle;
}

.swag {
  /* position: relative; */
  height: 400px;
  width: 100%;
}

.logo, .planet1, .planet2 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
}

.logo {
  width: 35px;
  height: 35px;
  border: 17.5px solid #211833;
}

.planet1, .planet2 {
  border: 1px solid #5e4a57;
}

.planet1 {
  width: 157.5px;
  height: 157.5px;
  -moz-animation: spin 3.9s linear infinite;
  -webkit-animation: spin 3.9s linear infinite;
  animation: spin 3.9s linear infinite;
}
.planet1:before {
  content: '';
  position: absolute;
  background: grey;
  height: 6px;
  width: 6px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  top: 50px;
  border: 1px solid #2a1f25;
}

.planet2 {
  width: 255.5px;
  height: 255.5px;
  -moz-animation: spin 4.2s linear infinite reverse;
  -webkit-animation: spin 4.2s linear infinite reverse;
  animation: spin 4.2s linear infinite reverse;
}
.planet2:before {
  content: '';
  position: absolute;
  background: grey;
  height: 6px;
  width: 6px;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  top: 90px;
  border: 1px solid #2a1f25;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.flex-item {
  padding: 0;
  margin: 0;
}

.button-style{
  border-radius: 30px;
  width: 130px;
}

.titre-container{
  width: 900px;
  position: relative;
  top: 50px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
}

.titre-container h1 {
  font-size: 40px;
}

.threed {
  font-family: "Lato", sans-serif;
  text-align: center;
  font-weight: 700;
  color: #cabed5;
  -webkit-text-stroke: 1px rgba(0, 0, 0, 0.2);
  text-shadow: -10px 0 rgba(0, 128, 128, 0.4), 10px 0 rgba(60, 0, 128, 0.4);
}

</style>
