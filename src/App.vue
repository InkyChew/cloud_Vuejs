<template lang='pug'>
  #app
    AllModals
    router-view
</template>

<script>
import { AllModals } from '@/components/AllModals'
export default {
  name: 'app',
  components: {
    AllModals
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>

</style>
