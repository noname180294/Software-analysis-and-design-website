import React, { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";

const Navbar = () => {
  return (
    <div style={{ 
      backgroundColor: "#1E1E1E", 
      padding: "20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #333"
    }}>
      <div style={{ 
        color: "white", 
        fontFamily: "serif", 
        fontSize: "24px", 
        fontWeight: "bold" 
      }}>
        <span style={{ color: "#FF69B4" }}>F</span>ree<span style={{ color: "#FF69B4" }}>F</span>ire<span style={{ color: "#FF69B4" }}>F</span>iles
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/find-talent" style={{ color: "white", textDecoration: "none" }}>Find Talent</a>
        <a href="/find-job" style={{ color: "white", textDecoration: "none" }}>Find Job</a>
        <a href="/news" style={{ color: "white", textDecoration: "none" }}>News</a>
        <a href="/pricing" style={{ color: "white", textDecoration: "none" }}>Pricing</a>
        <a href="/faq" style={{ color: "white", textDecoration: "none" }}>FAQ</a>
        <a href="/blog" style={{ color: "white", textDecoration: "none" }}>Blog</a>
      </div>
      <button style={{ 
        backgroundColor: "transparent", 
        border: "1px solid #01b3a7", 
        color: "#01b3a7", 
        padding: "8px 16px", 
        borderRadius: "20px",
        cursor: "pointer"
      }}>
        Log In
      </button>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [filteredItems, setFilteredItems] = useState([]);

  const faqItems = [
    {
      id: "upgrade-downgrade",
      question: "How do I upgrade / downgrade my workspace plan?",
      answer: "You can upgrade or downgrade your workspace plan by going to your Account Settings > Billing section. Select 'Change Plan' and choose the option that best fits your needs. Changes will be applied immediately, with prorated charges or credits for the remaining billing period.",
      category: "Billing"
    },
    {
      id: "invoice-info",
      question: "Can I add other information to an invoice?",
      answer: "Yes, you can customize your invoices with additional information. Navigate to Billing Settings > Invoice Preferences and you can add custom fields like purchase order numbers, tax IDs, company details, and notes that will appear on all future invoices.",
      category: "Billing"
    },
    {
      id: "table-vs-view",
      question: "When should I use a new table vs. a view?",
      answer: "Use a new table when you need to store fundamentally different types of data. Use a view when you want to display the same data in different ways (filtered, sorted, or with different field visibility). Views share the same underlying data, while tables contain separate data sets.",
      category: "Usage"
    },
    {
      id: "transfer-data",
      question: "How can I transfer data from one base to another?",
      answer: "You can transfer data between bases using the export/import feature. Go to the source base, select the table, click 'Download CSV' from the menu. Then, in the destination base, create a new table and select 'Import data from CSV'. For linked records, you may need to recreate these connections manually.",
      category: "Data Management"
    },
    {
      id: "account-email",
      question: "How do I change my account email address?",
      answer: "You can change the email address associated with your FreeFireFiles Account by going to freefirefules.com/account from a laptop or desktop. Navigate to 'Account Settings' > 'Personal Information' and update your email address. You'll receive a verification link at the new email to confirm the change.",
      category: "Account"
    },
    {
      id: "billing",
      question: "How does billing work?",
      answer: "Billing occurs monthly or annually, depending on your chosen plan. Charges are processed automatically using your saved payment method. For workspace plans, you're billed based on the number of users and add-ons selected. Usage-based features are calculated at the end of each billing cycle. All transactions are reflected in your billing history.",
      category: "Billing"
    },
    {
      id: "share-app",
      question: "Can I share an individual app?",
      answer: "Yes, you can share individual apps with specific team members or external collaborators. Go to the app, click 'Share' in the top-right corner, and set permission levels (view only, edit, or manage). You can share via email invitation or generate a shareable link with preset permissions.",
      category: "Collaboration"
    },
    {
      id: "export-collaborators",
      question: "Can I export a list of all collaborators?",
      answer: "Yes, workspace admins can export a complete list of collaborators. Go to Workspace Settings > Members, and click the 'Export Members List' button. This generates a CSV file with names, email addresses, roles, and access levels for all collaborators in your workspace.",
      category: "Collaboration"
    },
    {
      id: "invoice-collaborators",
      question: "Can invoices be sent to other collaborators?",
      answer: "Yes, you can designate additional billing contacts to receive invoice notifications. Go to Workspace Settings > Billing > Billing Contacts and add the email addresses of team members who should receive copies of invoices. Only workspace admins and designated billing contacts can modify payment methods or billing details.",
      category: "Billing"
    },
    {
      id: "contact-support",
      question: "How do I contact support?",
      answer: "We offer support over email, and the best way to contact us is through the in-app help menu. Click the '?' icon in the bottom-right corner of any page, then select 'Contact Support'. For urgent matters, Premium and Enterprise customers can access priority support through their dedicated support channel.",
      category: "Support"
    }
  ];

  // Filter items based on search query and selected category
  useEffect(() => {
    let results = faqItems;
    
    // Filter by search query
    if (searchQuery) {
      results = results.filter(item => 
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "All Categories") {
      results = results.filter(item => item.category === selectedCategory);
    }
    
    setFilteredItems(results);
  }, [searchQuery, selectedCategory]);

  // Initialize filtered items on component mount
  useEffect(() => {
    setFilteredItems(faqItems);
  }, []);

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Get unique categories for the dropdown
  const categories = ["All Categories", ...new Set(faqItems.map(item => item.category))];

  // Handle search input change with immediate filtering
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category selection
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Split filtered questions into two columns
  const halfwayIndex = Math.ceil(filteredItems.length / 2);
  const leftColumnItems = filteredItems.slice(0, halfwayIndex);
  const rightColumnItems = filteredItems.slice(halfwayIndex);

  const renderFaqItem = (item) => (
    <div 
      key={item.id} 
      style={{ 
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "16px",
        overflow: "hidden"
      }}
    >
      <div 
        style={{ 
          padding: "20px",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        onClick={() => toggleItem(item.id)}
      >
        <div>
          <div style={{ color: "#ff69b4", fontSize: "12px", marginBottom: "4px", fontWeight: "bold" }}>
            {item.category}
          </div>
          <h3 style={{ color: "#333", margin: 0, fontSize: "16px", fontWeight: "bold" }}>
            {item.question}
          </h3>
        </div>
        <button 
          style={{ 
            backgroundColor: "#ff69b4",
            color: "white",
            border: "none",
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            cursor: "pointer"
          }}
        >
          {openItems[item.id] ? "-" : "+"}
        </button>
      </div>
      
      {openItems[item.id] && (
        <div style={{ 
          padding: "0 20px 20px",
          borderTop: "1px solid #eee",
          color: "#666",
          fontSize: "14px",
          lineHeight: "1.6"
        }}>
          <p>{item.answer}</p>
          <div style={{ 
            display: "flex", 
            justifyContent: "flex-end", 
            marginTop: "10px" 
          }}>
            <button style={{ 
              backgroundColor: "transparent",
              border: "1px solid #ff69b4",
              color: "#ff69b4",
              padding: "8px 16px",
              borderRadius: "20px",
              fontSize: "14px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              Read More <FaChevronRight size={12} />
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Navbar />
      <div style={{ 
        backgroundColor: "black", 
        minHeight: "100vh", 
        color: "white",
        padding: "40px 20px"
      }}>
        <div style={{ 
          maxWidth: "1200px", 
          margin: "0 auto", 
          textAlign: "center",
          marginBottom: "40px"
        }}>
          <h1 style={{ 
            fontSize: "40px", 
            color: "white", 
            margin: "0 0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            Frequently Asked <span style={{ color: "#ff69b4", marginLeft: "8px" }}>Questions</span>
            <span style={{ color: "yellow", fontSize: "30px", marginLeft: "8px" }}>⭐</span>
          </h1>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px", 
            marginTop: "30px",
            marginBottom: "30px"
          }}>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ 
                padding: "12px 16px",
                width: "500px",
                borderRadius: "4px",
                border: "none",
                backgroundColor: "#f5f5f5"
              }}
            />
            <div style={{ 
              position: "relative",
              width: "200px"
            }}>
              <select 
                value={selectedCategory}
                onChange={handleCategoryChange}
                style={{ 
                  appearance: "none",
                  width: "100%",
                  padding: "12px 16px",
                  borderRadius: "4px",
                  border: "none",
                  backgroundColor: "#ff69b4",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
              <div style={{ 
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                color: "white"
              }}>▼</div>
            </div>
          </div>
        </div>
        
        {filteredItems.length > 0 ? (
          <div style={{ 
            maxWidth: "1200px", 
            margin: "0 auto", 
            display: "grid", 
            gridTemplateColumns: "1fr 1fr", 
            gap: "20px" 
          }}>
            <div>
              {leftColumnItems.map(renderFaqItem)}
            </div>
            <div>
              {rightColumnItems.map(renderFaqItem)}
            </div>
          </div>
        ) : (
          <div style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
            padding: "40px 0"
          }}>
            <h3 style={{ color: "#ff69b4" }}>No matching questions found</h3>
            <p>Try adjusting your search or category filter</p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQ;