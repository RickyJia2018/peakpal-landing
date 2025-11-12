import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as enums_pb from './enums_pb'; // proto import: "enums.proto"


export class Certificate extends jspb.Message {
  getId(): number;
  setId(value: number): Certificate;

  getName(): string;
  setName(value: string): Certificate;

  getAcronym(): string;
  setAcronym(value: string): Certificate;

  getLevel(): number;
  setLevel(value: number): Certificate;
  hasLevel(): boolean;
  clearLevel(): Certificate;

  getProveImage(): string;
  setProveImage(value: string): Certificate;

  getApproved(): boolean;
  setApproved(value: boolean): Certificate;

  getAchievement(): string;
  setAchievement(value: string): Certificate;
  hasAchievement(): boolean;
  clearAchievement(): Certificate;

  getCategory(): enums_pb.CertificateCategory;
  setCategory(value: enums_pb.CertificateCategory): Certificate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Certificate.AsObject;
  static toObject(includeInstance: boolean, msg: Certificate): Certificate.AsObject;
  static serializeBinaryToWriter(message: Certificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Certificate;
  static deserializeBinaryFromReader(message: Certificate, reader: jspb.BinaryReader): Certificate;
}

export namespace Certificate {
  export type AsObject = {
    id: number;
    name: string;
    acronym: string;
    level?: number;
    proveImage: string;
    approved: boolean;
    achievement?: string;
    category: enums_pb.CertificateCategory;
  };

  export enum LevelCase {
    _LEVEL_NOT_SET = 0,
    LEVEL = 4,
  }

  export enum AchievementCase {
    _ACHIEVEMENT_NOT_SET = 0,
    ACHIEVEMENT = 7,
  }
}

export class InstructorCertificate extends jspb.Message {
  getId(): number;
  setId(value: number): InstructorCertificate;

  getUserId(): number;
  setUserId(value: number): InstructorCertificate;

  getCertificateTypeId(): number;
  setCertificateTypeId(value: number): InstructorCertificate;

  getLevel(): number;
  setLevel(value: number): InstructorCertificate;
  hasLevel(): boolean;
  clearLevel(): InstructorCertificate;

  getApproved(): boolean;
  setApproved(value: boolean): InstructorCertificate;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorCertificate;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InstructorCertificate;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorCertificate;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): InstructorCertificate;

  getProveImage(): string;
  setProveImage(value: string): InstructorCertificate;
  hasProveImage(): boolean;
  clearProveImage(): InstructorCertificate;

  getAchievement(): string;
  setAchievement(value: string): InstructorCertificate;
  hasAchievement(): boolean;
  clearAchievement(): InstructorCertificate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorCertificate.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorCertificate): InstructorCertificate.AsObject;
  static serializeBinaryToWriter(message: InstructorCertificate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorCertificate;
  static deserializeBinaryFromReader(message: InstructorCertificate, reader: jspb.BinaryReader): InstructorCertificate;
}

export namespace InstructorCertificate {
  export type AsObject = {
    id: number;
    userId: number;
    certificateTypeId: number;
    level?: number;
    approved: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    proveImage?: string;
    achievement?: string;
  };

  export enum LevelCase {
    _LEVEL_NOT_SET = 0,
    LEVEL = 4,
  }

  export enum ProveImageCase {
    _PROVE_IMAGE_NOT_SET = 0,
    PROVE_IMAGE = 8,
  }

  export enum AchievementCase {
    _ACHIEVEMENT_NOT_SET = 0,
    ACHIEVEMENT = 9,
  }
}

export class CreateInstructorCertificateRequest extends jspb.Message {
  getCertificateTypeId(): number;
  setCertificateTypeId(value: number): CreateInstructorCertificateRequest;

  getLevel(): number;
  setLevel(value: number): CreateInstructorCertificateRequest;
  hasLevel(): boolean;
  clearLevel(): CreateInstructorCertificateRequest;

  getProveImage(): string;
  setProveImage(value: string): CreateInstructorCertificateRequest;

