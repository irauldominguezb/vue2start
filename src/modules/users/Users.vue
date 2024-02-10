<template>
    <div class="container mt-3">
      <b-row>
        <b-col cols="12">
          <b-card class=" shadow-lg">
                <template slot="header">
                    <b-row class="pt-1" align-v="center">
                        <b-col md="6"><h4>Usuarios</h4></b-col>
                    </b-row>
                </template>
                <b-card-body
                    class="text-center"
                    border-variant="white"
                    header-bg-variant="white"
                    header-text-variant="ssm"
                >
                  <b-row>
                      <b-col cols="12" class="mb-3" align-items="center">
                          <b-row class="justify-content-end">
                              <b-col md="6">
                                  <b-form-group label-for="search">
                                      <b-input-group>
                                          <b-form-input
                                              id="search"
                                              v-model="value"
                                              type="search"
                                              placeholder="Buscar..."
                                          ></b-form-input>
                                      </b-input-group>
                                  </b-form-group>
                              </b-col>
                          </b-row>
                      </b-col>
                  </b-row>
                  <template>
                      <b-table
                          striped 
                          hover
                          :items="items" 
                          :fields="fields" 
                          class="text-center" 
                          show-empty 
                          bordered 
                          head-variant="true"
                          no-sort-reset
                          responsive
                          no-provider-filtering
                          :current-page="currentPage"
                          :filter="value"
                          :empty-filtered-text="text"
                          :per-page="perPage"

                      >
                          <template #head()="data">
                            <b-col class="text-center">
                              <small class="ml-3" style="color: #3c3c3d">
                                {{ data.label }}
                              </small>
                            </b-col>
                          </template>
                          <template v-slot:cell(name)="data">
                              <small>{{ data.value }}</small>
                          </template>
                          <template v-slot:cell(lastname)="data">
                              <small>{{ data.value }}</small>
                          </template>
                          <template v-slot:cell(email)="data">
                              <small>{{ data.value }}</small>
                          </template>
                          <template v-slot:cell(numberPhone)="data">
                              <small>{{ data.value ? data.value : 'S/N'}}</small>
                          </template>
                          <template v-slot:empty>
                              <div class="col text-center">No hay registros</div>
                          </template>
                      </b-table>
                  </template>
                  <b-row>
                      <b-col cols="12" class="mt-2">
                        <b-row>
                          <b-col cols="4" class="d-flex align-items-left">
                            <div align="left"><b class="text-secondary">Total de registros: </b> <label class="text-secondary">{{ totalRows }}</label></div>
                          </b-col>
                          <b-col cols="4">
                            <b-pagination @input="getPeople()" pills v-model="currentPage" :total-rows="totalRows" :per-page="perPage" align="center"></b-pagination>
                          </b-col>
                          <b-col cols="4">
                            <div align="right">
                              <b-form-select v-model="perPage" :options="[3, 5, 10, 15, 20]"/>
                            </div>
                          </b-col>
                        </b-row>
                      </b-col>
                  </b-row>
              </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </template>
  
  <script>
  import obtenerPersonas from "../../services/Person"
    export default {
      data() {
        return {
          items: [
          ],
          fields:[
            {
              key: 'name',
              label: 'Nombre',
            },
            {
              key: 'lastname',
              label: 'Apellido',
            },
            {
              key: 'email',
              label: 'Correo',
            },
            {
              key: 'numberPhone',
              label: 'Telefono',
            }
          ],
          currentPage: 1,
          perPage: 3,
          value: '',
          totalRows: 0,
          text: 'No hay registros'
        }
      },
      methods:{
        async getPeople(){
            try {
                const {content, totalElements} = await obtenerPersonas.obtenerPersonasPaginadas(parseInt(this.perPage),parseInt(this.currentPage))
                this.items = content
                this.totalRows = totalElements
            } catch (error) {
                console.log(error)
            }
        }
      },
      mounted(){
        this.getPeople()
      }
    }
  </script>