import * as jspb from 'google-protobuf'

import * as rpc_token_product_pb from './rpc_token_product_pb'; // proto import: "rpc_token_product.proto"


export class GetTokenProductsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenProductsRequest): GetTokenProductsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokenProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenProductsRequest;
  static deserializeBinaryFromReader(message: GetTokenProductsRequest, reader: jspb.BinaryReader): GetTokenProductsRequest;
}

export namespace GetTokenProductsRequest {
  export type AsObject = {
  };
}

export class GetTokenProductsResponse extends jspb.Message {
  getProductsList(): Array<rpc_token_product_pb.TokenProduct>;
  setProductsList(value: Array<rpc_token_product_pb.TokenProduct>): GetTokenProductsResponse;
  clearProductsList(): GetTokenProductsResponse;
  addProducts(value?: rpc_token_product_pb.TokenProduct, index?: number): rpc_token_product_pb.TokenProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenProductsResponse): GetTokenProductsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokenProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenProductsResponse;
  static deserializeBinaryFromReader(message: GetTokenProductsResponse, reader: jspb.BinaryReader): GetTokenProductsResponse;
}

export namespace GetTokenProductsResponse {
  export type AsObject = {
    productsList: Array<rpc_token_product_pb.TokenProduct.AsObject>;
  };
}

export class InitiateTokenPurchaseRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): InitiateTokenPurchaseRequest;

  getPaymentType(): PaymentType;
  setPaymentType(value: PaymentType): InitiateTokenPurchaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateTokenPurchaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateTokenPurchaseRequest): InitiateTokenPurchaseRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateTokenPurchaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateTokenPurchaseRequest;
  static deserializeBinaryFromReader(message: InitiateTokenPurchaseRequest, reader: jspb.BinaryReader): InitiateTokenPurchaseRequest;
}

export namespace InitiateTokenPurchaseRequest {
  export type AsObject = {
    productId: string;
    paymentType: PaymentType;
  };
}

export class InitiateTokenPurchaseResponse extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): InitiateTokenPurchaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateTokenPurchaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateTokenPurchaseResponse): InitiateTokenPurchaseResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateTokenPurchaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateTokenPurchaseResponse;
  static deserializeBinaryFromReader(message: InitiateTokenPurchaseResponse, reader: jspb.BinaryReader): InitiateTokenPurchaseResponse;
}

export namespace InitiateTokenPurchaseResponse {
  export type AsObject = {
    orderId: string;
  };
}

export class VerifyReceiptRequest extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): VerifyReceiptRequest;

  getPaymentNetwork(): string;
  setPaymentNetwork(value: string): VerifyReceiptRequest;

  getPaymentType(): PaymentType;
  setPaymentType(value: PaymentType): VerifyReceiptRequest;

  getProductId(): string;
  setProductId(value: string): VerifyReceiptRequest;

  getPurchaseToken(): string;
  setPurchaseToken(value: string): VerifyReceiptRequest;

  getOrderId(): string;
  setOrderId(value: string): VerifyReceiptRequest;

  getBillingName(): string;
  setBillingName(value: string): VerifyReceiptRequest;

  getBillingAddress(): string;
  setBillingAddress(value: string): VerifyReceiptRequest;

  getTotalPrice(): number;
  setTotalPrice(value: number): VerifyReceiptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyReceiptRequest): VerifyReceiptRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyReceiptRequest;
  static deserializeBinaryFromReader(message: VerifyReceiptRequest, reader: jspb.BinaryReader): VerifyReceiptRequest;
}

export namespace VerifyReceiptRequest {
  export type AsObject = {
    transactionId: string;
    paymentNetwork: string;
    paymentType: PaymentType;
    productId: string;
    purchaseToken: string;
    orderId: string;
    billingName: string;
    billingAddress: string;
    totalPrice: number;
  };
}

export class VerifyReceiptResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyReceiptResponse;

  getMessage(): string;
  setMessage(value: string): VerifyReceiptResponse;

  getActualPaidPriceInCents(): number;
  setActualPaidPriceInCents(value: number): VerifyReceiptResponse;

  getPlatformFeeInCents(): number;
  setPlatformFeeInCents(value: number): VerifyReceiptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyReceiptResponse): VerifyReceiptResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyReceiptResponse;
  static deserializeBinaryFromReader(message: VerifyReceiptResponse, reader: jspb.BinaryReader): VerifyReceiptResponse;
}

