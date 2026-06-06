import React from "react";

function CreateTicket() {

  const sections = [
    {
      title: "Account Opening",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Charges at Marketpulse",
        "Marketpulse IDFC FIRST Bank 3-in-1 Account",
        "Getting Started"
      ]
    },
    {
      title: "KYC & Verification",
      links: [
        "PAN Verification",
        "Aadhaar Linking",
        "Document Upload",
        "KYC Status Check",
        "Re-KYC Process"
      ]
    },
    {
      title: "Funds & Payments",
      links: [
        "Add Funds",
        "Withdraw Funds",
        "UPI Payments",
        "Net Banking",
        "Payment Failure Issues"
      ]
    },
    {
      title: "Trading & Orders",
      links: [
        "Place Order",
        "Order Types",
        "Order Rejection",
        "Modify/Cancel Order",
        "Intraday vs Delivery"
      ]
    },
    {
      title: "Account Issues",
      links: [
        "Login Problem",
        "Forgot Password",
        "Account Locked",
        "2FA Issues"
      ]
    },
    {
      title: "Reports & Statements",
      links: [
        "Download P&L",
        "Tax Reports",
        "Account Statement",
        "Trade History"
      ]
    }
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {sections.map((section, index) => (
          <div key={index} className="col-md-4 p-4">
            <h4>
              <i className="fa fa-plus-circle"></i> {section.title}
            </h4>

            {section.links.map((link, i) => (
              <div key={i}>
                <a
                  href="#"
                  style={{ textDecoration: "none", lineHeight: "2.2" }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}

      </div>
    </div>
  );
}

export default CreateTicket;
