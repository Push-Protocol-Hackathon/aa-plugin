import { IBiconomySmartAccount } from "@biconomy/account";
import { BaseValidationModule, IValidationModule } from "@biconomy/modules";

export interface IAccountAbstractionPluginConfig {
  bundlerUrl: string;
  paymasterUrl: string;
  defaultValidationModule: BaseValidationModule;
  entryPointAddress?: string;
}

export interface IAccountAbstractionModuleCreateConfig {
  moduleAddress?: string;
}

export interface ISmartAccount extends IBiconomySmartAccount {
  getPrivateKey(): string;
}

export interface IAccountAbstractionModuleFactory {
  create(opts: IAccountAbstractionModuleCreateConfig): IValidationModule;
}

export interface AccountAbstractionPlugin {
  constructor(opts: IAccountAbstractionPluginConfig): void;
  /**
   * @description creates a new signer account using `web3.eth.accounts.create()` and uses the signer to create a smart account
   * @returns ISmartAccount
   */
  createAccount(): Promise<ISmartAccount>;

  /**
   * @description creates a new signer from privateKey and uses the signer to create a smart account
   * @param privKey - private key to use when creating signer
   * @returns ISmartAccount
   */
  fromPrivateKey(privKey: string): Promise<ISmartAccount>;

  /**
   * @description extend the plugin further with EIP-6900 compatible modules
   * @param module - EIP-6900 compatible module
   */
  extend(module: IAccountAbstractionModuleFactory): void;
}
