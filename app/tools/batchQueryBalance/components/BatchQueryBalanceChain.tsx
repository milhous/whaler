'use client';

import {useEffect, useState} from 'react';
import {JsonRpcProvider} from 'ethers';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';

import Icons from '@assets/images/icons';
import {Chains} from '@libs/chains';

import {useBatchQueryBalance} from '../provider/BatchQueryBalanceProvider';
import {BatchQueryBalanceType} from '../provider/batchQueryBalanceReducer';

// 检测 JSON-RPC 是否有效
const checkJsonRpcValidity = async (jsonRpcUrl: string) => {
  const provider = new JsonRpcProvider(jsonRpcUrl);

  try {
    await provider.send('eth_chainId', []);
    // 如果执行到这里，说明该 JSON-RPC 请求合法
    console.log('该 JSON-RPC 请求合法');
  } catch (error) {
    console.error('该 JSON-RPC 请求不合法', error);
  }
};

const ChainItem = (props: {chainId: string}) => {
  const {chainId} = props;
  const data = Chains[chainId];
  const Icon = !!Icons[data.SYMBOL] ? Icons[data.SYMBOL] : Icons.GENERIC;

  return (
    <div className="flex h-full w-full items-center">
      <Icon className="min-w-5 mr-2 h-5 w-5" />
      <span>{data.NETWORK_NAME}</span>
    </div>
  );
};

export default function BatchQueryBalanceChain() {
  const {state, dispatch} = useBatchQueryBalance();
  const [chainId, setChainId] = useState<number>(state.chainId);
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof chainId>) => {
    setChainId(Number(event.target.value));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    const data = Chains[chainId];

    dispatch({
      type: BatchQueryBalanceType.SELECT_CHAIN,
      payload: {
        networkName: data.NETWORK_NAME,
        rpcUrl: data.RPC_URL[0],
        chainId: data.CHAIN_ID,
      },
    });
  }, [chainId]);

  return (
    <div className="bqb-chain space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="leading-[30.75px]">选择链</h4>
        <Button size="small" variant="outlined" disableElevation>
          添加自定义区块链
        </Button>
      </div>
      <FormControl className="w-full">
        <Select
          id="bqb-token-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={chainId}
          onChange={handleChange}
          size="small"
        >
          {Object.keys(Chains).map(item => (
            <MenuItem value={item} key={item}>
              <ChainItem chainId={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
