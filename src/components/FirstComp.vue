<template>
    <div class="container mx-auto py-8"> 
        <div v-for="cloth of allClothes" :key="cloth.id">
            <p @click="BrandSet(cloth.id)"
            class="first bg-red-500"
            v-if="(cloth.id + 1) % 2 != 0"
            >
              {{ cloth.id + 1 }} <span>{{ cloth.name }}</span> 
            </p>
            <p @click="BrandSet(cloth.id)"
            class="first bg-green-500"
            v-if="(cloth.id + 1) % 2 == 0"
            >
              {{ cloth.id + 1 }} <span>{{ cloth.name }}  </span> 
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(["allClothes"]),
  },
  async mounted() {
    this.fetchClothes();
  },
  methods: {
    ...mapActions(["fetchClothes"]),
    BrandSet() {
      alert("Желаем Вам хорошей покупки");
    },
  },
};
</script>