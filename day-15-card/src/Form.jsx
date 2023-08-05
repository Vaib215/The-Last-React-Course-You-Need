import { useCard } from "./helpers/zustand";

const Form = () => {
    const cardDetails = useCard((state) => state)
    return (
        <form>
            <div className="form-control">
                <label htmlFor="cardholdername">
                    Cardholder name
                </label>
                <input id="cardholdername" type="text" placeholder="Vaibhav" value={cardDetails.cardholdername} onChange={(e) => cardDetails.setName(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="cardnumber">
                    Card Number
                </label>
                <input id="cardnumber" type="text" placeholder="7410 8520 9637 0041" value={cardDetails.cardnumber} onChange={(e) => cardDetails.setNumber(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="expiry">
                    Exp. Date
                </label>
                <input type="text" placeholder="MM" value={cardDetails.expmonth} onChange={(e) => cardDetails.setMonth(e.target.value)} />
                <input type="text" placeholder="YY" value={cardDetails.expyear} onChange={(e) => cardDetails.setYear(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="cvv">
                    CVV
                </label>
                <input id="cvv" type="password" placeholder="820" value={cardDetails.cvv} onChange={e=>cardDetails.setCvv(e.target.value)}/>
            </div>
        </form>
    );
}

export default Form;