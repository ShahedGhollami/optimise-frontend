import { toast } from "sonner";
import Cookies from "js-cookie";
import { AxiosError } from 'axios';

const handleAxiosError = (error: unknown) => {
  if (error instanceof AxiosError) {
    const status = error.response?.status;
    const data = error.response?.data;

    switch (status) {
      case 401:
        
        Cookies.remove('authToken');
        //logout();   
      
      break;

      case 403:
        toast.error(
          typeof data?.message === "string"
            ? data.message
            : "You do not have access."
        );
        break;

      case 409:
        toast.error(
          typeof data?.message === "string"
            ? data.message
            : "There was a conflict."
        );
        break;

      case 400:
        if (Array.isArray(data?.errors)) {
          toast.error(data.errors.join("\n")); // line breaks inside toast
        } else {
          toast.error(typeof data?.message === "string" ? data.message : "Bad request.");
        }
        break;

      default:
        // For other errors, you might want to log them or show a generic message.
        // toast.error("An unexpected error occurred.");
        break;
    }
    return Promise.reject(error);
  }
  return Promise.reject(error);
};

export default handleAxiosError;
