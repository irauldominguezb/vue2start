<template>
    <div class="m-4">
       <div class="m-4">
          <b-row>
            <b-col cols="12">
              <b-breadcrumb :items="items"></b-breadcrumb>
            </b-col>
            <b-col cols="12">
              <b-card
                class="text-center shadow-lg mb-1 bg-white rounded"
                bg-variant="light"

              >
                <b-card-title>Bienvenido</b-card-title>
                <b-card-text>
                  En esta seccion podrás encontrar los mejores productos de la categoria de <b>electronicos</b>
                </b-card-text>
                <b-row align-v="center">
                  <b-col>
                    <hr>
                  </b-col>
                </b-row>
                <b-row align-h="start">
                  <b-col>
                    <b-card
                      title="BOPARTE"
                      tag="article"
                    >
                    <b-img
                        class="max-width-img"
                        fluid
                        src="https://m.media-amazon.com/images/I/71L04ky1+fL._AC_SX300_SY300_.jpg"
                        alt="Image"
                      ></b-img>
                      <b-row>
                        <b-col>
                          <label>Cactus bailarín, Carga USB Cactus parlante Que Repite lo Que Dices, 120 Pistas de música española, Divertidos</label>
                        </b-col>
                      </b-row>
                      <b-button style="background-color: #049474; border: none;" class="mt-2">
                        <b-icon icon="cart" aria-hidden="true"></b-icon> Agregar al carrito
                      </b-button>
                    </b-card>
                  </b-col>
                  <b-col> 
                    <b-card
                      title="WorWoder"
                      tag="article"
                    >
                    <b-img
                        class="max-width-img"
                        fluid
                        src="https://m.media-amazon.com/images/I/71VKFDAW-8L.__AC_SX300_SY300_QL70_ML2_.jpg"
                        alt="Image"
                      ></b-img>
                      <b-row>
                        <b-col>
                          <label>Juguete de peluche para cachorros, electrónico interactivo para mascotas, para caminar, ladrar, mover</label>
                        </b-col>
                      </b-row>
                      <b-button style="background-color: #049474; border: none;" class="mt-2">
                        <b-icon icon="cart" aria-hidden="true"></b-icon> Agregar al carrito
                      </b-button>
                    </b-card>
                  </b-col>
                  <b-col>
                    <b-card
                      title="Eilik"
                      tag="article"
                    >
                    <b-img
                        class="max-width-img"
                        fluid
                        src="https://m.media-amazon.com/images/I/61m0SZMyRzL.__AC_SX300_SY300_QL70_ML2_.jpg"
                        alt="Image"
                        rounded="true"
                      ></b-img>
                      <b-row>
                        <b-col>
                          <label>Lindo robot electrónico de mascota inteligente e interactivo | variedad de emociones, animaciones inactivas</label>
                        </b-col>
                      </b-row>
                      <b-button style="background-color: #049474; border: none;" class="mt-2">
                        <b-icon icon="cart" aria-hidden="true"></b-icon> Agregar al carrito
                      </b-button>
                    </b-card>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
       </div>
    </div>
</template>

<script>
export default {
    name: 'ElectronicPage',
    data() {
      return {
        items: [
            {
              text: 'Electronicos',
              active: true
            },
            {
              text: 'Videojuegos',
              to: {name: 'VideoGamesPage'}
            }
        ],
      };
    },
};
</script>

<style>
.max-width-img {
  max-width: 200px;
  max-height: 300px;
}
</style>