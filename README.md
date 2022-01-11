Este proyecto fue desarrolado con Ionic 6 y capacitor-community/electron.

Antes de poder ejecutar el proyecto usted debe comprbar que el server funcione correctamente(bitcoin-app-back).
Ejecute por consola(cmd) los siguientes comandos en orden

1. Angular CLI : npm install -g @angular/cli
2. Ionic CLI : npm install -g @ionic/cli
3. Instalar librerías y dependencias : npm install
4. Ver el proyecto en Ionic(http://localhost:8100): ionic serve
5. Ver proyecto en Electron : 
  5.1. Copiar archivos de Ionic a Electron: ionic build && npx cap copy @capacitor-community/electron
  5.2. Ver proyecto en Electron: npx cap open @capacitor-community/electron
  
En este punto la aplicación debe poder visualizarse en el costado derecho de su pantalla.
