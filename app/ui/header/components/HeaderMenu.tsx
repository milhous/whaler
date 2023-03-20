import Link from 'next/link';

import {IHeaderMenu} from '../types/header.d';

import './HeaderMenu.scss';

const HeaderMenuItem = (props: {data: IHeaderMenu}) => {
  const {data} = props;

  return (
    <li>
      <Link href={data.url} title={data.title}>
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
export default function HeaderMenu(props: {data: IHeaderMenu[]; type: string}) {
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
