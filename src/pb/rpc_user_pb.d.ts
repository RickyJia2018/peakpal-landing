import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb'; // proto import: "google/protobuf/wrappers.proto"


export class GetUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetUserRequest;
  hasId(): boolean;
  clearId(): GetUserRequest;

  getEmail(): string;
  setEmail(value: string): GetUserRequest;
  hasEmail(): boolean;
  clearEmail(): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    id?: number;
    email?: string;
  };

  export enum IdCase {
    _ID_NOT_SET = 0,
    ID = 1,
  }

  export enum EmailCase {
    _EMAIL_NOT_SET = 0,
    EMAIL = 2,
  }
}

export class GetUserResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): GetUserResponse;
  hasUser(): boolean;
  clearUser(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
  };
}

export class CreateUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): CreateUserRequest;

  getFirstName(): string;
  setFirstName(value: string): CreateUserRequest;

  getLastName(): string;
  setLastName(value: string): CreateUserRequest;

  getPassword(): string;
  setPassword(value: string): CreateUserRequest;

  getNickname(): string;
  setNickname(value: string): CreateUserRequest;

  getMainLanguageCode(): string;
  setMainLanguageCode(value: string): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    nickname: string;
    mainLanguageCode: string;
  };
}

export class CreateUserResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): CreateUserResponse;
  hasUser(): boolean;
  clearUser(): CreateUserResponse;

  getSessionId(): string;
  setSessionId(value: string): CreateUserResponse;

  getAccessToken(): string;
  setAccessToken(value: string): CreateUserResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): CreateUserResponse;

  getMainLanguageId(): number;
  setMainLanguageId(value: number): CreateUserResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateUserResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): CreateUserResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): CreateUserResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): CreateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserResponse): CreateUserResponse.AsObject;
  static serializeBinaryToWriter(message: CreateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserResponse;
  static deserializeBinaryFromReader(message: CreateUserResponse, reader: jspb.BinaryReader): CreateUserResponse;
}

export namespace CreateUserResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
    sessionId: string;
    accessToken: string;
    refreshToken: string;
    mainLanguageId: number;
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class UpdateUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateUserRequest;

  getFirstName(): string;
  setFirstName(value: string): UpdateUserRequest;
  hasFirstName(): boolean;
  clearFirstName(): UpdateUserRequest;

  getLastName(): string;
  setLastName(value: string): UpdateUserRequest;
  hasLastName(): boolean;
  clearLastName(): UpdateUserRequest;

  getEmail(): string;
  setEmail(value: string): UpdateUserRequest;
  hasEmail(): boolean;
  clearEmail(): UpdateUserRequest;

  getPassword(): string;
  setPassword(value: string): UpdateUserRequest;
  hasPassword(): boolean;
  clearPassword(): UpdateUserRequest;

  getPermissions(): number;
  setPermissions(value: number): UpdateUserRequest;
  hasPermissions(): boolean;
  clearPermissions(): UpdateUserRequest;

  getMainLanguageId(): number;
  setMainLanguageId(value: number): UpdateUserRequest;
  hasMainLanguageId(): boolean;
  clearMainLanguageId(): UpdateUserRequest;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): UpdateUserRequest;
  hasAvatarUrl(): boolean;
  clearAvatarUrl(): UpdateUserRequest;

  getNickname(): string;
  setNickname(value: string): UpdateUserRequest;
  hasNickname(): boolean;
  clearNickname(): UpdateUserRequest;

  getIsInstructor(): boolean;
  setIsInstructor(value: boolean): UpdateUserRequest;
  hasIsInstructor(): boolean;
  clearIsInstructor(): UpdateUserRequest;

  getFcmToken(): string;
  setFcmToken(value: string): UpdateUserRequest;
  hasFcmToken(): boolean;
  clearFcmToken(): UpdateUserRequest;

  getJpushRegistrationId(): string;
  setJpushRegistrationId(value: string): UpdateUserRequest;
  hasJpushRegistrationId(): boolean;
  clearJpushRegistrationId(): UpdateUserRequest;

  getIsBanned(): boolean;
  setIsBanned(value: boolean): UpdateUserRequest;
  hasIsBanned(): boolean;
  clearIsBanned(): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    permissions?: number;
    mainLanguageId?: number;
    avatarUrl?: string;
    nickname?: string;
    isInstructor?: boolean;
    fcmToken?: string;
    jpushRegistrationId?: string;
    isBanned?: boolean;
  };

  export enum FirstNameCase {
    _FIRST_NAME_NOT_SET = 0,
    FIRST_NAME = 2,
  }

  export enum LastNameCase {
    _LAST_NAME_NOT_SET = 0,
    LAST_NAME = 3,
  }

  export enum EmailCase {
    _EMAIL_NOT_SET = 0,
    EMAIL = 4,
  }

  export enum PasswordCase {
    _PASSWORD_NOT_SET = 0,
    PASSWORD = 5,
  }

  export enum PermissionsCase {
    _PERMISSIONS_NOT_SET = 0,
    PERMISSIONS = 6,
  }

  export enum MainLanguageIdCase {
    _MAIN_LANGUAGE_ID_NOT_SET = 0,
    MAIN_LANGUAGE_ID = 7,
  }

  export enum AvatarUrlCase {
    _AVATAR_URL_NOT_SET = 0,
    AVATAR_URL = 8,
  }

  export enum NicknameCase {
    _NICKNAME_NOT_SET = 0,
    NICKNAME = 9,
  }

  export enum IsInstructorCase {
    _IS_INSTRUCTOR_NOT_SET = 0,
    IS_INSTRUCTOR = 10,
  }

  export enum FcmTokenCase {
    _FCM_TOKEN_NOT_SET = 0,
    FCM_TOKEN = 11,
  }

  export enum JpushRegistrationIdCase {
    _JPUSH_REGISTRATION_ID_NOT_SET = 0,
    JPUSH_REGISTRATION_ID = 12,
  }

  export enum IsBannedCase {
    _IS_BANNED_NOT_SET = 0,
    IS_BANNED = 13,
  }
}

