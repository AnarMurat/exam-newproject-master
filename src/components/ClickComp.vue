<template>
    <div class="container mx-auto">
        <div class="click">
            <p>{{ getNumber }}</p>
            <p @click="getClick()">Click me!</p>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  computed: mapGetters(['getNumber']),
  methods: mapActions(['getClick']),
}
</script>