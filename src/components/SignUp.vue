<template>
    <div>
        <img :src=img class="logo">
        <h1 class="heading">Sign Up</h1>
        <div class="register">
            <input type="text" v-model="name" placeholder="Enter Name">
            <input type="Email" v-model="email" placeholder="Enter Email">
            <input type="password" v-model="password" placeholder="Enter Pasword">
            <button v-on:click="signup">Sign Up</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    data() {
        return {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dQnb0LH25r8lDTFPKOvsCaEOGNXZrk2NvA&usqp=CAU",
            name: null,
            email: null,
            password: null,
        }
    },
    methods: {
        async signup() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            if (result.status === 201) {
                alert('signup successful')
                localStorage.setItem("userinfo", JSON.stringify(result.data))
                this.$router.push({ name: 'home' })
            }
        }
    },

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