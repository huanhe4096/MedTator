<script setup>
import * as toolbox from '../../utils/toolbox';
import { ref, watch } from 'vue';
import { onMounted } from 'vue';
import { useDataStore } from '../../DataStore';
const store = useDataStore();

onMounted(() => {
  console.log('* mounted QuickstartPage Page');
});

// Define reactive variables
const ingredient = ref('document'); // For display mode
const markMode = ref('node');       // For entity marks
const showLinks = ref(true);        // For link marks - show links
const showLinkLines = ref(true);    // For link marks - show link lines
const hintMode = ref('simple');     // For hint marks - simple/off

///////////////////////////////////////////////////////////
// Save as
///////////////////////////////////////////////////////////
const menu_save_as = ref(null);
const items_menu_save_as = ref([
{
    label: 'Save-as Options',
    items: [
        {
          icon: 'pi pi-file',
          label: 'Download a copy of the current annotation data',
          command: () => {
            store.msg('TBD');
          }
        },
        {
          icon: 'pi pi-file',
          label: 'Download a copy as BioC format',
          command: () => {
            store.msg('TBD');
          }
        },
        {
          separator: true
        },
        {
          icon: 'pi pi-file',
          label: 'Download all as a ZIP file',
          command: () => {
            store.msg('TBD');
          }
        },
        {
          icon: 'pi pi-file',
          label: 'Download all with schema as a ZIP file',
          command: () => {
            store.msg('TBD');
          }
        },
    ]
}
]);
const toggleMenuSaveAs = (event) => {
  menu_save_as.value.toggle(event);
};


///////////////////////////////////////////////////////////
// Set Labels
///////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////
// Entity Marks
///////////////////////////////////////////////////////////
const onChangeMarkMode = (value) => {
  console.log('Mark mode changed to:', value);
  // Implement the actual functionality later
  store.msg(`Mark mode changed to: ${value}`);
};

// Watch for changes on markMode
watch(markMode, (newValue) => {
  onChangeMarkMode(newValue);
});


///////////////////////////////////////////////////////////
// Link Marks
///////////////////////////////////////////////////////////
const onChangeLinkSettings = () => {
  console.log('Link settings changed:', { showLinks: showLinks.value, showLinkLines: showLinkLines.value });
  // Implement the actual functionality later
  store.msg(`Link settings updated: Show Links=${showLinks.value}, Show Lines=${showLinkLines.value}`);
};

// Watch for changes on link settings
watch([showLinks, showLinkLines], () => {
  onChangeLinkSettings();
});


///////////////////////////////////////////////////////////
// Hint Marks
///////////////////////////////////////////////////////////
const onChangeHintMode = (value) => {
  console.log('Hint mode changed to:', value);
  // Implement the actual functionality later
  store.msg(`Hint mode changed to: ${value}`);
};

const onAcceptAllHints = () => {
  console.log('Accept all hints clicked');
  // Implement the actual functionality later
  store.msg('Accept all hints initiated');
};

// Watch for changes on hint mode
watch(hintMode, (newValue) => {
  onChangeHintMode(newValue);
});


</script>

