<template lang='pug'>
  #ModalAddFolder.modal.fade(tabindex='-1', role='dialog', aria-labelledby='ModalAddFolderTitle', aria-hidden='true')
    .modal-dialog.modal-dialog-centered(role='document')
      .modal-content
        .modal-header
          h5#ModalAddFolderLongTitle.modal-title 建立新資料夾
          button.close(type='button', data-dismiss='modal', aria-label='Close')
            span(aria-hidden='true') &times;
        .modal-body
          | ...
        .modal-footer
          button.btn.btn-secondary(type='button', data-dismiss='modal') 取消
          button.btn.btn-primary(type='button') 建立
</template>

<script>
export default {
  name: 'ModalAddFolder',
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
