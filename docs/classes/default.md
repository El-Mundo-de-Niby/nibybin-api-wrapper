[@dewstouh/nibybin-api](../README.md) / [Exports](../modules.md) / default

# Class: default

Clase que proporciona métodos para interactuar con la API de NibyBin.

## Implements

- `NibyBinAPIInterface`

## Table of contents

### Constructors

- [constructor](default.md#constructor)

### Properties

- [apiBaseUrl](default.md#apibaseurl)
- [token](default.md#token)

### Methods

- [create](default.md#create)
- [get](default.md#get)

## Constructors

### constructor

• **new default**(`token`)

Crea una instancia de NibyBinAPI.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `token` | `string` | El token de autenticación para la API. |

**`Example`**

```ts
import NibyBinAPI from 'nibybin';
const nibybin = new NibyBinAPI({token: "tu-token"});
```

#### Defined in

[structures/NibyBinAPI.ts:20](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/f51d42e/src/structures/NibyBinAPI.ts#L20)

## Properties

### apiBaseUrl

• `Private` **apiBaseUrl**: `string`

#### Defined in

[structures/NibyBinAPI.ts:11](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/f51d42e/src/structures/NibyBinAPI.ts#L11)

___

### token

• `Private` **token**: `string`

#### Defined in

[structures/NibyBinAPI.ts:10](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/f51d42e/src/structures/NibyBinAPI.ts#L10)

## Methods

### create

▸ **create**(`options?`): `Promise`<`CodeData`\>

Sube un nuevo código a NibyBin.

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `options` | `UploadCodeOptions` | `DefaultUploadOptions` | Opciones para el código a subir. |

#### Returns

`Promise`<`CodeData`\>

Los datos del código subido.

**`Example`**

```ts
const codeToUpload = {
  title: 'Mi Código',
  description: 'Código de ejemplo',
  language: 'javascript',
  code: 'console.log("Hola, Mundo!");',
};
nibybin.create(codeToUpload)
  .then((codeData) => {
    console.log('Código subido:', codeData);
  })
  .catch((error) => {
    console.error('Error al subir el código:', error);
  });
```

#### Implementation of

NibyBinAPIInterface.create

#### Defined in

[structures/NibyBinAPI.ts:44](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/f51d42e/src/structures/NibyBinAPI.ts#L44)

___

### get

▸ **get**(`id`): `Promise`<`CodeData`\>

Obtiene los datos de un código existente en NibyBin.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | El ID del código a obtener. |

#### Returns

`Promise`<`CodeData`\>

Los datos del código obtenido.

**`Example`**

```ts
const codeId = 'codigo-id-a-obtener';
nibybin.get(codeId)
  .then((codeData) => {
    console.log('Datos del código obtenido:', codeData);
  })
  .catch((error) => {
    console.error('Error al obtener el código:', error);
  });
```

#### Implementation of

NibyBinAPIInterface.get

#### Defined in

[structures/NibyBinAPI.ts:76](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/f51d42e/src/structures/NibyBinAPI.ts#L76)
