<script>
// import SuppliersList from './components/SuppliersList.vue';
// import SuppliersMap from './components/SuppliersMap.vue';
//
// export default {
//   components: {SuppliersList, SuppliersMap},
// }
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <div class="wrapper">
      <div class="greetings">
        <h1 class="green">Que voulez-vous faire ?</h1>
        <router-link to="/list">
          <button>Afficher la liste des fournisseurs</button>
        </router-link>
        <router-link to="/map">
          <button>Afficher la carte des fournisseurs</button>
        </router-link>
      </div>
    </div>
  </main>
  <router-view></router-view>
</template>

<style>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}
</style>