<template>
<div class="menu">

  <div class="menu-group">
    <div class="menu-group-box ml-2" style="width: 180px;">

      <div class="flex flex-col justify-start max-w-64" style="overflow: hidden;">
        <span class="text-sm">
          <font-awesome-icon :icon="['far', 'file-excel']" class="mr-1" />
          Select Schema
        </span>
        <input type="file" ref="fileupload" accept=".xlsx, .xls" @change="onChangeDataFiles"
          v-tooltip.bottom="'Select local files to be added to the system.'" multiple="true" />
      </div>
    </div>

    <div class="menu-group-title">
      Schema File (.yaml / json / dtd)
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box" style="width: 180px;">

      <div class="flex flex-col justify-start max-w-64" style="overflow: hidden;">
        <span class="text-sm">
          <font-awesome-icon :icon="['far', 'file-excel']" class="mr-1" />
          Select Annotation Files
        </span>
        <input type="file" ref="fileupload" accept=".xlsx, .xls" @change="onChangeDataFiles"
          v-tooltip.bottom="'Select local files to be added to the system.'" multiple="true" />
      </div>
    </div>

    <div class="menu-group-title">
      Annotation File (.xml)
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">

      <Button text 
        class="menu-button"
        v-tooltip.bottom="'Save the current annotation data to a local file.'"
        @click="store.msg('TBD')()">
        <font-awesome-icon :icon="['far', 'save']" class="menu-icon" />
        <span>
          Save
        </span>
      </Button>

      <Button text 
        class="menu-button"
        v-tooltip.bottom="'Save the current annotation data to a local file.'"
        @click="toggleMenuSaveAs">
        <font-awesome-icon :icon="['far', 'copy']" class="menu-icon" />
        <span>
          Save as
        </span>
      </Button>
      <Menu ref="menu_save_as" :model="items_menu_save_as" :popup="true" />
    </div>

    <div class="menu-group-title">
      Save
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">

      <Button text class="menu-button" 
        v-tooltip.bottom="'Set color label to the selected annotation file'"
        @click="store.msg('TBD')()">
        <font-awesome-icon :icon="['far', 'bookmark']" class="menu-icon" />
        <span>
          Set Labels
        </span>
      </Button>
    </div>
    <div class="menu-group-title">
      File Label
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">

      <div class="flex flex-col justify-start gap-2 py-1 mr-2">
        <div class="flex items-center gap-2">
            <RadioButton v-model="ingredient" inputId="display_mode_doc" value="document" />
            <label for="display_mode_doc">Document</label>
        </div>
        <div class="flex items-center gap-2">
            <RadioButton v-model="ingredient" inputId="display_mode_sen" value="sentences" />
            <label for="display_mode_sen">Sentences</label>
        </div>
      </div>

      <Button text class="menu-button" 
        v-tooltip.right="'Visualize the annotation data using Brat'"
        @click="store.msg('TBD')()">
        <font-awesome-icon :icon="['fas', 'igloo']" class="menu-icon" />
        <span>
          Visualize
        </span>
      </Button>
    </div>
    <div class="menu-group-title">
      Display Mode
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">

      <div class="flex flex-col justify-start gap-1">
        <Button class="menu-small-button">
          <font-awesome-icon :icon="['fas', 'search']" />
          <span>
            Search
          </span>
        </Button>

        <Button class="menu-small-button">
          <font-awesome-icon :icon="['fas', 'eraser']" />
          <span>
            Clear
          </span>
        </Button>
      </div>

    </div>
    <div class="menu-group-title">
      Search
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">
      <div class="flex flex-col justify-start gap-2 py-1 mr-2">
        <div class="flex items-center gap-2">
            <RadioButton v-model="markMode" inputId="mark_mode_node" value="node" />
            <label for="mark_mode_node">Color + ID</label>
        </div>
        <div class="flex items-center gap-2">
            <RadioButton v-model="markMode" inputId="mark_mode_span" value="span" />
            <label for="mark_mode_span">Color Only</label>
        </div>
      </div>
    </div>
    <div class="menu-group-title">
      Entity Marks
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">
      <div class="flex flex-col justify-start gap-2 py-1 mr-2">
        <div class="flex items-center gap-2">
            <ToggleSwitch v-model="showLinks" inputId="show_links" />
            <label for="show_links" class="ml-1">Show Links</label>
        </div>
        <div class="flex items-center gap-2">
            <ToggleSwitch v-model="showLinkLines" inputId="show_lines" />
            <label for="show_lines" class="ml-1">Show Lines</label>
        </div>
      </div>
    </div>
    <div class="menu-group-title">
      Link Marks
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">
      <div class="flex flex-col justify-start gap-2 py-1 mr-2">
        <div class="flex items-center gap-2">
            <RadioButton v-model="hintMode" inputId="hint_mode_simple" value="simple" />
            <label for="hint_mode_simple">Simple</label>
        </div>
        <div class="flex items-center gap-2">
            <RadioButton v-model="hintMode" inputId="hint_mode_off" value="off" />
            <label for="hint_mode_off">No Hint</label>
        </div>
      </div>

      <Button text class="menu-button"
        v-tooltip.bottom="'Accept all hints in the current annotation'"
        @click="onAcceptAllHints">
        <font-awesome-icon :icon="['fas', 'check-double']" class="menu-icon" />
        <span>
          Accept All
        </span>
      </Button>
    </div>
    <div class="menu-group-title">
      Hint Marks
    </div>
  </div>


  <div class="menu-group">
    <div class="menu-group-box">

      <Button text class="menu-button" 
        v-tooltip.bottom="'Show the detailed user manual in a new window.'"
        @click="store.showGuide()">
        <font-awesome-icon icon="fa-solid fa-book" class="menu-icon" />
        <span>
          Wiki
        </span>
      </Button>
    </div>
    <div class="menu-group-title">
      Help
    </div>
  </div>
</div>
</template>

<style scoped>
</style>