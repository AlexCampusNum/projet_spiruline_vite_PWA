<script>
  import Supplier from "./Supplier.vue";
  import { format } from 'timeago.js';
  import axios from "axios";

  export default {
    components: { Supplier },
    data() {
        return {
          suppliers: [],
          loading: true,
          error: null,
        };
    },
    async mounted() {
      this.loading = true;
      this.error = null;
      try {
        // await new Promise(resolve => setTimeout(resolve, 2000));

        const response = await axios.get('https://suppliers.depembroke.fr/api/suppliers');
        console.log("Toute la data de l'API : ",response.data.data);
        this.suppliers = response.data.data.map(supplier => ({
          id: supplier.id,
          name: supplier.name,
          checkedAt: supplier.checkedAt,
          status: supplier.status,
        }));
      }catch (error) {
        this.error = 'Erreur lors de la récupération des données';
        console.error(error);
      } finally {
        this.loading = false;
      }
    },
    methods: { format }
  }
</script>

<template>
  <div class="blabla">
    <supplier
        v-for="supplier in suppliers"
        :key="supplier.id"
        :name="supplier.name"
        :status="supplier.status"
        :checkedAt=format(supplier.checkedAt) />
    <div v-if="loading">Chargement...</div>
    <div v-if="error">{{ error }}</div>
  </div>
</template>

<!--<style>-->
<!--  //.blabla{-->
<!--  //  display: flex;-->
<!--  //  flex-wrap: wrap;-->
<!--  //}-->
<!--</style>-->