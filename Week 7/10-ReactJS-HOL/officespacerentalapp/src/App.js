import React from "react";
import "./App.css";

const heading = "Office Space , at Affordable Range";

const officeSpaces = [
  {
    Name: "DBS",
    Rent: 50000,
    Address: "Chennai",
    img: "https://images.unsplash.com/photo-1505409859467-3a796fd5798e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D"
  },
  {
    Name: "Regus",
    Rent: 75000,
    Address: "Bangalore",
    img: "https://images.unsplash.com/photo-1631193816258-28b44b21e78b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww"
  },
  {
    Name: "WeWork",
    Rent: 60000,
    Address: "Mumbai",
    img: "https://images.unsplash.com/photo-1582653547187-2bb73b2d7b67?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fG9mZmljZSUyMHNwYWNlfGVufDB8fDB8fHww"
  }
];

function getRentColor(rent) {
  return rent <= 60000 ? "textRed" : "textGreen";
}

function OfficeCard({ office }) {
  return (
    <div className="office-card">
      <img src={office.img} width="25%" height="25%" alt="Office Space" />
      <h1>Name: {office.Name}</h1>
      <h3 className={getRentColor(office.Rent)}>
        Rent: Rs. {office.Rent}
      </h3>
      <h3>Address: {office.Address}</h3>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>{heading}</h1>
      {officeSpaces.map((office, idx) => (
        <OfficeCard office={office} key={idx} />
      ))}
    </div>
  );
}

export default App;