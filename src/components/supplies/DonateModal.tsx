import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
const DonateModal = () => {
  const [openModal, setOpenModal] = useState(true);
  const [name, setName] = useState("");

  const onCloseModal = () => {
    setOpenModal(false);
    setName("");
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Toggle modal</Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Donate by fillup this form
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount" value="Amount" />
              </div>
              <TextInput id="amount" type="number" required />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DonateModal;
