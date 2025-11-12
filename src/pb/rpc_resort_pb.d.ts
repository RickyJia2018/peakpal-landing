import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Resort extends jspb.Message {
  getId(): number;
  setId(value: number): Resort;

  getName(): string;
  setName(value: string): Resort;

  getCountryCode(): string;
  setCountryCode(value: string): Resort;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Resort;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Resort;

  getLatitude(): number;
  setLatitude(value: number): Resort;

  getLongitude(): number;
  setLongitude(value: number): Resort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resort.AsObject;
  static toObject(includeInstance: boolean, msg: Resort): Resort.AsObject;
  static serializeBinaryToWriter(message: Resort, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resort;
  static deserializeBinaryFromReader(message: Resort, reader: jspb.BinaryReader): Resort;
}

export namespace Resort {
  export type AsObject = {
    id: number;
    name: string;
    countryCode: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    latitude: number;
    longitude: number;
  };
}

export class FetchResortResponse extends jspb.Message {
  getNewAddResortsList(): Array<Resort>;
  setNewAddResortsList(value: Array<Resort>): FetchResortResponse;
  clearNewAddResortsList(): FetchResortResponse;
  addNewAddResorts(value?: Resort, index?: number): Resort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResortResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResortResponse): FetchResortResponse.AsObject;
  static serializeBinaryToWriter(message: FetchResortResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResortResponse;
  static deserializeBinaryFromReader(message: FetchResortResponse, reader: jspb.BinaryReader): FetchResortResponse;
}

export namespace FetchResortResponse {
  export type AsObject = {
    newAddResortsList: Array<Resort.AsObject>;
  };
}

export class CreateResortRequest extends jspb.Message {
  getSlug(): string;
  setSlug(value: string): CreateResortRequest;

  getName(): string;
  setName(value: string): CreateResortRequest;

  getCountryCode(): string;
  setCountryCode(value: string): CreateResortRequest;

  getRegin(): string;
  setRegin(value: string): CreateResortRequest;

  getLatitude(): number;
  setLatitude(value: number): CreateResortRequest;

  getLongitude(): number;
  setLongitude(value: number): CreateResortRequest;

  getUrl(): string;
  setUrl(value: string): CreateResortRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResortRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResortRequest): CreateResortRequest.AsObject;
  static serializeBinaryToWriter(message: CreateResortRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResortRequest;
  static deserializeBinaryFromReader(message: CreateResortRequest, reader: jspb.BinaryReader): CreateResortRequest;
}

export namespace CreateResortRequest {
  export type AsObject = {
    slug: string;
    name: string;
    countryCode: string;
    regin: string;
    latitude: number;
    longitude: number;
    url: string;
  };
}

export class CreateResortResponse extends jspb.Message {
  getResort(): Resort | undefined;
  setResort(value?: Resort): CreateResortResponse;
  hasResort(): boolean;
  clearResort(): CreateResortResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResortResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResortResponse): CreateResortResponse.AsObject;
  static serializeBinaryToWriter(message: CreateResortResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResortResponse;
  static deserializeBinaryFromReader(message: CreateResortResponse, reader: jspb.BinaryReader): CreateResortResponse;
}

export namespace CreateResortResponse {
  export type AsObject = {
    resort?: Resort.AsObject;
  };
}

export class GetResortRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetResortRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResortRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetResortRequest): GetResortRequest.AsObject;
  static serializeBinaryToWriter(message: GetResortRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResortRequest;
  static deserializeBinaryFromReader(message: GetResortRequest, reader: jspb.BinaryReader): GetResortRequest;
}

export namespace GetResortRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetResortResponse extends jspb.Message {
  getResort(): Resort | undefined;
  setResort(value?: Resort): GetResortResponse;
  hasResort(): boolean;
  clearResort(): GetResortResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetResortResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetResortResponse): GetResortResponse.AsObject;
  static serializeBinaryToWriter(message: GetResortResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetResortResponse;
  static deserializeBinaryFromReader(message: GetResortResponse, reader: jspb.BinaryReader): GetResortResponse;
}

export namespace GetResortResponse {
  export type AsObject = {
    resort?: Resort.AsObject;
  };
}

export class ListResortsRequest extends jspb.Message {
  getCountryCode(): string;
  setCountryCode(value: string): ListResortsRequest;
  hasCountryCode(): boolean;
  clearCountryCode(): ListResortsRequest;

  getName(): string;
  setName(value: string): ListResortsRequest;
  hasName(): boolean;
  clearName(): ListResortsRequest;

  getLimit(): number;
  setLimit(value: number): ListResortsRequest;

