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

#### Defined in

[structures/NibyBinAPI.ts:17](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/e653072/src/structures/NibyBinAPI.ts#L17)

## Properties

### apiBaseUrl

• `Private` **apiBaseUrl**: `string`

#### Defined in

[structures/NibyBinAPI.ts:11](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/e653072/src/structures/NibyBinAPI.ts#L11)

___

### token

• `Private` **token**: `string`

#### Defined in

[structures/NibyBinAPI.ts:10](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/e653072/src/structures/NibyBinAPI.ts#L10)

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

#### Implementation of

NibyBinAPIInterface.create

#### Defined in

[structures/NibyBinAPI.ts:27](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/e653072/src/structures/NibyBinAPI.ts#L27)

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

#### Implementation of

NibyBinAPIInterface.get

#### Defined in

[structures/NibyBinAPI.ts:50](https://github.com/El-Mundo-de-Niby/nibybin-api/blob/e653072/src/structures/NibyBinAPI.ts#L50)
