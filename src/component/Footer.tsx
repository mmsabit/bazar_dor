import React from 'react';

const Footer = () => {
    return (
        <div className="bg-[#fafcfa]">
            <div className="flex lg:flex-row flex-col items-center lg:justify-between xl:max-w-7xl mx-auto w-full max-w-9/10 py-10 lg:text-[16px] text-[12px] text-[#5f6761] gap-5">
                <p className="lg:text-start text-center">
                    বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।
                </p>
                <p className="lg:text-end text-center">সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</p>
            </div>
        </div>
    );
};

export default Footer;