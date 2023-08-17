import { apiBaseUrl } from '../config';
import { DefaultUploadOptions } from '../typings/constants';
import { CodeData, UploadCodeOptions } from '../typings/types';
import { NibyBinAPIInterface } from '../typings/interfaces';

/**
 * Clase que proporciona métodos para interactuar con la API de NibyBin.
 */
export default class NibyBinAPI implements NibyBinAPIInterface {
   private token: string;
   private apiBaseUrl: string;

   /**
    * Crea una instancia de NibyBinAPI.
    * @param {string} token - El token de autenticación para la API.
    */
   constructor(token: string) {
      this.token = token;
      this.apiBaseUrl = apiBaseUrl;
   }

   /**
    * Sube un nuevo código a NibyBin.
    * @param {UploadCodeOptions} options - Opciones para el código a subir.
    * @returns {Promise<CodeData>} Los datos del código subido.
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
