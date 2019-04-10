<!DOCTYPE html>
<template>
  <html>

  <head>
    <meta charset="UTF-8">
    <title>PatentCloud Backstage</title>

  </head>

  <body>
    <div>
      <p><a href="#" @click.prevent="login">login</a></p>
    </div>
  </body>

  </html>
</template>

<script>
  import router from '../router/router'
  export default {
    name: 'login',
    data: function () {
      return {
        url: ''
      }
    },
    methods: {
      login: function () {
        router.push('/Main')
      }
    }
  }
</script>

<style>

</style>