# MÓDULO 6 - VUEJS
# Integrantes
1. Edy Felix Tarqui Guarachi  CI:. 6154087 LP
2. Elmer Mamani Ticona        CI:. 8418037 LP

# PRACTICA 3  Final Vue:
1. Enunciado: La Empresa F&amp;F requiere un sistema de inventario de activos por área con las siguientes
características:
Se pide realizar los mismos pasos pedidos en la practica3, esta vez usando Vue3 o Vue2.
2. Registrar áreas. se deben registrar las áreas o departamentos de la empresa, los datos a
registrar son:
- Nombre del área o departamento ejm: finanzas, legal, Informática
- Nombre del encargado. ejm: Jose Linares
- Número de funcionarios. ejemplo: 4
3. Registrar los activos: se deben registrar los activos de cada área para ello se deben guardar los siguientes datos:
- Tipo de activo. se debe guardar la clasificación del activo ejem: computadora
- Marca ejemplo: HP
- Modelo ejemplo: pavilion 360
- Estado: puede ser nuevo, usado, en desuso
- areaId para guardar la relación con un área

Debe contar con un buscador de producto por tipo
Debe contar con un filtro por estado


### `PASOS DE INSTALACION`

## Instalacion vuejs3

-  npm install -g @vue/cli
-  vue --version
-  vue create modulo6-practica3-final


## Ejecucion de json-server servidor local de la base activos , areas o departamentos
- npm install -g json-server
- npx json-server --watch db/db.json

### Compilamos codigo
```
npm run serve
```

### Compilacion y minificacion para produccion
```
npm run build
```
