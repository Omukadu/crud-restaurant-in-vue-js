<template>
    <div class="nav">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'addres' }">Add Restaurant</router-link>
        <router-link :to="{ name: 'signup' }">Signup</router-link>
        <a href="/signup" @click="logout">logout</a>


    </div>
</template>
<script>
export default {
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: "signup" })
        }
    }
}
</script>

<style>
.nav {
    background-color: #333;
    overflow: hidden;
}

.nav a {
    float: left;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 16px;
}

.nav a:hover {
    background-color: #ddd;
    color: #222;
}

btn {
    height: 10px;
}
</style>