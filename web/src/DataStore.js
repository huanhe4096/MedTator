import { defineStore } from 'pinia';
import { useToast } from "primevue/usetoast";
import router from './router';
import * as toolbox from './utils/toolbox';

export const useDataStore = defineStore('jarvis', {

state: () => ({
    // current current_view
    current_page: '/',

    // the config for app
    app_config: null,

    // the config for user
    config: {
        openai_api_key: null,
        openai_model_name: 'gpt-4o',
    },

    // other system related data
    toast: useToast(),

    // for the router
    router: router,

    // current models
    ai_models: [
    {
        name: 'openai/gpt-4o',
        label: 'GPT-4o',
    },
    {
        name: 'anthropic/claude-3-5-sonnet',
        label: 'Claude 3.5',
    },
    ],


    // status of the system
    status: {
        // settings panel visibility
        flag_settings_panel_visible: false,

        // true if the system is busy
        busy: false,

        // true if extracting by AI
        flag_extracting: false,
    },
}),

getters: {
    
},

actions: {
    gotoPage(page) {
        this.current_page = page;
        this.router.push("/" + page);
    },

    showGuide() {
        this.msg('This is a guide message', 'Guide', 'info');
    },

    setFullscreen() {
        // set the fullscreen mode
        document.documentElement.requestFullscreen();
    },

    // make a sample store for development
    makeSampleStore() {
    },

    ///////////////////////////////////////////////////////
    // Page related
    ///////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////
    // Settings related
    ///////////////////////////////////////////////////////
    updateSettingsByJSON: function(json) {
        // copy the items from json to store.config
        for (let key in this.config) {
            if (json.hasOwnProperty(key)) {
                this.config[key] = json[key];
            }
        }
    },

    saveSettingsToLocalStorage: function() {
        localStorage.setItem(
            "config",
            JSON.stringify(this.config)
        );

        // also update the Goku instance using the new settings
        Goku.init(this.config);

        console.log('* saved config to local storage');
        this.msg('Settings saved', 'Settings', 'info');
    },

    loadSettingsFromLocalStorage: function() {
        // just load the object from localstorage
        let x = localStorage.getItem('config');

        if (x == null) {
            console.log('* not found config from local');
            return;
        }

        // parse the JSON
        let cfg = JSON.parse(x);
        console.log('* local storage config:', cfg);

        this.updateSettingsByJSON(cfg);

        console.log('* loaded config from local storage');
    },

    clearSettingsFromLocalStorage: function() {
        localStorage.removeItem('config');
        this.msg('Settings cleared', 'Settings', 'info');
    },

    msg(
        message, 
        title='Message', 
        type='info',
        life=3000
    ) {
        this.toast.add({
            detail: message,
            summary: title,
            severity: type,
            life: life
        });
    },
}
});