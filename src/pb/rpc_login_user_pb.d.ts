import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class LoginUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginUserRequest;

  getPassword(): string;
  setPassword(value: string): LoginUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
  static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
  static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
  export type AsObject = {
    email: string;
    password: string;
  };
}

export class LoginUserResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): LoginUserResponse;
  hasUser(): boolean;
  clearUser(): LoginUserResponse;

  getSessionId(): string;
  setSessionId(value: string): LoginUserResponse;

  getAccessToken(): string;
  setAccessToken(value: string): LoginUserResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginUserResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): LoginUserResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginUserResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): LoginUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
  static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
  static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
    sessionId: string;
    accessToken: string;
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

