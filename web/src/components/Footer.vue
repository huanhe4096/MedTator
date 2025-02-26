<script setup>
import { useDataStore } from "../DataStore";
import { onMounted, ref } from "vue";
const store = useDataStore();

onMounted(() => {
});
</script>

<template>
<div class="footer">
<div class="footer-left">

</div>

<div class="footer-right flex flex-row items-center">
    <div>
    </div>
    <div>
        MedTator {{ store.version }}
        |
        <!-- github icon -->
        <font-awesome-icon :icon="['fab', 'github']" class="mr-1" />
        GitHub
    </div>
</div>
</div>


</template>
<style scoped>

.footer {
  position: absolute;
  bottom: 0;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2rem;
  background-color: var(--bg-color-menu);
  border-top: 1px solid var(--bd-color);
}
</style>