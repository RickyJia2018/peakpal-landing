import * as jspb from 'google-protobuf'



export class ResetPasswordRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ResetPasswordRequest;

  getToken(): string;
  setToken(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    userId: number;
    token: string;
    newPassword: string;
  };
}

export class ResetPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResetPasswordResponse;

  getMessage(): string;
  setMessage(value: string): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class VerifyForgotPasswordTokenRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): VerifyForgotPasswordTokenRequest;

  getToken(): string;
  setToken(value: string): VerifyForgotPasswordTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyForgotPasswordTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyForgotPasswordTokenRequest): VerifyForgotPasswordTokenRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyForgotPasswordTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyForgotPasswordTokenRequest;
  static deserializeBinaryFromReader(message: VerifyForgotPasswordTokenRequest, reader: jspb.BinaryReader): VerifyForgotPasswordTokenRequest;
}

export namespace VerifyForgotPasswordTokenRequest {
  export type AsObject = {
    userId: number;
    token: string;
  };
}

export class VerifyForgotPasswordTokenResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyForgotPasswordTokenResponse;

  getMessage(): string;
  setMessage(value: string): VerifyForgotPasswordTokenResponse;

  getShortLivedToken(): string;
  setShortLivedToken(value: string): VerifyForgotPasswordTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyForgotPasswordTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyForgotPasswordTokenResponse): VerifyForgotPasswordTokenResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyForgotPasswordTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyForgotPasswordTokenResponse;
  static deserializeBinaryFromReader(message: VerifyForgotPasswordTokenResponse, reader: jspb.BinaryReader): VerifyForgotPasswordTokenResponse;
}

export namespace VerifyForgotPasswordTokenResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    shortLivedToken: string;
  };
}

