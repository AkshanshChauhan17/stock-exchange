import { ArrowDownOutlined, ArrowUpOutlined, DownSquareFilled, EditFilled, UpSquareFilled } from "@ant-design/icons";

const ud = {
        client_name: "Annette Black",
        buy_price: "100",
        current_price: "200",
        buy_value: "200",
        current_value: "399",
        total: "4000",
        location: "New York, NY"
    };

const usb = {
    "user": {
      "user_id": "U12345",
      "first_name": "John",
      "last_name": "Doe",
      "email": "johndoe@example.com",
      "phone_number": "+1234567890",
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zip_code": "90001",
        "country": "USA"
      },
      "purchased_stocks": [
        {
          "stock_symbol": "AAPL",
          "company_name": "Apple Inc.",
          "quantity": 10,
          "purchase_price_per_share": 150.50,
          "purchase_date": "2024-12-01",
          "total_investment": 1505.00,
          "current_price_per_share": 175.30,
          "market_value": 1753.00,
          "stock_type": "Common",
          "stock_exchange": "NASDAQ",
          "url": "https://th.bing.com/th/id/R.5f69a296d968948db65bbe1b54d25ad6?rik=wcbnGvFYn7cxLw&riu=http%3a%2f%2fcdn.wccftech.com%2fwp-content%2fuploads%2f2016%2f04%2fApple-logo.png&ehk=z9PxkgntQ8F8Db%2bHqBUkF%2fQK1s9ZCvbDWz6ewuGg%2bEo%3d&risl=&pid=ImgRaw&r=0"
        },
        {
          "stock_symbol": "GOOGL",
          "company_name": "Alphabet Inc.",
          "quantity": 5,
          "purchase_price_per_share": 2800.00,
          "purchase_date": "2024-11-15",
          "total_investment": 14000.00,
          "current_price_per_share": 2950.00,
          "market_value": 14750.00,
          "stock_type": "Common",
          "stock_exchange": "NASDAQ",
          "url": "https://logos-world.net/wp-content/uploads/2020/09/Google-Symbol.png"
        },
        {
          "stock_symbol": "TSLA",
          "company_name": "Tesla Inc.",
          "quantity": 3,
          "purchase_price_per_share": 700.00,
          "purchase_date": "2024-10-10",
          "total_investment": 2100.00,
          "current_price_per_share": 780.00,
          "market_value": 2340.00,
          "stock_type": "Common",
          "stock_exchange": "NASDAQ",
          "url": "https://logohistory.net/wp-content/uploads/2023/01/Tesla-Logo.png"
        },
        {
          "stock_symbol": "MSFT",
          "company_name": "Microsoft Corporation",
          "quantity": 7,
          "purchase_price_per_share": 250.00,
          "purchase_date": "2024-09-20",
          "total_investment": 1750.00,
          "current_price_per_share": 260.00,
          "market_value": 1820.00,
          "stock_type": "Common",
          "stock_exchange": "NASDAQ",
          "url": "https://th.bing.com/th/id/OIP.Eqf4vo8ae5PtwtwRpweRagHaHa?rs=1&pid=ImgDetMain"
        },
        {
          "stock_symbol": "AMZN",
          "company_name": "Amazon.com Inc.",
          "quantity": 4,
          "purchase_price_per_share": 3400.00,
          "purchase_date": "2024-08-05",
          "total_investment": 13600.00,
          "current_price_per_share": 3500.00,
          "market_value": 14000.00,
          "stock_type": "Common",
          "stock_exchange": "NASDAQ",
          "url": "https://www.pngmart.com/files/Amazon-Logo-Transparent-PNG.png"
        }
      ],
      "total_investment": 33655.00,
      "total_market_value": 34363.00,
      "net_profit": 708.00
    }
  }
  
