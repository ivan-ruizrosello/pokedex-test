import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showPokemonAddedToast = (name: string) => {
  toast.success(`Success! Pokemon ${name} added`, {
    position: "top-left",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};
