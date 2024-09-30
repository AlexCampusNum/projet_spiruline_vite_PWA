<script>
export default {
  props: {
    id: Number,
    name: String,
    status: Number,
    checkedAt: String,
  },
}
</script>

<template>
  <div class="thumbnail">
      <img src="../../public/supplier.png" class="user" alt="icone utilisateur" />
      <h1>{{ name }}</h1>
      <h3 class="green" v-if="status">A du stock : OK</h3>
      <h3 class="red" v-else>N'as plus de stock</h3>
      <h5>Date de dernier relevé des stocks : {{ checkedAt.toLocaleString() }}</h5>
  </div>
</template>

<style>
  // texte en rouge
  .red{
    color: red;
  }
  // texte en vert
  .green{
    color: green;
  }
  // div avec les infos centrée
  .thumbnail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px black solid !important;
    margin: 0.4vw;
    padding: 1vw;
    width: 20vw;
    height: 22vw;
  }
  .user{
    width: 5vw;
  }

</style>