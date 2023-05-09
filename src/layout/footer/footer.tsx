import {Layout} from "antd";
import React from "react";

const { Footer } = Layout;
const FooterCustom = () => {

    return (
        <Footer
            style={{
                textAlign: 'center',
                background: '#ccc'
            }}
        >
            Kek Design ©2023 Created by Qrroll
        </Footer>
    )
}
export default FooterCustom