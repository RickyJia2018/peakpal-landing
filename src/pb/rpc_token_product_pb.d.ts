import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class TokenProduct extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): TokenProduct;

  getTokenAmount(): number;
  setTokenAmount(value: number): TokenProduct;

  getPriceInCents(): number;
  setPriceInCents(value: number): TokenProduct;

  getTitle(): string;
  setTitle(value: string): TokenProduct;

  getDescription(): string;
  setDescription(value: string): TokenProduct;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenProduct;
  hasCreatedAt(): boolean;
  clearCreatedAt(): TokenProduct;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): TokenProduct;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): TokenProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenProduct.AsObject;
  static toObject(includeInstance: boolean, msg: TokenProduct): TokenProduct.AsObject;
  static serializeBinaryToWriter(message: TokenProduct, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenProduct;
  static deserializeBinaryFromReader(message: TokenProduct, reader: jspb.BinaryReader): TokenProduct;
}

export namespace TokenProduct {
  export type AsObject = {
    productId: string;
    tokenAmount: number;
    priceInCents: number;
    title: string;
    description: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateTokenProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): CreateTokenProductRequest;

  getTokenAmount(): number;
  setTokenAmount(value: number): CreateTokenProductRequest;

  getPriceInCents(): number;
  setPriceInCents(value: number): CreateTokenProductRequest;

  getTitle(): string;
  setTitle(value: string): CreateTokenProductRequest;

  getDescription(): string;
  setDescription(value: string): CreateTokenProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokenProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokenProductRequest): CreateTokenProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTokenProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokenProductRequest;
  static deserializeBinaryFromReader(message: CreateTokenProductRequest, reader: jspb.BinaryReader): CreateTokenProductRequest;
}

export namespace CreateTokenProductRequest {
  export type AsObject = {
    productId: string;
    tokenAmount: number;
    priceInCents: number;
    title: string;
    description: string;
  };
}

export class CreateTokenProductResponse extends jspb.Message {
  getTokenProduct(): TokenProduct | undefined;
  setTokenProduct(value?: TokenProduct): CreateTokenProductResponse;
  hasTokenProduct(): boolean;
  clearTokenProduct(): CreateTokenProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTokenProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTokenProductResponse): CreateTokenProductResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTokenProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTokenProductResponse;
  static deserializeBinaryFromReader(message: CreateTokenProductResponse, reader: jspb.BinaryReader): CreateTokenProductResponse;
}

export namespace CreateTokenProductResponse {
  export type AsObject = {
    tokenProduct?: TokenProduct.AsObject;
  };
}

export class UpdateTokenProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): UpdateTokenProductRequest;

  getTokenAmount(): number;
  setTokenAmount(value: number): UpdateTokenProductRequest;
  hasTokenAmount(): boolean;
  clearTokenAmount(): UpdateTokenProductRequest;

  getPriceInCents(): number;
  setPriceInCents(value: number): UpdateTokenProductRequest;
  hasPriceInCents(): boolean;
  clearPriceInCents(): UpdateTokenProductRequest;

  getTitle(): string;
  setTitle(value: string): UpdateTokenProductRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateTokenProductRequest;

  getDescription(): string;
  setDescription(value: string): UpdateTokenProductRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateTokenProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTokenProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTokenProductRequest): UpdateTokenProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTokenProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTokenProductRequest;
  static deserializeBinaryFromReader(message: UpdateTokenProductRequest, reader: jspb.BinaryReader): UpdateTokenProductRequest;
}

export namespace UpdateTokenProductRequest {
  export type AsObject = {
    productId: string;
    tokenAmount?: number;
    priceInCents?: number;
    title?: string;
    description?: string;
  };

  export enum TokenAmountCase {
    _TOKEN_AMOUNT_NOT_SET = 0,
    TOKEN_AMOUNT = 2,
  }

  export enum PriceInCentsCase {
    _PRICE_IN_CENTS_NOT_SET = 0,
    PRICE_IN_CENTS = 3,
  }

  export enum TitleCase {
    _TITLE_NOT_SET = 0,
    TITLE = 4,
  }

  export enum DescriptionCase {
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 5,
  }
}

export class UpdateTokenProductResponse extends jspb.Message {
  getTokenProduct(): TokenProduct | undefined;
  setTokenProduct(value?: TokenProduct): UpdateTokenProductResponse;
  hasTokenProduct(): boolean;
  clearTokenProduct(): UpdateTokenProductResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTokenProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTokenProductResponse): UpdateTokenProductResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTokenProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTokenProductResponse;
  static deserializeBinaryFromReader(message: UpdateTokenProductResponse, reader: jspb.BinaryReader): UpdateTokenProductResponse;
}

export namespace UpdateTokenProductResponse {
  export type AsObject = {
    tokenProduct?: TokenProduct.AsObject;
  };
}

export class DeleteTokenProductRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): DeleteTokenProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTokenProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTokenProductRequest): DeleteTokenProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTokenProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTokenProductRequest;
  static deserializeBinaryFromReader(message: DeleteTokenProductRequest, reader: jspb.BinaryReader): DeleteTokenProductRequest;
}

export namespace DeleteTokenProductRequest {
  export type AsObject = {
    productId: string;
  };
}

export class DeleteTokenProductResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTokenProductResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTokenProductResponse): DeleteTokenProductResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTokenProductResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTokenProductResponse;
  static deserializeBinaryFromReader(message: DeleteTokenProductResponse, reader: jspb.BinaryReader): DeleteTokenProductResponse;
}

export namespace DeleteTokenProductResponse {
  export type AsObject = {
  };
}

