<template lang='pug'>
  ModalAddFolder
  //- .AllModals
  //-   template(v-for='modal in modals')
  //-     template(v-if='getModal.indexOf(modal.name) !== -1')
  //-       component(
  //-         :is='modal.name'
  //-       )
</template>

<script>
import ModalAddFolder from './ModalAddFolder'
import { mapGetters } from 'vuex'

export default {
  name: 'AllModals',
  components: {
    ModalAddFolder
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      getModal: 'getModal'
    })
  },
  methods: {
    modals: [
      { name: 'ModalAddFolder' }
    ]
  }
}
</script>

<style lang='sass'>

</style>
