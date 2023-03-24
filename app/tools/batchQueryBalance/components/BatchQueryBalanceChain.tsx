'use client';

import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BatchQueryBalanceChain() {
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
    <div className="bqb-token space-y-2">
      <div className="flex items-center justify-between">
        <h4 className="leading-[30.75px]">选择链</h4>
        <Button size="small" variant="contained" disableElevation>
          添加自定义区块链
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
