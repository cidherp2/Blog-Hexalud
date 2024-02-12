# Blog Reto Hexalud
by cidherp
![Github license](https://img.shields.io/badge/license-ISC-blue.svg)
## Table of Contents

*[Description](#description)

*[Installation-instructions](#installation)

*[Usage](#usage)

*[License](#license)

*[Contribution](#contribution)

*[Tests](#test)

*[Questions](#questions)
* [License](#license)

## Description
Una aplicación Web la cual funciona como un Blog, en el que los usuarios pueden leer las entradas que hay en este, buscándolas por varios filtros de; Autor, Titulo y Contenido. De igual manera es posible, agregar nuevas entradas a la página, que serán guardadas en la base de datos.
## Installation-instructions
Se deben de instalar los package json de cada uno de los directorios (Root, server,client) por medio de npm i en cada directiorio, Se deben de definir las variables de desarrollo para que pueda funcionar la base de datos y la aplicación, estas variables son las siguientes: 

DB_HOST = "localhost"
DB_PORT = "3306"
DB_USER = "root"
DB_PASSWORD = " "
DB_DATABASE  = "blog_hexalud_DB"

También deben de ser corridos los 4 archivos.sql, se debe de estar dentro del directorio db en su terminal integrada entrar mysql con el comando:
mysql -u root -p
Escribir la contraseña definida en las variables de desarrolos y ahí correr los comandos
SOURCE schema.sql
SOURCE seeds.sql
SOURCE procedures.sql
SOURCE functions.sql
Uno a uno en ese respectivo orden para poder dejar lista la base de datos y sus funcionalidades

Finalmente posicionarse en el directorio ROOT y correr el comandp npm run develop para que se ejecuten de manera simultanea el cliente y el servidor y así poder hacer uso de esta apliación Web
## Usage
Realizar las acciones que se harían en una aplicación estilo Blog y generar nuevas entradas para probar la funcionalidad
Para ver un ejemplo en video, puedes revisar [este video](https://drive.google.com/file/d/15lKXH0HSpMiaHJ3Zpl2uc1IaeZF5Nihm/view).
## License
ISC
## Contribution
No hay lineamientos para la contribucuión de este proyecto
## Tests
No hay instrucciones ni pruebas en este proyecto
## Have any more questions?
You can reach me here
    Git Hub: cidherp2
    email: alejandro.larios.dev@gmail.com
## License
        Licensed under the ISC license
