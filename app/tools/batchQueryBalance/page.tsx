import BatchQueryBalance from './components/BatchQueryBalance';

export const metadata = {
  title: '批量查询余额',
};

export default function Page() {
  return (
    <main className="container">
      <section>
        <h3 className="my-10 text-center text-[24px] font-semibold">批量查询余额</h3>
        <BatchQueryBalance />
      </section>
    </main>
  );
}
