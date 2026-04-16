import { TicketNum } from "./ticketNum.jsx";
import "./Ticket.css";
export function Ticket({ticket}){
    return(
    <div className="Ticket">
        <p>Ticket</p>  
       {ticket.map((num,idx) => (
            <TicketNum num={num} key={idx}/>
        ))}
    </div>
    );
}