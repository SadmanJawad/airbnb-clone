import React, { useContext, useState } from "react";
import AddRoomForm from "../../components/Forms/AddRoomForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../providers/AuthProvider";

const AddRoom = () => {
  const { user } = useContext(AuthContext);
  const [dates, setDates] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });
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
    // console.log(location);

    // Upload image
    imageUpload(image)
      .then((data) => {
        const roomData = {
          location,
          title,
          from,
          to,
          price: parseFloat(price),
          total_guest,
          bedrooms,
          category,
          image: data.data.display_url,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };
        console.log(roomData);
        // console.log(data.data.display_url);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };

  const handleDates = (ranges) => {
    // return console.log(ranges.selection);
    setDates(ranges.selection);
  };

  return (
    <div>
      <AddRoomForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
        dates={dates}
        handleDates={handleDates}
      />
    </div>
  );
};

export default AddRoom;
