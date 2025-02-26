<script setup>
import NaviMenu from '../components/NaviMenu.vue';
import Footer from '../components/Footer.vue';
import * as toolbox from '../utils/toolbox';
import { onMounted } from 'vue';
import { useDataStore } from '../DataStore';
const store = useDataStore();

onMounted(() => {
  console.log('* mounted QuickstartPage Page');
});

</script>

<template>
  <NaviMenu />


  <div class="menu">

    <div class="menu-group">
      <div class="menu-group-box ml-2">
        <div>
          <p>
            <font-awesome-icon :icon="['fas', 'list']" />
            Summary:
          </p>
          <p>
            <b>N</b>
            Docs
            |
            <b>M</b>
            Tags
          </p>
        </div>
        
      </div>

      <div class="menu-group-title">
        <!-- <font-awesome-icon :icon="['fas', 'flag']" /> -->
      </div>
    </div>

    <div class="menu-group">
      <div class="menu-group-box ml-2">

        <Button text class="menu-button" 
          v-tooltip.bottom="'Risk stratify based on the following information'"
          @click="onClickRiskStratify()">
          <font-awesome-icon :icon="['far', 'file-excel']" class="menu-icon" />
          <span>
            Tag Text
          </span>
        </Button>

        <Button text class="menu-button" v-tooltip.bottom="'Risk stratify based on the following information'"
          @click="onClickRiskStratify()">
          <font-awesome-icon :icon="['far', 'file-excel']" class="menu-icon" />
          <span>
            Tag & Sentence
          </span>
        </Button>
      </div>

      <div class="menu-group-title">
        Text
      </div>
    </div>

    <div class="menu-group">
      <div class="menu-group-box ml-2">

        <Button text class="menu-button" v-tooltip.bottom="'Risk stratify based on the following information'"
          @click="onClickRiskStratify()">
          <font-awesome-icon :icon="['far', 'file']" class="menu-icon" />
          <span>
            IOB2/BIO (.tsv)
          </span>
        </Button>

        <Button text class="menu-button" v-tooltip.bottom="'Risk stratify based on the following information'"
          @click="onClickRiskStratify()">
          <font-awesome-icon :icon="['far', 'file-code']" class="menu-icon" />
          <span>
            BioC (.xml)
          </span>
        </Button>
      </div>

      <div class="menu-group-title">
        Dataset
      </div>
    </div>

    <div class="menu-group">
      <div class="menu-group-box ml-2">

        <Button text class="menu-button" v-tooltip.bottom="'Risk stratify based on the following information'"
          @click="onClickRiskStratify()">
          <font-awesome-icon :icon="['far', 'file-zipper']" class="menu-icon" />
          <span>
            MedTagger (.zip)
          </span>
        </Button>

        <Button text class="menu-button" v-tooltip.bottom="'Risk stratify based on the following information'"
          @click="onClickRiskStratify()">
          <font-awesome-icon :icon="['far', 'file-code']" class="menu-icon" />
          <span>
            spaCy (.jsonl)
          </span>
        </Button>
      </div>

      <div class="menu-group-title">
        Ruleset
      </div>
    </div>

    <div class="menu-group">
      <div class="menu-group-box">
        <Button text class="menu-button" v-tooltip.bottom="'Show the detailed user manual in a new window.'"
          @click="store.showGuide()">
          <font-awesome-icon :icon="['fas', 'terminal']" class="menu-icon" />
          <span>
            How-to use
          </span>
        </Button>
      </div>
      <div class="menu-group-title">
        Help
      </div>
    </div>
  </div>


  <div class="main">


  </div>


  <Footer />
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