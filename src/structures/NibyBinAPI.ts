import { apiBaseUrl } from '../config';
import { DefaultUploadOptions } from '../typings/constants';
import { CodeData, UploadCodeOptions } from '../typings/types';
import { NibyBinAPIInterface } from '../typings/interfaces';

/**
 * Clase que proporciona métodos para interactuar con la API de NibyBin.
 */
export class NibyBinAPI implements NibyBinAPIInterface {
   private token: string;
   private apiBaseUrl: string;

   /**
    * Crea una instancia de NibyBinAPI.
    * @param {string} token - El token de autenticación para la API.
    * @example
    * import NibyBinAPI from 'nibybin';
    * const nibybin = new NibyBinAPI({token: "tu-token"});
    */
   constructor(token: string) {
      this.token = token;
      this.apiBaseUrl = apiBaseUrl;
   }

   /**
    * Sube un nuevo código a NibyBin.
    * @param {UploadCodeOptions} options - Opciones para el código a subir.
    * @returns {Promise<CodeData>} Los datos del código subido.
    * @example
    * const codeToUpload = {
    *   title: 'Mi Código',
    *   description: 'Código de ejemplo',
    *   language: 'javascript',
    *   code: 'console.log("Hola, Mundo!");',
    * };
    * nibybin.create(codeToUpload)
    *   .then((codeData) => {
    *     console.log('Código subido:', codeData);
    *   })
    *   .catch((error) => {
    *     console.error('Error al subir el código:', error);
    *   });
    */
   create(options: UploadCodeOptions = DefaultUploadOptions): Promise<CodeData> {
      return new Promise((resolve, reject) => {
         fetch(encodeURI(`${this.apiBaseUrl}/create`), {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `${this.token}`,
            },
            body: JSON.stringify(options),
         })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => {
               reject(error);
            });
      });
   }

   /**
    * Obtiene los datos de un código existente en NibyBin.
    * @param {string} id - El ID del código a obtener.
    * @returns {Promise<CodeData>} Los datos del código obtenido.
    * @example
    * const codeId = 'codigo-id-a-obtener';
    * nibybin.get(codeId)
    *   .then((codeData) => {
    *     console.log('Datos del código obtenido:', codeData);
    *   })
    *   .catch((error) => {
    *     console.error('Error al obtener el código:', error);
    *   });
    */
   get(id: string): Promise<CodeData> {
      return new Promise((resolve, reject) => {
         fetch(encodeURI(`${this.apiBaseUrl}/get/${id}`), {
            method: 'GET',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `${this.token}`,
            },
         })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((error) => {
               reject(error);
            });
      });
   }
}
