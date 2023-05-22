import React from 'react';
import FooterData from '../FooterData/FooterData'

const Footer = () => {

    const footer = [
        {

          name : "Company",
            id:1,
            A:"About",
            B:"work",
            C:"Latest News",
            D:"Careers"
        },
        {
            name : "Product",
            id:2,
              A:"prototype",
              B:"Plans&Pricing",
              C:"Customers",
              D:"Integrations"
          },
          {
            name : "Support",
            id:3,

              A:"Help Dest",
              B:"Sale",
              C:"Become a partner",
              D:"Developer"
          },
          {
            name : "Contact",
            id:4,
              A:"524@Brodaway,NCY",
              B:"01321068459",
              C:"",
              D:""
          }
    ]
    return (
        <div className='grid md:grid-cols-5 gap-10 bg-black text-white md:py-24 py-10 px-10 mt-10'>
            <div>
            <h1 className='text-4xl mb-5 font-bold text-yellow-400'>Daily Jobs</h1>
            <p>
            There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
            </p>
            <div>
                <span></span>
            </div>
            </div>
            
            {
                footer.map(footer =><FooterData key={footer.id} footer = {footer}></FooterData>)
            }
        </div>
    );
};

export default Footer;