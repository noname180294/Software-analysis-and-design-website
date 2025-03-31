import React, { useState } from "react";
import { FaGratipay, FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaPaypal } from "react-icons/fa";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const plans = [
  {
    name: "Basic Plan",
    price: "10$/month",
    features: ["Access to basic features", "5 job applications per month", "Standard customer support"],
  },
  {
    name: "Pro Plan",
    price: "50$/month",
    features: ["Access to all features", "Unlimited job applications", "Priority customer support", "Profile highlight"],
  },
  {
    name: "VIP Plan",
    price: "100$/month",
    features: ["Custom solutions for businesses", "Dedicated account manager", "Premium support 24/7", "Advanced analytics"],
  },
];

const PaymentModal = ({ isOpen, onClose, selectedPlan }) => {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardInfo, setCardInfo] = useState({
    number: "",
    expiry: "",
    cvv: "",
    name: "",
  });

  const handleCardInfoChange = (e) => {
    const { name, value } = e.target;
    setCardInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Processing payment:", { plan: selectedPlan, paymentMethod, cardInfo });
    alert(`Payment for ${selectedPlan.name} processed successfully!`);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000
    }}>
      <div className="modal-content" style={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '500px',
        maxHeight: '90%',
        overflowY: 'auto'
      }}>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">Checkout: {selectedPlan.name}</h2>
          <button 
            onClick={onClose} 
            className="btn btn-close"
            style={{ fontSize: '1.5rem' }}
          />
        </div>

        <div className="payment-methods mb-4">
          <h4>Select Payment Method</h4>
          <div className="d-flex justify-content-between">
            <button 
              className={`btn ${paymentMethod === 'credit' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setPaymentMethod('credit')}
            >
              💳 Credit/Debit Card
            </button>
            <button 
              className={`btn ${paymentMethod === 'paypal' ? 'btn-primary' : 'btn-outline-secondary'}`}
              onClick={() => setPaymentMethod('paypal')}
            >
              <FaPaypal /> PayPal
            </button>
          </div>
        </div>

        {paymentMethod === 'credit' && (
          <form onSubmit={handleSubmit}>
            <div className="card-brands mb-3 d-flex justify-content-center gap-3">
              <FaCcVisa size={40} />
              <FaCcMastercard size={40} />
              <FaCcAmex size={40} />
              <FaCcDiscover size={40} />
            </div>

            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Card Number" 
                name="number"
                value={cardInfo.number}
                onChange={handleCardInfoChange}
                required 
              />
            </div>

            <div className="row mb-3">
              <div className="col">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="MM/YY" 
                  name="expiry"
                  value={cardInfo.expiry}
                  onChange={handleCardInfoChange}
                  required 
                />
              </div>
              <div className="col">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="CVV" 
                  name="cvv"
                  value={cardInfo.cvv}
                  onChange={handleCardInfoChange}
                  required 
                />
              </div>
            </div>

            <div className="mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Name on Card" 
                name="name"
                value={cardInfo.name}
                onChange={handleCardInfoChange}
                required 
              />
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input 
                  type="checkbox" 
                  className="form-check-input" 
                  id="saveCard" 
                />
                <label className="form-check-label" htmlFor="saveCard">
                  Save card for future payments
                </label>
              </div>
              <div>
                <strong>Total: {selectedPlan.price}</strong>
              </div>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary w-100 mt-3"
            >
              Complete Payment
            </button>
          </form>
        )}

        {paymentMethod === 'paypal' && (
          <div className="text-center">
            <p>You will be redirected to PayPal to complete your payment.</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                // Redirect to PayPal or open PayPal checkout
                alert('PayPal checkout integration would happen here');
              }}
            >
              <FaPaypal /> Proceed with PayPal
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <Navbar/>
      <div className="container py-5 text-center min-vh-100">
        <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
          <h1 className="display-4 text-white fw-bold m-0">
            Find the Best Talent
          </h1>
          <div className="bg-black p-3 rounded-circle">
            <FaGratipay className="text-warning" style={{ fontSize: '2.5rem' }} />
          </div>
        </div>

        <div className="row justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-md-4 mb-3 d-flex">
              <div 
                className="card p-3 text-center border-2 shadow-lg w-100 d-flex flex-column" 
                style={{ 
                  borderColor: '#FF9EAA', 
                  boxShadow: '0 4px 6px rgba(255, 158, 170, 0.2)',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div 
                  className="card-header mb-3" 
                  style={{ 
                    backgroundColor: '#FF9EAA', 
                    color: 'black', 
                    fontWeight: 'bold',
                    borderBottom: '2px solid black'
                  }}
                >
                  {plan.name}
                </div>
                <h5 className="text-primary mb-3">{plan.price}</h5>
                <ul className="list-unstyled mb-4 flex-grow-1">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="mb-2">
                      <span style={{ color: '#FF9EAA', marginRight: '10px' }}>✦</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  className="btn btn-outline-primary mt-auto" 
                  style={{
                    borderColor: '#FF9EAA',
                    color: '#FF9EAA',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#FF9EAA';
                    e.currentTarget.style.color = 'black';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#FF9EAA';
                  }}
                  onClick={() => handleSelectPlan(plan)}
                >
                  Purchase
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <PaymentModal 
        isOpen={!!selectedPlan} 
        onClose={() => setSelectedPlan(null)}
        selectedPlan={selectedPlan || {}}
      />
      <Footer/>
    </>
  );
};

export default Pricing;