# GitFlow en GitHub

Este repositorio contiene una guía para implementar el flujo de trabajo **GitFlow** utilizando **Visual Studio Code** y su extensión de Git, en lugar de comandos directos de Git Flow. A través de esta práctica, aprenderás a manejar ramas y trabajar colaborativamente, integrando nuevas funcionalidades y resolviendo problemas en un entorno controlado.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Instalación y Configuración](#instalación-y-configuración)
- [Práctica de GitFlow en GitHub](#práctica-de-gitflow-en-github)
- [Contribución](#contribución)


## Descripción

GitFlow es una estrategia de manejo de ramas que facilita el desarrollo colaborativo al permitir una gestión estructurada del ciclo de vida del software. En este proyecto, utilizamos la extensión de Git en Visual Studio Code para realizar el flujo de trabajo, sin depender de los comandos específicos de Git Flow.

## Flujo de Trabajo

### Ramas Principales
- **`main`**: La rama de producción con el código estable y listo para la liberación.
- **`develop`**: La rama de desarrollo que incluye todas las nuevas funcionalidades y mejoras.

### Ramas de Soporte
- **`feature`**: Para desarrollar nuevas funcionalidades.
- **`release`**: Para preparar una nueva versión antes de su liberación.
- **`hotfix`**: Para realizar correcciones urgentes en la versión de producción.

## Instalación y Configuración

1. Asegúrate de tener instalado **Git**. Si no lo tienes, puedes descargarlo e instalarlo desde [git-scm.com](https://git-scm.com/).

2. Configura tu entorno:

   Configura el nombre de usuario y correo electrónico en Git (si es necesario):
   ```bash
   git config --global user.name "TuNombre"
   git config --global user.email "tuemail@example.com"

## Práctica de GitFlow en GitHub

A continuación, se detallan los cambios que se realizarán en el proyecto junto con las ramas y el flujo de trabajo correspondiente. Cada cambio tiene su ID, descripción corta, rama de trabajo, rama origen y rama destino:

| ID        | DESCRIPCIÓN CORTA                                  | RAMA DE TRABAJO               | RAMA ORIGEN | RAMA DESTINO        |
|-----------|----------------------------------------------------|-------------------------------|-------------|---------------------|
| Cambio #1 | Implementar inicio de sesión con Facebook          | `feature/login-con-facebook`  | `develop`   | `develop`           |
| Cambio #2 | Exportar reporte de usuarios a Google Drive        | `feature/exportar-reporte-drive` | `develop` | `develop`           |
| Cambio #3 | Error al iniciar sesión con Linkedin (v1.1.0)      | `hotfix/login-linkedin`       | `main`      | `main` y `develop`  |
| Cambio #4 | Liberar versión v1.2.0                             | `release/v1.2.0`              | `develop`   | `main` y `develop`  |

### Instrucciones para cada tipo de cambio:

- **Cambio de Funcionalidad (feature):**
  1. Crea una nueva rama de feature desde `develop`.
  2. Realiza los cambios en la funcionalidad y utiliza Visual Studio Code para hacer commits.
  3. Envía la rama al repositorio remoto y crea un Pull Request a `develop`.

- **Cambio de Corrección Urgente (hotfix):**
  1. Crea una nueva rama de hotfix desde `main`.
  2. Aplica las correcciones necesarias, realiza commits y crea un Pull Request a `main` y `develop`.

- **Liberación de Nueva Versión (release):**
  1. Crea una rama de release desde `develop`.
  2. Realiza pruebas y ajustes finales, luego haz un Pull Request a `main` y `develop`.

## Contribución

Para contribuir al proyecto, sigue estos pasos:

1. **Crea una nueva rama** basada en `develop` para nuevas funcionalidades, o en `main` para correcciones urgentes:
   ```bash
   git checkout develop
   git checkout -b feature/nombre-de-la-funcionalidad
2. **Desarrolla tus cambios** y realiza commits de manera frecuente. Utiliza Visual Studio Code para gestionar los cambios y confirmar los commits.

3. **Envía tu rama al repositorio remoto**:
   ```bash
   git push origin feature/nombre-de-la-funcionalidad
4. **Crea un Pull Request** en GitHub hacia la rama adecuada (`develop` o `main`) y solicita una revisión antes de fusionar.
