/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace UserContract {
  export type UserStruct = {
    id: string;
    name: string;
    email: string;
    postalAddress: string;
    username: string;
  };

  export type UserStructOutput = [
    id: string,
    name: string,
    email: string,
    postalAddress: string,
    username: string
  ] & {
    id: string;
    name: string;
    email: string;
    postalAddress: string;
    username: string;
  };
}

export interface UserContractInterface extends Interface {
  getFunction(
    nameOrSignature: "getUser" | "setUser" | "users"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "UserUpdated"): EventFragment;

  encodeFunctionData(
    functionFragment: "getUser",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setUser",
    values: [string, string, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "users", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "getUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setUser", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "users", data: BytesLike): Result;
}

export namespace UserUpdatedEvent {
  export type InputTuple = [
    userAddress: AddressLike,
    id: string,
    name: string,
    email: string,
    postalAddress: string,
    username: string
  ];
  export type OutputTuple = [
    userAddress: string,
    id: string,
    name: string,
    email: string,
    postalAddress: string,
    username: string
  ];
  export interface OutputObject {
    userAddress: string;
    id: string;
    name: string;
    email: string;
    postalAddress: string;
    username: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface UserContract extends BaseContract {
  connect(runner?: ContractRunner | null): UserContract;
  waitForDeployment(): Promise<this>;

  interface: UserContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  getUser: TypedContractMethod<
    [userAddress: AddressLike],
    [UserContract.UserStructOutput],
    "view"
  >;

  setUser: TypedContractMethod<
    [
      id: string,
      name: string,
      email: string,
      postalAddress: string,
      username: string
    ],
    [void],
    "nonpayable"
  >;

  users: TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, string, string, string, string] & {
        id: string;
        name: string;
        email: string;
        postalAddress: string;
        username: string;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getUser"
  ): TypedContractMethod<
    [userAddress: AddressLike],
    [UserContract.UserStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "setUser"
  ): TypedContractMethod<
    [
      id: string,
      name: string,
      email: string,
      postalAddress: string,
      username: string
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "users"
  ): TypedContractMethod<
    [arg0: AddressLike],
    [
      [string, string, string, string, string] & {
        id: string;
        name: string;
        email: string;
        postalAddress: string;
        username: string;
      }
    ],
    "view"
  >;

  getEvent(
    key: "UserUpdated"
  ): TypedContractEvent<
    UserUpdatedEvent.InputTuple,
    UserUpdatedEvent.OutputTuple,
    UserUpdatedEvent.OutputObject
  >;

  filters: {
    "UserUpdated(address,string,string,string,string,string)": TypedContractEvent<
      UserUpdatedEvent.InputTuple,
      UserUpdatedEvent.OutputTuple,
      UserUpdatedEvent.OutputObject
    >;
    UserUpdated: TypedContractEvent<
      UserUpdatedEvent.InputTuple,
      UserUpdatedEvent.OutputTuple,
      UserUpdatedEvent.OutputObject
    >;
  };
}
