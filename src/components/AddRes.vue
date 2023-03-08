<template>
    <div>
        <HeaderComp />
        <img :src=img class="logo">

        <form class="register">
            <input type="text" required placeholder="name" v-model="restaurant.name">
            <input type="text" required placeholder="address" v-model="restaurant.address">
            <input type="number" required placeholder="contact" v-model="restaurant.contact">
            <button type="button" v-on:click="AddRestaurant">Add Restaurant</button>
        </form>
    </div>
</template>
<script>
import HeaderComp from './HeaderComp.vue'
import axios from 'axios'
export default {
    data() {
        return {
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_dQnb0LH25r8lDTFPKOvsCaEOGNXZrk2NvA&usqp=CAU",

            restaurant: {
                name: '',
                address: '',
                contact: '',
            }
        }
    },
    methods: {
        async AddRestaurant() {
            if (this.restaurant.name && this.restaurant.address && this.restaurant.contact) {
                const result = await axios.post("http://localhost:3000/restaurant", {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact,
                })
                if (result.status === 201) {
                    alert("Restaurant added successfully")
                    this.$router.push({ name: "home" })
                }
            }
            else {
                alert("enter valid information")
            }

        },
    },
    components: {
        HeaderComp
    }
}
</script>
<style>
.register {
    margin-top: 40px;
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

.logo {
    width: 35 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>
