<script setup lang="ts">
import { onMounted, ref } from "vue";
import BreweryPreview from "./components/BreweryPreview.vue";
import Brewery from "./types";

const breweries = ref<Brewery[]>([]);
const detailed = ref("");

const toggleDetails = (id: string) => {
  if (detailed.value === id) detailed.value = "";
  else detailed.value = id;
};

onMounted(async () => {
  const res = await fetch(
    "http://142.93.52.97:3000/get_harrisburg_breweries"
  );
  const data = await res.json();
  breweries.value = data;
});
</script>

<template>
  <div class="breweries-list col-12">
    <ul>
      <li v-for="brewery in breweries">
        <BreweryPreview
          :data="brewery"
          @show-details="toggleDetails"
          :details="brewery.id === detailed ? true : false"
        />
        <br />
      </li>
    </ul>
  </div>
</template>

<style lang="scss">

#app {
  padding-top: 30px;
  background-color: #fffbeb;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
}
ol,
ul {
  padding-left: 0rem !important;
}
.breweries-list {
  max-width: 800px;
  margin: auto;
}
</style>
