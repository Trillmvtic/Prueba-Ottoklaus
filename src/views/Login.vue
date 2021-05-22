<template>
  <div class="login">
    <form @submit.prevent="login" class="formulario">
      <h2 class="signup">Iniciar Sesión</h2>
      <input v-model="usuario" type="text" placeholder="Usuario" />
      <input v-model="contrasena" type="password" placeholder="Contraseña" />
      <v-btn
        class="ma-2"
        color="white"
        @click="loader = 'loading'"
        type="submit"
        value="ingresar"
      >
        Login
      </v-btn>

      <v-btn @click="logInGoogle" dark depressed color="dark">
        Login con Gmail
      </v-btn>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      usuario: "",
      contrasena: "",
    };
  },

  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario, this.contrasena)
        .then(
          (user) => this.$router.replace("home"),
          (error) => console.error(error)
        );
    },

    logInGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          this.$router.replace("home");
        });
    },
  },
};
</script>

<style lang="scss">

.signup {
    color: white;
}

.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5px;
}

.login {
  background: transparent;
}

#app {
  background-image: url("../assets/toys.jpg");
}
</style>
