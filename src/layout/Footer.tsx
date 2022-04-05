import { AppConfig } from '../utils/AppConfig';
import { FooterProps } from '../utils/types/global';
import classNames from 'clsx';

const Footer = ({ classes, children }: FooterProps) => {
  if (children) return <>{children}</>

  return (
    <footer className={classNames(['footer', classes])}>
      <div className="text-center py-md lg:pb-lg">
        <span className="text-sm">{AppConfig.title} © Copyright {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;


{/* <a className="font-bold text-blue-600 dark:text-blue-400" href="#">@BakaTeam</a> */ }