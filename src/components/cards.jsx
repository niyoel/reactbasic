import React from 'react';
import dog2 from "../dog2.jpg"
const Cards = () => {
    return (
        <>
  
<div class="container">
<div class="row">
  <div class="col">
    <div class="card">
    <img src={dog2} class="card-img-top" alt=""/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" class="btn btn-primary">Go somewhere</button>
    </div>
  </div>
  </div>
  <div class="col">
  <div class="card">
    <img src={dog2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      <button type="button" class="btn btn-primary">Go somewhere</button>

    </div>
  </div>
  </div>
  
  <div class="col"> 
  <div class="card">
    <img src={dog2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          <button type="button" class="btn btn-primary">Go somewhere</button>

    </div>
  </div>
  </div>
</div>
</div>

        </> 
    );
}
 
export default Cards;