import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Mastercard from '../../assets/Mastercard.png';
import visa from '../../assets/visa.svg';
import PayPal from '../../assets/PayPal.png';
import Tabby from '../../assets/Tabby.png';
import Tamara from '../../assets/Tamara.png';


export default function Checkout() {
    const [selectedMethod, setSelectedMethod] = useState(null);
    const [expandedBranch, setExpandedBranch] = useState(null);

    const paymentMethods = ["Mastercard", "VISA", "PayPal", "Tabby", "Tamara"];

    function handleHeight(index) {
        console.log("Index clicked:", index);
        setExpandedBranch(expandedBranch === index ? null : index);
    }
    const paymentMethodslogos = [
        { name: "Mastercard", logo: Mastercard},
        { name: "Visa", logo: visa },
        { name: "PayPal", logo: PayPal },
        { name: "Tabby", logo: Tabby },
        { name: "Tamara", logo: Tamara }
    ];

    return (
        <div className="container m-auto pt-16 ">
            <div className="flex flex-wrap justify-between">
                {/* Checkout Section */}
                <div className="w-full md:w-5/12 mt-28 mb-6 mx-7">
                    <h1 className="text-3xl font-semibold mb-4 text-[#192E4D]">Checkout</h1>
                    <div className="relative z-0 mb-5 group w-full">
                        <input
                            type="text"
                            name="floating_first_name"
                            id="floating_first_name_1"
                            className="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_first_name_1"
                            className="peer-focus:font-medium absolute text-lg ps-4 text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                        >
                            National Identity
                        </label>
                    </div>

                    <h1 className="text-3xl font-semibold mb-8 pt-6 text-[#192E4D]">Payment methods</h1>

                    <div>
                        {paymentMethodslogos.map((method, index) => (
                            <div key={index}>
                                <div className="flex items-center text-2xl mb-4">
                                    <input
                                        id={`checkbox-${index}`}
                                        type="radio"
                                        name="payment"
                                        value={method.name}
                                        checked={selectedMethod === method.name}
                                        onChange={() => setSelectedMethod(method.name)}
                                        className="w-4 h-4 text-[#2A4E84] border-[#2A4E84] rounded-full focus:ring-[#2A4E84] p-3 focus:ring-2"
                                    />
                                    <div className="flex items-center">
                                        {/* Display Logo */}
                                        
                                        <img src={method.logo} alt={method.name} className="ms-6 w-[50px] h-[50px]" />
                                      
                                        <label htmlFor={`checkbox-${index}`} className="ms-2 text-gray-900">
                                            {method.name}
                                        </label>
                                    </div>
                                </div>

                                {/* Show additional fields if this method is selected */}
                                {selectedMethod === method.name && (
                                    <div className="max-h-[203px] transition-all duration-700 overflow-hidden">
                                        <div className="relative z-0 mb-5 group w-[8/12]">
                                            <input
                                                type="text"
                                                name={`floating_card_number_${index}`}
                                                id={`floating_card_number_${index}`}
                                                className="block pt-5 w-full text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                                                placeholder=" "
                                                required
                                            />
                                            <label
                                                htmlFor={`floating_card_number_${index}`}
                                                className="peer-focus:font-medium absolute text-lg ps-4 text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                                            >
                                                Card Number
                                            </label>
                                        </div>
                                        {/* Additional fields for expiry date and CVC */}
                                        <div className="flex gap-5">
                                            <div className="relative z-0 mb-5 group w-full">
                                                <input
                                                    type="text"
                                                    name={`floating_expiry_date_${index}`}
                                                    id={`floating_expiry_date_${index}`}
                                                    className="w-full block pt-5 text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label
                                                    htmlFor={`floating_expiry_date_${index}`}
                                                    className="peer-focus:font-medium absolute text-lg ps-4 text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                                                >
                                                    Expiry Date
                                                </label>
                                            </div>
                                            <div className="relative z-0 mb-5 group w-full">
                                                <input
                                                    type="text"
                                                    name={`floating_cvc_${index}`}
                                                    id={`floating_cvc_${index}`}
                                                    className="w-full block pt-5 text-sm text-gray-900 bg-transparent rounded-2xl border-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#2A4E84] peer"
                                                    placeholder=" "
                                                    required
                                                />
                                                <label
                                                    htmlFor={`floating_cvc_${index}`}
                                                    className="peer-focus:font-medium absolute text-lg ps-4 text-gray-500 duration-300 transform -translate-y-3 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3"
                                                >
                                                    CVC/CVV
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Order Summary Section */}
                <div className="w-full md:w-5/12 me-11 sm:bg-[#ECF1F9] bg-white  text-[#192E4D] pt-28 pb-52">
                    <div className="container m-auto">
                        <h1 className="text-3xl font-bold mb-4 text-[#192E4D] mx-14">Order summary</h1>
                        <div className="flex mx-14 leading-relaxed justify-between text-2xl pb-6 border-[#192E4D] border-b-2">
                            <ul>
                                <li className="text-start">Original price:</li>
                                <li className="text-start">Discount:</li>
                            </ul>
                            <ul>
                                <li className="text-start">345 SAR</li>
                                <li className="text-start">0 SAR</li>
                            </ul>
                        </div>
                        <div>
                            <ul className="flex mx-14 pt-3 leading-relaxed justify-between text-2xl">
                                <li>Total:</li>
                                <li>345 SAR</li>
                            </ul>
                        </div>
                        <p className="text-center mx-14 mt-6">
                            By completing your purchase, you agree to our Terms of Use and Privacy Policy.
                        </p>
                        <div className="mx-14 mt-4">
                            <Link to={'/Payment'}>
                                <button type="submit" className="text-white duration-[0.5s] border-2 border-[#2A4E84] bg-[#2A4E84] hover:text-[#2A4E84] hover:bg-[#ECF1F9] mb-4 font-medium rounded-2xl w-full px-5 py-3 text-center text-xl">
                                    Enroll Now
                                </button>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

