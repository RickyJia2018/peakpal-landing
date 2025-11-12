import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Review extends jspb.Message {
  getId(): number;
  setId(value: number): Review;

  getRevieweeId(): number;
  setRevieweeId(value: number): Review;

  getContent(): string;
  setContent(value: string): Review;

  getStar(): number;
  setStar(value: number): Review;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Review;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Review;

  getReviewerId(): number;
  setReviewerId(value: number): Review;

  getReviewerUsername(): string;
  setReviewerUsername(value: string): Review;

  getRevieweeUsername(): string;
  setRevieweeUsername(value: string): Review;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Review.AsObject;
  static toObject(includeInstance: boolean, msg: Review): Review.AsObject;
  static serializeBinaryToWriter(message: Review, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Review;
  static deserializeBinaryFromReader(message: Review, reader: jspb.BinaryReader): Review;
}

export namespace Review {
  export type AsObject = {
    id: number;
    revieweeId: number;
    content: string;
    star: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    reviewerId: number;
    reviewerUsername: string;
    revieweeUsername: string;
  };
}

export class ListReviewsRequest extends jspb.Message {
  getRevieweeId(): number;
  setRevieweeId(value: number): ListReviewsRequest;

  getLimit(): number;
  setLimit(value: number): ListReviewsRequest;

  getOffset(): number;
  setOffset(value: number): ListReviewsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsRequest): ListReviewsRequest.AsObject;
  static serializeBinaryToWriter(message: ListReviewsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsRequest;
  static deserializeBinaryFromReader(message: ListReviewsRequest, reader: jspb.BinaryReader): ListReviewsRequest;
}

export namespace ListReviewsRequest {
  export type AsObject = {
    revieweeId: number;
    limit: number;
    offset: number;
  };
}

export class ListReviewsResponse extends jspb.Message {
  getReviewsList(): Array<Review>;
  setReviewsList(value: Array<Review>): ListReviewsResponse;
  clearReviewsList(): ListReviewsResponse;
  addReviews(value?: Review, index?: number): Review;

  getLimit(): number;
  setLimit(value: number): ListReviewsResponse;

  getOffset(): number;
  setOffset(value: number): ListReviewsResponse;

  getTotal(): number;
  setTotal(value: number): ListReviewsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReviewsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReviewsResponse): ListReviewsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReviewsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReviewsResponse;
  static deserializeBinaryFromReader(message: ListReviewsResponse, reader: jspb.BinaryReader): ListReviewsResponse;
}

export namespace ListReviewsResponse {
  export type AsObject = {
    reviewsList: Array<Review.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

export class CreateReviewRequest extends jspb.Message {
  getRevieweeId(): number;
  setRevieweeId(value: number): CreateReviewRequest;

  getContent(): string;
  setContent(value: string): CreateReviewRequest;
  hasContent(): boolean;
  clearContent(): CreateReviewRequest;

  getStar(): number;
  setStar(value: number): CreateReviewRequest;

  getReviewerId(): number;
  setReviewerId(value: number): CreateReviewRequest;

  getRelatedId(): string;
  setRelatedId(value: string): CreateReviewRequest;

  getReviewType(): ReviewType;
  setReviewType(value: ReviewType): CreateReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReviewRequest): CreateReviewRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReviewRequest;
  static deserializeBinaryFromReader(message: CreateReviewRequest, reader: jspb.BinaryReader): CreateReviewRequest;
}

export namespace CreateReviewRequest {
  export type AsObject = {
    revieweeId: number;
    content?: string;
    star: number;
    reviewerId: number;
    relatedId: string;
    reviewType: ReviewType;
  };

  export enum ContentCase {
    _CONTENT_NOT_SET = 0,
    CONTENT = 2,
  }
}

export class DeleteReviewRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReviewRequest): DeleteReviewRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReviewRequest;
  static deserializeBinaryFromReader(message: DeleteReviewRequest, reader: jspb.BinaryReader): DeleteReviewRequest;
}

export namespace DeleteReviewRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetLessonReviewRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): GetLessonReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLessonReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLessonReviewRequest): GetLessonReviewRequest.AsObject;
  static serializeBinaryToWriter(message: GetLessonReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLessonReviewRequest;
  static deserializeBinaryFromReader(message: GetLessonReviewRequest, reader: jspb.BinaryReader): GetLessonReviewRequest;
}

export namespace GetLessonReviewRequest {
  export type AsObject = {
    lessonId: string;
  };
}

export class GetLessonReviewResponse extends jspb.Message {
  getReview(): Review | undefined;
  setReview(value?: Review): GetLessonReviewResponse;
  hasReview(): boolean;
  clearReview(): GetLessonReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLessonReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLessonReviewResponse): GetLessonReviewResponse.AsObject;
  static serializeBinaryToWriter(message: GetLessonReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLessonReviewResponse;
  static deserializeBinaryFromReader(message: GetLessonReviewResponse, reader: jspb.BinaryReader): GetLessonReviewResponse;
}

export namespace GetLessonReviewResponse {
  export type AsObject = {
    review?: Review.AsObject;
  };
}

export enum ReviewType {
  VIDEO_REVIEW_LESSON = 0,
}
