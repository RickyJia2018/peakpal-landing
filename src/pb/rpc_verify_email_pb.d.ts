import * as jspb from 'google-protobuf'



export class VerifyEmailRequest extends jspb.Message {
  getEmailId(): number;
  setEmailId(value: number): VerifyEmailRequest;

  getSecretCode(): string;
  setSecretCode(value: string): VerifyEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailRequest): VerifyEmailRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailRequest;
  static deserializeBinaryFromReader(message: VerifyEmailRequest, reader: jspb.BinaryReader): VerifyEmailRequest;
}

export namespace VerifyEmailRequest {
  export type AsObject = {
    emailId: number;
    secretCode: string;
  };
}

export class VerifyEmailResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyEmailResponse;

  getMessage(): string;
  setMessage(value: string): VerifyEmailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyEmailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyEmailResponse): VerifyEmailResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyEmailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyEmailResponse;
  static deserializeBinaryFromReader(message: VerifyEmailResponse, reader: jspb.BinaryReader): VerifyEmailResponse;
}

export namespace VerifyEmailResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

