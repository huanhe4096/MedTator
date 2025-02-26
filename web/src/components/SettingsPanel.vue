<script setup>
import { ref } from "vue";
import { useDataStore } from "../DataStore";

const store = useDataStore();

</script>

<template>
<div class="card flex justify-center">
<Drawer v-model:visible="store.status.flag_settings_panel_visible"
    class="!w-[40rem]"
    position="right">

<template #header>
    <div class="flex items-center gap-2">
        <!-- gear icon -->
        <font-awesome-icon :icon="['fas', 'cog']" class="mr-1" />
        <span class="font-bold">Settings</span>
    </div>
</template>

<div class="flex flex-col gap-4">
    <p>You can change system settings in this panel.</p>
    
    <div class="flex flex-col gap-2 mt-4">
        <div class="flex flex-col justify-start gap-2">
            <label for="setting_openai_api_key">
                <!-- key icon -->
                <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
                OpenAI API Key
            </label>
            <InputText id="setting_openai_api_key" v-model="store.config.openai_api_key" />
            <p class="text-sm text-gray-500">
                OpenAI API key is a string like <code class="font-bold">sk-...XXXX</code>. Your OpenAI API key is required for using the GPT models. We only use your API key for your own data and won't share it with others. The key is stored in your browser's local storage only. The cost of using the OpenAI API depends on the number of tokens in your tasks. Please refer to the OpenAI website for more pricing information. <a href="https://openai.com" target="_blank">OpenAI</a>
            </p>
        </div>
    </div>
    
    <div class="flex flex-col gap-2 mt-4">
        <div class="flex flex-col justify-start gap-2">
            <label for="setting_anthropic_api_key">
                <!-- key icon -->
                <font-awesome-icon :icon="['fas', 'key']" class="mr-1" />
                Anthropic API Key
            </label>
            <InputText id="setting_anthropic_api_key" v-model="store.config.anthropic_api_key" />
            <p class="text-sm text-gray-500">
                Anthropic API key is a string like <code class="font-bold">sk-...XXXX</code>. Your Anthropic API key is required for using the GPT models. We only use your API key for your own data and won't share it with others. The key is stored in your browser's local storage only. The cost of using the Anthropic API depends on the number of tokens in your tasks. Please refer to the Anthropic website for more pricing information. <a href="https://anthropic.com" target="_blank">Anthropic</a>
            </p>
        </div>
    </div>

</div>

<template #footer>
    <div class="flex items-center gap-2">
        <Button icon="pi pi-save" 
            label="Save Settings" 
            @click="store.saveSettingsToLocalStorage();"
            outlined>
        </Button>
    </div>
</template>


</Drawer>
</div>
</template>