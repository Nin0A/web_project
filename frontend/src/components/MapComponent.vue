<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import maplibregl from 'maplibre-gl'

const mapContainer = ref(null)
let map

onMounted(() => {
    map = new maplibregl.Map({
        container: mapContainer.value,
        style: 'https://demotiles.maplibre.org/style.json', // style public gratuit
        center: [4.85, 45.75],
        zoom: 10
    })
})

onBeforeUnmount(() => {
    if (map) map.remove()
})
</script>

<template>
<div ref="mapContainer" class="map-container"></div>
</template>

<style scoped>
.map-container {
width: 100%;
height: 500px;
}
</style>