<script setup>
import NaviMenu from '../components/NaviMenu.vue';
import Footer from '../components/Footer.vue';
import * as toolbox from '../utils/toolbox';
import { onMounted } from 'vue';
import { useDataStore } from '../DataStore';
import HomeMenu from '../components/Home/HomeMenu.vue';
const store = useDataStore();

onMounted(() => {
  console.log('* mounted QuickstartPage Page');
});

</script>

<template>
<NaviMenu />
<HomeMenu />


<div class="main">


</div>


<Footer />
</template>

<style scoped>
</style>