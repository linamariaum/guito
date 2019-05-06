# Guito
Desarrollo de una aplicacion de red (Juego), para el curso Comunicaciones y redes II. La aplicación debe ser multiusuario.

## Objetivo:

Poner en práctica el uso de alguna de las api’s de red, tales como: 

a) Sockets/web sockets: permiten desarrollar aplicaciones red basadas en tcp/udp/ip entre otras.

b) mpi: permite desarrollar aplicaciones orientadas a procesos concurrentes (procesamiento en paralelo).

c) Rest/soa/xml/json: permiten la comunicación entre procesos usado principalmente en aplicaciones Web.

El propósito del juego es encontrar el círculo Dorado, en el proceso el círculo que hace las veces de avatar podrá irse alimentando de otros círculos y con esto va incrementando su tamaño. A su vez podrá visualizar a los otros jugadores que de igual forma, se encuentran en la búsqueda del círculo dorado.

   Cada que se capture un círculo, se aumentará de tamaño y el puntaje aumentara en un valor de +1 punto.
   Capturar el círculo dorado le otorgará +150 puntos.
   Gana el jugador con más puntaje.
   Cada jugador posee un id único.
   El círculo irá hacia donde apunte el cursor, se debe dar click o mantener presionado.

## Requisitos:

En esta aplicación tipo Agar io, se hará uso de un servidor node.js, la librería p5.js para los gráficos y comunicación vía Socket.io.

1) Tener instalado NodeJs. Si no se tiene instalado se puede hacer de la siguiente manera en linux
    ```bash
     sudo apt-get update
     curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
     sudo apt-get install -y nodejs
    ```
2) Conectarse desde equipos que esten conectados a la misma red de internet.

## Para Jugar:

Instrucciones para ejecutar el juego.

1) Abrir el proyecto (seguir el paso a. ó el paso b.)
    a. Copiar el enlace y clonar el proyecto.
      i. Ubicarnos en la carpeta donde se quiera abrir el proyecto.
      ii. Con el enlace copiado, abrir una terminal
      ```bash
          git clone https://github.com/linamariaum/guito
      ```
      
    b. Descargar el proyecto como .zip
      i. Se descomprime en la ubicación que se desee.
      
2)Se ingresa a la carpeta del proyecto. Y se abre una terminal dentro de la
carpeta. Se descargan las dependencias del proyecto ejecutando el comando:
    ```bash
          npm i
    ```
3)Correr el servidor. 
    ```bash
          npm start
    ```
    o
    ```bash
          node server.js      
    ```
4)Ingresando a 127.0.0.1:3000 ó localhost:3000 se podrá verificar el
funcionamiento de la aplicación desde nuestro ordenador que a su vez está
actuando como servidor.

5)Para ingresar desde otro ordenador al juego, se debe de estar conectado a la
misma red de internet e ingresar a la IP donde está el servidor por el puerto
3000. Es decir, ingresar así: IP:3000
  > Para determinar la IP, desde el ordenador que tenemos como servidor realizamos el comando ifconfig (Linux) o ipconfig(Windows).
  > Generalmente es la IP 192.168.x.x

6)Para desconectar el servidor basta con cerrar la terminal que se tenía abierta.
 

## Referencias:

https://github.com/processing/p5.js/wiki/p5.js,-node.js,-socket.io

## Licencia

[![MIT License](https://img.shields.io/badge/license-MIT-a12537.svg  "MIT License")](/LICENSE.md)
