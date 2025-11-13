import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as rpc_review_pb from './rpc_review_pb'; // proto import: "rpc_review.proto"


export class Lesson extends jspb.Message {
  getId(): string;
  setId(value: string): Lesson;

  getStudentId(): number;
  setStudentId(value: number): Lesson;

  getInstructorId(): number;
  setInstructorId(value: number): Lesson;

  getStatus(): LessonStatus;
  setStatus(value: LessonStatus): Lesson;

  getPrice(): number;
  setPrice(value: number): Lesson;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Lesson;

  getApprovedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setApprovedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasApprovedAt(): boolean;
  clearApprovedAt(): Lesson;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasCompletedAt(): boolean;
  clearCompletedAt(): Lesson;

  getVideoUrl(): string;
  setVideoUrl(value: string): Lesson;

  getCommentsList(): Array<LessonComment>;
  setCommentsList(value: Array<LessonComment>): Lesson;
  clearCommentsList(): Lesson;
  addComments(value?: LessonComment, index?: number): LessonComment;

  getLanguageId(): number;
  setLanguageId(value: number): Lesson;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lesson.AsObject;
  static toObject(includeInstance: boolean, msg: Lesson): Lesson.AsObject;
  static serializeBinaryToWriter(message: Lesson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lesson;
  static deserializeBinaryFromReader(message: Lesson, reader: jspb.BinaryReader): Lesson;
}

export namespace Lesson {
  export type AsObject = {
    id: string;
    studentId: number;
    instructorId: number;
    status: LessonStatus;
    price: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    approvedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    videoUrl: string;
    commentsList: Array<LessonComment.AsObject>;
    languageId: number;
  };
}

export class LessonComment extends jspb.Message {
  getId(): string;
  setId(value: string): LessonComment;

  getLessonId(): string;
  setLessonId(value: string): LessonComment;

  getSenderId(): number;
  setSenderId(value: number): LessonComment;

  getSenderType(): LessonCommentSenderType;
  setSenderType(value: LessonCommentSenderType): LessonComment;

  getContent(): string;
  setContent(value: string): LessonComment;

  getMediaUrl(): string;
  setMediaUrl(value: string): LessonComment;
  hasMediaUrl(): boolean;
  clearMediaUrl(): LessonComment;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LessonComment;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LessonComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LessonComment.AsObject;
  static toObject(includeInstance: boolean, msg: LessonComment): LessonComment.AsObject;
  static serializeBinaryToWriter(message: LessonComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LessonComment;
  static deserializeBinaryFromReader(message: LessonComment, reader: jspb.BinaryReader): LessonComment;
}

export namespace LessonComment {
  export type AsObject = {
    id: string;
    lessonId: string;
    senderId: number;
    senderType: LessonCommentSenderType;
    content: string;
    mediaUrl?: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum MediaUrlCase {
    _MEDIA_URL_NOT_SET = 0,
    MEDIA_URL = 6,
  }
}

export class GetLessonRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLessonRequest): GetLessonRequest.AsObject;
  static serializeBinaryToWriter(message: GetLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLessonRequest;
  static deserializeBinaryFromReader(message: GetLessonRequest, reader: jspb.BinaryReader): GetLessonRequest;
}

export namespace GetLessonRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetLessonResponse extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): GetLessonResponse;
  hasLesson(): boolean;
  clearLesson(): GetLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLessonResponse): GetLessonResponse.AsObject;
  static serializeBinaryToWriter(message: GetLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLessonResponse;
  static deserializeBinaryFromReader(message: GetLessonResponse, reader: jspb.BinaryReader): GetLessonResponse;
}

export namespace GetLessonResponse {
  export type AsObject = {
    lesson?: Lesson.AsObject;
  };
}

export class CreateLessonRequest extends jspb.Message {
  getStudentId(): number;
  setStudentId(value: number): CreateLessonRequest;

  getInstructorId(): number;
  setInstructorId(value: number): CreateLessonRequest;

  getPrice(): number;
  setPrice(value: number): CreateLessonRequest;

  getVideoUrl(): string;
  setVideoUrl(value: string): CreateLessonRequest;
  hasVideoUrl(): boolean;
  clearVideoUrl(): CreateLessonRequest;

  getLanguageId(): number;
  setLanguageId(value: number): CreateLessonRequest;

  getMessage(): string;
  setMessage(value: string): CreateLessonRequest;
  hasMessage(): boolean;
  clearMessage(): CreateLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonRequest): CreateLessonRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonRequest;
  static deserializeBinaryFromReader(message: CreateLessonRequest, reader: jspb.BinaryReader): CreateLessonRequest;
}

