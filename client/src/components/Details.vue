<script setup lang="ts">
defineProps({
  show: {
    required: true,
    type: Boolean,
  },
  phone: {
    required: true,
    type: String,
  },
  lat: {
    required: true,
    type: Number,
  },
  lng: {
    required: true,
    type: Number,
  },
});
</script>

<template>
  <Transition name="slide-fade"> 
      <div v-show="show">
      <p><i v-if="phone" class="bi bi-telephone"></i> {{ phone }}</p>
      <GMapMap
        v-if="lat && lng"
        :center="{
          lat,
          lng,
        }"
        :zoom="14"
        style="width: 100%; height: 300px; margin-bottom: 20px"
      >
        <GMapMarker
          :position="{
            lat,
            lng,
          }"
        />
      </GMapMap>
    </div>
  </Transition>
</template>

<style>
.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
