import React from 'react';
import image1 from '@/public/images/khashayarmobarez.github.io_portfolio_(iPhone 14 Pro Max).png'
import image2 from '@/public/images/Screenshot 2023-11-08 213653.png'
import Image from 'next/image';


// the Image component by next do the size reducment and also doesn't download the picture until the users
// page is on the user display
const images = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <Image src={image1} alt='image' width={200} height={600} />
            <Image className=' border-2 border-white' src={image2} alt='image' width={200} height={600} />
        </div>
    );
};

export default images;