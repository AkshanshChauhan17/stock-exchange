import { SearchOutlined } from "@ant-design/icons";
import SearchStockComp from "./search_stock_comp";
import StocksMini from "./stock_mini";
import ClientTable from "./clients_table";

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

        <div className="sstoc poppins-regular">
            <SearchStockComp />
        </div>

        <div className="smini poppins-regular">
            <StocksMini />
        </div>

        <div className="client">
            <ClientTable />
        </div>
    </div>
}