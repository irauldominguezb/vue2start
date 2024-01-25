<template>
  <div class="m-3">
    <b-row>
        <b-col cols="12">
            <b-card
                class="shadow-lg mb-1 bg-white rounded"
                bg-variant="light"
              >
                <b-card-title class="text-center">Registro</b-card-title>
                <b-card-text class="text-secondary text-center">
                  ¡Bienvenido al sistema, por favor dejanos conocerte un poco más!
                </b-card-text>
                <b-row>
                    <b-col cols="12" >
                        <b-form>
                            <b-row>
                                <b-col cols="12" class="text-center">
                                    <b-img
                                        thumbnail 
                                        fluid 
                                        :src="this.user.photo ? this.user.photo : 'https://picsum.photos/200/200/?image=54'" 
                                        class="mb-2 img shadow-lg"
                                        rounded="circle"
                                        @click="openPicModal()"
                                        v-b-tooltip.right title="Da click sobre aquí para agregar una foto de perfil"
                                    >
                                    </b-img>

                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-name"
                                        label-for="input-name"
                                        invalid-feedback="¡Upss..Parece que ese no es un nombre válido!"
                                        class="mb-2"
                                    >
                                        <label class="mandatory-field">Nombre: </label>
                                        <b-form-input 
                                            id="input-name" 
                                            trim
                                            v-model="v$.user.name.$model"
                                            :state="v$.user.name.$dirty ? !v$.user.name.$error : null"
                                        >
                                        </b-form-input>
                                       
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-lastname"
                                        label-for="input-lastname"
                                        invalid-feedback="Debes ingresar un apellido"
                                        class="mb-2"
                                    >
                                        <label class="mandatory-field">Apellido paterno: </label> 
                                        <b-form-input 
                                            id="input-lastname" 
                                            trim
                                            v-model="v$.user.lastname.$model"
                                            :state="v$.user.lastname.$dirty ? !v$.user.lastname.$error : null"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-lastname"
                                        label-for="input-lastname"
                                        invalid-feedback="Debes ingresar un apellido"
                                        class="mb-2"
                                    >
                                        <label>Apellido materno: </label>
                                        <b-form-input 
                                            id="input-lastname" 
                                            trim
                                            v-model="v$.user.surname.$model"
                                            :state="v$.user.surname.$dirty ? !v$.user.surname.$error : null"
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-name"
                                        label-for="input-zip-code"
                                        invalid-feedback="¡Upss..Parece que ese no es un código postal válido!"
                                        class="mb-2"
                                    >
                                        <label  class="mandatory-field">Código postal: </label>
                                        <b-form-input
                                        id="input-zip-code"
                                        type="number"
                                        v-model="v$.user.zip.$model"
                                        :state="v$.user.zip.$dirty ? !v$.user.zip.$error : null"
                                        required
                                        class="mb-2"
                                        trim
                                        ></b-form-input>
                                  </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-name"
                                        label-for="input-street"
                                        invalid-feedback="¡Upss..Parece que esa no es un nombre de calle válido!"
                                        class="mb-2"
                                    >
                                        <label  class="mandatory-field">Calle: </label>
                                        <b-form-input
                                        id="input-street"
                                        v-model="v$.user.street.$model"
                                        type="text"
                                        :state="v$.user.street.$dirty ? !v$.user.street.$error : null"
                                        required
                                        trim
                                        ></b-form-input>
                                  </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-name"
                                        label-for="input-number"
                                        invalid-feedback="Ingresa un número de casa válido"
                                        class="mb-2"
                                    >
                                        <label  class="mandatory-field">Número: </label>
                                        <b-form-input
                                        id="input-number"
                                        v-model="v$.user.number.$model"
                                        type="text"
                                        :state="v$.user.number.$dirty ? !v$.user.number.$error : null"
                                        required
                                        trim
                                        ></b-form-input>
                                  </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-name"
                                        label-for="input-city"
                                        invalid-feedback="¡Upss..Parece que ese no es un código postal válido!"
                                        class="mb-2"
                                    >
                                        <label  class="mandatory-field">Ciudad: </label>
                                        <b-form-input
                                        id="input-city"
                                        type="text"
                                        v-model="v$.user.city.$model"
                                        :state="v$.user.city.$dirty ? !v$.user.city.$error : null"
                                        required
                                        class="mb-2"
                                        trim
                                        ></b-form-input>
                                  </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-birthdate"
                                        label-for="input-birthdate"
                                        class="mb-2"
                                        invalid-feedback="Debes ingresar una fecha de nacimiento"
                                    >
                                        <label  class="mandatory-field">Fecha de nacimiento: </label>
                                        <b-form-input 
                                            id="input-birthdate" 
                                            type="date"
                                            @change="isValidDate()"
                                            v-model="birthdate"
                                            :state="dateValid"
                                            trim
                                        >
                                        </b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="12" lg="4">
                                    <b-form-group
                                        id="fieldset-name"
                                        label-for="input-phone"
                                        invalid-feedback="¡Upss..Parece que ese no es un número de teléfono válido!"
                                    >
                                        <label  class="mandatory-field">Teléfono: </label>
                                        <b-form-input
                                        id="input-phone"
                                        type="number"
                                        v-model="v$.user.phone.$model"
                                        :state="v$.user.phone.$dirty ? !v$.user.phone.$error : null"
                                        maxlength="10"
                                        trim
                                        ></b-form-input>
                                  </b-form-group>
                                </b-col>
                            </b-row>
                            <b-row>
                                <b-col cols="12" class="text-center mt-4" >
                                    <b-button style="background-color: #009475;" :disabled="
                                        v$.user.name.$invalid || 
                                        v$.user.lastname.$invalid ||
                                        v$.user.zip.$invalid ||
                                        v$.user.phone.$invalid ||
                                        v$.user.city.$invalid ||
                                        v$.user.street.$invalid ||
                                        v$.user.number.$invalid ||
                                        !dateValid
                                        ">
                                        <b-icon icon="check"></b-icon>
                                        Enviar
                                    </b-button>
                                </b-col>
                            </b-row>
                        </b-form>
                    </b-col>
                </b-row>
                <setProfilePicture
                    @getFile="getFile"
                />
              </b-card>
        </b-col>
    </b-row>
  </div>
