// useToast.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useToast = () => {
  const showToast = (message, options = {}) => {
    toast(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      ...options, // يسمح بتمرير خيارات مخصصة إضافية
    });
  };

  return showToast;
};

export default useToast;
