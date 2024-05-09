import { Button, Label, TextInput } from "flowbite-react";

import { useState } from "react";
import { usePostSuplliesMutation } from "../../redux/api/api";

const CreateSupplyPost = () => {
  const [postData, { data, isLoading, isError, isSuccess }] =
    usePostSuplliesMutation();
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    quantity: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
    // console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex w-full max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="image" value="Image Link" />
          </div>
          <TextInput
            id="image"
            name="image"
            type="text"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="title" value="Title" />
          </div>
          <TextInput
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="quantity" value="Quantity" />
          </div>
          <TextInput
            id="quantity"
            name="quantity"
            type="number"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Enter quantity"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="category" value="Category" />
          </div>
          <TextInput
            id="category"
            name="category"
            type="text"
            value={formData.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default CreateSupplyPost;
