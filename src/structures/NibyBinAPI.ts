import { apiBaseUrl } from '../config';
import { DefaultUploadOptions } from '../typings/constants';
import { CodeData, UploadCodeOptions } from '../typings/types';
import { NibyBinAPIInterface } from '../typings/interfaces';

export default class NibyBinAPI implements NibyBinAPIInterface {
   private token: string;
   private apiBaseUrl: string;

   constructor(token: string) {
      this.token = token;
      this.apiBaseUrl = apiBaseUrl;
   }

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
