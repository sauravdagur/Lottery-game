import { useState } from "react";
import { genTicket,sum } from "./helper";
import { Ticket } from "./ticket";

export default function Lottery({n,winningSum}){
    let [ticket, setTicket] =useState(genTicket(n));
    let isWining = sum(ticket) === winningSum;
    function bynewticket(){
        setTicket(genTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>

            <Ticket ticket={ticket}/>
            <button onClick={bynewticket}>Buy new ticket</button>
            <h3>{isWining && "congratulation, you won!"}</h3>
        </div>
    );
}