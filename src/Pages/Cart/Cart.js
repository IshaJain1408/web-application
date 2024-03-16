import React, { useState } from 'react';
import './Cart.css';


const Cart = () => {
  const [address, setAddress] = useState('');
  const [selectedItems, setSelectedItems] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleItemClick = (numItems) => {
    setSelectedItems(numItems);
  };

  

  return (
    <div className='container p-3'>
      <div className="card rounded-0">
        <div className="card-header d-flex justify-content-between align-items-center">
          <span className='fs-4 fw-semibold' style={{ color: "black" }}>Total : ₹2000</span>
          <button className="btn rounded-0 text-white" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            CHECKOUT
          </button>
        </div>

        <div className="card-body p-4">
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center border p-3">
            <div>
              <h5 className="card-title text-start fw-bolder fs-5 fs-sm-4">QUESTION TITLE</h5>
              <p className="card-text text-start fw-medium fs-6 fs-sm-5">
                <span className="fw-bold">MODULE :</span> Name OF MODULE 
              </p>
              <p className="card-text text-start fw-medium fs-6 fs-sm-5">
                <span className="fw-bold">DATE :</span> 2 SEPT 2024
              </p>
            </div>
            <div className="d-flex flex-column gap-2 mt-3 mt-sm-0">
              <div className="dropdown">
                <button type="button" className="btn rounded-0 text-white fs-6 fs-sm-5" style={{  width: "90px" }}>{selectedItems}</button>
                <button type="button" className="btn  dropdown-toggle dropdown-toggle-split rounded-0 text-white"  data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="visually-hidden">{selectedItems}</span>
                </button>
                <ul className="dropdown-menu rounded-0">
                  <li><button className="dropdown-item" onClick={() => handleItemClick(1)}>1</button></li>
                  <li><button className="dropdown-item" onClick={() => handleItemClick(2)}>2</button></li>
                  <li><button className="dropdown-item" onClick={() => handleItemClick(3)}>3</button></li>
                </ul>
              </div>
              <button type="button" className="btn  rounded-0 text-white fs-6 fs-sm-5" style={{ width: "120px" }} data-bs-toggle="modal" data-bs-target="#deleteModal">DELETE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content rounded-0">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-4 fw-semibold" id="staticBackdropLabel">PLEASE PROVIDE YOUR ADDRESS</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <textarea
                className="form-control rounded-0"
                style={{width:"100%",height:"180px"}}
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn rounded-0 text-white fs-6 fs-sm-5"  data-bs-dismiss="modal">CANCEL</button>
              <button type="button" className="btn rounded-0 text-white fs-6 fs-sm-5"   data-bs-dismiss="modal">SAVE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Modal */}
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content rounded-0">
            <div className="modal-header border-0">
              <h1 className="modal-title fs-4 fw-semibold" id="deleteModalLabel">DELETE BOOK FROM CART</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this item from your cart?
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn rounded-0 text-white fs-6 fs-sm-5"  data-bs-dismiss="modal">CANCEL</button>
              <button type="button" className="btn rounded-0 text-white fs-6 fs-sm-5"   data-bs-dismiss="modal">SAVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
