<template>

<div class="chat page">
    <div class="chat-header">
  <div class="titre-chat">
    <h1 class="threed">group chat</h1>
  </div>

        <form @submit.prevent="sendMessage">
            <div class="form-user">
                <input type="text" v-model="user" placeholder="Choose your username">
            </div>
            <hr>
            <div class="form-message">
                <input type="text" v-model="message" placeholder="Type a message">
            </div>
            <hr>
            <div class="flex-item"><button type="submit" class="send-but">Send</button></div>
        </form>
    </div>
<br>
<div class="chat-body">
    <div class="messages" v-for="(msg, index) in messages" :key="index">
        <div class="flex-item"><span class="username">{{ msg.user }} : </span>{{ msg.message }}</div>
    </div>
</div>
<br>
<div class="chat-footer">
<div class="flex-item"><button @click="goHome" class="button-style" type="submit">home</button> <button @click="goProfile" class="button-style">profile</button></div>
</div>
  </div>
</template>

<script>
import io from "socket.io-client";

export default {
  name: "Chat",
  data() {
    return {
      user: "",
      message: "",
      messages: [],
      socket: io("localhost:4200")
    };
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();

      this.socket.emit("SEND_MESSAGE", {
        user: this.user,
        message: this.message
      });
      this.message = "";
      console.log(this.user, 'has joined !');
    },
    goHome() {
      this.$router.push({ name: "Home" });
    },
    goProfile() {
      this.$router.push({ name: "Profile" });
    }
  },
  mounted() {
    this.socket.on("MESSAGE", data => {
      this.messages.push(data);
    });
  }
};
</script>

<style>
.title {
}

.send-but {
  height: 40px;
  padding: 0;
  margin: 0;
  text-align: center;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}

.form-user {
  height: 40px;
  width: 310px;
  border: none;
  margin: auto;
  background: teal;
  color: #211833;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.form-message {
  height: 40px;
  width: 310px;
  position: relative;
  background: teal;
  border: none;
  margin: auto;
}

.chat-body {
  height: 300px;
  width: 310px;
  border: none;
  text-align:justify;
  padding: 10px;
  color: #211833;
  overflow: auto;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 0;
  margin: 0;
  /* -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start; */
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.flex-item {
  padding: 0;
  margin: 0;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #dfd3e7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #69468a;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c6afd3;
}

.username {
  font-weight: bold;
  font-family: "Lato", sans-serif;
  top: 22px;
  text-transform: uppercase;
  color: #211833;
  font-size: 0.8em;
  letter-spacing: 2px;
}

.messages {
  /* position: relative; */
  margin-left: 25px;
  margin-bottom: 5px;
  color: #f9fbff;
  font-size: 0.7em;
  padding: 10px 10px 10px 12px;
  border-radius: 20px;
  background: teal;
  /* text-align: justify */
}

.button-style {
  border-radius: 30px;
  width: 130px;
  /* margin-left: 25px; */
  /* display: inline-block; */
}

.titre-chat {
  width: 310px;
  position: relative;
  top: 10px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.titre-chat h1 {
  font-size: 20px;
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
