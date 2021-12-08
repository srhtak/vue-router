<script>
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
export default {
  components: {
    ExperienceCard,
  },
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  computed: {
    destination() {
      return sourceData.destinations.find(
        (destination) => destination.id === this.id
      );
    },
  },
};
</script>

<template>
  <section v-if="destination" class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" alt="" />
      <p>{{ destination.description }}</p>
    </div>
  </section>

  <section class="experiences">
    <h2>Top Expreiences in {{ destination.name }}</h2>
    <div class="cards">
      <experience-card
        v-for="experience in destination.experiences"
        :key="experience.slug"
        :experience="experience"
      />
    </div>
  </section>
</template>

<style>
</style>