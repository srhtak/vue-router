<template>
  <section>
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="require(`@/assets/${destination.image}`)" alt="" />
    </div>
  </section>
</template>

<script>
import store from "@/store.js";
export default {
  data() {
    return {
      destinationID: this.$route.params.id,
    };
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.id === this.destinationID
      );
    },
  },
};
</script>

<style>
</style>