import axios from "axios";

export const verifyOtp = async ({ email, otp, token }) => {
  try {
    const response = await axios.post(
      "http://115.127.156.14:5000/api/v1/otp/verify-otp",
      { email, otp },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error in verifyOtp:", error);
    throw error;
  }
};
