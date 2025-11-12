import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as rpc_instructor_certificate_pb from './rpc_instructor_certificate_pb'; // proto import: "rpc_instructor_certificate.proto"
import * as language_pb from './language_pb'; // proto import: "language.proto"
import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as enums_pb from './enums_pb'; // proto import: "enums.proto"


export class Instructor extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): Instructor;

  getVideosList(): Array<string>;
  setVideosList(value: Array<string>): Instructor;
  clearVideosList(): Instructor;
  addVideos(value: string, index?: number): Instructor;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Instructor;
  clearImagesList(): Instructor;
  addImages(value: string, index?: number): Instructor;

  getSelfIntro(): string;
  setSelfIntro(value: string): Instructor;

  getValidated(): boolean;
  setValidated(value: boolean): Instructor;

  getPrice(): number;
  setPrice(value: number): Instructor;

  getInstagram(): string;
  setInstagram(value: string): Instructor;

  getYoutube(): string;
  setYoutube(value: string): Instructor;

  getTiktok(): string;
  setTiktok(value: string): Instructor;

  getActive(): boolean;
  setActive(value: boolean): Instructor;

  getStar(): number;
  setStar(value: number): Instructor;

  getComeFrom(): string;
  setComeFrom(value: string): Instructor;

  getBaseAt(): string;
  setBaseAt(value: string): Instructor;

  getMaxOrder(): number;
  setMaxOrder(value: number): Instructor;

  getTotalReviews(): number;
  setTotalReviews(value: number): Instructor;

  getTotalTeached(): number;
  setTotalTeached(value: number): Instructor;

  getMediaList(): Array<string>;
  setMediaList(value: Array<string>): Instructor;
  clearMediaList(): Instructor;
  addMedia(value: string, index?: number): Instructor;

  getProvenImagesList(): Array<string>;
  setProvenImagesList(value: Array<string>): Instructor;
  clearProvenImagesList(): Instructor;
  addProvenImages(value: string, index?: number): Instructor;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instructor;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Instructor;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instructor;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Instructor;

  getVideoRequirement(): string;
  setVideoRequirement(value: string): Instructor;

  getApplicationStatus(): enums_pb.ApplicationStatus;
  setApplicationStatus(value: enums_pb.ApplicationStatus): Instructor;

  getPlatformCommissionFee(): number;
  setPlatformCommissionFee(value: number): Instructor;

  getPaypalId(): string;
  setPaypalId(value: string): Instructor;

  getStripeId(): string;
  setStripeId(value: string): Instructor;

  getPayoutCurrency(): string;
  setPayoutCurrency(value: string): Instructor;

  getPayoutCountry(): string;
  setPayoutCountry(value: string): Instructor;

  getPayoutRegion(): string;
  setPayoutRegion(value: string): Instructor;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Instructor;
  clearTagsList(): Instructor;
  addTags(value: string, index?: number): Instructor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instructor.AsObject;
  static toObject(includeInstance: boolean, msg: Instructor): Instructor.AsObject;
  static serializeBinaryToWriter(message: Instructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instructor;
  static deserializeBinaryFromReader(message: Instructor, reader: jspb.BinaryReader): Instructor;
}

export namespace Instructor {
  export type AsObject = {
    userId: number;
    videosList: Array<string>;
    imagesList: Array<string>;
    selfIntro: string;
    validated: boolean;
    price: number;
    instagram: string;
    youtube: string;
    tiktok: string;
    active: boolean;
    star: number;
    comeFrom: string;
    baseAt: string;
    maxOrder: number;
    totalReviews: number;
    totalTeached: number;
    mediaList: Array<string>;
    provenImagesList: Array<string>;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    videoRequirement: string;
    applicationStatus: enums_pb.ApplicationStatus;
    platformCommissionFee: number;
    paypalId: string;
    stripeId: string;
    payoutCurrency: string;
    payoutCountry: string;
    payoutRegion: string;
    tagsList: Array<string>;
  };
}

export class InstructorRsp extends jspb.Message {
  getInstructor(): Instructor | undefined;
  setInstructor(value?: Instructor): InstructorRsp;
  hasInstructor(): boolean;
  clearInstructor(): InstructorRsp;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): InstructorRsp;
  hasUser(): boolean;
  clearUser(): InstructorRsp;

  getCertificatesList(): Array<rpc_instructor_certificate_pb.Certificate>;
  setCertificatesList(value: Array<rpc_instructor_certificate_pb.Certificate>): InstructorRsp;
  clearCertificatesList(): InstructorRsp;
  addCertificates(value?: rpc_instructor_certificate_pb.Certificate, index?: number): rpc_instructor_certificate_pb.Certificate;

  getLanguagesList(): Array<language_pb.Language>;
  setLanguagesList(value: Array<language_pb.Language>): InstructorRsp;
  clearLanguagesList(): InstructorRsp;
  addLanguages(value?: language_pb.Language, index?: number): language_pb.Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorRsp.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorRsp): InstructorRsp.AsObject;
  static serializeBinaryToWriter(message: InstructorRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorRsp;
  static deserializeBinaryFromReader(message: InstructorRsp, reader: jspb.BinaryReader): InstructorRsp;
}

