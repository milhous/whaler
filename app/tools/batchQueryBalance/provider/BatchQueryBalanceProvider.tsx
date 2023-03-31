'use client';

import React, {createContext, useReducer, useContext, useMemo} from 'react';

import {IBatchQueryBalanceAction, IBatchQueryBalanceData} from '../types/batchQueryBalance.d';
import {reducer, initialState} from './batchQueryBalanceReducer';

/**
 * 声明
 * @param {IPromotionsReducerState} state 状态
 * @param {function} dispatch 分发函数
 */
interface IBatchQueryBalanceContextProps {
  state: IBatchQueryBalanceData;
  dispatch: React.Dispatch<IBatchQueryBalanceAction>;
}

const CountContext = createContext({} as IBatchQueryBalanceContextProps);

// BatchQueryBalance Provider
export function BatchQueryBalanceProvider({children}: {children: React.ReactNode}): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => {
    return {state, dispatch};
  }, [state, dispatch]);

  return <CountContext.Provider value={contextValue}>{children}</CountContext.Provider>;
}

// BatchQueryBalance Hook
export const useBatchQueryBalance = () => {
  const contextValue = useContext(CountContext);

  return contextValue;
};
