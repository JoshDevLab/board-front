<template>
  <div class="text-center">
    <main class="form-signin w-100 m-auto">
      <form @submit.prevent="onSubmit">
        <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

        <div class="form-floating">
          <input type="email" class="form-control" placeholder="name@example.com" v-model="email">
          <label>Email address</label>
        </div>
        <div class="form-floating mt-2">
          <input type="password" class="form-control" placeholder="Password" v-model="password">
          <label>Password</label>
        </div>
        <div class="form-floating my-2">
          <input type="text" class="form-control" placeholder="Nickname" v-model="firstname">
          <label>Firstname</label>
        </div>
        <div class="form-floating my-2">
          <input type="text" class="form-control" placeholder="Nickname" v-model="lastname">
          <label>Lastname</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary" type="submit" @click="register()">Sign up</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2023</p>
      </form>
    </main>
  </div>
</template>

<script>
export default {
    name: 'register',
    data() {
        return {
            email: '',
            password: '',
            firstname: '',
            lastname: '',
        }
    },
    methods: {
        register() {

            const params = {
                email: this.email,
                password: this.password,
                firstname: this.firstname,
                lastname: this.lastname
            }
            this.$store.dispatch('user/register', params);
        }
    },

}
</script>
