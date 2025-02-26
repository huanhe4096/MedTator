<script setup>
import { useRouter } from "vue-router";
import { useDataStore } from "../DataStore";
import { onMounted, ref } from "vue";
const store = useDataStore();
const router = useRouter();

onMounted(() => {
    console.log('* mounted Footer');
});
</script>

<template>
<div id="navi">
    <div class="navi-left prevent-select">
        
        <div class="navi-item"
            @click="store.gotoPage('')"
            :class="{'active-page': store.current_page==''}">
            <font-awesome-icon :icon="['fas', 'marker']" />
            Annotation
        </div>
        
        <div class="navi-item"
            v-tooltip.bottom="'Export annotations to other formats.'"
            @click="store.gotoPage('export')"
            :class="{'active-page': store.current_page=='export'}">
            <font-awesome-icon :icon="['fas', 'file-export']" />
            Export
        </div>
    </div>

    <div class="navi-right">
        <div class="navi-item"
            v-tooltip.bottom="'Make this interface full screen.'"
            @click="store.setFullscreen()">
            <font-awesome-icon :icon="['fas', 'expand']" class="mr-1" />
        </div>

        <div class="navi-item !mx-0"
            v-tooltip.bottom="'Change system settings'"
            @click="store.status.flag_settings_panel_visible = true">
            <font-awesome-icon :icon="['fas', 'cog']" class="mr-1" />
            <span>
                Settings
            </span>
        </div>
    </div>
</div>
</template>

<style scoped>
</style>