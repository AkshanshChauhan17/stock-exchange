const stock_list_schema = [{
    logo: "https://th.bing.com/th/id/OIP.Eqf4vo8ae5PtwtwRpweRagHaHa?rs=1&pid=ImgDetMain",
    name: "MSFT",
    sub_name: "Microsoft.Co",
    stock_price: 392.334,
    market_cap: "1780.09B"
}, {
    logo: "https://th.bing.com/th/id/R.5f69a296d968948db65bbe1b54d25ad6?rik=wcbnGvFYn7cxLw&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2016%2f04%2fApple-logo.png&ehk=z9PxkgntQ8F8Db%2bHqBUkF%2fQK1s9ZCvbDWz6ewuGg%2bEo%3d&risl=&pid=ImgRaw&r=0",
    name: "AAPL",
    sub_name: "Apple Inc",
    stock_price: 287.219,
    market_cap: "2097.64B"
}]

export default function StocksMini() {
    return <div className="stock-mini">
        <div className="stock-mini-title">Stock Overview</div>
        <div className="stock-mini-list">
            {
                stock_list_schema.map((e, i)=>{
                    return <div className="stock-mini-list-stock">
                        <div className="stock-mini-list-stock-logo" style={{backgroundImage: `url(${e.logo})`}}></div>
                        <div className="stock-mini-list-stock-left">
                            <div className="stock-mini-list-stock-left-top">{e.name}</div>
                            <div className="stock-mini-list-stock-left-bottom">{e.sub_name}</div>
                        </div>
                        <div className="stock-mini-list-stock-mid">
                            <div className="stock-mini-list-stock-mid-top">Revenue</div>
                            <div className="stock-mini-list-stock-mid-bottom">${e.stock_price}</div>
                        </div>
                        <div className="stock-mini-list-stock-right">
                        <div className="stock-mini-list-stock-right-top">Market Cap</div>
                        <div className="stock-mini-list-stock-right-bottom">${e.market_cap}</div>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}