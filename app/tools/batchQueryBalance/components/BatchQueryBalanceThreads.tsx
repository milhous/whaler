import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {AddOutlined, RemoveOutlined} from '@mui/icons-material';

export default function BatchQueryBalanceThreads() {
  return (
    <div className="bqb-threads space-y-2">
      <h4 className="leading-[30.75px]">线程数</h4>
      <div className="flex justify-between space-x-2">
        <Button variant="outlined">
          <RemoveOutlined />
        </Button>
        <TextField className="bqb-threads_input w-full" type="number" size="small" />
        <Button variant="outlined">
          <AddOutlined />
        </Button>
      </div>
    </div>
  );
}
