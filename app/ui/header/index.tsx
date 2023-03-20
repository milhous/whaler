import Image from 'next/image';
import Link from 'next/link';

import HeaderMenu from './components/HeaderMenu';
import {SERVICES, NFT, TOOLS} from './utils/router';
import Assets from './assets';
import './index.scss';

// UI - Header
export default function UIHeader() {
  return (
    <header className="ui-header">
      <Link className="ui-header_logo" href="/" title="Whale">
        <Image
          src={Assets.iconLogo}
          alt="Whale"
          width={Assets.iconLogo.width}
          height={Assets.iconLogo.height}
          priority
        />
      </Link>
      <nav>
        <div className="text_hover group relative">
          <div className="ui-header_nav">
            <Assets.IconMenu className="h-4.5 w-4.5" />
            <i className="ivu-icon ivu-icon-ios-arrow-down group-hover:rotate-180"></i>
          </div>
          <HeaderMenu data={SERVICES} type="services" />
        </div>
        <div className="text_hover group relative">
          <div className="ui-header_nav">
            <span>NFT</span>
            <i className="ivu-icon ivu-icon-ios-arrow-down group-hover:rotate-180"></i>
          </div>
          <HeaderMenu type="nft" data={NFT} />
        </div>
        <Link className="text_hover" href="#" title="实时 GAS">
          实时 GAS
        </Link>
        <div className="text_hover group relative">
          <div className="ui-header_nav">
            <span>批量工具</span>
            <i className="ivu-icon ivu-icon-ios-arrow-down group-hover:rotate-180"></i>
          </div>
          <HeaderMenu data={TOOLS} type="tools" />
        </div>
        <Link className="text_hover" href="#" title="区块导航">
          区块导航
        </Link>
      </nav>
      <div className="ui-header_tools">
        <Link href="#" title="App Download">
          <Assets.IconAppDownload />
        </Link>
        <button>
          <Assets.IconWallet />
        </button>
      </div>
    </header>
  );
}
