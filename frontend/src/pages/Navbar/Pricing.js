import React, { useState } from "react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaPaypal } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FaGratipay } from "react-icons/fa6";

const plans = [
  {
    name: "Basic Plan",
    price: "₫10,000/month",
    features: ["Access to basic features", "5 job applications per month", "Standard customer support"],
  },
  {
    name: "Pro Plan",
    price: "₫30,000/month",
    features: ["Access to all features", "Unlimited job applications", "Priority customer support", "Profile highlight"],
  },
  {
    name: "VIP Plan",
    price: "₫100,000/month",
    features: ["Custom solutions for businesses", "Dedicated account manager", "Premium support 24/7", "Advanced analytics"],
  },
];

const Pricing = ({ onSelectPlan }) => {
  return (
    <>
    <Navbar/>
    <div className="container py-5 text-center min-vh-100">
      <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
        <h1 className="display-4 text-white fw-bold m-0">
          Find the Best Talent
        </h1>
        <div className="bg-black p-3 rounded-circle">
          <FaGratipay  className="text-warning" style={{ fontSize: '2.5rem' }} />
        </div>
      </div>

      <div className="row justify-content-center">
        {plans.map((plan, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card p-3 text-center">
              <h4>{plan.name}</h4>
              <h5 className="text-primary">{plan.price}</h5>
              <ul className="list-unstyled">
                {plan.features.map((feature, idx) => (
                  <li key={idx}>✅ {feature}</li>
                ))}
              </ul>
              <button className="btn btn-primary" onClick={() => onSelectPlan(plan)}>Purchase</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

const Checkout = ({ selectedPlan, onBack }) => {
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });
  const [selectedPayment, setSelectedPayment] = useState("credit");

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="text-center">Checkout</h2>
      <button className="btn btn-secondary mb-3" onClick={onBack}>Back</button>
      <p className="text-center">Please select your payment method</p>
      <div className="d-flex justify-content-between mb-3">
        <button className={`btn ${selectedPayment === "credit" ? "btn-primary" : "btn-light"}`} onClick={() => setSelectedPayment("credit")}>💳 Credit/Debit Card</button>
        <button className={`btn ${selectedPayment === "paypal" ? "btn-primary" : "btn-light"}`} onClick={() => setSelectedPayment("paypal")}> <FaPaypal size={20} /> PayPal</button>
      </div>
      <p>Supported Card Brands</p>
      <div className="d-flex gap-2 mb-3">
        <FaCcVisa size={30} /> <FaCcMastercard size={30} /> <FaCcAmex size={30} /> <FaCcDiscover size={30} />
      </div>
      <div className="card p-4 shadow-sm">
        <input type="text" name="number" className="form-control mb-3" placeholder="Bank card number" onChange={handleChange} />
        <div className="d-flex gap-2">
          <input type="text" name="expiry" className="form-control" placeholder="MM/YY" onChange={handleChange} />
          <input type="text" name="cvv" className="form-control" placeholder="3 or 4-digit number" onChange={handleChange} />
        </div>
        <input type="text" name="name" className="form-control my-3" placeholder="Name on Card" onChange={handleChange} />
        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="saveCard" />
          <label className="form-check-label" htmlFor="saveCard">Save the card information for future payments</label>
        </div>
        <p className="mt-3 text-end">Total: <strong>{selectedPlan ? selectedPlan.price : "₫0"}</strong></p>
        <button className="btn btn-primary w-100">Proceed to payment</button>
      </div>
      <p className="text-center mt-3">
        I have read and agree to the <a href="#">Privacy Policy</a>
      </p>
    </div>
  );
};

const App = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div>
      {selectedPlan ? (
        <Checkout selectedPlan={selectedPlan} onBack={() => setSelectedPlan(null)} />
      ) : (
        <Pricing onSelectPlan={setSelectedPlan} />
      )}
    </div>
  );
};

export default Pricing;