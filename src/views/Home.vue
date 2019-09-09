<template lang='pug'>
  .container-fulid
    .row.mx-0
      .col-3.menu.d-flex.flex-column
        img.logo(src='@/assets/image/logo.svg')
        nav.flex-column.mx-auto
          button.btn.btn-warning
            img(src='@/assets/image/icon-file-upload.svg')
            | 上傳檔案
          a.nav-link(href='')
            img(src='@/assets/image/icon-folder-upload.svg')
            | 上傳資料夾
          a.nav-link(
            href=''
            data-toggle='modal'
            data-target='#ModalAddFolder'
          )
            img(src='@/assets/image/icon-folder-add.svg')
            | 新資料夾
          a.nav-link(href='')
            img(src='@/assets/image/icon-folder-share.svg')
            | 共享資料夾
          a.nav-link(href='')
            img(src='@/assets/image/icon-star.svg')
            | 已標記星號
          a.nav-link(href='')
            img(src='@/assets/image/icon-trash.svg')
            | 垃圾桶
      .col-9.box
        .row.top
          .col-8
            nav(aria-label='breadcrumb')
              ol.breadcrumb
                li.breadcrumb-item.root 我的雲端硬碟
                li.breadcrumb-item.my-auto fold
          .col-4
            select.form-control
              option Default select
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='sass'>
.row
  height: 100vh
  .menu
    background-color: $dark
    img.logo
      margin: 80px auto
    nav
      button
        margin-bottom: 40px
        img
          margin-right: 12px
      a
        color: $grey
        margin-bottom: 16px
        img
          margin-right: 12px
  .box
    background-color: $black
    .row
      margin-top: 54px
      nav
        .breadcrumb
          background-color: transparent
          color: $grey
          .root
            font-size: 20px
        .breadcrumb-item+.breadcrumb-item::before
          font-family: "Font Awesome 5 Free"
          content: "\f0da"
          font-weight: 900
</style>
