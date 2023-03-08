<template>
    <div>
        <img :src=img class="logo">
        <h1 class="heading">Log In</h1>
        <div class="register">
            <input type="Email" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Pasword">
            <button v-on:click="login">Log In</button>
            <router-link to="/signup">Sign Up</router-link>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dQnb0LH25r8lDTFPKOvsCaEOGNXZrk2NvA&usqp=CAU",

            email: null,
            password: null,
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            if (result.status === 200 && result.data.length > 0) {
                localStorage.setItem("userinfo", JSON.stringify(result.data[0]));
                this.$router.push({ name: 'home' });
            }

        }
    },



    // mounted() {
    //     let user = localStorage.getItem("userinfo");
    //     if (user) {
    //         this.$router.push({ name: "home" })

    //     }
    // }
}
</script>

<style>
.logo {
    width: 35 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.register input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;

}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.heading {
    margin-top: auto;
    width: 120px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>