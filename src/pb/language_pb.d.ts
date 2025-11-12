import * as jspb from 'google-protobuf'



export class Language extends jspb.Message {
  getId(): number;
  setId(value: number): Language;

  getCode(): string;
  setCode(value: string): Language;

  getName(): string;
  setName(value: string): Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Language.AsObject;
  static toObject(includeInstance: boolean, msg: Language): Language.AsObject;
  static serializeBinaryToWriter(message: Language, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Language;
  static deserializeBinaryFromReader(message: Language, reader: jspb.BinaryReader): Language;
}

export namespace Language {
  export type AsObject = {
    id: number;
    code: string;
    name: string;
  };
}

