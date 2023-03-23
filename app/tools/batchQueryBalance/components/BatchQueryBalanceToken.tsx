'use client';

import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';

// 批量查询余额 - 选择代币
export default function BatchQueryBalanceToken() {
  const [token, setToken] = useState<string>('ETH');
  const [open, setOpen] = useState(false);

  const handleChange = (event: SelectChangeEvent<typeof token>) => {
    setToken(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className="bqb-token col-span-2 space-y-2">
      <div className="flex items-center justify-between">
        <Button size="small" onClick={handleOpen}>
          选择代币
        </Button>
        <Button size="small" variant="contained" disableElevation>
          添加代币
        </Button>
      </div>
      <FormControl className="w-full">
        <Select
          id="bqb-token-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={token}
          onChange={handleChange}
          size="small"
        >
          <MenuItem value="ETH">ETH</MenuItem>
          <MenuItem value="USDT">USDT</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
