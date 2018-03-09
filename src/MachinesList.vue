<template>
    <div id="listmac">
        <h1>Machine List</h1>
      <toto v-for="student in students" v-bind:key="student.id" v-bind:name="student.name" v-bind:coucou="coucou">
      </toto>
      <machineClick id="mac" v-for="machine in machines" v-bind:key="machine.id" v-bind:name="machine.name"
                     v-bind:status="machine.status" v-bind:checkedAt="machine.checkedAt"v-bind:coucou="coucou">
      </machineClick>

    </div>
</template>

<script>
  var event = new Date();
    export default {
      data() {
        return {
          machines: [
            {id: 1,
            name: 'What else ?',
            status: true,
            checkedAt: (event.toLocaleString('en-FR', { timeZone: 'UTC' })),
            },
            {id: 2,
            name: 'Broken',
            status: false,
            checkedAt: (event.toLocaleString('en-FR', { timeZone: 'UTC' }))
            },
          ],
          students: [
            {name: "tata"},{name: "titi"},{name: "titi"}
          ],
          coucou: "hello",
        }
      }
    }
</script>

<style scoped>
    #listmac {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    #mac {
      border: 2px dotted rebeccapurple;
      margin: 30px 25%;
      width: 50%;
      text-align: center;


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
