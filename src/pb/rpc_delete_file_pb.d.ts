import * as jspb from 'google-protobuf'

import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class DeleteFileRequest extends jspb.Message {
  getIsPrivateFile(): boolean;
  setIsPrivateFile(value: boolean): DeleteFileRequest;

  getObjectName(): string;
  setObjectName(value: string): DeleteFileRequest;

  getOwnerUserId(): string;
  setOwnerUserId(value: string): DeleteFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileRequest): DeleteFileRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileRequest;
  static deserializeBinaryFromReader(message: DeleteFileRequest, reader: jspb.BinaryReader): DeleteFileRequest;
}

export namespace DeleteFileRequest {
  export type AsObject = {
    isPrivateFile: boolean;
    objectName: string;
    ownerUserId: string;
  };
}

export class DeleteFileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteFileResponse;

  getMessage(): string;
  setMessage(value: string): DeleteFileResponse;

  getErrorCode(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setErrorCode(value?: google_protobuf_wrappers_pb.Int32Value): DeleteFileResponse;
  hasErrorCode(): boolean;
  clearErrorCode(): DeleteFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFileResponse): DeleteFileResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFileResponse;
  static deserializeBinaryFromReader(message: DeleteFileResponse, reader: jspb.BinaryReader): DeleteFileResponse;
}

export namespace DeleteFileResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    errorCode?: google_protobuf_wrappers_pb.Int32Value.AsObject;
  };
}