  getAchievement(): string;
  setAchievement(value: string): CreateInstructorCertificateRequest;
  hasAchievement(): boolean;
  clearAchievement(): CreateInstructorCertificateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorCertificateRequest): CreateInstructorCertificateRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorCertificateRequest;
  static deserializeBinaryFromReader(message: CreateInstructorCertificateRequest, reader: jspb.BinaryReader): CreateInstructorCertificateRequest;
}

export namespace CreateInstructorCertificateRequest {
  export type AsObject = {
    certificateTypeId: number;
    level?: number;
    proveImage: string;
    achievement?: string;
  };

  export enum LevelCase {
    _LEVEL_NOT_SET = 0,
    LEVEL = 2,
  }

  export enum AchievementCase {
    _ACHIEVEMENT_NOT_SET = 0,
    ACHIEVEMENT = 4,
  }
}

export class CreateInstructorCertificateResponse extends jspb.Message {
  getCertificate(): InstructorCertificate | undefined;
  setCertificate(value?: InstructorCertificate): CreateInstructorCertificateResponse;
  hasCertificate(): boolean;
  clearCertificate(): CreateInstructorCertificateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorCertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorCertificateResponse): CreateInstructorCertificateResponse.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorCertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorCertificateResponse;
  static deserializeBinaryFromReader(message: CreateInstructorCertificateResponse, reader: jspb.BinaryReader): CreateInstructorCertificateResponse;
}

export namespace CreateInstructorCertificateResponse {
  export type AsObject = {
    certificate?: InstructorCertificate.AsObject;
  };
}

export class GetInstructorCertificateByIdRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetInstructorCertificateByIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorCertificateByIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorCertificateByIdRequest): GetInstructorCertificateByIdRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstructorCertificateByIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorCertificateByIdRequest;
  static deserializeBinaryFromReader(message: GetInstructorCertificateByIdRequest, reader: jspb.BinaryReader): GetInstructorCertificateByIdRequest;
}

export namespace GetInstructorCertificateByIdRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetInstructorCertificateByIdResponse extends jspb.Message {
  getCertificate(): InstructorCertificate | undefined;
  setCertificate(value?: InstructorCertificate): GetInstructorCertificateByIdResponse;
  hasCertificate(): boolean;
  clearCertificate(): GetInstructorCertificateByIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorCertificateByIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorCertificateByIdResponse): GetInstructorCertificateByIdResponse.AsObject;
  static serializeBinaryToWriter(message: GetInstructorCertificateByIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorCertificateByIdResponse;
  static deserializeBinaryFromReader(message: GetInstructorCertificateByIdResponse, reader: jspb.BinaryReader): GetInstructorCertificateByIdResponse;
}

export namespace GetInstructorCertificateByIdResponse {
  export type AsObject = {
    certificate?: InstructorCertificate.AsObject;
  };
}

export class ListInstructorCertificatesRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ListInstructorCertificatesRequest;
  hasUserId(): boolean;
  clearUserId(): ListInstructorCertificatesRequest;

  getCertificateTypeId(): number;
  setCertificateTypeId(value: number): ListInstructorCertificatesRequest;
  hasCertificateTypeId(): boolean;
  clearCertificateTypeId(): ListInstructorCertificatesRequest;

  getLevel(): number;
  setLevel(value: number): ListInstructorCertificatesRequest;
  hasLevel(): boolean;
  clearLevel(): ListInstructorCertificatesRequest;

  getOrderBy(): OrderBy;
  setOrderBy(value: OrderBy): ListInstructorCertificatesRequest;
  hasOrderBy(): boolean;
  clearOrderBy(): ListInstructorCertificatesRequest;

  getLimit(): number;
  setLimit(value: number): ListInstructorCertificatesRequest;

  getOffset(): number;
  setOffset(value: number): ListInstructorCertificatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorCertificatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorCertificatesRequest): ListInstructorCertificatesRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstructorCertificatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorCertificatesRequest;
  static deserializeBinaryFromReader(message: ListInstructorCertificatesRequest, reader: jspb.BinaryReader): ListInstructorCertificatesRequest;
}

