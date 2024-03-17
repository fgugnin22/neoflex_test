import { Link } from "react-router-dom";
import { ROUTES } from "../routes";

const Footer = () => {
  return (
    <div className=" mt-auto flex flex-col gap-6 w-full px-[29px] py-[29px] rounded-t-[30px] bg-white shadow-default md:justify-between md:h-[150px] md:flex-row">
      <h2 className="font-bold text-[25px] leading-[30.5px]">QPICK</h2>
      <nav className="flex justify-between w-full md:w-fit flex-col flex-wrap md:flex-nowrap max-h-[150px] md:flex-row md:gap-[100px] xl:gap-[170px]">
        <div className="flex flex-col gap-1 md:gap-2 w-2/5">
          <Link className=" text-[17px] font-normal" to={ROUTES.favorites}>
            Избранное
          </Link>
          <Link className=" text-[17px] font-normal" to={ROUTES.cart}>
            Корзина
          </Link>
          <a className=" text-[17px] font-normal" href="tel:+79999999999">
            Контакты
          </a>
        </div>
        <div className="h-[85px] flex flex-col justify-between w-2/5 ml-auto md:ml-unset">
          <a className=" text-[17px] font-normal" href="#">
            Условия сервиса
          </a>
          <div className="flex gap-2 md:gap-4">
            <img src="./lang.svg" alt="Choose language." />
            <p className=" text-[15px] font-bold text-price">Рус</p>
            <p className=" text-[15px] font-medium text-black">Eng</p>
          </div>
        </div>
      </nav>
      <nav className="flex gap-4 items-center mb-auto">
        <a href="https://vk.com/">
          <img src="./vk.svg" alt="Vk logo." />
        </a>
        <a href="https://web.telegram.org/">
          <img src="./telegram.svg" alt="Telegram logo" />
        </a>
        <a href="https://whatsapp.com/">
          <img src="./whatsapp.svg" alt="Whatsapp logo" />
        </a>
      </nav>
    </div>
  );
};

export default Footer;
