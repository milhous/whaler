import Link from 'next/link';

import Assets from '../assets/';
import './HomeTools.scss';

// 工具列表
const toolsList = [
  {
    title: 'NFT 项目日历',
    desc: '精选全网即将上线的 NFT 项目, 热门项目早知晓',
    icon: Assets.IconNftCalendarLight,
    url: '',
  },
  {
    title: 'FreeMint 工具',
    desc: '一键多钱包 Mint，设置跟随钱包自动批量跟单',
    icon: Assets.IconFreeMintLight,
    url: '',
  },
  {
    title: '批量发送代币',
    desc: '只需几秒，批量发送 Token 到上千钱包。省时省力!',
    icon: Assets.IconTokenSenderLight,
    url: '/tools/tokenSender',
  },
  {
    title: '科学家抢币',
    desc: '去中心化交易所抢币，支持0区块买入，自动挂单快速卖出',
    icon: Assets.IconAutoTradeLight,
    url: '',
  },
  {
    title: 'NFT 批量挂单',
    desc: '多个 NFT 一键挂单，快人一步',
    icon: Assets.IconBatchSellerLight,
    url: '',
  },
  {
    title: '钱包安全检测',
    desc: '自动检测，排除钱包代币、NFT 等授权安全隐患',
    icon: Assets.IconWalletSafetyCheckLight,
    url: '',
  },
  {
    title: 'NFT 批量归集',
    desc: '多钱包归集 NFT 到主钱包，速度快、节省 GAS 费用',
    icon: Assets.IconNftCollectionLight,
    url: '/tools/nftMoreToOne',
  },
  {
    title: '鲸鱼钱包监控',
    desc: '自定义钱包监控，代币转入转出、NFT 交易实时通知推送',
    icon: Assets.IconNftMonitorLight,
    url: '',
  },
];

export default function HomeTools() {
  return (
    <section className="home-tools">
      <h3>热门工具推荐</h3>
      <p className="text_desc line_bot">近期最常用的工具适于用所有 EVM 兼容链，立即试试看吧!</p>
      <ul>
        {toolsList.map(item => (
          <li key={item.title} className="group">
            <Link href={item.url}>
              <item.icon />
              <dl>
                <dt className="group-hover:text-yellow">{item.title}</dt>
                <dd className="text_desc">{item.desc}</dd>
              </dl>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <Link className="full_btn px-[30px]" href={''}>
          查看所有工具
          <i className="ivu-icon ivu-icon-md-arrow-round-forward ml-1"></i>
        </Link>
      </div>
    </section>
  );
}
