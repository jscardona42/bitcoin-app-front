Este proyecto fue desarrolado con Ionic 6 y capacitor-community/electron.
Se trata de un proyecto que permite visualizar el precio del bitcoin de las últimas dos semanas, el precio se muestra en dólares, euros y pesos colombianos. El valor actual del bitcoin se muestra en tiempo real, siendo actualizado cada 60 segundos.

Antes de poder ejecutar este proyecto, usted debe comprobar que el server funcione correctamente(https://github.com/jscardona42/bitcoin-app-back/tree/dev).
Ejecute por consola(cmd) los siguientes comandos:

1. Instalación de Angular CLI : npm install -g @angular/cli
2. Instalación de Ionic CLI : npm install -g @ionic/cli
3. Instalar librerías y dependencias : npm install
4. Ver el proyecto en Ionic(http://localhost:8100): ionic build && ionic serve
5. Ver proyecto en Electron : 
  5.1. Copiar archivos de Ionic a Electron: ionic build && npx cap copy @capacitor-community/electron
  5.2. Ver proyecto en Electron: npx cap open @capacitor-community/electron
  
En este punto la aplicación debe poder visualizarse en el costado derecho de su pantalla.
