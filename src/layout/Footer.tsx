import { AppConfig } from '../utils/AppConfig';
import { FooterProps } from '../utils/types/global';
import classNames from 'clsx';

const Footer = ({ dark, children }: FooterProps) => {

  const colour = dark ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-900';

  if (children) return <>{children}</>

  return (
    <footer className={classNames(['footer', colour])}>
      <div className="text-center py-md">
        <span className="text-sm">{AppConfig.title} © Copyright {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default Footer;


{/* <a className="font-bold text-blue-600 dark:text-blue-400" href="#">@BakaTeam</a> */ }