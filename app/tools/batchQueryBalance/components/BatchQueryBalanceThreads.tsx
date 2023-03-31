'use client';

import {ChangeEvent, useDeferredValue, useEffect, useState} from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AddOutlined, RemoveOutlined} from '@mui/icons-material';

// 线程数
export default function BatchQueryBalanceThreads() {
  const max = 10;
  const [nums, setNums] = useState<number>(1);
  const [subDisableState, setSubDisableState] = useState<boolean>(true);
  const [addDisableState, setAddDisableState] = useState<boolean>(false);
  const deferredNums = useDeferredValue(nums);

  // 减少
  const handleSub = () => {
    if (nums < 1) {
      return;
    }

    setNums(nums - 1);
  };

  // 增加
  const handleAdd = () => {
    if (nums + 1 > max) {
      return;
    }

    setNums(nums + 1);
  };

  // 改变
  const handleChange = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const val = Number(evt.target.value);

    if (Number.isNaN(val)) {
      return;
    }

    setNums(val);
  };

  // 移开
  const handleBlur = (evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let val = Number(evt.target.value);

    if (val < 1) {
      val = 1;
    } else if (val > max) {
      val = max;
    }

    setNums(val);
  };

  useEffect(() => {
    if (deferredNums <= 1) {
      setSubDisableState(true);
      setAddDisableState(false);
    } else if (deferredNums >= max) {
      setSubDisableState(false);
      setAddDisableState(true);
    } else {
      setSubDisableState(false);
      setAddDisableState(false);
    }
  }, [deferredNums]);

  return (
    <div className="bqb-threads space-y-2">
      <h4 className="leading-[30.75px]">线程数</h4>
      <div className="flex justify-between space-x-2">
        <Button variant="outlined" disabled={subDisableState} onClick={handleSub}>
          <RemoveOutlined />
        </Button>
        <TextField
          className="bqb-threads_input"
          fullWidth
          size="small"
          onChange={handleChange}
          onBlur={handleBlur}
          value={nums}
        />
        <Button variant="outlined" disabled={addDisableState} onClick={handleAdd}>
          <AddOutlined />
        </Button>
      </div>
    </div>
  );
}
