import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getSender(): number;
  setSender(value: number): Message;

  getReceiver(): number;
  setReceiver(value: number): Message;

  getMessage(): string;
  setMessage(value: string): Message;

  getType(): MessageType;
  setType(value: MessageType): Message;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): Message;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string;
    sender: number;
    receiver: number;
    message: string;
    type: MessageType;
    status: MessageStatus;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class SendMessageRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SendMessageRequest;

  getReceiver(): number;
  setReceiver(value: number): SendMessageRequest;

  getType(): MessageType;
  setType(value: MessageType): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    message: string;
    receiver: number;
    type: MessageType;
  };
}

export class GetAllMessagesRequest extends jspb.Message {
  getReceiver(): number;
  setReceiver(value: number): GetAllMessagesRequest;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): GetAllMessagesRequest;
  hasStatus(): boolean;
  clearStatus(): GetAllMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessagesRequest): GetAllMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessagesRequest;
  static deserializeBinaryFromReader(message: GetAllMessagesRequest, reader: jspb.BinaryReader): GetAllMessagesRequest;
}

export namespace GetAllMessagesRequest {
  export type AsObject = {
    receiver: number;
    status?: MessageStatus;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 2,
  }
}

export class GetAllMessagesResponse extends jspb.Message {
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): GetAllMessagesResponse;
  clearMessagesList(): GetAllMessagesResponse;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessagesResponse): GetAllMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessagesResponse;
  static deserializeBinaryFromReader(message: GetAllMessagesResponse, reader: jspb.BinaryReader): GetAllMessagesResponse;
}

export namespace GetAllMessagesResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>;
  };
}

export class UpdateMessageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMessageRequest;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): UpdateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMessageRequest): UpdateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMessageRequest;
  static deserializeBinaryFromReader(message: UpdateMessageRequest, reader: jspb.BinaryReader): UpdateMessageRequest;
}

export namespace UpdateMessageRequest {
  export type AsObject = {
    id: string;
    status: MessageStatus;
  };
}

export enum MessageType {
  MESSAGE_TYPE_INITIAL = 0,
  MESSAGE_TYPE_TEXT = 1,
  MESSAGE_TYPE_IMAGE = 2,
  MESSAGE_TYPE_VOICE = 3,
  MESSAGE_TYPE_FILE = 4,
  MESSAGE_TYPE_VIDEO = 5,
  MESSAGE_TYPE_SYSTEM = 6,
}
export enum MessageStatus {
  MESSAGE_STATUS_SENT = 0,
  MESSAGE_STATUS_DELIVERED = 1,
  MESSAGE_STATUS_FAILED = 2,
  MESSAGE_STATUS_READ = 3,
}
