import React from "react";
import './grid.css';

function Grid(){
  return(
    <div>
      <div className="wrapper">
  <h2><strong>Volunteers Details<span></span></strong></h2>
  <div className="cards">
    <figure className="card">
      <img src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg" />
      <figcaption>Name: Deena
        Contact: 778865546
      </figcaption>
    </figure>
    <figure className="card">
      <img src="https://farmentor.com/wp-content/uploads/2019/11/female-avatar.jpg" />
      <figcaption>Name: Kavya
        Contact: 8778690976</figcaption>
    </figure>
    <figure className="card">
      <img src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg" />
      <figcaption>Name: Vijay
        Contact: 7788655645</figcaption>
    </figure>
    <figure className="card">
      <img src="https://t4.ftcdn.net/jpg/02/23/50/73/360_F_223507349_F5RFU3kL6eMt5LijOaMbWLeHUTv165CB.jpg" />
      <figcaption>Name: Dhanesh
        Contact: 778862236</figcaption>
    </figure>
  </div>
</div>

    </div>
  );
}
export default Grid;
