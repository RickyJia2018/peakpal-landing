import * as jspb from 'google-protobuf'



export class Language extends jspb.Message {
  getId(): number;
  setId(value: number): Language;

  getCode(): string;
  setCode(value: string): Language;

  getName(): string;
  setName(value: string): Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Language.AsObject;
  static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
  static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Language;
  static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
  export type AsObject = {
    id: number;
    code: string;
    name: string;
  };
}

export class AddUserLanguageRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): AddUserLanguageRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): AddUserLanguageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserLanguageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserLanguageRequest): AddUserLanguageRequest.AsObject;
  static serializeBinaryToWriter(message: AddUserLanguageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserLanguageRequest;
  static deserializeBinaryFromReader(message: AddUserLanguageRequest, reader: jspb.BinaryReader): AddUserLanguageRequest;
}

export namespace AddUserLanguageRequest {
  export type AsObject = {
    userId: number;
    languageCode: string;
  };
}

export class AddUserLanguageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserLanguageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserLanguageResponse): AddUserLanguageResponse.AsObject;
  static serializeBinaryToWriter(message: AddUserLanguageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserLanguageResponse;
  static deserializeBinaryFromReader(message: AddUserLanguageResponse, reader: jspb.BinaryReader): AddUserLanguageResponse;
}

export namespace AddUserLanguageResponse {
  export type AsObject = {
  };
}

export class DeleteUserLanguageRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): DeleteUserLanguageRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): DeleteUserLanguageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserLanguageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserLanguageRequest): DeleteUserLanguageRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteUserLanguageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserLanguageRequest;
  static deserializeBinaryFromReader(message: DeleteUserLanguageRequest, reader: jspb.BinaryReader): DeleteUserLanguageRequest;
}

export namespace DeleteUserLanguageRequest {
  export type AsObject = {
    userId: number;
    languageCode: string;
  };
}

export class DeleteUserLanguageResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteUserLanguageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteUserLanguageResponse): DeleteUserLanguageResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteUserLanguageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteUserLanguageResponse;
  static deserializeBinaryFromReader(message: DeleteUserLanguageResponse, reader: jspb.BinaryReader): DeleteUserLanguageResponse;
}

export namespace DeleteUserLanguageResponse {
  export type AsObject = {
  };
}

