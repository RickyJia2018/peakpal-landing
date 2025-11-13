import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class UploadedFile extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): UploadedFile;

  getUserId(): number;
  setUserId(value: number): UploadedFile;

  getFileSize(): number;
  setFileSize(value: number): UploadedFile;

  getFileType(): string;
  setFileType(value: string): UploadedFile;

  getFilePath(): string;
  setFilePath(value: string): UploadedFile;

  getCategory(): string;
  setCategory(value: string): UploadedFile;

  getInUse(): boolean;
  setInUse(value: boolean): UploadedFile;

  getBucketName(): string;
  setBucketName(value: string): UploadedFile;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UploadedFile;
  hasCreatedAt(): boolean;
  clearCreatedAt(): UploadedFile;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): UploadedFile;
  hasExpiredAt(): boolean;
  clearExpiredAt(): UploadedFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadedFile.AsObject;
  static toObject(includeInstance: boolean, msg: UploadedFile): UploadedFile.AsObject;
  static serializeBinaryToWriter(message: UploadedFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadedFile;
  static deserializeBinaryFromReader(message: UploadedFile, reader: jspb.BinaryReader): UploadedFile;
}

export namespace UploadedFile {
  export type AsObject = {
    fileName: string;
    userId: number;
    fileSize: number;
    fileType: string;
    filePath: string;
    category: string;
    inUse: boolean;
    bucketName: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class ConfirmUploadRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): ConfirmUploadRequest;

  getFileSize(): number;
  setFileSize(value: number): ConfirmUploadRequest;

  getFileType(): string;
  setFileType(value: string): ConfirmUploadRequest;

  getCategory(): string;
  setCategory(value: string): ConfirmUploadRequest;

  getIsPrivateFile(): boolean;
  setIsPrivateFile(value: boolean): ConfirmUploadRequest;

  getInUse(): boolean;
  setInUse(value: boolean): ConfirmUploadRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): ConfirmUploadRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): ConfirmUploadRequest;

  getFilePath(): string;
  setFilePath(value: string): ConfirmUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmUploadRequest): ConfirmUploadRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmUploadRequest;
  static deserializeBinaryFromReader(message: ConfirmUploadRequest, reader: jspb.BinaryReader): ConfirmUploadRequest;
}

export namespace ConfirmUploadRequest {
  export type AsObject = {
    fileName: string;
    fileSize: number;
    fileType: string;
    category: string;
    isPrivateFile: boolean;
    inUse: boolean;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    filePath: string;
  };
}

export class ConfirmUploadResponse extends jspb.Message {
  getUploadedFile(): UploadedFile | undefined;
  setUploadedFile(value?: UploadedFile): ConfirmUploadResponse;
  hasUploadedFile(): boolean;
  clearUploadedFile(): ConfirmUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmUploadResponse): ConfirmUploadResponse.AsObject;
  static serializeBinaryToWriter(message: ConfirmUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmUploadResponse;
  static deserializeBinaryFromReader(message: ConfirmUploadResponse, reader: jspb.BinaryReader): ConfirmUploadResponse;
}

export namespace ConfirmUploadResponse {
  export type AsObject = {
    uploadedFile?: UploadedFile.AsObject;
  };
}

export class GCSUploadPresignUrlRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): GCSUploadPresignUrlRequest;

  getFileType(): FileType;
  setFileType(value: FileType): GCSUploadPresignUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): GCSUploadPresignUrlRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): GCSUploadPresignUrlRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): GCSUploadPresignUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSUploadPresignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSUploadPresignUrlRequest): GCSUploadPresignUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GCSUploadPresignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSUploadPresignUrlRequest;
  static deserializeBinaryFromReader(message: GCSUploadPresignUrlRequest, reader: jspb.BinaryReader): GCSUploadPresignUrlRequest;
}

