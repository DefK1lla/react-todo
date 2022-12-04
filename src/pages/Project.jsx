import React from "react";

import Modal from "../components/Modal";

export default function Project() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        onClick={e => setOpen(true)}
      >
        dasdsad
      </button>

      <Modal
        open={open}
        setOpen={setOpen}
      >
        lorem50000
      </Modal>
    </>
  );
};