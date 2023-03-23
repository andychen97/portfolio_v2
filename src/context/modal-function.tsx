import { useState } from "react";

export default function ModalToggle() {
    const [isOpen, setisOpen] = useState(true);

    const toggle = () => {
        setisOpen(!isOpen);
    };

    return {
        isOpen,
        toggle
    };
}
