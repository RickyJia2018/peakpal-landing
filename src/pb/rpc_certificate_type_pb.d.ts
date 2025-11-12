import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as enums_pb from './enums_pb'; // proto import: "enums.proto"


export class CertificateType extends jspb.Message {
  getId(): number;
  setId(value: number): CertificateType;

  getName(): string;
  setName(value: string): CertificateType;

  getAcronym(): string;
  setAcronym(value: string): CertificateType;

  getCategory(): enums_pb.CertificateCategory;
  setCategory(value: enums_pb.CertificateCategory): CertificateType;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CertificateType;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CertificateType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CertificateType.AsObject;
  static toObject(includeInstance: boolean, msg: CertificateType): CertificateType.AsObject;
  static serializeBinaryToWriter(message: CertificateType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CertificateType;
  static deserializeBinaryFromReader(message: CertificateType, reader: jspb.BinaryReader): CertificateType;
}

export namespace CertificateType {
  export type AsObject = {
    id: number;
    name: string;
    acronym: string;
    category: enums_pb.CertificateCategory;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateCertificateTypeRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateCertificateTypeRequest;

  getAcronym(): string;
  setAcronym(value: string): CreateCertificateTypeRequest;

  getCategory(): enums_pb.CertificateCategory;
  setCategory(value: enums_pb.CertificateCategory): CreateCertificateTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCertificateTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCertificateTypeRequest): CreateCertificateTypeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCertificateTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCertificateTypeRequest;
  static deserializeBinaryFromReader(message: CreateCertificateTypeRequest, reader: jspb.BinaryReader): CreateCertificateTypeRequest;
}

export namespace CreateCertificateTypeRequest {
  export type AsObject = {
    name: string;
    acronym: string;
    category: enums_pb.CertificateCategory;
  };
}

export class CreateCertificateTypeResponse extends jspb.Message {
  getCertificateType(): CertificateType | undefined;
  setCertificateType(value?: CertificateType): CreateCertificateTypeResponse;
  hasCertificateType(): boolean;
  clearCertificateType(): CreateCertificateTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCertificateTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCertificateTypeResponse): CreateCertificateTypeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCertificateTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCertificateTypeResponse;
  static deserializeBinaryFromReader(message: CreateCertificateTypeResponse, reader: jspb.BinaryReader): CreateCertificateTypeResponse;
}

export namespace CreateCertificateTypeResponse {
  export type AsObject = {
    certificateType?: CertificateType.AsObject;
  };
}

export class GetCertificateTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetCertificateTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCertificateTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCertificateTypeRequest): GetCertificateTypeRequest.AsObject;
  static serializeBinaryToWriter(message: GetCertificateTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCertificateTypeRequest;
  static deserializeBinaryFromReader(message: GetCertificateTypeRequest, reader: jspb.BinaryReader): GetCertificateTypeRequest;
}

export namespace GetCertificateTypeRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetCertificateTypeResponse extends jspb.Message {
  getCertificateType(): CertificateType | undefined;
  setCertificateType(value?: CertificateType): GetCertificateTypeResponse;
  hasCertificateType(): boolean;
  clearCertificateType(): GetCertificateTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCertificateTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCertificateTypeResponse): GetCertificateTypeResponse.AsObject;
  static serializeBinaryToWriter(message: GetCertificateTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCertificateTypeResponse;
  static deserializeBinaryFromReader(message: GetCertificateTypeResponse, reader: jspb.BinaryReader): GetCertificateTypeResponse;
}

export namespace GetCertificateTypeResponse {
  export type AsObject = {
    certificateType?: CertificateType.AsObject;
  };
}

export class ListCertificateTypesRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListCertificateTypesRequest;
  hasName(): boolean;
  clearName(): ListCertificateTypesRequest;

  getAcronym(): string;
  setAcronym(value: string): ListCertificateTypesRequest;
  hasAcronym(): boolean;
  clearAcronym(): ListCertificateTypesRequest;

  getLimit(): number;
  setLimit(value: number): ListCertificateTypesRequest;
  hasLimit(): boolean;
  clearLimit(): ListCertificateTypesRequest;

  getOffset(): number;
  setOffset(value: number): ListCertificateTypesRequest;
  hasOffset(): boolean;
  clearOffset(): ListCertificateTypesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCertificateTypesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCertificateTypesRequest): ListCertificateTypesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCertificateTypesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCertificateTypesRequest;
  static deserializeBinaryFromReader(message: ListCertificateTypesRequest, reader: jspb.BinaryReader): ListCertificateTypesRequest;
}

