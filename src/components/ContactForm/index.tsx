import {useState} from "react";
import type {FC} from 'react';
// import PhoneInput from 'react-phone-number-input'
// import Select from 'react-select'
import 'react-phone-number-input/style.css'
import checkmark from "@assets/icons/checkmark.svg"

interface InputProps {
    label: string;
    name: string;
    error?: string | null;
}

const Input: FC<InputProps> = ({
                                   label,
                                   name,
                                   error = null
                               }) => {

    return (
        <div className="flex flex-col">
            <label
                htmlFor={name}
                className="text-input-label"
            >
                {label}
            </label>
            <input
                type="text"
                name={name}
                id={name}
                className="bg-transparent pb-5 border-b-[0.0625rem]"
            />
        </div>
    )
}

const ContactForm: FC = () => {
    const [value, setValue] = useState<any>();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]

    return (
        <div className="bg-gray rounded-3xl tablet:w-1/3">
            <form >
                <div className="px-5 pt-10 desktop:min-w-[26rem]">
                    <p className="hidden text-h-1 tablet:text-4xl mb-6 mobile:hidden">Contact <span>us</span></p>

                    <div className="flex flex-col gap-12 mb-6">
                        <Input label="name" name="name"/>
                        <Input label="phone" name="phone"/>
                        {/*<PhoneInput*/}
                        {/*    placeholder="Enter phone number"*/}
                        {/*    value={value}*/}
                        {/*    onChange={setValue}*/}
                        {/*/>*/}
                        {/*<Select options={options} />*/}
                        <Input label="country" name="country"/>
                        <Input label="experience" name="experience"/>

                        <div className="flex items-center">
                            <div className="relative h-[1.5rem] w-[1.5rem] mr-2">
                                <img src={checkmark.src} alt="" className="absolute object-cover w-full h-full"/>
                            </div>
                            <p className="text-dark-gray text-[1.5rem] font-regular">our <a href="#" className="decoration-1 underline underline-offset-4">privacy policy</a></p>
                        </div>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full p-2 rounded-3xl flex items-center justify-center bg-accent-orange text-accent-orange transition-all tablet:p-2 desktop:p-2 hover:bg-accent-violet hover:text-accent-violet"
                >
                    <p className="text-button text-white px-2 py-3 rounded-3xl">apply</p>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
