<template>
    <div>
      <input >

      <p>{{name}}
        {{coucou}}
      </p>
    </div>
</template>

<script>
    export default {
        name: "toto",

      data () {
      return {
        msg: ""
        }
      },
      props: [
      'name',
        'coucou',
        ]

    }
</script>

<style scoped>

</style>
