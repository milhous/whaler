'use client';

import {useState} from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function BatchQueryBalanceWallet() {
  const [checked, setChecked] = useState([true, false]);

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  return (
    <div className="bqb-wallet">
      <div className="bqb-wallet_btns flex items-center space-x-2">
        <Button size="small" variant="contained" disableElevation>
          导入钱包
        </Button>
        <Button size="small" variant="outlined" disableElevation disabled>
          选中余额为0
        </Button>
        <Button size="small" variant="outlined" disableElevation>
          选中余额大于0
        </Button>
        <Button size="small" variant="outlined" disableElevation>
          反选
        </Button>
        <Button size="small" variant="outlined" disableElevation>
          导出选中
        </Button>
        <Button size="small" variant="contained" disableElevation color="error">
          删除选中
        </Button>
      </div>
      <div className="bqb-wallet_content">
        <ul className="mt-2 grid grid-cols-10 rounded-md bg-gray-light-100 py-2 px-4">
          <li className="col-span-4">
            <FormControlLabel
              label="钱包地址"
              control={
                <Checkbox
                  checked={checked[0] && checked[1]}
                  indeterminate={checked[0] !== checked[1]}
                  onChange={handleCheckAll}
                />
              }
            />
          </li>
          <li className="col-span-4">余额</li>
          <li>状态</li>
          <li>操作</li>
        </ul>
        <div className="bqb-wallet_list">
          <div className="flex h-[100px] items-center justify-center">请导入钱包</div>
        </div>
      </div>
    </div>
  );
}
