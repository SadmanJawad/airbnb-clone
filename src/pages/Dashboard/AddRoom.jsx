import React, { useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";

const AddRoom = () => {
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] = useState("Upload Image");
  // handle form submit
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const location = event.target.location.value;
    const title = event.target.title.value;
    const from = dates.startDate;
    const to = dates.endDate;
    const category = event.target.category.value;
    const description = event.target.description.value;
    const price = event.target.price.value;
    const total_guest = event.target.total_guest.value;
    const bedrooms = event.target.bedrooms.value;
    const bathrooms = event.target.bathrooms.value;
    const image = event.target.image.files[0];
    console.log(location);
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      />
    </div>
  );
};

export default AddRoom;
