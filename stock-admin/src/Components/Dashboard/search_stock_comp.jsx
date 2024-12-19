import { SearchOutlined } from "@ant-design/icons";

export default function SearchStockComp() {
    return <div className="search-stock-comp">
        <div className="search-stock-comp-heading">Search Stock to Compaire</div>
        <div className="search-stock-comp-inputs">
            <div className="search-stock-comp-inputs-input">
                <div className="search-stock-comp-inputs-input-left">
                    <div className="search-stock-comp-inputs-input-left-heading">1ST STOCK</div>
                    <input type="text" placeholder="Microsoft" />
                </div>
                <SearchOutlined />
            </div>
            <div className="search-stock-comp-inputs-input">
                <div className="search-stock-comp-inputs-input-left">
                    <div className="search-stock-comp-inputs-input-left-heading">2ST STOCK</div>
                    <input type="text" placeholder="Apple" />
                </div>
                <SearchOutlined />
            </div>
            <div className="search-stock-comp-inputs-button">
                Compare Now
            </div>
        </div>
    </div>
}