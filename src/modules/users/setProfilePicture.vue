<template>
  <b-modal
    id="modal-set-profile-picture"
    no-close-on-backdrop
    centered
    no-close-on-esc
    size="md"
  >
    <template v-slot:modal-header="{}">
            <h5>Configurar foto de perfil</h5>
            <button
                type="button"
                @click="closeModalSave()"
                class="btn"
                aria-label="close"
            >
                <b-icon icon="x" variant="secondary"></b-icon>
            </button>
    </template>
    <b-row>
        <b-col>
            <b-row>
                <b-col cols="12">
                    <b-form-file
                     prepend="$"
                      v-model="file1"
                      accept="image/*"
                      @change="handleFileChange"
                      class="file-picker"
                      placeholder="Agregar"
                    ></b-form-file>
                </b-col>
                <b-alert v-if="fileSizeError">
                    <b>Tiene un error</b>
                </b-alert>
            </b-row>
        </b-col>
    </b-row>
        <template slot="modal-footer">
            <b-row>
                <b-col cols="12" class="text-right">
                    <b-button
                        @click="closeModalSave()"
                        class="mr-2 btn btn-sm"
                        pill
                        variant="outline-danger"
                    >Cancelar
                    </b-button>
                    <b-button
                        class="btn btn-sm"
                        pill
                        variant="outline-success"
                        @click="setImage()"
                    >Registrar
                    </b-button>
                </b-col>
            </b-row>
        </template>
  </b-modal>
</template>

<script>
import Swal from 'sweetalert2';
export default {
    name: 'setProfilePicture',
    data(){
        return {
            modal: '',
            file1: null,
            fileSizeError: false,
        }
    },
    methods: {
        closeModalSave(){
            this.$bvModal.hide('modal-set-profile-picture');
        },
        handleFileChange() {
            this.fileSizeError = false;
            if (this.file1 && this.file1.size > (3 * 1024 * 1024)) {
                this.fileSizeError = true;
            }
        },

        setImage(){
            if(!this.fileSizeError){
                const blob = new Blob([this.file1], { type: this.file1.type });
                this.$emit('getFile', blob);
                Swal.fire({
                    title: '¡Listo!',
                    text: 'Se ha configurado la foto de perfil',
                    icon: 'success',
                    showCancelButton: false,
                    showConfirmButton: false,
                    timer: 3000,
                });
                this.closeModalSave();
            }
        }

    },
}
</script>

<style>

.file-picker{
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

</style>