export namespace CreateLessonRequest {
  export type AsObject = {
    studentId: number;
    instructorId: number;
    price: number;
    videoUrl?: string;
    languageId: number;
    message?: string;
  };

  export enum VideoUrlCase {
    _VIDEO_URL_NOT_SET = 0,
    VIDEO_URL = 4,
  }

  export enum MessageCase {
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 6,
  }
}

export class CreateLessonResponse extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): CreateLessonResponse;
  hasLesson(): boolean;
  clearLesson(): CreateLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonResponse): CreateLessonResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonResponse;
  static deserializeBinaryFromReader(message: CreateLessonResponse, reader: jspb.BinaryReader): CreateLessonResponse;
}

export namespace CreateLessonResponse {
  export type AsObject = {
    lesson?: Lesson.AsObject;
  };
}

export class UpdateLessonRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateLessonRequest;

  getNewStatus(): LessonStatus;
  setNewStatus(value: LessonStatus): UpdateLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLessonRequest): UpdateLessonRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLessonRequest;
  static deserializeBinaryFromReader(message: UpdateLessonRequest, reader: jspb.BinaryReader): UpdateLessonRequest;
}

export namespace UpdateLessonRequest {
  export type AsObject = {
    id: string;
    newStatus: LessonStatus;
  };
}

export class UpdateLessonResponse extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): UpdateLessonResponse;
  hasLesson(): boolean;
  clearLesson(): UpdateLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLessonResponse): UpdateLessonResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLessonResponse;
  static deserializeBinaryFromReader(message: UpdateLessonResponse, reader: jspb.BinaryReader): UpdateLessonResponse;
}

export namespace UpdateLessonResponse {
  export type AsObject = {
    lesson?: Lesson.AsObject;
  };
}

export class ListLessonRequest extends jspb.Message {
  getStudentId(): number;
  setStudentId(value: number): ListLessonRequest;
  hasStudentId(): boolean;
  clearStudentId(): ListLessonRequest;

  getInstructorId(): number;
  setInstructorId(value: number): ListLessonRequest;
  hasInstructorId(): boolean;
  clearInstructorId(): ListLessonRequest;

  getOffset(): number;
  setOffset(value: number): ListLessonRequest;
  hasOffset(): boolean;
  clearOffset(): ListLessonRequest;

  getLimit(): number;
  setLimit(value: number): ListLessonRequest;
  hasLimit(): boolean;
  clearLimit(): ListLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonRequest): ListLessonRequest.AsObject;
  static serializeBinaryToWriter(message: ListLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonRequest;
  static deserializeBinaryFromReader(message: ListLessonRequest, reader: jspb.BinaryReader): ListLessonRequest;
}

export namespace ListLessonRequest {
  export type AsObject = {
    studentId?: number;
    instructorId?: number;
    offset?: number;
    limit?: number;
  };

  export enum StudentIdCase {
    _STUDENT_ID_NOT_SET = 0,
    STUDENT_ID = 1,
  }

  export enum InstructorIdCase {
    _INSTRUCTOR_ID_NOT_SET = 0,
    INSTRUCTOR_ID = 2,
  }

  export enum OffsetCase {
    _OFFSET_NOT_SET = 0,
    OFFSET = 3,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 4,
  }
}

export class LessonData extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): LessonData;
  hasLesson(): boolean;
  clearLesson(): LessonData;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): LessonData;
  hasUser(): boolean;
  clearUser(): LessonData;

  getReview(): rpc_review_pb.Review | undefined;
  setReview(value?: rpc_review_pb.Review): LessonData;
  hasReview(): boolean;
  clearReview(): LessonData;

  getLessonCommentsList(): Array<LessonComment>;
  setLessonCommentsList(value: Array<LessonComment>): LessonData;
  clearLessonCommentsList(): LessonData;
  addLessonComments(value?: LessonComment, index?: number): LessonComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LessonData.AsObject;
  static toObject(includeInstance: boolean, msg: LessonData): LessonData.AsObject;
  static serializeBinaryToWriter(message: LessonData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LessonData;
  static deserializeBinaryFromReader(message: LessonData, reader: jspb.BinaryReader): LessonData;
}

export namespace LessonData {
  export type AsObject = {
    lesson?: Lesson.AsObject;
    user?: user_pb.User.AsObject;
    review?: rpc_review_pb.Review.AsObject;
    lessonCommentsList: Array<LessonComment.AsObject>;
  };
}