export namespace InstructorRsp {
  export type AsObject = {
    instructor?: Instructor.AsObject;
    user?: user_pb.User.AsObject;
    certificatesList: Array<rpc_instructor_certificate_pb.Certificate.AsObject>;
    languagesList: Array<language_pb.Language.AsObject>;
  };
}

export class CreateInstructorRequest extends jspb.Message {
  getSelfIntro(): string;
  setSelfIntro(value: string): CreateInstructorRequest;
  hasSelfIntro(): boolean;
  clearSelfIntro(): CreateInstructorRequest;

  getProvenImagesList(): Array<string>;
  setProvenImagesList(value: Array<string>): CreateInstructorRequest;
  clearProvenImagesList(): CreateInstructorRequest;
  addProvenImages(value: string, index?: number): CreateInstructorRequest;

  getPrice(): number;
  setPrice(value: number): CreateInstructorRequest;

  getComeFrom(): string;
  setComeFrom(value: string): CreateInstructorRequest;

  getBaseAt(): string;
  setBaseAt(value: string): CreateInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorRequest): CreateInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorRequest;
  static deserializeBinaryFromReader(message: CreateInstructorRequest, reader: jspb.BinaryReader): CreateInstructorRequest;
}

export namespace CreateInstructorRequest {
  export type AsObject = {
    selfIntro?: string;
    provenImagesList: Array<string>;
    price: number;
    comeFrom: string;
    baseAt: string;
  };

  export enum SelfIntroCase {
    _SELF_INTRO_NOT_SET = 0,
    SELF_INTRO = 1,
  }
}

export class CreateInstructorResponse extends jspb.Message {
  getInstructor(): Instructor | undefined;
  setInstructor(value?: Instructor): CreateInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): CreateInstructorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorResponse): CreateInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorResponse;
  static deserializeBinaryFromReader(message: CreateInstructorResponse, reader: jspb.BinaryReader): CreateInstructorResponse;
}

export namespace CreateInstructorResponse {
  export type AsObject = {
    instructor?: Instructor.AsObject;
  };
}

export class GetInstructorRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorRequest): GetInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorRequest;
  static deserializeBinaryFromReader(message: GetInstructorRequest, reader: jspb.BinaryReader): GetInstructorRequest;
}

export namespace GetInstructorRequest {
  export type AsObject = {
    userId: number;
  };
}

export class GetInstructorResponse extends jspb.Message {
  getInstructor(): Instructor | undefined;
  setInstructor(value?: Instructor): GetInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): GetInstructorResponse;

  getCertificatesList(): Array<rpc_instructor_certificate_pb.Certificate>;
  setCertificatesList(value: Array<rpc_instructor_certificate_pb.Certificate>): GetInstructorResponse;
  clearCertificatesList(): GetInstructorResponse;
  addCertificates(value?: rpc_instructor_certificate_pb.Certificate, index?: number): rpc_instructor_certificate_pb.Certificate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorResponse): GetInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: GetInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorResponse;
  static deserializeBinaryFromReader(message: GetInstructorResponse, reader: jspb.BinaryReader): GetInstructorResponse;
}

export namespace GetInstructorResponse {
  export type AsObject = {
    instructor?: Instructor.AsObject;
    certificatesList: Array<rpc_instructor_certificate_pb.Certificate.AsObject>;
  };
}

