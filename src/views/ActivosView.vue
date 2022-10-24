<template>
    <div>
        <h1>{{titulo}}</h1>

        <form @submit.prevent="agregarActivo()">
            <h5>Agregar Activo</h5>
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="activoActual.marca" placeholder="Marca"
                    aria-describedby="button-addon2">
                <input type="text" class="form-control" v-model="activoActual.modelo" placeholder="Modelo"
                    aria-describedby="button-addon2">
                <input type="text" class="form-control" v-model="activoActual.estado" placeholder="Estado(nuevo, usado, desuso, etc)"
                    aria-describedby="button-addon2">
                <input type="number" class="form-control" v-model="activoActual.areaId" placeholder="Id del Area"
                    aria-describedby="button-addon2" min="1" max="1000">
                <button class="btn btn-outline-secondary" type="submit">Agregar</button>
            </div>
        </form>

        <form action="">
            <h5>Buscador de Activos</h5>
            <div class="input-group mb-3">
                <input type="text" v-model="textoABuscar" class="form-control" placeholder="Buscar activos" >
                <button class="btn btn-outline-secondary" @click.prevent="getActivos()">Buscar</button>
            </div>
       </form> 

       <div>
            <h5>Filtros</h5>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"
                    :checked="$store.state.activosEnUso" v-on:input="$store.state.activosEnUso = $event.target.checked">
                <label class="form-check-label" for="flexSwitchCheckChecked">Mostrar solo Activos en uso
                    {{$store.state.activosEnUso}}</label>
            </div>
       </div>

       <div class="table-responsive">
            <table class="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Id Activo</th>
                        <th scope="col">Marca</th>
                        <th scope="col">Modelo</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Id del Area</th>

                    </tr>
                </thead>
                <!-- <tbody v-for="(value) in activos"> -->
                <tbody v-for="(value) in lista">
                    <th scope="row">{{value.id}}</th>
                    <td>{{value.marca}}</td>
                    <td>{{value.modelo}}</td>
                    <td>{{value.estado}}</td>
                    <td>{{value.areaId}}</td>
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
    export default {
        name: 'ActivosView',
        data() {
            return {
                titulo: 'Activos',
                textoABuscar: "",
                activoActual: {
                    marca: null,
                    modelo: null,
                    estado: null,
                    areaId: null
                },
                activos: []
            }
        },
        methods: {
            agregarActivo() {
                console.log(this.activoActual);
                axios({
                method: "post",
                url: "http://localhost:3000/activos",
                data: this.activoActual
            })
                .then(response => {
                    console.log(response);
                    this.activoActual.marca = null;
                    this.activoActual.modelo = null;
                    this.activoActual.estado = null;
                    this.activoActual.areaId = null;
                    this.getActivos();
                })
                .catch(e => console.log(e));
            },
            getActivos() {
                axios({
                    method: "get",
                    url: "http://localhost:3000/activos/?q="+this.textoABuscar
                })
                .then(response => {
                    this.activos = response.data;
                    console.log(response);
                })
                .catch(e => {
                    console.log(e);
                });
            },
            irA(opcion, activo_id) {
                if(opcion === 'editar') {
                    this.$router.push({ name: 'editarActivos', params: { id: activo_id } });
                } else {
                    if(confirm("Está seguro de eliminar el activo con id " + activo_id + "?")) {
                        axios({
                            method: "delete",
                            url: "http://localhost:3000/activos/" + activo_id
                        })
                        .then(response => {
                            this.getActivos();
                            console.log(response);
                        })
                        .catch(e => console.log(e));
                    }
                }

            },
            lista_() {
                if(this.$store.state.activosEnUso){
                    return this.activos.filter(a => {
                        return a.estado !== 'desuso';
                    })
                }
                return this.activos;
            }
        },
        computed: {
            lista() {
                if(this.$store.state.activosEnUso){
                    return this.activos.filter(a => {
                        // return a.estado.trim().lowercase() !== 'desuso';
                        return a.estado !== 'desuso';

                    })
                }
                return this.activos;
            }
        },
        mounted() {
            this.getActivos();
        },
        components: {
            AppAcciones
        }
    }
</script>

<style>
</style>