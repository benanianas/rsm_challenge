<script setup lang="ts">
import { PropType, ref } from "vue";
import Brewery from "../types";
import Details from "./Details.vue";

const props = defineProps({
  data: {
    required: true,
    type: Object as PropType<Brewery>,
  },
  details: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits(["showDetails"]);
</script>

<template>
  <div class="preview card overflow-hidden position-relative">
    <img
      class="position-absolute end-0 opacity-25"
      src="/brew.svg"
      width="150"
    />
    <div class="card-body">
      <h5 class="card-title">{{ data.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted text-capitalize">
        {{ data.brewery_type }}
      </h6>
      <p class="card-text">
        <span class="ml-2">{{ data.street }}</span> <br v-if="data.street" />
        <span>{{ data.city }}, {{ data.postal_code }}</span
        ><br />
        <span>{{ data.state }}</span
        ><br />
      </p>
      <Details
        :show="details"
        :phone="data.phone"
        :lat="Number(data.latitude)"
        :lng="Number(data.longitude)"
      />
      <a
        :href="data.website_url"
        target="_blank"
        class="btn btn-primary m-2"
        :class="data.website_url ? '' : 'disabled'"
      >
        <i class="bi bi-link-45deg"></i> Visit Website</a
      >
      <button
        type="button"
        class="btn btn-secondary m-2"
        @click="emit('showDetails', data.id)"
      >
        <i
          class="bi"
          :class="details ? 'bi-chevron-double-up' : 'bi-chevron-double-down'"
        ></i>
        <span v-if="!details"> Show</span>
        <span v-else> Hide</span>
        Details
      </button>
    </div>
  </div>
</template>

<style lang="scss">
img {
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
.preview {
  width: 90%;
  margin: auto;
  background: white;
  height: 150px;
  padding: 10px 20px;
}
</style>