const broker_history = [
    {
      "activity": "order placed",      "user_id": "U123",
      "status": "completed",
      "transaction_id": "T001",
      "location": "New York"
    },
    {
      "activity": "order placed",
      "user_id": "U124",
      "status": "pending",
      "transaction_id": "T002",
      "location": "Los Angeles"
    },
    {
      "activity": "portfolio check",
      "user_id": "U123",
      "status": "completed",
      "transaction_id": "T003",
      "location": "New York"
    },
    {
      "activity": "fund deposit",
      "user_id": "U125",
      "status": "completed",
      "transaction_id": "T004",
      "location": "Chicago"
    },
    {
      "activity": "order placed",
      "user_id": "U126",
      "status": "completed",
      "transaction_id": "T005",
      "location": "San Francisco"
    },
    {
      "activity": "portfolio check",      "user_id": "U123",
      "status": "completed",
      "transaction_id": "T006",
      "location": "New York"
    },
    {
      "activity": "account update",
      "user_id": "U127",
      "status": "pending",
      "transaction_id": "T007",
      "location": "Boston"
    },
    {
      "activity": "order placed",
      "user_id": "U128",
      "status": "completed",
      "transaction_id": "T008",
      "location": "Miami"
    },
    {
      "activity": "order placed",
      "user_id": "U129",
      "status": "pending",
      "transaction_id": "T009",
      "location": "Dallas"
    },
    {
      "activity": "portfolio check",
      "user_id": "U123",
      "status": "completed",
      "transaction_id": "T010",
      "location": "New York"
    },
    {
      "activity": "withdrawal request",
      "user_id": "U130",
      "status": "pending",
      "transaction_id": "T011",
      "location": "Houston"
    },
    {
      "activity": "fund transfer",
      "user_id": "U131",
      "status": "completed",
      "transaction_id": "T012",
      "location": "Seattle"
    },
    {
      "activity": "market analysis",
      "user_id": "U132",
      "status": "completed",
      "transaction_id": "T013",
      "location": "Chicago"
    },
    {
      "activity": "order modification",
      "user_id": "U133",
      "status": "completed",
      "transaction_id": "T014",
      "location": "Los Angeles"
    }
  ]  

export default function ViewClient() {
    return <div className="view-client poppins-regular">
        <div className="view-client-left">
            <div className="view-client-info">
                <div className="view-client-info-bp"></div>
                <div className="view-client-info-left">
                    <div className="view-client-info-left-top">{ud.client_name}</div>
                    <div className="view-client-info-left-bottom">{ud.location}</div>
                </div>
                <div className="view-client-info-mid">
                    <div className="view-client-info-mid-top">${ud.total}</div>
                    <div className="view-client-info-mid-bottom">Potential earning</div>
                </div>
                <a href="tel:+918923445377" className="view-client-info-contact">Contact</a>
            </div>
            <div className="view-client-location">
                {
                    Object.keys(usb.user.address).map((e, i)=>{
                        return <div className="view-client-location-info" key={i}>
                            <div>{e.replace("_", " ").toUpperCase()} <b style={{fontWeight: 600}}>{usb.user.address[e]}</b></div>
                            <EditFilled />
                        </div>
                    })
                }
            </div>
            <div className="view-client-total">
                <div className="view-client-total-left">
                    <div className="view-client-total-left-top">Total investment</div>
                    <div className={usb.user.total_investment > usb.user.total_market_value ? "view-client-total-left-bottom profit" : "view-client-total-left-bottom loss"}>${usb.user.total_investment} {usb.user.total_investment > usb.user.total_market_value ? <ArrowUpOutlined /> : <ArrowDownOutlined />}</div>
                </div>
                <div className="view-client-total-mid">
                    <div className="view-client-total-mid-top">Total market</div>
                    <div className="view-client-total-mid-bottom">${usb.user.total_market_value}</div>
                </div>
                <div className="view-client-total-right">
                    <div className="view-client-total-right-top">Total net profit</div>
                    <div className="view-client-total-right-bottom">${usb.user.net_profit}</div>
                </div>
            </div>
            <div className="view-client-history">
                <div className="view-client-history-title">Activity History</div>
                <table className="view-client-history-table">
                    <tr>
                        {
                            Object.keys(broker_history[0]).map((e, i)=>{
                                return <th key={i}>{e.replace("_", " ").toUpperCase()}</th>
                            })
                        }
                    </tr>
                    {
                        broker_history.map((e, i)=>{
                            return <tr>
                                {
                                    Object.keys(broker_history[0]).map((ee, ii)=>{
                                        return <td className={e.status} key={ii}>{e[ee]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </table>
            </div>
        </div>
        <div className="view-client-right">
            <div className="view-client-stocklist">
                <div className="view-client-stocklist-title">Purchased Stocks</div>
                {
                    usb.user.purchased_stocks.map((e, i)=>{
                        return <div className="view-client-stocklist-card" key={i}>
                            {
                                <div className="stock-mini-list-stock">
                                    <div className="stock-mini-list-stock-logo" style={{backgroundImage: `url(${e.url})`}}></div>
                                    <div className="stock-mini-list-stock-left">
                                        <div className="stock-mini-list-stock-left-top">{e.stock_symbol}</div>
                                        <div className="stock-mini-list-stock-left-bottom">{e.company_name}</div>
                                    </div>
                                    <div className="stock-mini-list-stock-mid">
                                        <div className="stock-mini-list-stock-mid-top">Revenue</div>
                                        <div className="stock-mini-list-stock-mid-bottom">${e.current_price_per_share}</div>
                                    </div>
                                    <div className="stock-mini-list-stock-right">
                                    <div className="stock-mini-list-stock-right-top">Market Cap</div>
                                    <div className="stock-mini-list-stock-right-bottom">${e.market_value}</div>
                                    </div>
                                </div>
                            }
                        </div>
                    })
                }
            </div>
        </div>
    </div>
}