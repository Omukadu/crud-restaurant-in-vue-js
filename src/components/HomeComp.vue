<template>
    <div>
        <HeaderComp />

        <table border="1px">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Action</th>
            </tr>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.contact }}</td>
                <td>
                    <router-link :to="'/updateres/' + item.id">Update</router-link>
                    <button v-on:click="Delete(item.id)" style="margin-left: 10px;">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import axios from "axios"
import HeaderComp from './HeaderComp.vue'
export default {
    name: "HomeComp",
    data() {
        return {
            name: '',
            restaurants: [],
        }

    },
    components: {
        HeaderComp
    },
    mounted() {
        this.loaddata()
    },
    methods: {
        async Delete(id) {
            const result = await axios.delete("http://localhost:3000/restaurant/" + id)
            console.log(result)
            if (result.status === 200) {
                alert("data deleted successfully")
                this.loaddata()
            }

        },
        async loaddata() {
            let user = localStorage.getItem("userinfo");
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: "signup" })

            }

            let result = await axios.get("http://localhost:3000/restaurant");
            this.restaurants = result.data;
        }
    }
}
</script>
<style>
td {
    width: 160px;
    height: 40px;
    text-align: center;
}
</style>