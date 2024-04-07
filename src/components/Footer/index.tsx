import email from "../../assets/social-svg/email.svg";
import instagram from "../../assets/social-svg/instagram.svg";
import telegram from "../../assets/social-svg/telegram.svg";

const Footer = () => {
  return (
    <footer className="mt-4 border-t border-purple-300 bg-bg-primary py-6">
      <div className="mx-auto flex max-w-[95%] flex-col items-center justify-between md:flex-row">
        <div className="mb-4 flex items-center md:mb-0">
          <p className="text-lg text-gray-400">
            &copy; {new Date().getFullYear()} disslogged. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://t.me//disslogged"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegram} className="w-7" alt="Telegram" />
          </a>
          <a
            href="https://www.instagram.com/disslogged"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagram} className="w-7" alt="Instagram" />
          </a>
          <a
            href="mailto:disslogged@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} className="w-7" alt="Email" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
