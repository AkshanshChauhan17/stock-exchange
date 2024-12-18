import {DashboardOutlined, StockOutlined, UserOutlined} from "@ant-design/icons";

export const nav_struct = [
    {
        name: "Dashboard",
        icon: <DashboardOutlined />,
        url: "/"
    },
    {
        name: "Clients",
        icon: <UserOutlined />,
        url: "/clients"
    },
    {
        name: "Stocks",
        icon: <StockOutlined />,
        url: "/stocks"
    }
];