import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class AuthorizeUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeUserRequest): AuthorizeUserRequest.AsObject;
  static serializeBinaryToWriter(message: AuthorizeUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeUserRequest;
  static deserializeBinaryFromReader(message: AuthorizeUserRequest, reader: jspb.BinaryReader): AuthorizeUserRequest;
}

export namespace AuthorizeUserRequest {
  export type AsObject = {
  };
}

export class AuthorizeUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AuthorizeUserResponse;

  getUserId(): number;
  setUserId(value: number): AuthorizeUserResponse;

  getIssuedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIssuedat(value?: google_protobuf_timestamp_pb.Timestamp): AuthorizeUserResponse;
  hasIssuedat(): boolean;
  clearIssuedat(): AuthorizeUserResponse;

  getExpiredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredat(value?: google_protobuf_timestamp_pb.Timestamp): AuthorizeUserResponse;
  hasExpiredat(): boolean;
  clearExpiredat(): AuthorizeUserResponse;

  getPermission(): number;
  setPermission(value: number): AuthorizeUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeUserResponse): AuthorizeUserResponse.AsObject;
  static serializeBinaryToWriter(message: AuthorizeUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeUserResponse;
  static deserializeBinaryFromReader(message: AuthorizeUserResponse, reader: jspb.BinaryReader): AuthorizeUserResponse;
}

export namespace AuthorizeUserResponse {
  export type AsObject = {
    id: string;
    userId: number;
    issuedat?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiredat?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    permission: number;
  };
}

export class LogoutUserRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): LogoutUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutUserRequest): LogoutUserRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutUserRequest;
  static deserializeBinaryFromReader(message: LogoutUserRequest, reader: jspb.BinaryReader): LogoutUserRequest;
}

export namespace LogoutUserRequest {
  export type AsObject = {
    sessionId: string;
  };
}

export class LogoutUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LogoutUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutUserResponse): LogoutUserResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutUserResponse;
  static deserializeBinaryFromReader(message: LogoutUserResponse, reader: jspb.BinaryReader): LogoutUserResponse;
}

export namespace LogoutUserResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class UpdateUserPasswordRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): UpdateUserPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): UpdateUserPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordRequest): UpdateUserPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordRequest;
  static deserializeBinaryFromReader(message: UpdateUserPasswordRequest, reader: jspb.BinaryReader): UpdateUserPasswordRequest;
}

export namespace UpdateUserPasswordRequest {
  export type AsObject = {
    oldPassword: string;
    newPassword: string;
  };
}

export class UpdateUserLoginEmailRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): UpdateUserLoginEmailRequest;

  getNewEmail(): string;
  setNewEmail(value: string): UpdateUserLoginEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLoginEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLoginEmailRequest): UpdateUserLoginEmailRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserLoginEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLoginEmailRequest;
  static deserializeBinaryFromReader(message: UpdateUserLoginEmailRequest, reader: jspb.BinaryReader): UpdateUserLoginEmailRequest;
}

export namespace UpdateUserLoginEmailRequest {
  export type AsObject = {
    oldPassword: string;
    newEmail: string;
  };
}