export class ListLessonResponse extends jspb.Message {
  getDataList(): Array<LessonData>;
  setDataList(value: Array<LessonData>): ListLessonResponse;
  clearDataList(): ListLessonResponse;
  addData(value?: LessonData, index?: number): LessonData;

  getTotalCount(): number;
  setTotalCount(value: number): ListLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonResponse): ListLessonResponse.AsObject;
  static serializeBinaryToWriter(message: ListLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonResponse;
  static deserializeBinaryFromReader(message: ListLessonResponse, reader: jspb.BinaryReader): ListLessonResponse;
}

export namespace ListLessonResponse {
  export type AsObject = {
    dataList: Array<LessonData.AsObject>;
    totalCount: number;
  };
}

export class CreateLessonCommentRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): CreateLessonCommentRequest;

  getContent(): string;
  setContent(value: string): CreateLessonCommentRequest;

  getMediaUrl(): string;
  setMediaUrl(value: string): CreateLessonCommentRequest;
  hasMediaUrl(): boolean;
  clearMediaUrl(): CreateLessonCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonCommentRequest): CreateLessonCommentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLessonCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonCommentRequest;
  static deserializeBinaryFromReader(message: CreateLessonCommentRequest, reader: jspb.BinaryReader): CreateLessonCommentRequest;
}

export namespace CreateLessonCommentRequest {
  export type AsObject = {
    lessonId: string;
    content: string;
    mediaUrl?: string;
  };

  export enum MediaUrlCase {
    _MEDIA_URL_NOT_SET = 0,
    MEDIA_URL = 3,
  }
}

export class CreateLessonCommentResponse extends jspb.Message {
  getLessonComment(): LessonComment | undefined;
  setLessonComment(value?: LessonComment): CreateLessonCommentResponse;
  hasLessonComment(): boolean;
  clearLessonComment(): CreateLessonCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonCommentResponse): CreateLessonCommentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLessonCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonCommentResponse;
  static deserializeBinaryFromReader(message: CreateLessonCommentResponse, reader: jspb.BinaryReader): CreateLessonCommentResponse;
}

export namespace CreateLessonCommentResponse {
  export type AsObject = {
    lessonComment?: LessonComment.AsObject;
  };
}

export class ListLessonCommentsRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): ListLessonCommentsRequest;

  getOffset(): number;
  setOffset(value: number): ListLessonCommentsRequest;
  hasOffset(): boolean;
  clearOffset(): ListLessonCommentsRequest;

  getLimit(): number;
  setLimit(value: number): ListLessonCommentsRequest;
  hasLimit(): boolean;
  clearLimit(): ListLessonCommentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonCommentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonCommentsRequest): ListLessonCommentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLessonCommentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonCommentsRequest;
  static deserializeBinaryFromReader(message: ListLessonCommentsRequest, reader: jspb.BinaryReader): ListLessonCommentsRequest;
}

export namespace ListLessonCommentsRequest {
  export type AsObject = {
    lessonId: string;
    offset?: number;
    limit?: number;
  };

  export enum OffsetCase {
    _OFFSET_NOT_SET = 0,
    OFFSET = 2,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 3,
  }
}

export class ListLessonCommentsResponse extends jspb.Message {
  getLessonCommentsList(): Array<LessonComment>;
  setLessonCommentsList(value: Array<LessonComment>): ListLessonCommentsResponse;
  clearLessonCommentsList(): ListLessonCommentsResponse;
  addLessonComments(value?: LessonComment, index?: number): LessonComment;

  getTotalCount(): number;
  setTotalCount(value: number): ListLessonCommentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonCommentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonCommentsResponse): ListLessonCommentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLessonCommentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonCommentsResponse;
  static deserializeBinaryFromReader(message: ListLessonCommentsResponse, reader: jspb.BinaryReader): ListLessonCommentsResponse;
}

export namespace ListLessonCommentsResponse {
  export type AsObject = {
    lessonCommentsList: Array<LessonComment.AsObject>;
    totalCount: number;
  };
}

export enum LessonStatus {
  REQUESTED = 0,
  APPROVED = 1,
  FINISHED = 2,
  AUDITING = 3,
  COMPLETED = 4,
  CANCELLED = 5,
  REJECTED = 6,
  REFUND = 7,
}
export enum LessonCommentSenderType {
  LESSON_COMMENT_SENDER_TYPE_UNSPECIFIED = 0,
  LESSON_COMMENT_SENDER_TYPE_STUDENT = 1,
  LESSON_COMMENT_SENDER_TYPE_INSTRUCTOR = 2,
}
