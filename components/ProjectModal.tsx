'use client'

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const ProjectModal = ({ isOpen, onClose, children }) => {
    const modalRef = useRef(null);
    
    const getTargetElement = () => {    
        let portalElement;
        useEffect(() => {

            let portalElement = document.getElementById('modal-root');
            console.log(portalElement)
            }, [])
        return portalElement;
    }

   console.log(getTargetElement())
  
    useEffect(() => {
      if (isOpen) {
        // Disable scrolling on the background content when the modal is open
        document.body.style.overflow = 'hidden';
      } else {
        // Re-enable scrolling when the modal is closed
        document.body.style.overflow = 'auto';
      }
    }, [isOpen]);
  
    const handleBackdropClick = (event) => {
      if (event.target === modalRef.current) {
        onClose();
      }
    };
  
    if (!isOpen) {
      return null;
    }
  
    return createPortal(
      <div className="modal-overlay" ref={modalRef} onClick={handleBackdropClick}>
        <div className="modal-content">{children}</div>
      </div>,
      {portalElement}
    );
  };
  
  ProjectModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  
  export default ProjectModal;
  