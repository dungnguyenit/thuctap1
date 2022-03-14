import React from 'react';
import { Image } from 'antd';
import '../../style/title.scss'

function Title(props) {
    return (
        <div className='title'>
            <div className='title_text'>
               <h1>Project title</h1>
               <p> Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
               Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
               Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.

               </p>
            </div>
            <div className='title_img'>
                <Image
                    width={300}
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
            </div>
        </div>
    );
}

export default Title;