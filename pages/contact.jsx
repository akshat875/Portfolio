import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import BannerLayout from '../components/Common/BannerLayout';
import { HiMail, HiUser } from 'react-icons/hi';
import { BsChatTextFill } from 'react-icons/bs';
import Footer from '../components/Footer';
import { Modal } from 'antd';

const CAPTCHA_KEY = process.env.NEXT_PUBLIC_SECRET_KEY; // Make sure this is set in your .env file



const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [captchaToken, setCaptchaToken] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCaptcha = (value) => {
        console.log("Captcha value:", value);
        setCaptchaToken(value); // Set CAPTCHA token
        setIsButtonDisabled(false); // Enable button when CAPTCHA is completed
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaToken) {
            alert('Please complete the CAPTCHA.');
            return;
        }

        fetch('https://formspree.io/f/xkgwoevj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ ...formData, captchaToken }), // Include CAPTCHA token
        })
        .then(response => {
            if (response.ok) {
                setIsOpen(true);
                setFormData({ name: '', email: '', message: '' }); // Clear form fields
                setCaptchaToken(''); // Clear CAPTCHA token
                setIsButtonDisabled(true); // Disable button again after submission
            } else {
                alert('Failed to send message.');
            }
        })
        .catch(error => {
            alert('Failed to send message.');
            console.error(error);
        });
    };

    return (
        <BannerLayout>
            <div className="px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>India</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>Lucknow</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>akshatvishwakarma958@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>https://www.linkedin.com/in/akshat87a/</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+91 8299738240</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <form onSubmit={handleSubmit}>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input
                                        type="text"
                                        name="name"
                                        className="input_stylings"
                                        placeholder="Name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input
                                        type="email"
                                        name="email"
                                        className="input_stylings"
                                        placeholder="Email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea
                                        name="message"
                                        rows={6}
                                        cols={50}
                                        className="input_stylings"
                                        placeholder="Message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <ReCAPTCHA
                                    sitekey={CAPTCHA_KEY} // Ensure this is your actual reCAPTCHA site key
                                    onChange={handleCaptcha}
                                />
                            </div>

                            <div className="my-4">
                                <button 
                                    type="submit" 
                                    className="button" 
                                    disabled={isButtonDisabled} // Disable button based on state
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>Message Sent!</h1>
                    <p className='text-Snow'>Thank you for getting in touch. We will get back to you soon.</p>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>
    );
};

export default Contact;
