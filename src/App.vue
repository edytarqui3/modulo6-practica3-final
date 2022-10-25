<template>
  <nav>
    <router-link to="/areas">Areas</router-link> |
    <router-link to="/activos">Activos</router-link>|
    <router-link to="/about">Acerca</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #97e658;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #adce1c;
}

nav a.router-link-exact-active {
  color: #4a42b9;
}

.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
  }
  .styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
  }

  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
  .styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
  }

</style>
