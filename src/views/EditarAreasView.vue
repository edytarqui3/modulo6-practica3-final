<template>
    <div class="container">
        <h1>{{titulo}} : {{$route.params.id}}</h1>
        <div class="abs-center">
            <form action="" @submit.prevent="guardar()">
                <div class="mb-3">
                    <label class="form-label">Nombre del Área:</label>
                    <input type="text" v-model="area.nombreArea" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Nombre del Encargado:</label>
                    <input type="text" v-model="area.nombreEncargado" class="form-control">
                </div>
                <div class="mb-3">
                    <label class="form-label">Número de funcionarios:</label>
                    <input type="number" v-model="area.numeroFuncionarios" class="form-control" min="1" max="1000">
                </div>
                <button type="submit" class="btn btn-primary m-2">Guardar</button>
                <button class="btn btn-light m-2">Cancelar</button>
            </form>
        </div>
        
    </div>
</template>
<script>
    export default {
        name: 'EditarAreasView',
        data() {
            return {
                titulo: 'Editar Areas',
                area: {
                    nombreArea: null,
                    nombreEncargado: null,
                    numeroFuncionarios: null
                }
            }
        },
        methods: {
            getArea(){
                axios({
                    method: "get",
                    url: "http://localhost:3000/areas/"+this.$route.params.id
                })
                .then(response => {
                    this.area = response.data;
                console.log(response);
                })
                .catch(e => console.log(e));
            },
            guardar(){
                axios({
                    method: "patch",
                    url: "http://localhost:3000/areas/"+this.$route.params.id,
                    data: this.area
                })
                .then(response => {
                    this.$store.state.mensaje = {
                        texto: "El Area se editó exitosamene",
                        tipo: "exito"
                    };
                    this.$store.dispatch('addMensajeAction');
                    this.$router.push({name: 'areas'});
                })
                .catch(e => console.log(e));
            }
        },
        computed: {
        },
        mounted() {
            this.getArea();
        },
        components: {
        }
    }
</script>

<style>

</style>