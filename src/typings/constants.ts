
export const TypeErrors = {
   NO_TOKEN_SPECIFIED: 'No has especificado un API Token de NibyBin!',
   NO_CODE_SPECIFIED: 'No has especificado un CÓDIGO para subir a NibyBin!',
};

export const DefaultUploadOptions = {
   title: 'Nuevo código',
   description: `Subido el ${new Date()}`,
   language: 'javascript',
   code: "console.log('hola mundo!')"
};
