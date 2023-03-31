import {BatchQueryBalanceProvider} from '../provider/BatchQueryBalanceProvider';

import BatchQueryBalanceWallet from './BatchQueryBalanceWallet';
import BatchQueryBalanceChain from './BatchQueryBalanceChain';
import BatchQueryBalanceNode from './BatchQueryBalanceNode';
import BatchQueryBalanceThreads from './BatchQueryBalanceThreads';
import BatchQueryBalanceToken from './BatchQueryBalanceToken';
import BatchQueryBalanceMode from './BatchQueryBalanceMode';
import BatchQueryBalanceResult from './BatchQueryBalanceResult';

export default function BatchQueryBalance() {
  return (
    <BatchQueryBalanceProvider>
      <div className="relative mx-auto mb-10 w-full space-y-5 px-5 md:rounded-2xl md:border md:border-solid md:border-gray md:py-6 md:shadow-md">
        <BatchQueryBalanceWallet />
        <div className="grid grid-cols-3 gap-x-5">
          <BatchQueryBalanceChain />
          <BatchQueryBalanceNode />
        </div>
        <div className="grid grid-cols-3 gap-x-5">
          <BatchQueryBalanceThreads />
          <BatchQueryBalanceToken />
        </div>
        <BatchQueryBalanceMode />
        <BatchQueryBalanceResult />
      </div>
    </BatchQueryBalanceProvider>
  );
}
