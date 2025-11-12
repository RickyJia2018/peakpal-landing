import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class PolicyContent extends jspb.Message {
  getLanguageCode(): string;
  setLanguageCode(value: string): PolicyContent;

  getContent(): string;
  setContent(value: string): PolicyContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyContent.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyContent): PolicyContent.AsObject;
  static serializeBinaryToWriter(message: PolicyContent, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyContent;
  static deserializeBinaryFromReader(message: PolicyContent, reader: jspb.BinaryReader): PolicyContent;
}

export namespace PolicyContent {
  export type AsObject = {
    languageCode: string;
    content: string;
  };
}

export class PolicyVersion extends jspb.Message {
  getId(): number;
  setId(value: number): PolicyVersion;

  getPolicyType(): PolicyType;
  setPolicyType(value: PolicyType): PolicyVersion;

  getVersion(): string;
  setVersion(value: string): PolicyVersion;

  getPublishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPublishedAt(value?: google_protobuf_timestamp_pb.Timestamp): PolicyVersion;
  hasPublishedAt(): boolean;
  clearPublishedAt(): PolicyVersion;

  getEffectiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveAt(value?: google_protobuf_timestamp_pb.Timestamp): PolicyVersion;
  hasEffectiveAt(): boolean;
  clearEffectiveAt(): PolicyVersion;

  getContentsList(): Array<PolicyContent>;
  setContentsList(value: Array<PolicyContent>): PolicyVersion;
  clearContentsList(): PolicyVersion;
  addContents(value?: PolicyContent, index?: number): PolicyContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyVersion.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyVersion): PolicyVersion.AsObject;
  static serializeBinaryToWriter(message: PolicyVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyVersion;
  static deserializeBinaryFromReader(message: PolicyVersion, reader: jspb.BinaryReader): PolicyVersion;
}

export namespace PolicyVersion {
  export type AsObject = {
    id: number;
    policyType: PolicyType;
    version: string;
    publishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    effectiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    contentsList: Array<PolicyContent.AsObject>;
  };
}

export class PolicyVersionResponse extends jspb.Message {
  getPolicyVersion(): PolicyVersion | undefined;
  setPolicyVersion(value?: PolicyVersion): PolicyVersionResponse;
  hasPolicyVersion(): boolean;
  clearPolicyVersion(): PolicyVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyVersionResponse): PolicyVersionResponse.AsObject;
  static serializeBinaryToWriter(message: PolicyVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyVersionResponse;
  static deserializeBinaryFromReader(message: PolicyVersionResponse, reader: jspb.BinaryReader): PolicyVersionResponse;
}

export namespace PolicyVersionResponse {
  export type AsObject = {
    policyVersion?: PolicyVersion.AsObject;
  };
}

export class GetLatestPolicyRequest extends jspb.Message {
  getPolicyType(): PolicyType;
  setPolicyType(value: PolicyType): GetLatestPolicyRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): GetLatestPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestPolicyRequest): GetLatestPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: GetLatestPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestPolicyRequest;
  static deserializeBinaryFromReader(message: GetLatestPolicyRequest, reader: jspb.BinaryReader): GetLatestPolicyRequest;
}

export namespace GetLatestPolicyRequest {
  export type AsObject = {
    policyType: PolicyType;
    languageCode: string;
  };
}

export class GetLatestPolicyResponse extends jspb.Message {
  getPolicyVersionId(): number;
  setPolicyVersionId(value: number): GetLatestPolicyResponse;

  getPolicyType(): PolicyType;
  setPolicyType(value: PolicyType): GetLatestPolicyResponse;

  getVersion(): string;
  setVersion(value: string): GetLatestPolicyResponse;

  getContent(): string;
  setContent(value: string): GetLatestPolicyResponse;

  getEffectiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveAt(value?: google_protobuf_timestamp_pb.Timestamp): GetLatestPolicyResponse;
  hasEffectiveAt(): boolean;
  clearEffectiveAt(): GetLatestPolicyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLatestPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLatestPolicyResponse): GetLatestPolicyResponse.AsObject;
  static serializeBinaryToWriter(message: GetLatestPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLatestPolicyResponse;
  static deserializeBinaryFromReader(message: GetLatestPolicyResponse, reader: jspb.BinaryReader): GetLatestPolicyResponse;
}

export namespace GetLatestPolicyResponse {
  export type AsObject = {
    policyVersionId: number;
    policyType: PolicyType;
    version: string;
    content: string;
    effectiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class AcceptPolicyRequest extends jspb.Message {
  getPolicyVersionId(): number;
  setPolicyVersionId(value: number): AcceptPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptPolicyRequest): AcceptPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptPolicyRequest;
  static deserializeBinaryFromReader(message: AcceptPolicyRequest, reader: jspb.BinaryReader): AcceptPolicyRequest;
}

export namespace AcceptPolicyRequest {
  export type AsObject = {
    policyVersionId: number;
  };
}

export class CreatePolicyRequest extends jspb.Message {
  getPolicyType(): PolicyType;
  setPolicyType(value: PolicyType): CreatePolicyRequest;