</template>

<script>
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'
import moment from 'moment'
import Swal from 'sweetalert2'
import setProfilePicture from './setProfilePicture.vue'
import validations from '../../utils/validations'
export default {
    components:{setProfilePicture},
    setup(){
        return{
            v$: useVuelidate()
        }
    },

    data(){
        return{
            states: ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Estado de México", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"],
            value: "",
            towns: ["Aguascalientes", "Asientos", "Calvillo", "Cosío", "Jesús María", "Pabellón de Arteaga", "Rincón de Romos", "San José de Gracia", "Tepezalá", "El Llano", "San Francisco de los Romo"],
            user:{
                name: "",
                surname: "",
                lastname: "",
                zip: "",
                city: "",
                street: "",
                number: "",
                phone: "",
                birthdate: "",
                photo: null
            },
            birthdate: "",
            dateValid: null
        }
    },
    methods: {
        isValidDate(){
            const birthd = moment(this.birthdate)
            if(!(birthd.isSameOrAfter())){
                if(!(birthd.isSameOrAfter(moment().subtract(18, 'years')))){
                    this.user.birthdate = this.birthdate
                    this.dateValid = true
                }else{
                    this.birthdate = ""
                    this.dateValid = false
                    Swal.fire({
                        icon: 'warning',
                        text: 'Debes ser mayor de edad para registrarte',
                        showCancelButton: false,
                        showConfirmButton: false,
                        timer: 3000
                    })
                }
            }else{
                this.birthdate = ""
                this.dateValid = false
                Swal.fire({
                    icon: 'warning',
                    text: 'La fecha que ingresaste es mayor a la actual',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3000
                })
            }
        },
        openPicModal(){
            this.$bvModal.show('modal-set-profile-picture');
        },
        getFile(file){
            validations.encodeBase64(file).then((img) => {
                this.user.photo = img;
            })
        },
        saveUser(){
            Swal.fire({
                title: '¡Listo!',
                text: '¡Tus datos han sido enviados correctamente!',
                icon: 'success',
                showCancelButton: false,
                showConfirmButton: false,
                timer: 3000,
            });
        }
    },
    validations() {
        return {
            user:{
                name: {
                    required,
                    valid: (value) => {
                        const format = /^([A-Za-zÑñáéíóúÁÉÍÓÚ]+[\s]*){3,60}$/.test(value);
                        return format;
                    }
                },
                surname: {},
                lastname: {required},
                zip: {
                    required,
                    valid: (value) => {
                        const format = /^[0-9]{5}$/.test(value);
                        return format;
                    }
                },
                phone: {
                    required,
                    valid: (value) => {
                        const format = /^[0-9]{10}$/.test(value);
                        return format;
                    }
                },
                city: {
                    required,
                    valid: (value) => {
                        const format = /^[A-Za-z0-9\-]+$/.test(value);
                        return format;
                    }
                },
                street: {
                    required,
                    valid: (value) => {
                        const format = /^[A-Za-z0-9\-]+$/.test(value);
                        return format;
                    }
                },
                number: {required}
            },
            birthdate: {
                required
            }   
        }
    }
}
</script>

<style scoped>
.mandatory-field::after{
  content: "*";
  color: red;
}

.img{
    cursor: pointer;
  max-height: 200px;
  max-width: 200px;
  width: 200px;
  height: 200px;
  border-radius: 50%; 
  object-fit: cover;
}
.valid{
    border: 3px solid #009475;
    box-shadow: #009475;
}

.img:hover{
    opacity: 0.9;
}
</style>