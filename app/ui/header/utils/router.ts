import {IHeaderLink} from '../types/header.d';
import Assets from '../assets';

// 服务
export const SERVICES: IHeaderLink[] = [
  {
    title: '科学家抢币',
    desc: '几十家去中心化交易所抢币, 速度超级快',
    icon: Assets.IconServicesAutoTrade,
    url: '',
  },
  {
    title: '预售抢购',
    desc: 'PinkSale/绿马/DxSale 等预售平台抢购',
    icon: Assets.IconServicesPresale,
    url: '',
  },
  {
    title: '交易加速/取消',
    desc: '交易卡链上的快速解决之道',
    icon: Assets.IconServicesTxSpeedUp,
    url: '',
  },
  {
    title: 'MCT VIP 节点',
    desc: 'MCT 高级定制专属节点, 多机房稳定快速',
    icon: Assets.IconServicesVipNode,
    url: '',
  },
  {
    title: '小狐狸助手',
    desc: '专用于 MetaMask 快速加新链/新币种',
    icon: Assets.IconServicesMetamaskHelper,
    url: '',
  },
  {
    title: 'ETH 单位换算',
    desc: '以太 Wei/Gwei/Ether 单位自动换算',
    icon: Assets.IconServicesConvert,
    url: '',
  },
  {
    title: '无常损失计算器',
    desc: 'Defi 流动性挖矿无常损失计算',
    icon: Assets.IconServicesImpermanentLoss,
    url: '',
  },
  {
    title: '杠杆挖矿收益计算',
    desc: '羊驼等杠杆挖矿平台收益强平计算器',
    icon: Assets.IconServicesLeverMining,
    url: '',
  },
  {
    title: 'aWSB 会员打赏',
    desc: '湾区 aWSB 会员专属打赏工具',
    icon: Assets.IconServicesWsbMember,
    url: '',
  },
  {
    title: 'Opensea 大师',
    desc: '设置价格, 自动购买 opensea 上的 NFT',
    icon: Assets.IconServicesOpenseaMaster,
    url: '',
  },
  {
    title: '代币授权',
    desc: '提前授权代币给合约, 加快抢购速度',
    icon: Assets.IconServicesCustomApproval,
    url: '',
  },
  {
    title: '代币授权查询',
    desc: '及时检查和取消过期或不信任的授权',
    icon: Assets.IconServicesApproval,
    url: '',
  },
  {
    title: '项目空投收集',
    desc: '给用户发放空投, 收集钱包地址',
    icon: Assets.IconServicesAirdrop,
    url: '',
  },
  {
    title: '钱包安全检测',
    desc: '检测钱包安全, 避免数字资产损失',
    icon: Assets.IconServicesWalletSafetyCheck,
    url: '',
  },
  {
    title: 'GAS 花费统计',
    desc: '你的钱包一共花了多少 GAS',
    icon: Assets.IconServicesGasSpent,
    url: '',
  },
  {
    title: 'Gas 加油站',
    desc: '要玩新链没GAS, 到这买点儿',
    icon: Assets.IconServicesGasStation,
    url: '',
  },
  {
    title: '节点测速',
    desc: '支持 ETH/BSC/MATIC 等节点速度测试',
    icon: Assets.IconServicesNodeSpeed,
    url: '',
  },
  {
    title: '付费专区',
    desc: '多款工具付费专享',
    icon: Assets.IconServicesVipChannel,
    url: '',
  },
];

