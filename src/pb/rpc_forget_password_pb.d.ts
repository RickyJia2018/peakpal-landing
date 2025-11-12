import * as jspb from 'google-protobuf'



export class ForgetPasswordRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ForgetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ForgetPasswordRequest): ForgetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ForgetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgetPasswordRequest;
  static deserializeBinaryFromReader(message: ForgetPasswordRequest, reader: jspb.BinaryReader): ForgetPasswordRequest;
}

export namespace ForgetPasswordRequest {
  export type AsObject = {
    email: string;
  };
}

export class ForgetPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ForgetPasswordResponse;

  getMessage(): string;
  setMessage(value: string): ForgetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ForgetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ForgetPasswordResponse): ForgetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ForgetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ForgetPasswordResponse;
  static deserializeBinaryFromReader(message: ForgetPasswordResponse, reader: jspb.BinaryReader): ForgetPasswordResponse;
}

export namespace ForgetPasswordResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

