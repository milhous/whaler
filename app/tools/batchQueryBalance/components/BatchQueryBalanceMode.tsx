'use client';

import {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

// 批量查询余额 - 查询模式
export default function BatchQueryBalanceMode() {
  const [alignment, setAlignment] = useState<string>('compatibility');

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string) => {
    setAlignment(newAlignment);
  };

  return (
    <div className="flex items-center">
      <div>
        <ToggleButtonGroup
          size="small"
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="mode"
        >
          <ToggleButton value="compatibility">兼容模式</ToggleButton>
          <ToggleButton value="speed">极速模式</ToggleButton>
        </ToggleButtonGroup>
      </div>
      <span className="ml-2.5 text-[14px]">兼容链多，查询速度较慢</span>
    </div>
  );
}
