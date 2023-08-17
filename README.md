**🌟 NibyBin API Wrapper 🌟**

¡Bienvenido al Wrapper Oficial de la API de NibyBin, tu herramienta para interactuar sin problemas con su API Oficial! Ya sea que estés usando CommonJS o el sistema de módulos ES6, este wrapper te permite crear y recuperar fragmentos de código usando NibyBin de manera sencilla. ¡Vamos a explorar los detalles!

*Tambien puedes ir a la [documentación oficial](https://el-mundo-de-niby.gitbook.io/nibybin-api-wrapper-1/)*

**Instalación** 🚀

Comienza instalando el Wrapper de NibyBinAPI como una dependencia en tu proyecto. Puedes hacerlo a través de npm o yarn:

```bash
npm install nibybin-api-wrapper
# o
yarn add nibybin-api-wrapper
```

**Uso** 🛠️

1. **Importa el Wrapper de NibyBinAPI:**

   En tu archivo JavaScript/TypeScript, importa la clase `NibyBinAPI` desde el Wrapper de NibyBinAPI:

   ```javascript
   // Para CommonJS
   const NibyBinAPI = require('nibybin-api');

   // Para módulos ES6
   import NibyBinAPI from 'nibybin-api';
   ```

2. **Inicializa el Wrapper:**

   Crea una instancia de la clase `NibyBinAPI` proporcionando tu token de API de NibyBin:

   ```javascript
   const token = 'tu-token-de-api';
   const nibybin = new NibyBinAPI(token);
   ```

3. **Creación de un Nuevo Código:**

   Utiliza el método `create` para subir nuevos fragmentos de código a NibyBin:

   ```javascript
   const codeData = {
     title: 'Mi Código',
     description: 'Código de prueba',
     language: 'javascript',
     code: 'console.log("¡Hola, Mundo!");',
   };

   nibybin.create(codeData)
     .then((code) => {
       console.log('Código creado:', code.url);
     })
     .catch((error) => {
       console.error('Error al crear código:', error);
     });
   ```

4. **Recuperación de Código por ID:**

   Utiliza el método `get` para recuperar fragmentos de código por su ID:

   ```javascript
   const codeId = 'tu-id-de-código';

   nibybin.get(codeId)
     .then((code) => {
       console.log('Código encontrado:', code.url);
     })
     .catch((error) => {
       console.error('Error al recuperar código:', error);
     });
   ```

5. **Recuerda los Detalles Importantes:**

   Asegúrate de reemplazar `'tu-token-de-api'` con tu token real de la API de NibyBin y `'tu-id-de-código'` con el ID específico del código que deseas recuperar.

**Información Adicional** 📚

Para obtener más detalles sobre NibyBin y sus características, instalación, configuración y licencia, por favor consulta la documentación oficial de NibyBin en https://github.com/El-Mundo-de-Niby/NibyBin.

Esperamos que este wrapper mejore tu experiencia de compartir código con NibyBin. No dudes en comunicarte a través del repositorio de GitHub si tienes preguntas, comentarios o sugerencias. ¡Feliz codificación! 👨‍💻👩‍💻