  getVersion(): string;
  setVersion(value: string): CreatePolicyRequest;

  getEffectiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveAt(value?: google_protobuf_timestamp_pb.Timestamp): CreatePolicyRequest;
  hasEffectiveAt(): boolean;
  clearEffectiveAt(): CreatePolicyRequest;

  getInitialContentsList(): Array<PolicyContent>;
  setInitialContentsList(value: Array<PolicyContent>): CreatePolicyRequest;
  clearInitialContentsList(): CreatePolicyRequest;
  addInitialContents(value?: PolicyContent, index?: number): PolicyContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePolicyRequest): CreatePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePolicyRequest;
  static deserializeBinaryFromReader(message: CreatePolicyRequest, reader: jspb.BinaryReader): CreatePolicyRequest;
}

export namespace CreatePolicyRequest {
  export type AsObject = {
    policyType: PolicyType;
    version: string;
    effectiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    initialContentsList: Array<PolicyContent.AsObject>;
  };
}

export class UpdatePolicyRequest extends jspb.Message {
  getPolicyVersionId(): number;
  setPolicyVersionId(value: number): UpdatePolicyRequest;

  getVersion(): string;
  setVersion(value: string): UpdatePolicyRequest;
  hasVersion(): boolean;
  clearVersion(): UpdatePolicyRequest;

  getEffectiveAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEffectiveAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdatePolicyRequest;
  hasEffectiveAt(): boolean;
  clearEffectiveAt(): UpdatePolicyRequest;

  getContentsToUpdateList(): Array<PolicyContent>;
  setContentsToUpdateList(value: Array<PolicyContent>): UpdatePolicyRequest;
  clearContentsToUpdateList(): UpdatePolicyRequest;
  addContentsToUpdate(value?: PolicyContent, index?: number): PolicyContent;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePolicyRequest): UpdatePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePolicyRequest;
  static deserializeBinaryFromReader(message: UpdatePolicyRequest, reader: jspb.BinaryReader): UpdatePolicyRequest;
}

export namespace UpdatePolicyRequest {
  export type AsObject = {
    policyVersionId: number;
    version?: string;
    effectiveAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    contentsToUpdateList: Array<PolicyContent.AsObject>;
  };

  export enum VersionCase {
    _VERSION_NOT_SET = 0,
    VERSION = 2,
  }

  export enum EffectiveAtCase {
    _EFFECTIVE_AT_NOT_SET = 0,
    EFFECTIVE_AT = 3,
  }
}

export class DeletePolicyRequest extends jspb.Message {
  getPolicyVersionId(): number;
  setPolicyVersionId(value: number): DeletePolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePolicyRequest): DeletePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePolicyRequest;
  static deserializeBinaryFromReader(message: DeletePolicyRequest, reader: jspb.BinaryReader): DeletePolicyRequest;
}

export namespace DeletePolicyRequest {
  export type AsObject = {
    policyVersionId: number;
  };
}

export class ListPoliciesRequest extends jspb.Message {
  getPolicyType(): PolicyType;
  setPolicyType(value: PolicyType): ListPoliciesRequest;
  hasPolicyType(): boolean;
  clearPolicyType(): ListPoliciesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesRequest): ListPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: ListPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesRequest;
  static deserializeBinaryFromReader(message: ListPoliciesRequest, reader: jspb.BinaryReader): ListPoliciesRequest;
}

export namespace ListPoliciesRequest {
  export type AsObject = {
    policyType?: PolicyType;
  };

  export enum PolicyTypeCase {
    _POLICY_TYPE_NOT_SET = 0,
    POLICY_TYPE = 1,
  }
}

export class ListPoliciesResponse extends jspb.Message {
  getPoliciesList(): Array<PolicyVersion>;
  setPoliciesList(value: Array<PolicyVersion>): ListPoliciesResponse;
  clearPoliciesList(): ListPoliciesResponse;
  addPolicies(value?: PolicyVersion, index?: number): PolicyVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesResponse): ListPoliciesResponse.AsObject;
  static serializeBinaryToWriter(message: ListPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesResponse;
  static deserializeBinaryFromReader(message: ListPoliciesResponse, reader: jspb.BinaryReader): ListPoliciesResponse;
}

export namespace ListPoliciesResponse {
  export type AsObject = {
    policiesList: Array<PolicyVersion.AsObject>;
  };
}

export enum PolicyType {
  POLICY_TYPE_UNSPECIFIED = 0,
  TERMS_OF_SERVICE = 1,
  PRIVACY_POLICY = 2,
  TOKEN_POLICY = 3,
  INSTRUCTOR_AGREEMENT = 4,
  CANCELLATION_AND_REFUND_POLICY = 5,
}