export namespace VerifyReceiptResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    actualPaidPriceInCents: number;
    platformFeeInCents: number;
  };
}

export class CancelTokenPurchaseRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): CancelTokenPurchaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTokenPurchaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTokenPurchaseRequest): CancelTokenPurchaseRequest.AsObject;
  static serializeBinaryToWriter(message: CancelTokenPurchaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTokenPurchaseRequest;
  static deserializeBinaryFromReader(message: CancelTokenPurchaseRequest, reader: jspb.BinaryReader): CancelTokenPurchaseRequest;
}

export namespace CancelTokenPurchaseRequest {
  export type AsObject = {
    orderId: string;
  };
}

export class CancelTokenPurchaseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTokenPurchaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTokenPurchaseResponse): CancelTokenPurchaseResponse.AsObject;
  static serializeBinaryToWriter(message: CancelTokenPurchaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTokenPurchaseResponse;
  static deserializeBinaryFromReader(message: CancelTokenPurchaseResponse, reader: jspb.BinaryReader): CancelTokenPurchaseResponse;
}

export namespace CancelTokenPurchaseResponse {
  export type AsObject = {
  };
}

export class LinkPaypalAccountRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): LinkPaypalAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkPaypalAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkPaypalAccountRequest): LinkPaypalAccountRequest.AsObject;
  static serializeBinaryToWriter(message: LinkPaypalAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkPaypalAccountRequest;
  static deserializeBinaryFromReader(message: LinkPaypalAccountRequest, reader: jspb.BinaryReader): LinkPaypalAccountRequest;
}

export namespace LinkPaypalAccountRequest {
  export type AsObject = {
    code: string;
  };
}

export class PayoutResult extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): PayoutResult;

  getError(): string;
  setError(value: string): PayoutResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayoutResult.AsObject;
  static toObject(includeInstance: boolean, msg: PayoutResult): PayoutResult.AsObject;
  static serializeBinaryToWriter(message: PayoutResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayoutResult;
  static deserializeBinaryFromReader(message: PayoutResult, reader: jspb.BinaryReader): PayoutResult;
}

export namespace PayoutResult {
  export type AsObject = {
    userId: number;
    error: string;
  };
}

export class PayoutResponse extends jspb.Message {
  getResultList(): Array<PayoutResult>;
  setResultList(value: Array<PayoutResult>): PayoutResponse;
  clearResultList(): PayoutResponse;
  addResult(value?: PayoutResult, index?: number): PayoutResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PayoutResponse): PayoutResponse.AsObject;
  static serializeBinaryToWriter(message: PayoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayoutResponse;
  static deserializeBinaryFromReader(message: PayoutResponse, reader: jspb.BinaryReader): PayoutResponse;
}

export namespace PayoutResponse {
  export type AsObject = {
    resultList: Array<PayoutResult.AsObject>;
  };
}

export class GetLinkPaypalUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetLinkPaypalUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinkPaypalUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinkPaypalUrlResponse): GetLinkPaypalUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GetLinkPaypalUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinkPaypalUrlResponse;
  static deserializeBinaryFromReader(message: GetLinkPaypalUrlResponse, reader: jspb.BinaryReader): GetLinkPaypalUrlResponse;
}

export namespace GetLinkPaypalUrlResponse {
  export type AsObject = {
    url: string;
  };
}

export enum TransactionType {
  PURCHASE = 0,
  ESCROW = 1,
  WITHDRAWAL = 2,
  TRANSFER = 3,
}
export enum EscrowType {
  PENDING = 0,
  RELEASED = 1,
  REFUNDED = 2,
}
export enum PaymentType {
  PAYMENT_TYPE_UNSPECIFIED = 0,
  GOOGLE_PAY = 1,
  WECHAT_PAY = 2,
  ALIPAY = 3,
  PAYPAL = 4,
  STRIPE = 5,
  APPLE_PAY = 6,
}