export namespace ListInstructorCertificatesRequest {
  export type AsObject = {
    userId?: number;
    certificateTypeId?: number;
    level?: number;
    orderBy?: OrderBy;
    limit: number;
    offset: number;
  };

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 1,
  }

  export enum CertificateTypeIdCase {
    _CERTIFICATE_TYPE_ID_NOT_SET = 0,
    CERTIFICATE_TYPE_ID = 2,
  }

  export enum LevelCase {
    _LEVEL_NOT_SET = 0,
    LEVEL = 3,
  }

  export enum OrderByCase {
    _ORDER_BY_NOT_SET = 0,
    ORDER_BY = 4,
  }
}

export class ListInstructorCertificatesResponse extends jspb.Message {
  getCertificatesList(): Array<InstructorCertificate>;
  setCertificatesList(value: Array<InstructorCertificate>): ListInstructorCertificatesResponse;
  clearCertificatesList(): ListInstructorCertificatesResponse;
  addCertificates(value?: InstructorCertificate, index?: number): InstructorCertificate;

  getLimit(): number;
  setLimit(value: number): ListInstructorCertificatesResponse;

  getOffset(): number;
  setOffset(value: number): ListInstructorCertificatesResponse;

  getTotal(): number;
  setTotal(value: number): ListInstructorCertificatesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorCertificatesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorCertificatesResponse): ListInstructorCertificatesResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstructorCertificatesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorCertificatesResponse;
  static deserializeBinaryFromReader(message: ListInstructorCertificatesResponse, reader: jspb.BinaryReader): ListInstructorCertificatesResponse;
}

export namespace ListInstructorCertificatesResponse {
  export type AsObject = {
    certificatesList: Array<InstructorCertificate.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

export class UpdateInstructorCertApproveRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateInstructorCertApproveRequest;

  getApproved(): boolean;
  setApproved(value: boolean): UpdateInstructorCertApproveRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorCertApproveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorCertApproveRequest): UpdateInstructorCertApproveRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorCertApproveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorCertApproveRequest;
  static deserializeBinaryFromReader(message: UpdateInstructorCertApproveRequest, reader: jspb.BinaryReader): UpdateInstructorCertApproveRequest;
}

export namespace UpdateInstructorCertApproveRequest {
  export type AsObject = {
    id: number;
    approved: boolean;
  };
}

export class UpdateInstructorCertApproveResponse extends jspb.Message {
  getCertificate(): InstructorCertificate | undefined;
  setCertificate(value?: InstructorCertificate): UpdateInstructorCertApproveResponse;
  hasCertificate(): boolean;
  clearCertificate(): UpdateInstructorCertApproveResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorCertApproveResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorCertApproveResponse): UpdateInstructorCertApproveResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorCertApproveResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorCertApproveResponse;
  static deserializeBinaryFromReader(message: UpdateInstructorCertApproveResponse, reader: jspb.BinaryReader): UpdateInstructorCertApproveResponse;
}

export namespace UpdateInstructorCertApproveResponse {
  export type AsObject = {
    certificate?: InstructorCertificate.AsObject;
  };
}

export class DeleteInstructorCertificateRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): DeleteInstructorCertificateRequest;

  getCertificateTypeId(): number;
  setCertificateTypeId(value: number): DeleteInstructorCertificateRequest;

  getLevel(): number;
  setLevel(value: number): DeleteInstructorCertificateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInstructorCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInstructorCertificateRequest): DeleteInstructorCertificateRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteInstructorCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInstructorCertificateRequest;
  static deserializeBinaryFromReader(message: DeleteInstructorCertificateRequest, reader: jspb.BinaryReader): DeleteInstructorCertificateRequest;
}

export namespace DeleteInstructorCertificateRequest {
  export type AsObject = {
    userId: number;
    certificateTypeId: number;
    level: number;
  };
}

export enum OrderBy {
  ORDER_BY_UNSPECIFIED = 0,
  LEVEL_ASC = 1,
  LEVEL_DESC = 2,
  CREATED_AT_ASC = 3,
  CREATED_AT_DESC = 4,
}
