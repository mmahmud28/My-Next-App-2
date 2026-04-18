import Image from 'next/image';
import React from 'react';

const AboutPage= () => {
    return (
        <div>
           <Image src="/myimg.JPG" alt="Support" width={900} height={900} />

           <Image src="https://mmsoftware.top/Picture/MMahmud.png" unoptimized alt="Support" width={200} height={200} />
           
           
           <Image src="https://mmsoftware.top/Picture/MMahmud.png" unoptimized alt="Support" width={200} height={200} />


        </div>
    );
};

export default AboutPage;