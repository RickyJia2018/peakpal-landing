import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Code extends jspb.Message {
  getCode(): string;
  setCode(value: string): Code;

  getIsUsed(): boolean;
  setIsUsed(value: boolean): Code;

  getAdditionalData(): string;
  setAdditionalData(value: string): Code;

  getType(): CodeType;
  setType(value: CodeType): Code;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Code;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Code;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): Code;
  hasExpiresAt(): boolean;
  clearExpiresAt(): Code;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Code.AsObject;
  static toObject(includeInstance: boolean, msg: Code): Code.AsObject;
  static serializeBinaryToWriter(message: Code, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Code;
  static deserializeBinaryFromReader(message: Code, reader: jspb.BinaryReader): Code;
}

export namespace Code {
  export type AsObject = {
    code: string;
    isUsed: boolean;
    additionalData: string;
    type: CodeType;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateCodeRequest extends jspb.Message {
  getNumber(): number;
  setNumber(value: number): CreateCodeRequest;

  getType(): CodeType;
  setType(value: CodeType): CreateCodeRequest;

  getAdditionalData(): string;
  setAdditionalData(value: string): CreateCodeRequest;
  hasAdditionalData(): boolean;
  clearAdditionalData(): CreateCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCodeRequest): CreateCodeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCodeRequest;
  static deserializeBinaryFromReader(message: CreateCodeRequest, reader: jspb.BinaryReader): CreateCodeRequest;
}

export namespace CreateCodeRequest {
  export type AsObject = {
    number: number;
    type: CodeType;
    additionalData?: string;
  };

  export enum AdditionalDataCase {
    _ADDITIONAL_DATA_NOT_SET = 0,
    ADDITIONAL_DATA = 3,
  }
}

export class CreateCodeResponse extends jspb.Message {
  getCodesList(): Array<Code>;
  setCodesList(value: Array<Code>): CreateCodeResponse;
  clearCodesList(): CreateCodeResponse;
  addCodes(value?: Code, index?: number): Code;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCodeResponse): CreateCodeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCodeResponse;
  static deserializeBinaryFromReader(message: CreateCodeResponse, reader: jspb.BinaryReader): CreateCodeResponse;
}

export namespace CreateCodeResponse {
  export type AsObject = {
    codesList: Array<Code.AsObject>;
  };
}

export class GetCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): GetCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCodeRequest): GetCodeRequest.AsObject;
  static serializeBinaryToWriter(message: GetCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCodeRequest;
  static deserializeBinaryFromReader(message: GetCodeRequest, reader: jspb.BinaryReader): GetCodeRequest;
}

export namespace GetCodeRequest {
  export type AsObject = {
    code: string;
  };
}

export class GetCodeResponse extends jspb.Message {
  getCode(): Code | undefined;
  setCode(value?: Code): GetCodeResponse;
  hasCode(): boolean;
  clearCode(): GetCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCodeResponse): GetCodeResponse.AsObject;
  static serializeBinaryToWriter(message: GetCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCodeResponse;
  static deserializeBinaryFromReader(message: GetCodeResponse, reader: jspb.BinaryReader): GetCodeResponse;
}

export namespace GetCodeResponse {
  export type AsObject = {
    code?: Code.AsObject;
  };
}

export class UseCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): UseCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UseCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UseCodeRequest): UseCodeRequest.AsObject;
  static serializeBinaryToWriter(message: UseCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UseCodeRequest;
  static deserializeBinaryFromReader(message: UseCodeRequest, reader: jspb.BinaryReader): UseCodeRequest;
}

export namespace UseCodeRequest {
  export type AsObject = {
    code: string;
  };
}

export class DeleteCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): DeleteCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCodeRequest): DeleteCodeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCodeRequest;
  static deserializeBinaryFromReader(message: DeleteCodeRequest, reader: jspb.BinaryReader): DeleteCodeRequest;
}

export namespace DeleteCodeRequest {
  export type AsObject = {
    code: string;
  };
}

export class ListCodeRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListCodeRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCodeRequest;

  getIsUsed(): boolean;
  setIsUsed(value: boolean): ListCodeRequest;
  hasIsUsed(): boolean;
  clearIsUsed(): ListCodeRequest;

  getCodeType(): CodeType;
  setCodeType(value: CodeType): ListCodeRequest;
  hasCodeType(): boolean;
  clearCodeType(): ListCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCodeRequest): ListCodeRequest.AsObject;
  static serializeBinaryToWriter(message: ListCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCodeRequest;
  static deserializeBinaryFromReader(message: ListCodeRequest, reader: jspb.BinaryReader): ListCodeRequest;
}

export namespace ListCodeRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    isUsed?: boolean;
    codeType?: CodeType;
  };

  export enum IsUsedCase {
    _IS_USED_NOT_SET = 0,
    IS_USED = 3,
  }

  export enum CodeTypeCase {
    _CODE_TYPE_NOT_SET = 0,
    CODE_TYPE = 4,
  }
}

export class ListCodeResponse extends jspb.Message {
  getCodesList(): Array<Code>;
  setCodesList(value: Array<Code>): ListCodeResponse;
  clearCodesList(): ListCodeResponse;
  addCodes(value?: Code, index?: number): Code;

  getTotalCount(): number;
  setTotalCount(value: number): ListCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCodeResponse): ListCodeResponse.AsObject;
  static serializeBinaryToWriter(message: ListCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCodeResponse;
  static deserializeBinaryFromReader(message: ListCodeResponse, reader: jspb.BinaryReader): ListCodeResponse;
}

export namespace ListCodeResponse {
  export type AsObject = {
    codesList: Array<Code.AsObject>;
    totalCount: number;
  };
}

export enum CodeType {
  INSTRUCTOR_APPLICATION = 0,
}
