import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Country extends jspb.Message {
  getCode(): string;
  setCode(value: string): Country;

  getName(): string;
  setName(value: string): Country;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Country;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Country;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Country.AsObject;
  static toObject(includeInstance: boolean, msg: Country): Country.AsObject;
  static serializeBinaryToWriter(message: Country, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Country;
  static deserializeBinaryFromReader(message: Country, reader: jspb.BinaryReader): Country;
}

export namespace Country {
  export type AsObject = {
    code: string;
    name: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateCountryRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateCountryRequest;

  getCode(): string;
  setCode(value: string): CreateCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCountryRequest): CreateCountryRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCountryRequest;
  static deserializeBinaryFromReader(message: CreateCountryRequest, reader: jspb.BinaryReader): CreateCountryRequest;
}

export namespace CreateCountryRequest {
  export type AsObject = {
    name: string;
    code: string;
  };
}

export class CreateCountryResponse extends jspb.Message {
  getCountry(): Country | undefined;
  setCountry(value?: Country): CreateCountryResponse;
  hasCountry(): boolean;
  clearCountry(): CreateCountryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCountryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCountryResponse): CreateCountryResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCountryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCountryResponse;
  static deserializeBinaryFromReader(message: CreateCountryResponse, reader: jspb.BinaryReader): CreateCountryResponse;
}

export namespace CreateCountryResponse {
  export type AsObject = {
    country?: Country.AsObject;
  };
}

export class GetCountryRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): GetCountryRequest;
  hasCode(): boolean;
  clearCode(): GetCountryRequest;

  getName(): string;
  setName(value: string): GetCountryRequest;
  hasName(): boolean;
  clearName(): GetCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountryRequest): GetCountryRequest.AsObject;
  static serializeBinaryToWriter(message: GetCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountryRequest;
  static deserializeBinaryFromReader(message: GetCountryRequest, reader: jspb.BinaryReader): GetCountryRequest;
}

export namespace GetCountryRequest {
  export type AsObject = {
    code?: string;
    name?: string;
  };

  export enum CodeCase {
    _CODE_NOT_SET = 0,
    CODE = 1,
  }

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 2,
  }
}

export class GetCountryResponse extends jspb.Message {
  getCountry(): Country | undefined;
  setCountry(value?: Country): GetCountryResponse;
  hasCountry(): boolean;
  clearCountry(): GetCountryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCountryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCountryResponse): GetCountryResponse.AsObject;
  static serializeBinaryToWriter(message: GetCountryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCountryResponse;
  static deserializeBinaryFromReader(message: GetCountryResponse, reader: jspb.BinaryReader): GetCountryResponse;
}

export namespace GetCountryResponse {
  export type AsObject = {
    country?: Country.AsObject;
  };
}

export class ListCountriesRequest extends jspb.Message {
  getLimit(): number;
  setLimit(value: number): ListCountriesRequest;

  getOffset(): number;
  setOffset(value: number): ListCountriesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCountriesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCountriesRequest): ListCountriesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCountriesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCountriesRequest;
  static deserializeBinaryFromReader(message: ListCountriesRequest, reader: jspb.BinaryReader): ListCountriesRequest;
}

export namespace ListCountriesRequest {
  export type AsObject = {
    limit: number;
    offset: number;
  };
}

export class ListCountriesResponse extends jspb.Message {
  getCountryList(): Array<Country>;
  setCountryList(value: Array<Country>): ListCountriesResponse;
  clearCountryList(): ListCountriesResponse;
  addCountry(value?: Country, index?: number): Country;

  getLimit(): number;
  setLimit(value: number): ListCountriesResponse;

  getOffset(): number;
  setOffset(value: number): ListCountriesResponse;

  getTotal(): number;
  setTotal(value: number): ListCountriesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCountriesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCountriesResponse): ListCountriesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCountriesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCountriesResponse;
  static deserializeBinaryFromReader(message: ListCountriesResponse, reader: jspb.BinaryReader): ListCountriesResponse;
}

export namespace ListCountriesResponse {
  export type AsObject = {
    countryList: Array<Country.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

export class UpdateCountryRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): UpdateCountryRequest;

  getName(): string;
  setName(value: string): UpdateCountryRequest;
  hasName(): boolean;
  clearName(): UpdateCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCountryRequest): UpdateCountryRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCountryRequest;
  static deserializeBinaryFromReader(message: UpdateCountryRequest, reader: jspb.BinaryReader): UpdateCountryRequest;
}

export namespace UpdateCountryRequest {
  export type AsObject = {
    code: string;
    name?: string;
  };

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 2,
  }
}

export class UpdateCountryResponse extends jspb.Message {
  getCountry(): Country | undefined;
  setCountry(value?: Country): UpdateCountryResponse;
  hasCountry(): boolean;
  clearCountry(): UpdateCountryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCountryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCountryResponse): UpdateCountryResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCountryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCountryResponse;
  static deserializeBinaryFromReader(message: UpdateCountryResponse, reader: jspb.BinaryReader): UpdateCountryResponse;
}

export namespace UpdateCountryResponse {
  export type AsObject = {
    country?: Country.AsObject;
  };
}

export class DeleteCountryRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): DeleteCountryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCountryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCountryRequest): DeleteCountryRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCountryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCountryRequest;
  static deserializeBinaryFromReader(message: DeleteCountryRequest, reader: jspb.BinaryReader): DeleteCountryRequest;
}

export namespace DeleteCountryRequest {
  export type AsObject = {
    code: string;
  };
}

export class DeleteCountryResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteCountryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCountryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCountryResponse): DeleteCountryResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCountryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCountryResponse;
  static deserializeBinaryFromReader(message: DeleteCountryResponse, reader: jspb.BinaryReader): DeleteCountryResponse;
}

export namespace DeleteCountryResponse {
  export type AsObject = {
    success: boolean;
  };
}