// 菜单
export const NFT: IHeaderLink[] = [
  {
    title: 'FreeMint 工具',
    desc: '按区块实时监 NFT, 一键多钱包同时铸造',
    icon: Assets.IconNftFreeMint,
    url: '/nft/minting',
  },
  {
    title: 'NFT 抢购大师',
    desc: '最早且最稳定的 NFT 抢购机器人',
    icon: Assets.IconNftNftMaster,
    url: '',
  },
  {
    title: 'OS 扫地板G2',
    desc: '自动扫低价的 NFT 就是这么简单',
    icon: Assets.IconNftOpenseaTrader,
    url: '',
  },
  {
    title: 'NFT 地板价监控',
    desc: '轻松设置 NFT 价格报警通知',
    icon: Assets.IconNftFloorMonitor,
    url: '',
  },
  {
    title: '鲸鱼钱包监控',
    desc: 'NFT 交易实时通知推送',
    icon: Assets.IconNftNftMonitor,
    url: '',
  },
  {
    title: 'NFT 批量挂单',
    desc: '多个 NFT 挂单到多个交易市场，快人一步',
    icon: Assets.IconNftBatchSeller,
    url: '',
  },
  {
    title: 'NFT 授权',
    desc: 'NFT 提前授权给市场合约, 避免 GAS 高峰',
    icon: Assets.IconNftApproval,
    url: '',
  },
  {
    title: 'NFT 授权检查',
    desc: '查询钱包里的 NFT 都授权给了哪些合约',
    icon: Assets.IconNftChecker,
    url: '',
  },
  {
    title: 'ArtBlocks 项目预览',
    desc: '知名加密艺术项目 ArtBlock 提前预览',
    icon: Assets.IconNftArtBlockView,
    url: '',
  },
  {
    title: 'NFT 白名单交易',
    desc: '在这里出售/求购 NFT 白名单',
    icon: Assets.IconNftWhitelist,
    url: '',
  },
  {
    title: 'NFT 白名单中奖查询',
    desc: '参与了项目白名单抽奖, 在这快速查询',
    icon: Assets.IconNftWhitelistSearch,
    url: '',
  },
  {
    title: '收益分析/晒单',
    desc: '分享赚钱的快乐',
    icon: Assets.IconNftNftProfit,
    url: '',
  },
  {
    title: 'NFT 项目日历',
    desc: '即将上线的 NFT 项目日历',
    icon: Assets.IconNftNftCalendar,
    url: '',
  },
  {
    title: 'OS 批量挂单',
    desc: '把钱包里的图片快速在 Opensea 上挂出',
    icon: Assets.IconNftOpenseaSeller,
    url: '',
  },
  {
    title: 'NFT 批量发送',
    desc: '批量分发转移 NFT 到多个钱包',
    icon: Assets.IconNftMultisender,
    url: '',
  },
  {
    title: 'NFT 批量归集',
    desc: '将多个子钱包的 NFT 归集到主钱包',
    icon: Assets.IconNftNftCollection,
    url: '',
  },
];

// 批量工具
export const TOOLS: IHeaderLink[] = [
  {
    title: '批量发送代币',
    desc: '简单好用的批量分发转币工具',
    icon: Assets.IconToolsTokenSender,
    url: '/tools/tokenSender',
  },
  {
    title: '代币批量归集',
    desc: '将多个子钱包的代币低成本转到主钱包',
    icon: Assets.IconToolsCollection,
    url: '/tools/moreToOne',
  },
  {
    title: 'XEN 批量挖矿',
    desc: '只需使用一个钱包批量开采 XEN',
    icon: Assets.IconToolsXenBatchMint,
    url: '',
  },
  {
    title: 'XEN NFT 版批量挖矿',
    desc: '使用 NFT 来批量操作 XEN',
    icon: Assets.IconToolsXenNftBatchMint,
    url: '',
  },
  {
    title: 'NFT 批量发送',
    desc: '批量分发转移 NFT 到多个钱包',
    icon: Assets.IconToolsNftMultisender,
    url: '/tools/nftSender',
  },
  {
    title: 'NFT 批量归集',
    desc: '将多个子钱包的 NFT 归集到主钱包',
    icon: Assets.IconToolsNftCollection,
    url: '/tools/nftMoreToOne',
  },
  {
    title: '钱包多对多转账',
    desc: '将一批钱包中的代币转移到另一批钱包',
    icon: Assets.IconToolsMoreToMore,
    url: '',
  },
  {
    title: '批量查询余额',
    desc: '查查我这些钱包里还有多少资产',
    icon: Assets.IconToolsBatchQueryBalance,
    url: '/tools/batchQueryBalance',
  },
  {
    title: '批量生成钱包',
    desc: '点一下按钮, 安全生成 1000+ 的钱包地址',
    icon: Assets.IconToolsCreateWallet,
    url: '/tools/createWallet',
  },
  {
    title: '靓号生成',
    desc: '超吉利/多连号/生日号钱包地址生成',
    icon: Assets.IconToolsVanityAddressGenerator,
    url: '/tools/vanityGeneratorEth',
  },
  {
    title: 'Solana 批量归集',
    desc: 'Solana 链的钱包归集工具',
    icon: Assets.IconToolsSolmoretoone,
    url: '/tools/solanaMoreToOne',
  },
  {
    title: '多钱包批量授权',
    desc: '一次性为多个钱包批量授权',
    icon: Assets.IconToolsBatchApprove,
    url: '',
  },
];
