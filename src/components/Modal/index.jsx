import styles from "./styles.module.scss";

import React from "react";

export default function Modal({ open, setOpen, children }) {
  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const handleClose = (e) => {
    setOpen(false);
  };

  return (
    <>
      {
        open &&
        <div
          className={styles.modal}
          onClick={handleClose}
        >
          <div
            className={styles.modalBody}
          >
            <div
              className={styles.modalContent}
              onClick={e => e.stopPropagation()}
            >
              <button
                className={styles.modalClose}
                onClick={handleClose}
              >
                &#10005;
              </button>
              {children}
            </div>

          </div>
        </div>
      }
    </>
  );
};