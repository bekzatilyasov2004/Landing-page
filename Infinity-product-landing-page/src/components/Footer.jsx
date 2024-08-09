import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';


const Footer = () => {
  return (
    <div className='w-full mt-24 bg-gray-900 text-gray-300 py-2 px-2'>
      <div className='max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>Solutions</h6>
          <ul>
            <li className='py-1 hover:text-white cursor-pointer'>Team</li>
            <li className='py-1 hover:text-white cursor-pointer'>Methodologies</li>
            <li className='py-1 hover:text-white cursor-pointer'>Meetings</li>
            <li className='py-1 hover:text-white cursor-pointer'>Products</li>
            <li className='py-1 hover:text-white cursor-pointer'>Confrence</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Support</h6>
          <ul>
            <li className='py-1 hover:text-white cursor-pointer'>Pricing</li>
            <li className='py-1 hover:text-white cursor-pointer'>Documentation</li>
            <li className='py-1 hover:text-white cursor-pointer'>Versions</li>
            <li className='py-1 hover:text-white cursor-pointer'>Security</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Company</h6>
          <ul>
            <li className='py-1 hover:text-white cursor-pointer'>About</li>
            <li className='py-1 hover:text-white cursor-pointer'>Blog</li>
            <li className='py-1 hover:text-white cursor-pointer'>Careers</li>
            <li className='py-1 hover:text-white cursor-pointer'>News</li>
            <li className='py-1 hover:text-white cursor-pointer'>Partners</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Legal</h6>
          <ul>
            <li className='py-1 hover:text-white cursor-pointer'>Claims</li>
            <li className='py-1 hover:text-white cursor-pointer'>Privacy</li>
            <li className='py-1 hover:text-white cursor-pointer'>Terms</li>
            <li className='py-1 hover:text-white cursor-pointer'>Policies</li>
            <li className='py-1 hover:text-white cursor-pointer'>Conditions</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            Get our latest services and projects right in your inbox.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 hover:bg-white hover:text-gray-900 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
        <p className='py-4'>2024 Infinity, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook className='hover:bg-white hover:text-gray-900 hover:scale-105 duration-200 hover:rounded-full hover:border-none' />
          <FaInstagram className='hover:bg-white hover:text-gray-900 hover:scale-105 duration-200 hover:rounded-full hover:border-none'/>
          <FaTwitter className='hover:bg-white hover:text-gray-900 hover:scale-105 duration-200 hover:rounded-full hover:border-none'/>
          <TiSocialPinterest size={30} className='hover:bg-white hover:text-gray-900 hover:scale-105 duration-200 hover:rounded-full hover:border-none' />
        </div>
      </div>
    </div>
  );
};

export default Footer;