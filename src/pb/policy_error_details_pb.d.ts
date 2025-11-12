import * as jspb from 'google-protobuf'

import * as rpc_policy_pb from './rpc_policy_pb'; // proto import: "rpc_policy.proto"


export class PolicyAcceptanceRequired extends jspb.Message {
  getRequiredPoliciesList(): Array<PolicyAcceptanceRequired.RequiredPolicyInfo>;
  setRequiredPoliciesList(value: Array<PolicyAcceptanceRequired.RequiredPolicyInfo>): PolicyAcceptanceRequired;
  clearRequiredPoliciesList(): PolicyAcceptanceRequired;
  addRequiredPolicies(value?: PolicyAcceptanceRequired.RequiredPolicyInfo, index?: number): PolicyAcceptanceRequired.RequiredPolicyInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyAcceptanceRequired.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyAcceptanceRequired): PolicyAcceptanceRequired.AsObject;
  static serializeBinaryToWriter(message: PolicyAcceptanceRequired, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyAcceptanceRequired;
  static deserializeBinaryFromReader(message: PolicyAcceptanceRequired, reader: jspb.BinaryReader): PolicyAcceptanceRequired;
}

export namespace PolicyAcceptanceRequired {
  export type AsObject = {
    requiredPoliciesList: Array<PolicyAcceptanceRequired.RequiredPolicyInfo.AsObject>;
  };

  export class RequiredPolicyInfo extends jspb.Message {
    getPolicyType(): rpc_policy_pb.PolicyType;
    setPolicyType(value: rpc_policy_pb.PolicyType): RequiredPolicyInfo;

    getVersion(): string;
    setVersion(value: string): RequiredPolicyInfo;

    getPolicyVersionId(): number;
    setPolicyVersionId(value: number): RequiredPolicyInfo;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RequiredPolicyInfo.AsObject;
    static toObject(includeInstance: boolean, msg: RequiredPolicyInfo): RequiredPolicyInfo.AsObject;
    static serializeBinaryToWriter(message: RequiredPolicyInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RequiredPolicyInfo;
    static deserializeBinaryFromReader(message: RequiredPolicyInfo, reader: jspb.BinaryReader): RequiredPolicyInfo;
  }

  export namespace RequiredPolicyInfo {
    export type AsObject = {
      policyType: rpc_policy_pb.PolicyType;
      version: string;
      policyVersionId: number;
    };
  }

}

