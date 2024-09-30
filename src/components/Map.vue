<script>
import 'leaflet/dist/leaflet.css';
import { LMap, LTileLayer, LMarker } from "@vue-leaflet/vue-leaflet";
import axios from 'axios';

// import L from 'leaflet';
//
// import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import shadowUrl from 'leaflet/dist/images/marker-shadow.png';
//
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl,
//   iconUrl,
//   shadowUrl,
// });

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      zoom: 2,
      center: [46.85322, 1.419482],
      suppliers: [],
      loading: true,
      error: null,
    };
  },
  methods: {
    getUserLocation() {
      if (navigator.geolocation) {
        console.log(navigator.geolocation);
        navigator.geolocation.getCurrentPosition(
            (position) => {
              const { latitude, longitude } = position.coords;
              this.center = [latitude, longitude];
              this.zoom = 12;
            },
            (error) => {
              console.error("Erreur de géolocalisation", error);
              this.error = "Impossible d'obtenir la géolocalisation.";
            }
        );
      } else {
        this.error = "Géolocalisation non supportée par ce navigateur.";
      }
    }
  },
  async mounted() {
    this.getUserLocation();
    this.loading = true;
    this.error = null;
    try {
      const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers');
      console.log("Toute la data de l'API : ",response.data.data);
      this.suppliers = response.data.data.map(supplier => ({
        id: supplier.id,
        latitude: supplier.latitude,
        longitude: supplier.longitude,
      }));
    }catch (error) {
      this.error = 'Erreur lors de la récupération des données';
      console.error(error);
    } finally {
      this.loading = false;
    }
  }
};
</script>

<template>
  <div style="height:600px; width:800px">
    <l-map ref="map" v-model:zoom="zoom" :center="center" :use-global-leaflet="false">
      <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          layer-type="base"
          name="OpenStreetMap"
      ></l-tile-layer>

      <l-marker
          v-for="supplier in suppliers"
          :key="supplier.id"
          :lat-lng="[supplier.latitude, supplier.longitude]"
      >
      </l-marker>
    </l-map>
  </div>
</template>
