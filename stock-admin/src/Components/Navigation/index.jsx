import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { nav_struct } from "./structure";
import { useState } from "react";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(true);
    return <div className="navigation">
        <div className="navigation-top">
            <div className="navigation-top-left"></div>
            <div className="navigation-top-right" onClick={()=>setMenuOpen(!menuOpen)}>
                {menuOpen ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            </div>
        </div>
        {
            nav_struct.map((e, i)=>{
                return <div className="navigation-link" key={i}>
                    <div className="navigation-link-icon poppins-medium">{e.icon}</div>
                    <div className="navigation-link-text poppins-medium">{e.name}</div>
                </div>
            })
        }
    </div>
}