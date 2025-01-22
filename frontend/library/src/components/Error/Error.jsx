import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { selectErrorMessage } from "../../redux/slices/errorSlice";
import { clearError } from "../../redux/slices/errorSlice";

const Error = () => {
    const errorMessage = useSelector(selectErrorMessage);
    const dispatch = useDispatch();

    useEffect(() => {
        if (errorMessage) {
            toast.warn(errorMessage);
            dispatch(clearError());
        }
    }, [errorMessage, dispatch]);

    return (
        <div>
            <ToastContainer position="top-right" autoClose={5000} />
        </div>
    );
};

export default Error;
