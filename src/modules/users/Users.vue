<template>
    <div class="m-3">
      <h2>Hola</h2>
      <b-table striped hover :items="items" :per-page="perPage" :current-page="currentPage"></b-table>
    </div>
  </template>
  
  <script>
  import obtenerPersonas from "../../services/Person"
    export default {
      data() {
        return {
          items: [],
          currentPage: 1,
          perPage: 3,
        }
      },
      methods:{
        async getPeople(){
            try {
                const response = await obtenerPersonas.obtenerPersonasPaginadas(parseInt(this.perPage),parseInt(this.currentPage))
                this.items = response.data;
            } catch (error) {
                console.log(error)
            }
        }
      }
    }
  </script>