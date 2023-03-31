/**
 * 声明 - Action
 * @param {string} tpye 类型
 * @param {string} payload 数据
 */
export interface IBatchQueryBalanceAction {
  type: string;
  payload: Partial<IBatchQueryBalanceData>;
}

/**
 * 声明 - 批量查询数据
 * @property {string} networkName 网络名称
 * @property {string} rpcUrl RPC地址
 * @property {number} chainId 区块链ID
 * @property {string} tokenName token名称
 * @property {string} tokenAddress token地址
 * @property {number} queryMode 查询模式 0：线程查询（默认）1：钱包查询
 * @property {number} threadNums 线程数
 * @property {number} walletNums 钱包数
 */
export interface IBatchQueryBalanceData {
  networkName: string;
  rpcUrl: string;
  chainId: number;
  tokenName: string;
  tokenAddress: string;
  queryMode: number;
  threadNums: number;
  walletNums: number;
}
