import Image from 'next/image';
import Link from 'next/link';

import Assets from '../assets';
import './HomeIntro.scss';

export default function HomeIntro() {
  return (
    <section className="home-intro">
      <div className="home-intro_content">
        <div>
          <h3>因为安全，所以安心</h3>
          <p>
            多年技术沉淀，保证您的资产安全。上线运营1年多无任何私钥泄漏，为您提供安全稳定保障!
            更有资产抢救工具，在用户遇到安全问题时快速转移链上资产，减少损失。
          </p>
          <Link className="text_hover" href={''}>
            试用安全工具 →
          </Link>
        </div>
        <Image
          src={Assets.picIntro1Light}
          alt="Bsports"
          width={Assets.picIntro1Light.width}
          height={Assets.picIntro1Light.height}
          priority
        />
      </div>
      <div className="home-intro_content !flex-col-reverse md:!flex-row">
        <Image
          src={Assets.picIntro2Light}
          alt="Bsports"
          width={Assets.picIntro2Light.width}
          height={Assets.picIntro2Light.height}
          priority
        />
        <div>
          <h3>免费试用+灵活的付费方式</h3>
          <p>
            MCT
            80%+工具产品均可免费试用，支持多链多币种付款方式，更可按月、季度、年度等不同时长订阅支付，满足您不同的使用场景;
          </p>
          <Link className="text_hover" href={''}>
            浏览价格表 →
          </Link>
        </div>
      </div>
      <div className="home-intro_content">
        <div>
          <h3>移动端支持</h3>
          <p>所有工具均基于真实用户需求开发，使用 MCT 手机 APP 随时随地管理钱包、查询关注信息、接收推送通知。</p>
          <Link className="text_hover" href={''}>
            下载手机 APP →
          </Link>
        </div>
        <Image
          src={Assets.picIntro3Light}
          alt="Bsports"
          width={Assets.picIntro3Light.width}
          height={Assets.picIntro3Light.height}
          priority
        />
      </div>
    </section>
  );
}