  getOffset(): number;
  setOffset(value: number): ListResortsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResortsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListResortsRequest): ListResortsRequest.AsObject;
  static serializeBinaryToWriter(message: ListResortsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResortsRequest;
  static deserializeBinaryFromReader(message: ListResortsRequest, reader: jspb.BinaryReader): ListResortsRequest;
}

export namespace ListResortsRequest {
  export type AsObject = {
    countryCode?: string;
    name?: string;
    limit: number;
    offset: number;
  };

  export enum CountryCodeCase {
    _COUNTRY_CODE_NOT_SET = 0,
    COUNTRY_CODE = 1,
  }

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 2,
  }
}

export class ListResortsResponse extends jspb.Message {
  getResortList(): Array<Resort>;
  setResortList(value: Array<Resort>): ListResortsResponse;
  clearResortList(): ListResortsResponse;
  addResort(value?: Resort, index?: number): Resort;

  getLimit(): number;
  setLimit(value: number): ListResortsResponse;

  getOffset(): number;
  setOffset(value: number): ListResortsResponse;

  getTotal(): number;
  setTotal(value: number): ListResortsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListResortsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListResortsResponse): ListResortsResponse.AsObject;
  static serializeBinaryToWriter(message: ListResortsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListResortsResponse;
  static deserializeBinaryFromReader(message: ListResortsResponse, reader: jspb.BinaryReader): ListResortsResponse;
}

export namespace ListResortsResponse {
  export type AsObject = {
    resortList: Array<Resort.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

export class UpdateResortRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateResortRequest;

  getName(): string;
  setName(value: string): UpdateResortRequest;
  hasName(): boolean;
  clearName(): UpdateResortRequest;

  getCountryCode(): string;
  setCountryCode(value: string): UpdateResortRequest;
  hasCountryCode(): boolean;
  clearCountryCode(): UpdateResortRequest;

  getRegion(): string;
  setRegion(value: string): UpdateResortRequest;
  hasRegion(): boolean;
  clearRegion(): UpdateResortRequest;

  getLatitude(): number;
  setLatitude(value: number): UpdateResortRequest;
  hasLatitude(): boolean;
  clearLatitude(): UpdateResortRequest;

  getLongitude(): number;
  setLongitude(value: number): UpdateResortRequest;
  hasLongitude(): boolean;
  clearLongitude(): UpdateResortRequest;

  getUrl(): string;
  setUrl(value: string): UpdateResortRequest;
  hasUrl(): boolean;
  clearUrl(): UpdateResortRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResortRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResortRequest): UpdateResortRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateResortRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResortRequest;
  static deserializeBinaryFromReader(message: UpdateResortRequest, reader: jspb.BinaryReader): UpdateResortRequest;
}

export namespace UpdateResortRequest {
  export type AsObject = {
    id: number;
    name?: string;
    countryCode?: string;
    region?: string;
    latitude?: number;
    longitude?: number;
    url?: string;
  };

  export enum NameCase {
    _NAME_NOT_SET = 0,
    NAME = 2,
  }

  export enum CountryCodeCase {
    _COUNTRY_CODE_NOT_SET = 0,
    COUNTRY_CODE = 3,
  }

  export enum RegionCase {
    _REGION_NOT_SET = 0,
    REGION = 4,
  }

  export enum LatitudeCase {
    _LATITUDE_NOT_SET = 0,
    LATITUDE = 5,
  }

  export enum LongitudeCase {
    _LONGITUDE_NOT_SET = 0,
    LONGITUDE = 6,
  }

  export enum UrlCase {
    _URL_NOT_SET = 0,
    URL = 7,
  }
}

export class UpdateResortResponse extends jspb.Message {
  getResort(): Resort | undefined;
  setResort(value?: Resort): UpdateResortResponse;
  hasResort(): boolean;
  clearResort(): UpdateResortResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResortResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResortResponse): UpdateResortResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateResortResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResortResponse;
  static deserializeBinaryFromReader(message: UpdateResortResponse, reader: jspb.BinaryReader): UpdateResortResponse;
}

export namespace UpdateResortResponse {
  export type AsObject = {
    resort?: Resort.AsObject;
  };
}

export class DeleteResortRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteResortRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResortRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResortRequest): DeleteResortRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteResortRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResortRequest;
  static deserializeBinaryFromReader(message: DeleteResortRequest, reader: jspb.BinaryReader): DeleteResortRequest;
}

export namespace DeleteResortRequest {
  export type AsObject = {
    id: number;
  };
}

export class DeleteResortResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteResortResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResortResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResortResponse): DeleteResortResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteResortResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResortResponse;
  static deserializeBinaryFromReader(message: DeleteResortResponse, reader: jspb.BinaryReader): DeleteResortResponse;
}

export namespace DeleteResortResponse {
  export type AsObject = {
    success: boolean;
  };
}

