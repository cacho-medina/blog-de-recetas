# Blog de Recetas

Proyecto de blog para compartir recetas de platos de cocina.

## Utilizacion

Para utilizar la aplicacion es necesario instalar la dependencia de json-server

```shell
npm install json-server
```

Luego, podras levantar el servidor de json-server con el comando:

```shell
npx json-server db.json
```

Por ultimo, tendras que guardar en una variable de entorno llamada "VITE_API_RECETAS" la url que proporciona json-server. Con esto ya podras utilizar las funciones crud que proporciona la herramienta.
