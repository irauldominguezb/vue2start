<script setup>
</script>

<template>
  <div>
    <div class="header">
      <b-navbar variant="faded" type="light">
          <b-navbar-brand 
            tag="h1" 
            class="m-2 text-white text-center"
          >
            Practica 1
          </b-navbar-brand> 
      </b-navbar>
    </div>
    <div class="sidebar">
      <b-nav vertical>
          <b-nav-item  class="nav-item"
          ><b-link to="/toys" class="nav-link">
            <b-row>
              <b-col class="p-0 d-flex justify-content-between">
                Juguetes
                <b-icon icon="gift-fill" class="icon"></b-icon>
              </b-col>
            </b-row></b-link>
          </b-nav-item>

          <b-nav-item 
          class="nav-item"
          ><b-link to="" class="nav-link">
            <b-row>
              <b-col class="m-0 p-0 d-flex justify-content-between">
                Electrodomesticos
                <b-icon icon="tools" class="icon"></b-icon>
              </b-col>
            </b-row>
            </b-link>
          </b-nav-item>
 
          <b-nav-item class="nav-item"
          ><b-link class="nav-link"><b-row>
              <b-col class="m-0 p-0 d-flex justify-content-between">
                Hogar
                <b-icon icon="house-door-fill" class="icon"></b-icon>
              </b-col>
            </b-row></b-link>
          </b-nav-item>
        </b-nav>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>  
</template>

<style scoped>



.nav-item{
  font-family: 'Roboto', sans-serif; 
  background-color: #049474;
  border-bottom: #f2f2f2 1px solid;
}

.nav-link{
  font-size: 12px;
  text-decoration: none;
  color: #f2f2f2;
  
}

.nav-link:hover{
  color: #f2f2f2;
}


.nav-item:hover{
  color: #aeaeae
}

.icon{
  color: #f2f2f2;
}


.header{
  background-color: #042b61;
  float: left;
  height: 76px;
  width: 100%;
}

.sidebar{
  float: left;
  width: 13%;
  height: 699px;
  background-color: white;
}

.content{
  width: 87%;
  background-color: #f2f2f2;
  height: 699px;
  float: left;
}
.box{
  width: 250px;
  height: 150px;
  margin: 20px 10px 10px 20px;
  float: left;
}
</style>