export namespace GCSUploadPresignUrlRequest {
  export type AsObject = {
    fileName: string;
    fileType: FileType;
    isPrivate: boolean;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class GCSUploadPresignUrlResponse extends jspb.Message {
  getPresignedUrl(): string;
  setPresignedUrl(value: string): GCSUploadPresignUrlResponse;

  getFileUrl(): string;
  setFileUrl(value: string): GCSUploadPresignUrlResponse;

  getMessage(): string;
  setMessage(value: string): GCSUploadPresignUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSUploadPresignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSUploadPresignUrlResponse): GCSUploadPresignUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GCSUploadPresignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSUploadPresignUrlResponse;
  static deserializeBinaryFromReader(message: GCSUploadPresignUrlResponse, reader: jspb.BinaryReader): GCSUploadPresignUrlResponse;
}

export namespace GCSUploadPresignUrlResponse {
  export type AsObject = {
    presignedUrl: string;
    fileUrl: string;
    message: string;
  };
}

export class GCSFetchPresignUrlRequest extends jspb.Message {
  getFileUrl(): string;
  setFileUrl(value: string): GCSFetchPresignUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): GCSFetchPresignUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSFetchPresignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSFetchPresignUrlRequest): GCSFetchPresignUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GCSFetchPresignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSFetchPresignUrlRequest;
  static deserializeBinaryFromReader(message: GCSFetchPresignUrlRequest, reader: jspb.BinaryReader): GCSFetchPresignUrlRequest;
}

export namespace GCSFetchPresignUrlRequest {
  export type AsObject = {
    fileUrl: string;
    isPrivate: boolean;
  };
}

export class GCSFetchPresignUrlResponse extends jspb.Message {
  getPresignedUrl(): string;
  setPresignedUrl(value: string): GCSFetchPresignUrlResponse;

  getMessage(): string;
  setMessage(value: string): GCSFetchPresignUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSFetchPresignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSFetchPresignUrlResponse): GCSFetchPresignUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GCSFetchPresignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSFetchPresignUrlResponse;
  static deserializeBinaryFromReader(message: GCSFetchPresignUrlResponse, reader: jspb.BinaryReader): GCSFetchPresignUrlResponse;
}

export namespace GCSFetchPresignUrlResponse {
  export type AsObject = {
    presignedUrl: string;
    message: string;
  };
}

export class FileInfo extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): FileInfo;

  getFileType(): string;
  setFileType(value: string): FileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    fileName: string;
    fileType: string;
  };
}

export class UploadFileRequest extends jspb.Message {
  getInfo(): FileInfo | undefined;
  setInfo(value?: FileInfo): UploadFileRequest;
  hasInfo(): boolean;
  clearInfo(): UploadFileRequest;

  getFileChunk(): Uint8Array | string;
  getFileChunk_asU8(): Uint8Array;
  getFileChunk_asB64(): string;
  setFileChunk(value: Uint8Array | string): UploadFileRequest;
  hasFileChunk(): boolean;
  clearFileChunk(): UploadFileRequest;

  getDataCase(): UploadFileRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileRequest): UploadFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileRequest;
  static deserializeBinaryFromReader(message: UploadFileRequest, reader: jspb.BinaryReader): UploadFileRequest;
}

export namespace UploadFileRequest {
  export type AsObject = {
    info?: FileInfo.AsObject;
    fileChunk?: Uint8Array | string;
  };

  export enum DataCase {
    DATA_NOT_SET = 0,
    INFO = 1,
    FILE_CHUNK = 2,
  }
}

export class UploadFileResponse extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): UploadFileResponse;

  getFileSize(): number;
  setFileSize(value: number): UploadFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileResponse): UploadFileResponse.AsObject;
  static serializeBinaryToWriter(message: UploadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileResponse;
  static deserializeBinaryFromReader(message: UploadFileResponse, reader: jspb.BinaryReader): UploadFileResponse;
}

export namespace UploadFileResponse {
  export type AsObject = {
    filePath: string;
    fileSize: number;
  };
}

export enum FileType {
  PERMANENT = 0,
  TEMPORARY = 1,
}
export enum FileVisibility {
  PUBLIC = 0,
  PRIVATE = 1,
}
