import React, { useState } from 'react';
import './App.css'; // CSS 파일 import

function Modal() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <h1>안녕하세요!</h1>
      <p>내용내용내용</p>
      
      <button onClick={openModal}>버튼 열기</button>

      {modalOpen && (
        <div className="modal-all">
          <div className="modal">
            <div className="modal-title">안녕하세요</div>
            <p>모달 내용은 어쩌고 저쩌고..</p>
            <div className="close-all">
              <button onClick={closeModal}>닫기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
