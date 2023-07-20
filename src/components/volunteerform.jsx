import React from "react";

const VolunteerForm = () => {
  return (
    <div>
      <h1>Volunteer Form</h1>
      <form action="/response.html" method="GET" style={formStyles}>
        <fieldset>
          <label>First Name</label>
          <input name="firstname" type="name" id="firstName" />
          <br />
          <label>Last Name</label>
          <input name="lastname" type="name" id="lastName" />
          <br />
          <label>Email Address</label>
          <input name="emailaddress" type="email" id="email" />
          <br />
          <label>Address</label>
          <textarea name="address" type="textarea" id="address" defaultValue={""} />
          <br>
          </br>
          <label>Contact</label>
          <input name="contact" type="tel" id="tel" />
          <br />
          
          <br />
          
          <input type="submit" defaultValue="Submit" />
        </fieldset>
      </form>
    </div>
  );
};

const formStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "100px",
};

export default VolunteerForm;
