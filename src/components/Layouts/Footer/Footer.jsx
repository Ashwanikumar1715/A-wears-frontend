import { useEffect, useState } from 'react';
import WorkIcon from '@mui/icons-material/Work';
import HelpIcon from '@mui/icons-material/Help';
import paymentMethods from '../../../assets/images/payment-methods.svg';
import { useLocation } from 'react-router-dom';

const footerLinks = [
  {
    title: "about",
    links: [
      {
        name: "Contact Us",
        redirect: "/",
      },
      {
        name: "About Us",
        redirect: "/",
      },
      
      {
        name: " Stories",
        redirect: "/",
      },
      {
        name: "News",
        redirect: "/",
      }
    ]
  },
  {
    title: "help",
    links: [
      {
        name: "Payments",
        redirect: "/",
      },
      {
        name: "Shipping",
        redirect: "/",
      },
      {
        name: "Cancellation & Returns",
        redirect: "/",
      }
    ]
  },
  {
    title: "policy",
    links: [
      {
        name: "Return Policy",
        redirect: "/",
      },
      {
        name: "Terms Of Use",
        redirect: "/",
      },
      {
        name: "Security",
        redirect: "/",
      },
      {
        name: "Privacy",
        redirect: "/",
      }
    ]
  },
  {
    title: "social",
    links: [
      {
        name: "Facebook",
        redirect: "/",
      },
      {
        name: "Twitter",
        redirect: "/",
      },
      {
        name: "YouTube",
        redirect: "/",
      }
    ]
  }
]

const Footer = () => {

  const location = useLocation();
  const [adminRoute, setAdminRoute] = useState(false);

  useEffect(() => {
    setAdminRoute(location.pathname.split("/", 2).includes("admin"))
  }, [location]);

  return (
    <>
      {!adminRoute && (
        <>
          <footer className="mt-20 w-full py-1 sm:py-4 px-10 sm:px-12 bg-[#586776] text-white text-[1rem] border-b border-gray-600 flex flex-col sm:flex-row overflow-hidden">
            <div className="w-full sm:w-12/12 flex flex-col sm:flex-row">

              {footerLinks.map((el, i) => (
                <div className="w-full sm:w-5/5 flex flex-col gap-2 my-3 sm:my-6 ml-20" key={i}>
                  <h2 className="text-[#192A56] mb-2 uppercase">{el.title}</h2>
                  {el.links.map((item, i) => (
                    <a href={item.redirect} target="_blank" rel="noreferrer" className="hover:underline" key={i}>{item.name}</a>
                  ))}

                </div>
              ))}

            </div>



          </footer>
          {/* <!-- footer ends --> */}

          <div className="px-16 py-6 w-full bg-primary-darkBlue  sm:flex justify-center items-center text-sm text-white">
            <a href="/" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <span ><WorkIcon sx={{ fontSize: "20px" }} /></span> E-mail Us
            </a>
            <span className='ml-5'>&copy; 2023-{new Date().getFullYear()} A-Wears</span>
           
          </div>
        </>
      )}
    </>
  )
};

export default Footer;
