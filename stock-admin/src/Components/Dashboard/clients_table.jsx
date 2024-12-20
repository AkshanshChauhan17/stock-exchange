import { EyeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";

const button_list = ["1 Day", "1 Week", "1 Month", "3 Months", "6 Months", "1 Year", "5 Years", "All Time"];
const clients_list = [
    {
        client_name: "Raman",
        buy_price: "100",
        current_price: "200",
        buy_value: "200",
        current_value: "399",
    },
    {
        client_name: "Anjali",
        buy_price: "150",
        current_price: "250",
        buy_value: "300",
        current_value: "500",
    },
    {
        client_name: "Vikram",
        buy_price: "200",
        current_price: "300",
        buy_value: "400",
        current_value: "700",
    },
    {
        client_name: "Priya",
        buy_price: "120",
        current_price: "220",
        buy_value: "240",
        current_value: "460",
    },
    {
        client_name: "Rajesh",
        buy_price: "80",
        current_price: "180",
        buy_value: "160",
        current_value: "350",
    },
    {
        client_name: "Sita",
        buy_price: "110",
        current_price: "210",
        buy_value: "220",
        current_value: "420",
    },
    {
        client_name: "Ajay",
        buy_price: "130",
        current_price: "230",
        buy_value: "260",
        current_value: "480",
    },
    {
        client_name: "Meera",
        buy_price: "90",
        current_price: "190",
        buy_value: "180",
        current_value: "370",
    },
    {
        client_name: "Karan",
        buy_price: "140",
        current_price: "240",
        buy_value: "280",
        current_value: "510",
    },
    {
        client_name: "Ritu",
        buy_price: "160",
        current_price: "260",
        buy_value: "320",
        current_value: "600",
    },
    {
        client_name: "Deepak",
        buy_price: "170",
        current_price: "270",
        buy_value: "340",
        current_value: "630",
    },
    {
        client_name: "Nisha",
        buy_price: "180",
        current_price: "280",
        buy_value: "360",
        current_value: "650",
    },
    {
        client_name: "Harish",
        buy_price: "140",
        current_price: "240",
        buy_value: "280",
        current_value: "510",
    },
    {
        client_name: "Pooja",
        buy_price: "100",
        current_price: "200",
        buy_value: "200",
        current_value: "400",
    }
];
export default function ClientTable() {
    return <div className="client-table poppins-regular">
        <div className="client-table-top">
            <div className="client-table-top-title">Clients</div>
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
        <div className="client-table-mid">
            <table className="client-table-mid-table">
                <tr>
                    {
                        Object.keys(clients_list[0]).map((e, i)=>{
                            return <th key={i}>{e.replace("_", " ").toLocaleUpperCase()}</th>
                        })
                    }
                    <th>ACTION</th>
                </tr>
                {
                    clients_list.map((e, i)=>{
                        return <tr key={i}>
                            {
                                Object.keys(e).map((ee, ii)=>{
                                    return <td key={ii}>{e[ee]}</td>
                                })
                            }
                            <td><Link to={`/client/${i}`}><EyeFilled /></Link></td>
                        </tr>
                    })
                }
            </table>
        </div>
    </div>
}