import Assets from './assets';
import './index.scss';

export default function UIFooter() {
  return (
    <div className="ui-footer">
      <section className="container">
        <p>
          <Assets.IconRedHeart />
          <span>做喜欢的事，让喜欢的事有价值</span>
        </p>
        <ul>
          <li>
            <a href="#" target="_blank" title="Github">
              <Assets.IconGithubLight />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" title="Telegram">
              <Assets.IconTelegramLight />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" title="Twitter">
              <Assets.IconTwitterLight />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" title="Discord">
              <Assets.IconDiscordLight />
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
