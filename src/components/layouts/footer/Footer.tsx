
import { IconBox, ImageView, Logo } from '@/components/common';
import LoginModal from '@/components/common/auth/LoginModal';
import Link from 'next/link';
import React, { useState } from 'react';


export function Footer() {
  const [showModal, setShowModal] = useState(false);
  return (
    <footer className='container mb-[68px] relative'>
     {showModal && <LoginModal />}
      
      <div onClick={()=>setShowModal(true)} className='mb-[68px]'>

        <div className="rounded-[6px] p-10 md:rounded-[14px] lg:rounded-[30px] bg-hero-pattern bg-[rgba(59,128,126,.2)] bg-opacity-20 bg-cover bg-top bg-no-repeat flex justify-between items-center my-[38px] relative">
          <div className="min-h-[160px] pl-3 pt-3 sm:pl-4 sm:pt4 md:pl-6 md:pt-6 lg:pl-10 lg:py-10 xl:pl-14 xl:py-14 2xl:py-[72px] 2xl:pl-[72px]">
            <h2 className="max-w-[60%] font-quickSand text-2xl sm:text-3xl md:text-2xl lg:text-5xl tracking-[-0.04%] text-[#1C4037]">Stay home & get your daily needs from our shop</h2>
            <div className="font-lato text-2xl tracking-[-0.04%] text-[#2B3D34] mt-8 hidden lg:block">Start Your Daily Sopping with Nest Mart</div>
          </div>
          <ImageView src={"/assets/images/Screenshot (76).png"} width={587} height={331} classname={"absolute bottom-0 right-0 sm:h-full w-[50%] hidden lg:flex "} alt={"Footer Banner"} />
          <ImageView src={"/assets/images/fresh-apple.png"} width={587} height={331} classname={"absolute bottom-0 right-0 sm:h-full w-[50%] flex lg:hidden "} alt={"Footer Banner"} />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className='flex flex-col md:flex-row justify-between gap-4.5'>
        <div className='max-w-[346px]'>
          <Logo />
          <div className='font-medium font-quickSand mt-4 lg:mt-6'>Pellentesque posuere orci lobortis</div>

          <div className='flex items-start gap-2.5 mt-4 lg:mt-6' >
            <IconBox icon={'icon-marker-brand'} size={16} />
            <div className='font-medium font-quickSand'><span className='font-bold'>Address:</span>5171 W Campbell Ave undefined Kent, Utah 53127 United States</div>
          </div>

          <div className='flex items-start gap-2.5 mt-4 lg:mt-6' >
            <IconBox icon={'icon-headset'} size={16} />
            <div className='font-medium font-quickSand'><span className='font-bold'>Call Us:</span>(+91) - 540-025-124553  </div>
          </div>

          <div className='flex items-start gap-2.5 mt-4 lg:mt-6' >
            <IconBox icon={'icon-paper-plane'} size={16} />
            <div className='font-medium font-quickSand'><span className='font-bold'>Email:</span> contact@nestmart.com  </div>
          </div>

          <div className='flex items-start gap-2.5 mt-4 lg:mt-6' >
            <IconBox icon={'icon-time-fast'} size={16} />
            <div className='font-medium font-quickSand'><span className='font-bold'>Hours:</span> 10:00 - 18:00, Mon - Sat  </div>
          </div>
           

        </div>

        <div >
          <div className='font-quickSand font-bold text-3xl text-[#253D4E]'>Company</div>
          <ul className='hidden md:flex flex-col gap-2.5'>
            <li className='font-quickSand text-base text-[#253D4E] mt-4 lg:mt-6'><Link href={'#'} />About Us</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Delivery Information</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Privacy Policy</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Terms & Conditions</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Contact Us</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Support Center</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Careers</li>
          </ul>

        </div>

        <div> 
          <div className='font-quickSand font-bold text-3xl text-[#253D4E]'>Information</div>
          <ul className='hidden md:flex flex-col gap-2.5'>
            <li className='font-quickSand text-base text-[#253D4E] mt-4 lg:mt-6'><Link href={'#'} />Search Terms</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Advanced Search</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Help & FAQ's</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Store Location</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Orders & Returns</li>
            <li className='font-quickSand text-base text-[#253D4E]'><Link href={'#'} />Feedback for us</li>
          </ul>

        </div>

        <div>
          <div className='font-quickSand font-bold text-3xl text-[#253D4E]'>App & Paymnent</div>
          <div className='text-sm font-quickSand mt-4 lg:mt-6 text-[#7E7E7E]'>Install NetMart App from App Store or Google Play</div>
          <div className='flex items-center justify-center gap-6 pt-4 lg:pt-5'>
            <Link href={"#"}>
              <ImageView src={"/assets/images/va724oeh 1.png"} width={129} height={39} alt={'app to download'} />

            </Link>
            <Link href={'#'}>
              <ImageView src={"/assets/images/17kw6njp 1.png"} width={129} height={39} alt={'app to download'} />
            </Link>
          </div>

          <div className='text-sm font-quickSand mt-4 lg:mt-6 text-[#7E7E7E]'>Secured Payment Gateways</div>
          <div className='flex items-center justify-center gap-6 pt-4 lg:pt-5'>
            <Link href={"#"}>
              <ImageView src={"/assets/images/payment-method 1.png"} width={225} height={33} alt={'app to download'} />
            </Link>
          </div>

        </div>

      </div>
    </footer>
  )
}
