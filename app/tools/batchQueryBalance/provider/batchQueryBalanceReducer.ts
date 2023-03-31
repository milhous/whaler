import {Chains, ChainIDs} from '@libs/chains';

import {IBatchQueryBalanceAction, IBatchQueryBalanceData} from '../types/batchQueryBalance.d';

const defaultChain = Chains[ChainIDs.ETHEREUM_MAINNET];

/**
 * 事件类型
 * @property ADD_CHAIN 添加自定义区块链
 * @property ADD_TOKEN 添加自定义代币
 * @property SELECT_CHAIN 选择区块链
 * @property SELECT_TOKEN 选择代币
 * @property SWITCH_MODE 选择查询模式
 * @property MODIFY_RPC_URL 修改RPC地址
 * @property MODIFY_THREAD_NUMS 修改查询线程数
 * @property MODIFY_WALLET_NUMS 修改查询钱包数
 */
export const BatchQueryBalanceType = {
  ADD_CHAIN: 'BQB_ADD_CHAIN',
  ADD_TOKEN: 'BQB_ADD_TOKEN',
  SELECT_CHAIN: 'BQB_SELECT_CHAIN',
  SELECT_TOKEN: 'BQB_SELECT_TOKEN',
  SWITCH_MODE: 'BQB_SWITCH_MODE',
  MODIFY_RPC_URL: 'BQB_MODIFY_RPC_URL',
  MODIFY_THREAD_NUMS: 'BQB_MODIFY_THREAD_NUMS',
  MODIFY_WALLET_NUMS: 'BQB_MODIFY_WALLET_NUMS',
};

// 初始化状态
export const initialState: IBatchQueryBalanceData = {
  networkName: defaultChain.NETWORK_NAME,
  rpcUrl: defaultChain.RPC_URL[0],
  chainId: defaultChain.CHAIN_ID,
  tokenName: '',
  tokenAddress: '',
  queryMode: 0,
  threadNums: 1,
  walletNums: 1,
};

// BatchQueryBalance reducer
export const reducer = (state: IBatchQueryBalanceData, action: IBatchQueryBalanceAction): any => {
  switch (action.type) {
    case BatchQueryBalanceType.ADD_CHAIN: {
      const {networkName, rpcUrl, chainId} = action.payload;

      return {
        ...state,
        networkName,
        rpcUrl,
        chainId,
      };
    }
    case BatchQueryBalanceType.ADD_TOKEN: {
      const {tokenName, tokenAddress} = action.payload;

      return {
        ...state,
        tokenName,
        tokenAddress,
      };
    }
    case BatchQueryBalanceType.SELECT_CHAIN: {
      const {networkName, rpcUrl, chainId} = action.payload;

      return {
        ...state,
        networkName,
        rpcUrl,
        chainId,
      };
    }
    case BatchQueryBalanceType.SELECT_TOKEN: {
      const {tokenName, tokenAddress} = action.payload;

      return {
        ...state,
        tokenName,
        tokenAddress,
      };
    }
    case BatchQueryBalanceType.SWITCH_MODE: {
      const {queryMode} = action.payload;

      return {
        ...state,
        queryMode,
      };
    }
    case BatchQueryBalanceType.MODIFY_RPC_URL: {
      const {rpcUrl} = action.payload;

      return {
        ...state,
        rpcUrl,
      };
    }
    case BatchQueryBalanceType.MODIFY_THREAD_NUMS: {
      const {threadNums} = action.payload;

      return {
        ...state,
        threadNums,
      };
    }
    case BatchQueryBalanceType.MODIFY_WALLET_NUMS: {
      const {walletNums} = action.payload;

      return {
        ...state,
        walletNums,
      };
    }
    default:
      throw new Error('Unexpected action');
  }
};
