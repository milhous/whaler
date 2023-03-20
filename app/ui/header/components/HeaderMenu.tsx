import Link from 'next/link';

import {IHeaderLink} from '../types/header.d';
import Assets from '../assets';
import './HeaderMenu.scss';

const HeaderMenuItem = (props: {data: IHeaderLink}) => {
  const {data} = props;

  return (
    <li>
      <Link href={data.url} title={data.title}>
        {data.icon !== '' && <data.icon />}
        <dl>
          <dt>{data.title}</dt>
          <dd>{data.desc}</dd>
        </dl>
        <i className="ivu-icon ivu-icon-md-arrow-forward"></i>
      </Link>
    </li>
  );
};

// Header - Menu
export default function HeaderMenu(props: {data: IHeaderLink[]; type: string}) {
  const {data, type} = props;

  return (
    <div className={`ui-header_menu ui-header_menu_${type} group-hover:block`}>
      <ul>
        {data.map(item => (
          <HeaderMenuItem key={item.title} data={item} />
        ))}
      </ul>
      <i className="ui-header_menu_trigon"></i>
    </div>
  );
}