export class UpdateInstructorRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UpdateInstructorRequest;

  getVideosList(): Array<string>;
  setVideosList(value: Array<string>): UpdateInstructorRequest;
  clearVideosList(): UpdateInstructorRequest;
  addVideos(value: string, index?: number): UpdateInstructorRequest;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): UpdateInstructorRequest;
  clearImagesList(): UpdateInstructorRequest;
  addImages(value: string, index?: number): UpdateInstructorRequest;

  getSelfIntro(): string;
  setSelfIntro(value: string): UpdateInstructorRequest;
  hasSelfIntro(): boolean;
  clearSelfIntro(): UpdateInstructorRequest;

  getPrice(): number;
  setPrice(value: number): UpdateInstructorRequest;
  hasPrice(): boolean;
  clearPrice(): UpdateInstructorRequest;

  getInstagram(): string;
  setInstagram(value: string): UpdateInstructorRequest;
  hasInstagram(): boolean;
  clearInstagram(): UpdateInstructorRequest;

  getYoutube(): string;
  setYoutube(value: string): UpdateInstructorRequest;
  hasYoutube(): boolean;
  clearYoutube(): UpdateInstructorRequest;

  getTiktok(): string;
  setTiktok(value: string): UpdateInstructorRequest;
  hasTiktok(): boolean;
  clearTiktok(): UpdateInstructorRequest;

  getPayoutCurrency(): string;
  setPayoutCurrency(value: string): UpdateInstructorRequest;
  hasPayoutCurrency(): boolean;
  clearPayoutCurrency(): UpdateInstructorRequest;

  getComeFrom(): string;
  setComeFrom(value: string): UpdateInstructorRequest;
  hasComeFrom(): boolean;
  clearComeFrom(): UpdateInstructorRequest;

  getBaseAt(): string;
  setBaseAt(value: string): UpdateInstructorRequest;
  hasBaseAt(): boolean;
  clearBaseAt(): UpdateInstructorRequest;

  getMaxOrder(): number;
  setMaxOrder(value: number): UpdateInstructorRequest;
  hasMaxOrder(): boolean;
  clearMaxOrder(): UpdateInstructorRequest;

  getMediaList(): Array<string>;
  setMediaList(value: Array<string>): UpdateInstructorRequest;
  clearMediaList(): UpdateInstructorRequest;
  addMedia(value: string, index?: number): UpdateInstructorRequest;

  getVideoRequirement(): string;
  setVideoRequirement(value: string): UpdateInstructorRequest;
  hasVideoRequirement(): boolean;
  clearVideoRequirement(): UpdateInstructorRequest;

  getActive(): boolean;
  setActive(value: boolean): UpdateInstructorRequest;
  hasActive(): boolean;
  clearActive(): UpdateInstructorRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UpdateInstructorRequest;
  clearTagsList(): UpdateInstructorRequest;
  addTags(value: string, index?: number): UpdateInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorRequest): UpdateInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorRequest;
  static deserializeBinaryFromReader(message: UpdateInstructorRequest, reader: jspb.BinaryReader): UpdateInstructorRequest;
}

export namespace UpdateInstructorRequest {
  export type AsObject = {
    userId: number;
    videosList: Array<string>;
    imagesList: Array<string>;
    selfIntro?: string;
    price?: number;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    payoutCurrency?: string;
    comeFrom?: string;
    baseAt?: string;
    maxOrder?: number;
    mediaList: Array<string>;
    videoRequirement?: string;
    active?: boolean;
    tagsList: Array<string>;
  };

  export enum SelfIntroCase {
    _SELF_INTRO_NOT_SET = 0,
    SELF_INTRO = 4,
  }

  export enum PriceCase {
    _PRICE_NOT_SET = 0,
    PRICE = 5,
  }

  export enum InstagramCase {
    _INSTAGRAM_NOT_SET = 0,
    INSTAGRAM = 6,
  }

  export enum YoutubeCase {
    _YOUTUBE_NOT_SET = 0,
    YOUTUBE = 7,
  }

  export enum TiktokCase {
    _TIKTOK_NOT_SET = 0,
    TIKTOK = 8,
  }

  export enum PayoutCurrencyCase {
    _PAYOUT_CURRENCY_NOT_SET = 0,
    PAYOUT_CURRENCY = 9,
  }

  export enum ComeFromCase {
    _COME_FROM_NOT_SET = 0,
    COME_FROM = 10,
  }

  export enum BaseAtCase {
    _BASE_AT_NOT_SET = 0,
    BASE_AT = 11,
  }

  export enum MaxOrderCase {
    _MAX_ORDER_NOT_SET = 0,
    MAX_ORDER = 12,
  }

  export enum VideoRequirementCase {
    _VIDEO_REQUIREMENT_NOT_SET = 0,
    VIDEO_REQUIREMENT = 14,
  }

  export enum ActiveCase {
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 15,
  }
}

export class UpdateInstructorResponse extends jspb.Message {
  getInstructor(): Instructor | undefined;
  setInstructor(value?: Instructor): UpdateInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): UpdateInstructorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorResponse): UpdateInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorResponse;
  static deserializeBinaryFromReader(message: UpdateInstructorResponse, reader: jspb.BinaryReader): UpdateInstructorResponse;
}

