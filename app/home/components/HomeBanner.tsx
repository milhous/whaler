import Image from 'next/image';
import Link from 'next/link';

import Assets from '../assets/';
import './HomeBanner.scss';

export default function HomeBanner() {
  return (
    <section className="home-banner">
      <div>
        <dl>
          <dt>最好用的区块链工具箱</dt>
          <dd className="text_desc">巧妙处理，让复杂的区块链变简单! 精心准备几十款应用，您所需的区块链工具尽在 MCT</dd>
        </dl>
        <ul>
          <li>
            <Link className="full_btn" href={''}>
              开始使用
            </Link>
          </li>
          <li>
            <Link className="outline_btn" href={''}>
              提交需求或建议
            </Link>
          </li>
        </ul>
      </div>
      <Image
        className="home-banner_slogan w-[540px]"
        src={Assets.picBannerLight}
        alt="Bsports"
        width={Assets.picBannerLight.width}
        height={Assets.picBannerLight.height}
        priority
      />
    </section>
  );
}
