<template>
    <div>
        <h1>{{titulo}}</h1>
        <form @submit.prevent="agregarArea()">
            <h5>Agregar Área o Departamento</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="areaActual.nombreArea" placeholder="Nombre Nueva Area"
                    aria-describedby="button-addon2">
                <input type="text" class="form-control" v-model="areaActual.nombreEncargado" placeholder="Nombre Encargado"
                    aria-describedby="button-addon2">
                <input type="number" class="form-control" v-model="areaActual.numeroFuncionarios" placeholder="Numero de funcionarios"
                    aria-describedby="button-addon2" min="1" max="1000">
                <button class="btn btn-outline-secondary" type="submit">Agregar</button>
            </div>
        </form>

        <form action="">
            <h5>Buscador de Areas</h5>
            <div class="input-group mb-3">
                <input type="text" v-model="textoABuscar" class="form-control" placeholder="Buscar areas" >
                <button class="btn btn-outline-secondary" @click.prevent="getAreas()">Buscar</button>
            </div>
       </form> 

        <div class="table-responsive">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Id Area</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Encargado</th>
                        <th scope="col">Numero de funcionarios</th>
                    </tr>
                </thead>
                <tbody v-for="(value) in areas">
                    <th scope="row">{{value.id}}</th>
                    <td>{{value.nombreArea}}</td>
                    <td>{{value.nombreEncargado}}</td>
                    <td>{{value.numeroFuncionarios}}</td>
                    <td>
                        <app-acciones @onAccion="irA($event, value.id)"></app-acciones>
                    </td>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    import AppAcciones from '@/components/AppAcciones.vue';
    import { assertExpressionStatement } from '@babel/types';
    export default {
        name: 'AreasView',
        data() {
            return {
                titulo: 'Areas',
                textoABuscar: "",
                areaActual: {
                    nombreArea: null,
                    nombreEncargado: null,
                    numeroFuncionarios: null
                },
                areas: []
            }
        },
        methods: {
            agregarArea() {
                console.log(this.areaActual);
                axios({
                method: "post",
                url: "http://localhost:3000/areas",
                data: this.areaActual
            })
                .then(response => {
                    console.log(response);
                    this.areaActual.nombreArea = null;
                    this.nombreEncargado = null;
                    this.numeroFuncionarios = null;
                    this.getAreas();
                })
                .catch(e => console.log(e));
            },
            getAreas() {
                axios({
                    method: "get",
                    url: "http://localhost:3000/areas/?q="+this.textoABuscar
                })
                .then(response => {
                    this.areas = response.data;
                    console.log(response);
                })
                .catch(e => {
                    console.log(e);
                });
            },
            irA(opcion, area_id) {
                if(opcion === 'editar') {
                    this.$router.push({ name: 'editarAreas', params: { id: area_id } });
                } else {
                    if(confirm("Está seguro de eliminar el area con id " + area_id + "?")) {
                        
                        //TODO: Agregar Delete para Activos.

                        axios({
                            method: "delete",
                            url: "http://localhost:3000/areas/" + area_id
                        })
                        .then(response => {
                            this.getAreas();
                            console.log(response);
                        })
                        .catch(e => console.log(e));
                    }
                }

            },
            lista_() {
                return this.areas;
            }
        },
        computed: {
            lista() {
                return this.areas;
            }
        },
        mounted() {
            this.getAreas()
        },
        components: {
            AppAcciones
        }
    }
</script>

<style>
</style>