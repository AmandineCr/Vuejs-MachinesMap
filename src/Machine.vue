<template>
    <div id="mac">
        <h1> Machine name : {{name}}</h1>
        <h3> Status : {{status}}</h3>
        <h5> Checked at : {{checkedAt}} </h5>
      <!--<machineClick></machineClick>-->

    </div>
</template>

<script>

    export default {
        data () {
          return {

            // machine: {
            //   name: 'Nespresso',
            //   status: false,
            //   checkedAt: event.toLocaleString('en-GB', { timeZone: 'UTC' }),
            // }
          }
        },
      props:  [
        'name',
        'status',
        'checkedAt',
        'coucou',
        ]
      }


</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
        margin-top: 30px;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

</style>