export namespace UpdateInstructorResponse {
  export type AsObject = {
    instructor?: Instructor.AsObject;
  };
}

export class UpdateApplicationStatusRequest extends jspb.Message {
  getStatus(): enums_pb.ApplicationStatus;
  setStatus(value: enums_pb.ApplicationStatus): UpdateApplicationStatusRequest;

  getInstructorId(): number;
  setInstructorId(value: number): UpdateApplicationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationStatusRequest): UpdateApplicationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApplicationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationStatusRequest;
  static deserializeBinaryFromReader(message: UpdateApplicationStatusRequest, reader: jspb.BinaryReader): UpdateApplicationStatusRequest;
}

export namespace UpdateApplicationStatusRequest {
  export type AsObject = {
    status: enums_pb.ApplicationStatus;
    instructorId: number;
  };
}

export class UpdateInstructorValidationResponse extends jspb.Message {
  getInstructor(): Instructor | undefined;
  setInstructor(value?: Instructor): UpdateInstructorValidationResponse;
  hasInstructor(): boolean;
  clearInstructor(): UpdateInstructorValidationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorValidationResponse): UpdateInstructorValidationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorValidationResponse;
  static deserializeBinaryFromReader(message: UpdateInstructorValidationResponse, reader: jspb.BinaryReader): UpdateInstructorValidationResponse;
}

export namespace UpdateInstructorValidationResponse {
  export type AsObject = {
    instructor?: Instructor.AsObject;
  };
}

export class CountInstructorsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): CountInstructorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountInstructorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountInstructorsResponse): CountInstructorsResponse.AsObject;
  static serializeBinaryToWriter(message: CountInstructorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountInstructorsResponse;
  static deserializeBinaryFromReader(message: CountInstructorsResponse, reader: jspb.BinaryReader): CountInstructorsResponse;
}

export namespace CountInstructorsResponse {
  export type AsObject = {
    count: number;
  };
}

export class GetPublicInstructorRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetPublicInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicInstructorRequest): GetPublicInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: GetPublicInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicInstructorRequest;
  static deserializeBinaryFromReader(message: GetPublicInstructorRequest, reader: jspb.BinaryReader): GetPublicInstructorRequest;
}

export namespace GetPublicInstructorRequest {
  export type AsObject = {
    userId: number;
  };
}

export class PublicInstructor extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): PublicInstructor;

  getUsername(): string;
  setUsername(value: string): PublicInstructor;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): PublicInstructor;

  getSelfIntro(): string;
  setSelfIntro(value: string): PublicInstructor;

  getPrice(): number;
  setPrice(value: number): PublicInstructor;

  getStar(): number;
  setStar(value: number): PublicInstructor;

  getComeFrom(): string;
  setComeFrom(value: string): PublicInstructor;

  getBaseAt(): string;
  setBaseAt(value: string): PublicInstructor;

  getTotalReviews(): number;
  setTotalReviews(value: number): PublicInstructor;

  getMediaList(): Array<string>;
  setMediaList(value: Array<string>): PublicInstructor;
  clearMediaList(): PublicInstructor;
  addMedia(value: string, index?: number): PublicInstructor;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): PublicInstructor;
  clearTagsList(): PublicInstructor;
  addTags(value: string, index?: number): PublicInstructor;

  getActive(): boolean;
  setActive(value: boolean): PublicInstructor;

  getTotalTeached(): number;
  setTotalTeached(value: number): PublicInstructor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicInstructor.AsObject;
  static toObject(includeInstance: boolean, msg: PublicInstructor): PublicInstructor.AsObject;
  static serializeBinaryToWriter(message: PublicInstructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicInstructor;
  static deserializeBinaryFromReader(message: PublicInstructor, reader: jspb.BinaryReader): PublicInstructor;
}

export namespace PublicInstructor {
  export type AsObject = {
    userId: number;
    username: string;
    avatarUrl: string;
    selfIntro: string;
    price: number;
    star: number;
    comeFrom: string;
    baseAt: string;
    totalReviews: number;
    mediaList: Array<string>;
    tagsList: Array<string>;
    active: boolean;
    totalTeached: number;
  };
}

