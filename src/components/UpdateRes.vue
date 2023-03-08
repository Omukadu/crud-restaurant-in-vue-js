<template>
    <div>
        <HeaderComp />
        <img :src=img class="logo">

        <form class="register">
            <input type="text" required placeholder="name" v-model="restaurant.name">
            <input type="text" required placeholder="address" v-model="restaurant.address">
            <input type="number" required placeholder="contact" v-model="restaurant.contact">
            <button type="button" @click="update">Update Restaurant</button>
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
    components: {
        HeaderComp
    },
    async mounted() {
        let user = localStorage.getItem('userinfo');
        if (!user) {
            this.$router.push({ name: 'signup' })
        }

        const result = await axios.get("http://localhost:3000/restaurant/" + this.$route.params.id);
        console.log(result);
        this.restaurant = result.data
    },
    methods: {
        async update() {
            if (this.restaurant.name && this.restaurant.address && this.restaurant.contact) {
                const result = await axios.put("http://localhost:3000/restaurant/" + this.$route.params.id, {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact,
                })

                if (result.status === 200) {
                    alert("Restaurant updated successfully")
                    this.$router.push({ name: "home" })
                }
            }
        },

    }

}
</script>
<style>
.logo {
    width: 35 0px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>