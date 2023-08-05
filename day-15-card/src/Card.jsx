import { useCard } from "./helpers/zustand";

const Card = () => {
    const {cardnumber, cardholdername, expmonth, expyear, cvv} = useCard(state=>state)
    return (
        <section>
            <h1>{cardnumber}</h1>
            <small>{cvv}</small>
            <div>
                <small>Valid Thru</small>
                <div>{expmonth}/{expyear}</div>
            </div>
            <h3>{cardholdername}</h3>
        </section>
    );
}

export default Card;