import { useState } from "react";

type SignInActions = {
    phoneNumber: string;
    password: string;
    handlePhoneNumberChange: (phoneNumber: string) => void;
    handlePasswordChange: (password: string) => void;
    handleSubmit: (e: React.FormEvent) => void;
};

const useSignInAction = (): SignInActions => {

    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handlePhoneNumberChange = (newPhoneNumber: string) => {
        setPhoneNumber(newPhoneNumber);
    };

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = '/chat';
        // Add your login logic here
    };

    return {
        phoneNumber,
        password,
        handlePhoneNumberChange,
        handlePasswordChange,
        handleSubmit
    };

};
export default useSignInAction;