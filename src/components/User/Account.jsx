import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Layouts/Loader";
import MinCategory from "../Layouts/MinCategory";
import MetaData from "../Layouts/MetaData";

const Account = () => {
  const navigate = useNavigate();

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const getLastName = () => {
    const nameArray = user.name.split(" ");
    return nameArray[nameArray.length - 1];
  };

  return (
    <>
      <MetaData title="My Profile" />

      {loading ? (
        <Loader />
      ) : (
        <>
          <MinCategory />
          <main className="mx-2  mt-20  sm:mt-0">
            {/* <!-- row --> */}
            <div className="flex flex-row gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
              <Sidebar activeTab={"profile"} />

              {/* <!-- details column --> */}
              <div className="shadow-lg rounded-md flex-1 overflow-hidden shadow bg-white">
                {/* <!-- edit info container --> */}
                <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
                  {/* <!-- personal info --> */}
                  <div className="flex flex-col gap-5 items-start">
                    <span className="font-medium text-lg">
                      Personal Information{" "}
                      <Link
                        to="/account/update"
                        className="text-sm text-primary-blue font-medium ml-8 cursor-pointer"
                      >
                        Edit
                      </Link>
                    </span>

                    <div
                      className="flex flex-col md:flex-row items-center gap-3"
                      id="personalInputs"
                    >
                      <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={user.name.split(" ", 1)}
                          className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                          disabled
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={getLastName()}
                          className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                          disabled
                        />
                      </div>
                    </div>

                    {/* <!-- gender --> */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-sm">Your Gender</h2>
                      <div className="flex items-center gap-8" id="radioInput">
                        <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                          <input
                            type="radio"
                            name="gender"
                            checked={user.gender === "male"}
                            id="male"
                            className="h-4 w-4 cursor-not-allowed"
                            disabled
                          />
                          <label htmlFor="male" className="cursor-not-allowed">
                            Male
                          </label>
                        </div>
                        <div className="flex items-center gap-4 inputs text-gray-500 cursor-not-allowed">
                          <input
                            type="radio"
                            name="gender"
                            checked={user.gender === "female"}
                            id="female"
                            className="h-4 w-4 cursor-not-allowed"
                            disabled
                          />
                          <label
                            htmlFor="female"
                            className="cursor-not-allowed"
                          >
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <!-- gender --> */}
                  </div>
                  {/* <!-- personal info --> */}

                  {/* <!-- email address info --> */}
                  <div className="flex flex-col gap-5 items-start">
                    <span className="font-medium text-lg">
                      Email Address
                      <Link
                        to="/account/update"
                        className="text-sm text-primary-blue font-medium ml-3 sm:ml-8 cursor-pointer"
                      >
                        Edit
                      </Link>
                      <Link
                        to="/password/update"
                        className="text-sm text-primary-blue font-medium ml-3 sm:ml-8"
                      >
                        Change Password
                      </Link>
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          className="text-sm outline-none border-none cursor-not-allowed text-gray-500"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- email address info --> */}

                  {/* <!-- faqs --> */}
                  <div className="flex flex-col gap-4 mt-4">
                    <span className="font-medium text-lg mb-2">FAQs</span>

                    <h4 className="text-sm font-medium">
                      How do I track my A-Wears order?
                    </h4>
                    <p className="text-sm">
                      You can easily track your order by logging into your
                      A-Wears account and navigating to the "Order History"
                      section. There, you'll find real-time updates on the
                      status of your order.
                    </p>

                    <h4 className="text-sm font-medium">
                      What payment methods are accepted on A-Wears?
                    </h4>
                    <p className="text-sm">
                      A-Wears accepts various payment methods, including
                      credit/debit cards, net banking, and popular digital
                      wallets. You can choose the payment option that suits you
                      best during the checkout process.
                    </p>

                    <h4 className="text-sm font-medium">
                      Can I return an item if it doesn't fit or if I change my
                      mind?
                    </h4>
                    <p className="text-sm">
                      Yes, A-Wears offers a hassle-free return policy. If you're
                      not satisfied with your purchase or if the item doesn't
                      fit, you can initiate a return within a specified period.
                      Check our "Return Policy" for more details.
                    </p>

                    <h4 className="text-sm font-medium">
                      How can I contact A-Wears customer support?
                    </h4>
                    <p className="text-sm">
                      For any queries or assistance, you can reach out to our
                      customer support team through the "Contact Us" page on the
                      A-Wears website. We are available via email and live chat
                      to provide prompt help.
                    </p>

                    <h4 className="text-sm font-medium">
                      Are there any discounts or promotions available on
                      A-Wears?
                    </h4>
                    <p className="text-sm">
                      A-Wears regularly offers exciting discounts and promotions
                      on various products. Stay updated by subscribing to our
                      newsletter or visiting the "Offers" section to discover
                      the latest deals and exclusive offers.
                    </p>
                  </div>

                  {/* <!-- faqs --> */}

                  {/* <!-- deactivate account --> */}
                  <Link
                    className="text-sm text-primary-blue font-medium"
                    to="/"
                  >
                    Deactivate Account
                  </Link>
                  {/* <!-- deactivate account --> */}
                </div>
                {/* <!-- edit info container --> */}

               
              </div>
              {/* <!-- details column --> */}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Account;
