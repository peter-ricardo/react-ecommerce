import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import menuService from '../../services/menu';
import { IMenu } from '../../types/menu';
import address from '../../assets/footer/address.svg';
import email from '../../assets/footer/email.svg';
import phone from '../../assets/footer/phone.svg';
import socialFacebook from '../../assets/footer/socialFacebook.svg';
import socialLinkedin from '../../assets/footer/socialLinkedin.svg';
import socialTwitter from '../../assets/footer/socialTwitter.svg';
import socialYoutube from '../../assets/footer/socialYoutube.svg';

function Footer(): JSX.Element {
  const [footerMenuLinks, setFooterMenuLinks] = useState<IMenu[]>([]);

  const fetchFooterLinks = (): void => {
    const data = menuService.getFooterLinks();
    setFooterMenuLinks(data);
  };

  useEffect(() => {
    fetchFooterLinks();
  }, []);

  return (
    <div className="bg-grey-dark pt-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row pb-9 lg:pb-3">
        <div className="flex flex-col lg:flex-row flex-1 justify-between">
          {footerMenuLinks?.map((menu) => {
            return (
              <div className="flex flex-col pt-8 lg:pt-0">
                <p className="subtitle-footer font-bold">{menu.name}</p>
                {menu.links.map((link) => (
                  <Link
                    to={link.path}
                    className="subtitle-footer hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
        <div className="flex flex-col items-start lg:justify-center pt-8 lg:pt-0 lg:ml-36 relative">
          <p className="description text-white">Subscribe Newsletter</p>
          <div className="pb-12 lg:pb-0">
            <input
              className="border border-grey-normal rounded-l px-4 py-2 text-smoke"
              placeholder="Enter your email address"
            />
            <button type="button" className="btn-blue-dark">
              <p className="text-white">Submit</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full border-b border-b-grey-divisor" />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between pb-4 pt-3">
        <div className="pt-8 lg:pt-0">
          <div className="flex">
            <img src={phone} alt="" className="pr-4" />
            <p className="description text-white">1800 420 0707</p>
          </div>
          <div className="flex pt-3">
            <img src={email} alt="" className="pr-4" />
            <p className="description text-white">customercare@company.com</p>
          </div>
        </div>
        <div className="pt-3 lg:pt-0">
          <div className="flex">
            <img src={address} alt="" className="pr-4" />
            <p className="description text-white">Address line 1</p>
          </div>
          <div className="flex pt-1">
            <p className="description text-white pl-7">Address line 2</p>
          </div>
        </div>
        <div className="flex pt-4">
          <img src={socialFacebook} alt="" className="mr-2 w-7 h-7" />
          <img src={socialYoutube} alt="" className="mr-2 w-7 h-7" />
          <img src={socialLinkedin} alt="" className="mr-2 w-7 h-7" />
          <img src={socialTwitter} alt="" className="w-7 h-7" />
        </div>
      </div>
      <div className="bg-smoke flex justify-center items-center">
        <p className="description py-3">
          Copyrights © 2022 Company Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
