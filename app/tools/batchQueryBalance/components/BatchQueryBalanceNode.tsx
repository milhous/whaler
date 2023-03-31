'use client';

import TextField from '@mui/material/TextField';

import {useBatchQueryBalance} from '../provider/BatchQueryBalanceProvider';

export default function BatchQueryBalanceNode() {
  const {state} = useBatchQueryBalance();

  return (
    <div className="bqb-node col-span-2 space-y-2">
      <h4 className="leading-[30.75px]">节点</h4>
      <div className="flex justify-between space-x-2">
        <TextField required id="bqb-node" className="bqb-node_input w-full" size="small" value={state.rpcUrl} />
      </div>
    </div>
  );
}
