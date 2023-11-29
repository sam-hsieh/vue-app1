<script setup>
import { ref, reactive, onMounted, computed } from 'vue';
import axios from "axios";
import { useRoute } from 'vue-router'
const route = useRoute();
const coursesDetail = ref([]);
const errorMess = ref("")
const fetchInit = async () => {
    try {
        const res = await axios({
            method: "get",
            url: "/json/vue-courses.json",
        });
        coursesDetail.value = res.data
        res.data.forEach(element => {
            if (element.id == route.params.id) {
                coursesDetail.value = element
            }
        });
        //document.getElementById('loading').style.display='none'
    } catch (error) {
        errorMess.data = "API 錯誤"
    }
    return (errorMess)
}
const countPrice = computed((price) => {
    let comma = /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g;
    price = price.replace(comma, ',');
    return price;
})
onMounted(() => {
    //一開始就出現
    fetchInit()
});

</script>

<template>
    <div class="p-5">
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <h1>{{ coursesDetail.courseName }}</h1>
                    <hr>
                    <img :src=coursesDetail.cover alt="" class="img-fluid pb-3">
                    <p>{{ coursesDetail.description }}</p>

                    <hr>
                    <div class="d-flex aling-items-center">
                        <h4 class="me-4 mb-0"> {{ coursesDetail.price }} </h4>
                        <RouterLink to="/courses" class="btn btn-primary">返回列表</RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
