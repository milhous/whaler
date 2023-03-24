import TextField from '@mui/material/TextField';

export default function BatchQueryBalanceNode() {
  return (
    <div className="bqb-node col-span-2 space-y-2">
      <h4 className="leading-[30.75px]">线程数</h4>
      <div className="flex justify-between space-x-2">
        <TextField
          required
          id="bqb-node"
          className="bqb-node_input w-full"
          size="small"
          defaultValue="https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
        />
      </div>
    </div>
  );
}