export class UpdateUserResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): UpdateUserResponse;
  hasUser(): boolean;
  clearUser(): UpdateUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserResponse): UpdateUserResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserResponse;
  static deserializeBinaryFromReader(message: UpdateUserResponse, reader: jspb.BinaryReader): UpdateUserResponse;
}

export namespace UpdateUserResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
  };
}

export class UpdateLanguageRequest extends jspb.Message {
  getLanguageId(): number;
  setLanguageId(value: number): UpdateLanguageRequest;

  getAdd(): boolean;
  setAdd(value: boolean): UpdateLanguageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLanguageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLanguageRequest): UpdateLanguageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLanguageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLanguageRequest;
  static deserializeBinaryFromReader(message: UpdateLanguageRequest, reader: jspb.BinaryReader): UpdateLanguageRequest;
}

export namespace UpdateLanguageRequest {
  export type AsObject = {
    languageId: number;
    add: boolean;
  };
}

export class ListUsersRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListUsersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListUsersRequest;

  getSearchQuery(): google_protobuf_wrappers_pb.StringValue | undefined;
  setSearchQuery(value?: google_protobuf_wrappers_pb.StringValue): ListUsersRequest;
  hasSearchQuery(): boolean;
  clearSearchQuery(): ListUsersRequest;

  getIsInstructor(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsInstructor(value?: google_protobuf_wrappers_pb.BoolValue): ListUsersRequest;
  hasIsInstructor(): boolean;
  clearIsInstructor(): ListUsersRequest;

  getIsEmailVerified(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsEmailVerified(value?: google_protobuf_wrappers_pb.BoolValue): ListUsersRequest;
  hasIsEmailVerified(): boolean;
  clearIsEmailVerified(): ListUsersRequest;

  getIsPhoneVerified(): google_protobuf_wrappers_pb.BoolValue | undefined;
  setIsPhoneVerified(value?: google_protobuf_wrappers_pb.BoolValue): ListUsersRequest;
  hasIsPhoneVerified(): boolean;
  clearIsPhoneVerified(): ListUsersRequest;

  getPermission(): google_protobuf_wrappers_pb.Int32Value | undefined;
  setPermission(value?: google_protobuf_wrappers_pb.Int32Value): ListUsersRequest;
  hasPermission(): boolean;
  clearPermission(): ListUsersRequest;

  getSortField(): string;
  setSortField(value: string): ListUsersRequest;
  hasSortField(): boolean;
  clearSortField(): ListUsersRequest;

  getSortDirection(): string;
  setSortDirection(value: string): ListUsersRequest;
  hasSortDirection(): boolean;
  clearSortDirection(): ListUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersRequest): ListUsersRequest.AsObject;
  static serializeBinaryToWriter(message: ListUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersRequest;
  static deserializeBinaryFromReader(message: ListUsersRequest, reader: jspb.BinaryReader): ListUsersRequest;
}

export namespace ListUsersRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    searchQuery?: google_protobuf_wrappers_pb.StringValue.AsObject;
    isInstructor?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    isEmailVerified?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    isPhoneVerified?: google_protobuf_wrappers_pb.BoolValue.AsObject;
    permission?: google_protobuf_wrappers_pb.Int32Value.AsObject;
    sortField?: string;
    sortDirection?: string;
  };

  export enum SortFieldCase {
    _SORT_FIELD_NOT_SET = 0,
    SORT_FIELD = 8,
  }

  export enum SortDirectionCase {
    _SORT_DIRECTION_NOT_SET = 0,
    SORT_DIRECTION = 9,
  }
}

export class ListUsersResponse extends jspb.Message {
  getUsersList(): Array<user_pb.User>;
  setUsersList(value: Array<user_pb.User>): ListUsersResponse;
  clearUsersList(): ListUsersResponse;
  addUsers(value?: user_pb.User, index?: number): user_pb.User;

  getTotalCount(): number;
  setTotalCount(value: number): ListUsersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUsersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUsersResponse): ListUsersResponse.AsObject;
  static serializeBinaryToWriter(message: ListUsersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUsersResponse;
  static deserializeBinaryFromReader(message: ListUsersResponse, reader: jspb.BinaryReader): ListUsersResponse;
}

export namespace ListUsersResponse {
  export type AsObject = {
    usersList: Array<user_pb.User.AsObject>;
    totalCount: number;
  };
}

