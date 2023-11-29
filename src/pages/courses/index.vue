<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";
const coursesData = ref([]);
const errorMess = ref("")
const fetchInit = async () => {
    try {
        const res = await axios({
            method: "get",
            url: "/json/vue-courses.json",
        });
        coursesData.value = res.data
        document.getElementById('loading').style.display='none'
        console.log(res.data);
    } catch (error) {
        errorMess.value = "API 錯誤"
    }
    return (errorMess)
}
onMounted(() => {
    //一開始就出現
    fetchInit()
});
</script>
<template>
    <div id="loading">loading...</div>
    <div class="p-5">
        <div class="container">
            <div class="row">
                <div v-for="(item, idx) in coursesData" class="col-4 mb-4">
                    <h2>{{ item.courseName }}</h2>
                    <img :src=item.cover alt="" class="img-fluid pb-3">
                    <div class="d-flex align-items-center">
                        <h4 class="me-4 mb-0"> {{ item.price }}</h4>
                        <RouterLink :to="`courses/${item.id }`" class="btn btn-primary">了解更多</RouterLink>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
#loading {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}
</style>