export namespace ListCertificateTypesRequest {
  export type AsObject = {
    name?: string;
    acronym?: string;
    limit?: number;
    offset?: number;
  };

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 1,
  }

  export enum AcronymCase {
    _ACRONYM_NOT_SET = 0,
    ACRONYM = 2,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 3,
  }

  export enum OffsetCase {
    _OFFSET_NOT_SET = 0,
    OFFSET = 4,
  }
}

export class ListCertificateTypesResponse extends jspb.Message {
  getCertificateTypesList(): Array<CertificateType>;
  setCertificateTypesList(value: Array<CertificateType>): ListCertificateTypesResponse;
  clearCertificateTypesList(): ListCertificateTypesResponse;
  addCertificateTypes(value?: CertificateType, index?: number): CertificateType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCertificateTypesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCertificateTypesResponse): ListCertificateTypesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCertificateTypesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCertificateTypesResponse;
  static deserializeBinaryFromReader(message: ListCertificateTypesResponse, reader: jspb.BinaryReader): ListCertificateTypesResponse;
}

export namespace ListCertificateTypesResponse {
  export type AsObject = {
    certificateTypesList: Array<CertificateType.AsObject>;
  };
}

export class UpdateCertificateTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateCertificateTypeRequest;

  getName(): string;
  setName(value: string): UpdateCertificateTypeRequest;
  hasName(): boolean;
  clearName(): UpdateCertificateTypeRequest;

  getAcronym(): string;
  setAcronym(value: string): UpdateCertificateTypeRequest;
  hasAcronym(): boolean;
  clearAcronym(): UpdateCertificateTypeRequest;

  getCategory(): enums_pb.CertificateCategory;
  setCategory(value: enums_pb.CertificateCategory): UpdateCertificateTypeRequest;
  hasCategory(): boolean;
  clearCategory(): UpdateCertificateTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCertificateTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCertificateTypeRequest): UpdateCertificateTypeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCertificateTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCertificateTypeRequest;
  static deserializeBinaryFromReader(message: UpdateCertificateTypeRequest, reader: jspb.BinaryReader): UpdateCertificateTypeRequest;
}

export namespace UpdateCertificateTypeRequest {
  export type AsObject = {
    id: number;
    name?: string;
    acronym?: string;
    category?: enums_pb.CertificateCategory;
  };

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum AcronymCase {
    _ACRONYM_NOT_SET = 0,
    ACRONYM = 3,
  }

  export enum CategoryCase {
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 4,
  }
}

export class UpdateCertificateTypeResponse extends jspb.Message {
  getCertificateType(): CertificateType | undefined;
  setCertificateType(value?: CertificateType): UpdateCertificateTypeResponse;
  hasCertificateType(): boolean;
  clearCertificateType(): UpdateCertificateTypeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCertificateTypeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCertificateTypeResponse): UpdateCertificateTypeResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCertificateTypeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCertificateTypeResponse;
  static deserializeBinaryFromReader(message: UpdateCertificateTypeResponse, reader: jspb.BinaryReader): UpdateCertificateTypeResponse;
}

export namespace UpdateCertificateTypeResponse {
  export type AsObject = {
    certificateType?: CertificateType.AsObject;
  };
}

export class DeleteCertificateTypeRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteCertificateTypeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCertificateTypeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCertificateTypeRequest): DeleteCertificateTypeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCertificateTypeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCertificateTypeRequest;
  static deserializeBinaryFromReader(message: DeleteCertificateTypeRequest, reader: jspb.BinaryReader): DeleteCertificateTypeRequest;
}

export namespace DeleteCertificateTypeRequest {
  export type AsObject = {
    id: number;
  };
}

