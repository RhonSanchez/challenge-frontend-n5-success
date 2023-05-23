# Challenge Frontend SSR Rhonald Sánchez

Reto resuelto para proceso de selección

#### Requerimientos previos:

- NodeJS
- Npm o Yarn

#### Ramas

- main -> Production `https://challenge-frontend-n5-success.vercel.app/`

#### Comandos para desplegar funciones.

| °   | Comando          | Descripción                                     |
| --- | ---------------- | ----------------------------------------------- |
| 1   | `yarn dev`       | Compilación de la aplicación para el desarrollo |
| 2   | `yarn build`     | Construcción de la aplicación para producción   |
| 2   | `yarn lint`      | Ejecutar linters                                |
| 3   | `yarn preview`   | Preview de la aplicación                        |
| 3   | `yarn build-css` | Convertir documentos de Sass a Css              |
| 3   | `yarn server`    | Correr servidor creado con json-server          |

### Estructua de carpetas

```
├──logic-test
|   ├── logic-test.js
├──node_modules
├──public
├──src:
|   ├──components:
|   │   ├── ...
|   ├──context:
|   │   ├── ...
|   ├──hooks:
|   │   ├── ...
|   ├──routes:
|   │   ├── ...
|   ├──services:
|   │   ├── ...
|   ├──styles
|   │   ├── ...
|   ├──App.jsx
|   ├──main.jsx
├──.babelrc
├──.eslintrc.cjs
├──.gitignore
├──db.json
├──index.html
├──package.json
├──README.md
├──vite.config.js
```

### Test de lógica

En la carpeta raíz podra encontrar el test de lógica requerido para la prueba.

### Notas

- La aplicación fue creada por medio de React.
- Paquetes y dependecias utilizadas para la elaboración:

| °   | Paquete             | Versión       |
| --- | ------------------- | ------------- |
| 1   | `react`             | `^18.2.0`     |
| 2   | `react-dom`         | `^18.2.0`     |
| 3   | `react-router-dom`  | `6.11.1`      |
| 4   | `sass`              | `^1.62.1`     |
| 5   | `styled-components` | `^6.0.0-rc.1` |