export class GetPublicInstructorResponse extends jspb.Message {
  getInstructor(): PublicInstructor | undefined;
  setInstructor(value?: PublicInstructor): GetPublicInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): GetPublicInstructorResponse;

  getCertificatesList(): Array<rpc_instructor_certificate_pb.Certificate>;
  setCertificatesList(value: Array<rpc_instructor_certificate_pb.Certificate>): GetPublicInstructorResponse;
  clearCertificatesList(): GetPublicInstructorResponse;
  addCertificates(value?: rpc_instructor_certificate_pb.Certificate, index?: number): rpc_instructor_certificate_pb.Certificate;

  getLanguagesList(): Array<language_pb.Language>;
  setLanguagesList(value: Array<language_pb.Language>): GetPublicInstructorResponse;
  clearLanguagesList(): GetPublicInstructorResponse;
  addLanguages(value?: language_pb.Language, index?: number): language_pb.Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicInstructorResponse): GetPublicInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicInstructorResponse;
  static deserializeBinaryFromReader(message: GetPublicInstructorResponse, reader: jspb.BinaryReader): GetPublicInstructorResponse;
}

export namespace GetPublicInstructorResponse {
  export type AsObject = {
    instructor?: PublicInstructor.AsObject;
    certificatesList: Array<rpc_instructor_certificate_pb.Certificate.AsObject>;
    languagesList: Array<language_pb.Language.AsObject>;
  };
}

export class ListInstructorsRequest extends jspb.Message {
  getSearchQuery(): string;
  setSearchQuery(value: string): ListInstructorsRequest;
  hasSearchQuery(): boolean;
  clearSearchQuery(): ListInstructorsRequest;

  getMinRating(): number;
  setMinRating(value: number): ListInstructorsRequest;
  hasMinRating(): boolean;
  clearMinRating(): ListInstructorsRequest;

  getMinPrice(): number;
  setMinPrice(value: number): ListInstructorsRequest;
  hasMinPrice(): boolean;
  clearMinPrice(): ListInstructorsRequest;

  getMaxPrice(): number;
  setMaxPrice(value: number): ListInstructorsRequest;
  hasMaxPrice(): boolean;
  clearMaxPrice(): ListInstructorsRequest;

  getCertificationTypesList(): Array<string>;
  setCertificationTypesList(value: Array<string>): ListInstructorsRequest;
  clearCertificationTypesList(): ListInstructorsRequest;
  addCertificationTypes(value: string, index?: number): ListInstructorsRequest;

  getLevelsList(): Array<number>;
  setLevelsList(value: Array<number>): ListInstructorsRequest;
  clearLevelsList(): ListInstructorsRequest;
  addLevels(value: number, index?: number): ListInstructorsRequest;

  getLimit(): number;
  setLimit(value: number): ListInstructorsRequest;

  getOffset(): number;
  setOffset(value: number): ListInstructorsRequest;

  getValidated(): boolean;
  setValidated(value: boolean): ListInstructorsRequest;
  hasValidated(): boolean;
  clearValidated(): ListInstructorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorsRequest): ListInstructorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstructorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorsRequest;
  static deserializeBinaryFromReader(message: ListInstructorsRequest, reader: jspb.BinaryReader): ListInstructorsRequest;
}

export namespace ListInstructorsRequest {
  export type AsObject = {
    searchQuery?: string;
    minRating?: number;
    minPrice?: number;
    maxPrice?: number;
    certificationTypesList: Array<string>;
    levelsList: Array<number>;
    limit: number;
    offset: number;
    validated?: boolean;
  };

  export enum SearchQueryCase {
    _SEARCH_QUERY_NOT_SET = 0,
    SEARCH_QUERY = 1,
  }

  export enum MinRatingCase {
    _MIN_RATING_NOT_SET = 0,
    MIN_RATING = 2,
  }

  export enum MinPriceCase {
    _MIN_PRICE_NOT_SET = 0,
    MIN_PRICE = 3,
  }

  export enum MaxPriceCase {
    _MAX_PRICE_NOT_SET = 0,
    MAX_PRICE = 4,
  }

  export enum ValidatedCase {
    _VALIDATED_NOT_SET = 0,
    VALIDATED = 9,
  }
}

export class ListInstructorsResponse extends jspb.Message {
  getDataList(): Array<InstructorRsp>;
  setDataList(value: Array<InstructorRsp>): ListInstructorsResponse;
  clearDataList(): ListInstructorsResponse;
  addData(value?: InstructorRsp, index?: number): InstructorRsp;

  getLimit(): number;
  setLimit(value: number): ListInstructorsResponse;

  getOffset(): number;
  setOffset(value: number): ListInstructorsResponse;

  getTotal(): number;
  setTotal(value: number): ListInstructorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorsResponse): ListInstructorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstructorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorsResponse;
  static deserializeBinaryFromReader(message: ListInstructorsResponse, reader: jspb.BinaryReader): ListInstructorsResponse;
}

export namespace ListInstructorsResponse {
  export type AsObject = {
    dataList: Array<InstructorRsp.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

