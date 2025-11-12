import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as permission_pb from './permission_pb'; // proto import: "permission.proto"


export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getEmail(): string;
  setEmail(value: string): User;

  getFirstName(): string;
  setFirstName(value: string): User;

  getLastName(): string;
  setLastName(value: string): User;

  getPhone(): string;
  setPhone(value: string): User;

  getPermission(): permission_pb.Permission;
  setPermission(value: permission_pb.Permission): User;

  getMainLanguageId(): number;
  setMainLanguageId(value: number): User;

  getIsEmailVerified(): boolean;
  setIsEmailVerified(value: boolean): User;

  getIsPhoneVerified(): boolean;
  setIsPhoneVerified(value: boolean): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): User;

  getBalance(): number;
  setBalance(value: number): User;

  getNickname(): string;
  setNickname(value: string): User;

  getIsInstructor(): boolean;
  setIsInstructor(value: boolean): User;

  getFcmToken(): string;
  setFcmToken(value: string): User;

  getIsBanned(): boolean;
  setIsBanned(value: boolean): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    permission: permission_pb.Permission;
    mainLanguageId: number;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    avatarUrl: string;
    balance: number;
    nickname: string;
    isInstructor: boolean;
    fcmToken: string;
    isBanned: boolean;
  };
}

