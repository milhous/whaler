export default function BatchQueryBalanceResult() {
  return (
    <>
      <ul className="flex items-center space-x-[30px]">
        <li>
          已查询:
          <span className="ml-1.5 text-[24px] font-semibold">0 / 0</span>
        </li>
        <li>
          共:
          <span className="ml-1.5 text-[24px] font-semibold">0 BNB Smart Chain</span>
        </li>
      </ul>
      <div className="flex items-center justify-center">
        <button className="full_btn min-w-[200px] !font-normal">查询余额</button>
      </div>
    </>
  );
}
