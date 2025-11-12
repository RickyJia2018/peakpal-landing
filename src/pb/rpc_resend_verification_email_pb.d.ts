import * as jspb from 'google-protobuf'



export class ResendVerificationEmailRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): ResendVerificationEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResendVerificationEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResendVerificationEmailRequest): ResendVerificationEmailRequest.AsObject;
  static serializeBinaryToWriter(message: ResendVerificationEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResendVerificationEmailRequest;
  static deserializeBinaryFromReader(message: ResendVerificationEmailRequest, reader: jspb.BinaryReader): ResendVerificationEmailRequest;
}

export namespace ResendVerificationEmailRequest {
  export type AsObject = {
    email: string;
  };
}

