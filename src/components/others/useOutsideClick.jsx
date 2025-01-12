import { useEffect, useRef } from "react";

/**
 * Custom hook to detect clicks outside a referenced element.
 * @param {boolean} isOpen - The state indicating whether the element is open.
 * @param {function} onClose - The function to call when an outside click is detected.
 * @returns {object} ref - A ref to attach to the target element.
 */

const useOutsideClick = (isOpen, onClose) => {
    const ref = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (isOpen && ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return ref;
};

export default useOutsideClick;