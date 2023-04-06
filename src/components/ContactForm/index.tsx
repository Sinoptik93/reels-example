import type {FC} from 'react';

interface InputProps {
    label: string;
    name: string;
}

const Input: FC<InputProps> = ({
                                   label,
                                   name
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
    return (
        <div className="bg-gray rounded-xl tablet:w-1/3">
            <form >
                <div className="px-5 pt-10">
                    <p className="text-h-1 tablet:text-4xl mb-6">Contact <span>us</span></p>

                    <div className="flex flex-col gap-12 mb-6">
                        <Input label="name" name="name"/>
                        <Input label="phone" name="email"/>
                        <Input label="country" name="country"/>
                        <Input label="experience" name="experience"/>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full p-3 rounded-xl flex items-center justify-center bg-accent-orange text-accent-orange transition-all tablet:p-4 desktop:p-4 hover:bg-accent-violet hover:text-accent-violet"
                >
                    <p className="text-button text-white px-4 py-6 rounded-xl">apply</p>
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
