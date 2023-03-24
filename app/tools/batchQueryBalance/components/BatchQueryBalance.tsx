'use client';

import {useState} from 'react';

import BatchQueryBalanceWallet from './BatchQueryBalanceWallet';
import BatchQueryBalanceChain from './BatchQueryBalanceChain';
import BatchQueryBalanceNode from './BatchQueryBalanceNode';
import BatchQueryBalanceThreads from './BatchQueryBalanceThreads';
import BatchQueryBalanceToken from './BatchQueryBalanceToken';
import BatchQueryBalanceMode from './BatchQueryBalanceMode';

export default function BatchQueryBalance() {
  return (
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
      <ul className="flex items-center space-x-[30px]">
        <li>
          已查询:
          <span className="ml-1.5 text-[24px] font-semibold">0 / 0</span>
        </li>
        <li>
          共:
          <span className="ml-1.5 text-[24px] font-semibold">0 BNB Smart Chain</span>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <button className="full_btn min-w-[200px] !font-normal">查询余额</button>
      </div>
    </div>
  );
}
