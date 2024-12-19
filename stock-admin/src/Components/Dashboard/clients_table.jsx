const button_list = ["1 Day", "1 Week", "1 Month", "3 Months", "6 Months", "1 Year", "5 Years", "All Time"];
const clients_list = [{
    client_name: "Raman",
    buy_price: "100",
    current_price: "200",
    buy_value: "200",
    current_value: "399",
}]
export default function ClientTable() {
    return <div className="client-table poppins-regular">
        <div className="client-table-top">
            <div className="client-table-top-title">Price Comparison</div>
            <div className="client-table-top-right">
                {
                    button_list.map((e, i)=>{
                        return <div className="client-table-top-right-button" key={i}>
                            {e}
                        </div>
                    })
                }
            </div>
        </div>
        <div className="clinet-table-mid">

        </div>
    </div>
}