import Link from 'next/link';

import {IHeaderLink} from '../types/header.d';
import {SERVICES, NFT, TOOLS} from '../utils/router';
import Assets from '../assets';
import './HeaderSidebar.scss';

const HeaderSidebarItem = (props: {data: IHeaderLink}) => {
  const {data} = props;

  return (
    <li>
      <Link className="text_hover" href={data.url} title={data.title}>
        {data.icon !== '' && <data.icon />}
        <span>{data.title}</span>
      </Link>
    </li>
  );
};

// Header - Sidebar
export default function HeaderSidebar() {
  return (
    <>
      <input type="checkbox" id="ui-header_sidebar" className="hidden" />
      <div className="ui-header_sidebar md:hidden">
        <label className="text_hover" htmlFor="ui-header_sidebar">
          <Assets.IconSidebar />
        </label>
        <div className="ui-header_sidebar_modal md:hidden!">
          <div className="ui-header_sidebar_mask"></div>
          <div className="ui-header_sidebar_content">
            <div className="ui-header_sidebar_title">
              菜单
              <label htmlFor="ui-header_sidebar">
                <Assets.IconClose />
              </label>
            </div>
            <div className="ui-header_sidebar_list">
              <h3>工具和服务</h3>
              <ul>
                {SERVICES.map(item => (
                  <HeaderSidebarItem key={item.title} data={item} />
                ))}
              </ul>
              <h3>NFT</h3>
              <ul>
                {NFT.map(item => (
                  <HeaderSidebarItem key={item.title} data={item} />
                ))}
              </ul>
              <h3>批量工具</h3>
              <ul>
                {TOOLS.map(item => (
                  <HeaderSidebarItem key={item.title} data={item} />
                ))}
              </ul>
            </div>
            <p>
              <Link className="text_hover" href="" title="查看所有工具">
                查看所有工具 →
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
