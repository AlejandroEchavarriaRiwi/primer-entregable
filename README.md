Instrucciones para ejecutar la aplicación
Clonar el repositorio
Si aún no tienes el proyecto en tu máquina local, primero debes clonar el repositorio de GitHub. Abre tu terminal y ejecuta el siguiente comando:

bash
Copiar código
git clone https://github.com/usuario/nombre-del-repositorio.git
Cambia el valor de https://github.com/usuario/nombre-del-repositorio.git por la URL de tu repositorio.

Acceder al directorio del proyecto
Una vez que el repositorio esté clonado, navega al directorio del proyecto con:

bash
Copiar código
cd nombre-del-repositorio
Instalar dependencias
Antes de ejecutar la aplicación, necesitas instalar todas las dependencias necesarias. Asegúrate de tener Node.js instalado. Para instalar las dependencias, usa el siguiente comando:

bash
Copiar código
npm install
Este comando instalará todas las bibliotecas y paquetes definidos en el archivo package.json.


Ejecutar la aplicación en modo de desarrollo
Una vez que las dependencias estén instaladas y las variables de entorno configuradas, puedes iniciar el servidor de desarrollo con:

bash
Copiar código
npm run dev
Este comando iniciará el servidor de desarrollo, y la aplicación estará disponible en http://localhost:3000.

Acceder a la aplicación
Abre tu navegador web y navega a la siguiente URL:

plaintext
Copiar código
http://localhost:3000
Desde aquí, podrás interactuar con la aplicación en modo de desarrollo. Los cambios que realices en el código se reflejarán automáticamente sin necesidad de reiniciar el servidor.

Compilar para producción
Si quieres preparar la aplicación para un entorno de producción, puedes compilar el proyecto utilizando el siguiente comando:

bash
Copiar código
npm run build
Esto generará una versión optimizada del proyecto en la carpeta /.next. Luego, puedes iniciar el servidor de producción con:

bash
Copiar código
npm start
Solución de problemas comunes

Error de dependencia faltante: Asegúrate de haber ejecutado npm install correctamente.
Variables de entorno incorrectas: Verifica el archivo .env.local y asegúrate de que los valores sean correctos y estén bien escritos.
Error de puerto ocupado: Si el puerto 3000 ya está en uso, puedes cambiar el puerto ejecutando npm run dev -- -p 3001, donde 3001 es el nuevo puerto.
Si tienes algún problema, puedes consultar la documentación de Next.js o revisar los logs de la terminal para identificar posibles errores.
