<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      PRACTICA 3 Final Vue
      
    </p>
    <h3>Enunciado: La Empresa F&F requiere un sistema de inventario de activos por área con las siguientes características: Se pide realizar los mismos pasos pedidos en la practica3, esta vez usando Vue3 o Vue2.</h3>
    <ul>
      <li>Registrar áreas. se deben registrar las áreas o departamentos de la empresa, los datos a registrar son:
Nombre del área o departamento ejm: finanzas, legal, Informática
Nombre del encargado. ejm: Jose Linares
Número de funcionarios. ejemplo: 4</li>
      <li>Registrar los activos: se deben registrar los activos de cada área para ello se deben guardar los siguientes datos:
Tipo de activo. se debe guardar la clasificación del activo ejem: computadora
Marca ejemplo: HP
Modelo ejemplo: pavilion 360
Estado: puede ser nuevo, usado, en desuso
areaId para guardar la relación con un área</li>
      <li>Debe contar con un buscador de producto por tipo Debe contar con un filtro por estado</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
