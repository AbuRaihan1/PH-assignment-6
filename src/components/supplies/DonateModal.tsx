import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import Swal from "sweetalert2";
import { useDonatePostMutation } from "../../redux/api/api";
const DonateModal = ({ openModal, setOpenModal, onCloseModal }) => {
  const [donatePostData, { data, isError }] = useDonatePostMutation();

  const [donerName, setDonarName] = useState("");
  const [donerAmount, setDonerAmount] = useState(0);

  const donatePost = async (e) => {
    e.preventDefault();
    const donerData = {
      donerAmount,
      donerName,
    };
    const response = await donatePostData(donerData);
    const message = response.data.message;
    try {
      if (response.data.success) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: message,
        });
        onCloseModal();
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to post data.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to post data.",
      });
    }
  };

  return (
    <>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <form className="space-y-3" onSubmit={donatePost}>
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Fill this form to donate
            </h3>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="Name" value="Your Name" />
              </div>
              <TextInput
                id="name"
                placeholder="John Doe"
                // value={name}
                // onChange={(e) => setName(e.target.value)}
                onBlur={(e) => setDonarName(e.target.value)}
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amount" value="Amount" />
              </div>
              <TextInput
                id="amount"
                type="number"
                placeholder="$1234"
                onBlur={(e) => setDonerAmount(e.target.value)}
                required
              />
            </div>

            <Button type="submit">Donate</Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default DonateModal;
