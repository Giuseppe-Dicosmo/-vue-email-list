const app = new Vue({
  el: "#container",
  data: {
    email: '',
    arrayEmail: [],
  },
  created() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((emailRandom) => {
          console.log(emailRandom);
          this.email = emailRandom.data.response;
          console.log(this.email);
          this.arrayEmail.push(this.email)
        });

    }
  },
});
