import NibyBinAPI from '../src/index';
import { expect } from 'chai';
import { describe } from 'mocha';
import mocha from 'mocha';

describe('NibyBinAPIWrapper', () => {

   const API_TOKEN = 'your-api-token';

   it('should create a new code', async () => {
      // Arrange
      const codeData = {
         title: 'My Code',
         description: 'Test code',
         language: 'javascript',
         code: 'console.log("Hello, World!");',
      };

      const apiWrapper = new NibyBinAPI(API_TOKEN);
      const result = await apiWrapper.create(codeData);
      // Assert
      expect(result).to.be.an('object');
   });

   it('should fetch an existing code', async () => {
      // Arrange
      const codeId = '96b3da217ab234061198fddb8634bc71';

      const apiWrapper = new NibyBinAPI(API_TOKEN);
      const result = await apiWrapper.get(codeId);
      // Assert
      expect(result).to.be.an('object');
   });
});
