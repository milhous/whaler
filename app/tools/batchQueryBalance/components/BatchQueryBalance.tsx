'use client';

import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function BatchQueryBalance() {
  const [alignment, setAlignment] = useState('web');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="relative mx-auto mb-10 w-full px-5 md:rounded-2xl md:border md:border-solid md:border-gray md:py-6 md:shadow-md">
      <div className="flex items-center">
        <div>
          <ToggleButtonGroup color="primary" value={alignment} exclusive onChange={handleChange} aria-label="mode">
            <ToggleButton value="compatibility">兼容模式</ToggleButton>
            <ToggleButton value="speed">极速模式</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <span className="ml-2.5 text-[14px]">兼容链多，查询速度较慢</span>
      </div>
      <ul className="mt-[50px] flex items-center space-x-[30px]">
        <li>
          已查询:
          <span className="ml-1.5 text-[24px] font-semibold">0 / 0</span>
        </li>
        <li>
          共:
          <span className="ml-1.5 text-[24px] font-semibold">0 BNB Smart Chain</span>
        </li>
      </ul>
      <div className="mt-[20px] flex items-center justify-center">
        <button className="full_btn min-w-[200px] !font-normal">查询余额</button>
      </div>
    </div>
  );
}
