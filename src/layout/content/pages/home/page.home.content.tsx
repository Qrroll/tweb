import React from "react";
import {observer} from "mobx-react";
import {Image} from "antd";

const PageHomeContent: React.FC = observer(() => {
    const valueInLocalStorage = localStorage.getItem("key");
    console.log('kek:', valueInLocalStorage);
    return (
        <div style={{ width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',}}>
            <Image
                style={{ width: '100vh'}}
                src='https://downloader.disk.yandex.ru/preview/ac3e6c3dc74f38258e007c2d2205474915af4ca080855be0c3edc1bb587b07d6/645ae634/UwI43ycFOUsblUmQkE0Ue4ffjGYIl4IzTm4L9zg7SUDV3NJS6oz-H2dFFQvvKGPUHPh8Kn1yD_holLD_SGRF9g%3D%3D?uid=0&filename=2022-11-04%2009-57-08.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048'
                preview={false}
            />
        </div>
    )
})

export default PageHomeContent