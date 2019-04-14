<!DOCTYPE html>
<template>
  <html>

  <head>
    <meta charset="UTF-8">
    <title>PatentCloud Backstage</title>

  </head>

  <body>
    <div>
      <p><a href="#" @click.prevent="Home">HOME</a></p>
    </div>
  </body>

  </html>
</template>

<script>
  import router from '../router/router'
  export default {
    name: 'Main',
    data: function () {
      return {
        url: ''
      }
    },
    methods: {
      Home: function () {
        router.push('/Dashboard')
      }
    }
  }
</script>

<style>

</style>