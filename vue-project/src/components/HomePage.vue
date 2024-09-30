<!--<script>-->
<!--import SuppliersList from './SuppliersList.vue';-->
<!--import SuppliersMap from './SuppliersMap.vue';-->

<!--export default {-->
<!--  components: { SuppliersList, SuppliersMap },-->
<!--  // data() {-->
<!--  //   return {-->
<!--  //     currentView: null-->
<!--  //   };-->
<!--  // },-->
<!--  // methods: {-->
<!--  //   onSuppliersListClick(){-->
<!--  //     // alert("Vous avez cliqué sur la liste des fournisseurs");-->
<!--  //     this.currentView = 'list';-->
<!--  //   },-->
<!--  //   onMapClick(){-->
<!--  //     // alert("Vous avez cliqué sur la carte");-->
<!--  //     this.currentView = 'map';-->
<!--  //   }-->
<!--  // }-->
<!--}-->
<!--</script>-->

<!--<template>-->
<!--  <div class="greetings">-->
<!--    <h1 class="green">Que voulez-vous faire ?</h1>-->
<!--    <router-link to="/list">-->
<!--      <button>Afficher la liste des fournisseurs</button>-->
<!--    </router-link>-->
<!--    <router-link to="/map">-->
<!--      <button>Afficher la carte des fournisseurs</button>-->
<!--    </router-link>-->

<!--    <suppliers-list v-if="currentView === 'list'" />-->
<!--    <suppliers-map v-if="currentView === 'map'" />-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped>-->
<!--h1 {-->
<!--  font-weight: 500;-->
<!--  font-size: 2.6rem;-->
<!--  position: relative;-->
<!--  top: -10px;-->
<!--}-->

<!--h3 {-->
<!--  font-size: 1.2rem;-->
<!--}-->

<!--.greetings h1,-->
<!--.greetings h3 {-->
<!--  text-align: center;-->
<!--}-->

<!--@media (min-width: 1024px) {-->
<!--  .greetings h1,-->
<!--  .greetings h3 {-->
<!--    text-align: left;-->
<!--  }-->
<!--}-->
<!--</style>-->
