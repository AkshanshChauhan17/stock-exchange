import { SearchOutlined } from "@ant-design/icons";

export default function Dashboard() {
    return <div className="dashboard">
        <div className="dashboard-top">
            <div className="dashboard-top-left">
                <div className="dashboard-top-left-search">
                    <input type="search" />
                    <SearchOutlined />
                </div>
            </div>
        </div>
    </div>
}