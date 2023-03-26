'use client';

import {useEffect, useState} from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AddOutlined, RemoveOutlined} from '@mui/icons-material';

// 线程数
export default function BatchQueryBalanceThreads() {
  const max = 20;
  const [nums, setNums] = useState<number>(1);
  const [subDisableState, setSubDisableState] = useState<boolean>(true);
  const [addDisableState, setAddDisableState] = useState<boolean>(false);

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

  useEffect(() => {
    if (nums <= 1) {
      setSubDisableState(true);
    } else if (nums >= max) {
      setAddDisableState(true);
    } else {
      setSubDisableState(false);
      setAddDisableState(false);
    }
  }, [nums]);

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
          onChange={evt => {
            console.log(evt.target.value);
          }}
          value={nums}
        />
        <Button variant="outlined" disabled={addDisableState} onClick={handleAdd}>
          <AddOutlined />
        </Button>
      </div>
    </div>
  );
}
