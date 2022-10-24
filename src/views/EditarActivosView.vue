<template>
    <div class="container">
        <h1>{{titulo}} : {{$route.params.id}}</h1>
        <div class="abs-center">
            <form action="" @submit.prevent="guardar()">
                <div class="mb-3">
                    <label class="form-label">Marca:</label>
                    <input type="text" v-model="activo.marca" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Modelo:</label>
                    <input type="text" v-model="activo.modelo" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Estado (nuevo, usado, desuso):</label>
                    <input type="text" v-model="activo.estado" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Id del Area:</label>
                    <input type="number" v-model="activo.areaId" class="form-control" min="1" max="1000">
                </div>
                <button type="submit" class="btn btn-primary m-2">Guardar</button>
                <button class="btn btn-light m-2">Cancelar</button>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'EditarActivosView',
        data() {
            return {
                titulo: 'Editar Activos',
                activo: {
                    marca: null,
                    modelo: null,
                    estado: null,
                    areaId: null
                }
            }
        },
        methods: {
            getActivo(){
                axios({
                    method: "get",
                    url: "http://localhost:3000/activos/"+this.$route.params.id
                })
                .then(response => {
                    this.activo = response.data;
                console.log(response);
                })
                .catch(e => console.log(e));
            },
            guardar(){
                axios({
                    method: "patch",
                    url: "http://localhost:3000/activos/"+this.$route.params.id,
                    data: this.activo
                })
                .then(response => {
                    this.$store.state.mensaje = {
                        texto: "El Activo se editó exitosamene",
                        tipo: "exito"
                    };
                    this.$store.dispatch('addMensajeAction');
                    this.$router.push({name: 'activos'});
                })
                .catch(e => console.log(e));
            }
        },
        computed: {
        },
        mounted() {
            this.getActivo()
        },
        components: {
        }
    }
</script>

<style>
</style>