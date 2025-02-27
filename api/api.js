import axios from "axios";

const BASE_URL = "https://your-api.com";

const api = axios.create({
  baseURL: BASE_URL, // Change this to your actual API URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Upload profile
export const uploadProfile = async (name, image) => {
  const formData = new FormData();
  formData.append("name", name);
  formData.append("image", image);

  try {
    const response = await api.post("/profile", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error uploading profile";
  }
};

// Send message
export const sendMessageToChatbot = async (message) => {
  // try {
  //   const response = await api.post("/messages/send", { content: message });
  //   return response.data;
  // } catch (error) {
  //   throw error.response?.data || "Error sending message";
  // }
  // wait 10sec then return a response
  await new Promise((resolve) => setTimeout(resolve, 5000));


  return { reply: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ducimus quod dignissimos. Voluptatem, nam molestiae? Unde porro deleniti molestias error reiciendis possimus, quos iusto atque at provident sequi sint? Quam ullam, ducimus ratione aperiam omnis odit quasi et debitis. Ullam." };
  


};

// Get all messages
export const fetchMessages = async () => {
  try {
    const response = await api.get("/messages");
    return response.data;
  } catch (error) {
    throw error.response?.data || "Error fetching messages";
  }
};
