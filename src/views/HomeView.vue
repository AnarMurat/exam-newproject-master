<template>
  <div class="home">
    <first/>
    <click/>
    <forma/> 
  </div>
</template>

<script>
import first from "../components/FirstComp.vue"
import click from "../components/ClickComp.vue";
import forma from "../components/FormaComp.vue";
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'HomeView',
  computed: mapGetters(['getNumber']),
  methods: mapActions(['getClick']),
  components: {
    forma,
    click,
    first
  }
}
</script>
