import {motion, AnimatePresence} from 'framer-motion';
import {useForm, Controller, ControllerFieldState} from "react-hook-form";
import type {DetailedHTMLProps, InputHTMLAttributes} from "react";
import {
    isPossiblePhoneNumber,
    parsePhoneNumber,
    formatPhoneNumberIntl,
} from 'react-phone-number-input'

// import InputPhone from "react-phone-number-input/input"

// import Select from 'react-select'
import 'react-phone-number-input/style.css'
import checkmark from "@assets/icons/checkmark.svg"


type InputProps = Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    state: ControllerFieldState;
    fieldType: "phone" | "textarea" | "text";
}>

const Input = (props: InputProps) => {
    const {name, label, state} = props;

    return (
        <div className={`relative flex flex-col pb-6 ${state?.invalid ? "" : ""}`}>
            <label
                htmlFor={name}
                className="text-transparent absolute left-0 top-0 text-[0px]"
            >
                {label}
            </label>

            <input
                className={`text-md bg-transparent pb-2 border-b-[0.0625rem] transition-all duration-300 placeholder:text-input-label placeholder:transition-all focus:outline-0 focus:border-b-accent-orange focus:text-black focus:placeholder:text-accent-orange ${state?.invalid ? "text-accent-red" : ""}`}
                aria-invalid={state?.invalid}
                {...props}
            />

            <AnimatePresence>
                {
                    state?.invalid && (
                        <motion.p
                            key={state?.error?.message}
                            initial={{opacity: 0, y: -10, height: 0}}
                            animate={{
                                opacity: state?.invalid ? 1 : 0,
                                y: state?.invalid ? 0 : -10,
                                height: state?.invalid ? "auto" : 0
                            }}
                            exit={{opacity: 0, height: 0}}
                            transition={{duration: 0.5}}
                            className={`text-accent-red`}
                        >
                            {state?.error?.message ?? "Good!"}
                        </motion.p>
                    )
                }

            </AnimatePresence>
        </div>
    )
}

const ContactForm = () => {
    const {watch, control, setValue} = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            phone: "",
            country: "",
            experience: ""
        },
    });

    const [name, phone, country, experience] = watch(["name", "phone", "country", "experience"])


    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    return (
        <div className="bg-gray rounded-3xl tablet:w-1/3 h-full">
            <form className="flex flex-col justify-between h-full">
                <div className="px-5 pt-10 desktop:min-w-[26rem]">
                    <div className="flex flex-col mb-6">
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Required field."
                                },
                                minLength: {
                                    value: 2,
                                    message: "Minimum 2 characters."
                                },
                                validate: (value) => {
                                    const regex = /\d/;
                                    return regex.test(value) ? 'Field must not contain numbers.' : true;
                                },
                            }}
                            render={({field, fieldState, formState}) => {
                                return (
                                    <Input
                                        label={field.name}
                                        type="text"
                                        placeholder="name"
                                        {...field}
                                        ref={null}
                                        state={fieldState}
                                    />
                                )
                            }}
                        />

                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Required field."
                                },
                                validate: (value) => {
                                    const phoneNumber = parsePhoneNumber(value);
                                    const formattedNumber = phoneNumber?.formatInternational() ?? value;

                                    return isPossiblePhoneNumber(formattedNumber) ? true : 'Invalid phone number.'
                                },

                            }}

                            render={({field, fieldState, formState}) => (
                                <Input
                                    label={field.name}
                                    type="tel"
                                    placeholder="phone"
                                    {...field}
                                    ref={null}
                                    state={fieldState}
                                    onChange={({target: {value}}) => {
                                        const isFirstChar = value.length === 1;
                                        const isValidFirstChar = value[0] === "+"

                                        setValue("phone", `${isFirstChar && !isValidFirstChar ? "+" : ""}${value}`)
                                    }}
                                    onFocus={() => {
                                        setValue("phone", field.value.replaceAll(" ", ""))
                                    }}
                                    onBlur={() => {
                                        console.log({
                                            "fieldState.invalid": fieldState.invalid
                                        })
                                        field.onBlur();
                                        if (fieldState.invalid) return;

                                        const phoneNumber = parsePhoneNumber(field.value);
                                        const formattedNumber = formatPhoneNumberIntl(field.value) ?? field.value;

                                        if (formattedNumber) {
                                            setValue("phone",  formattedNumber)
                                        }

                                        if (phoneNumber?.country ) {
                                            setValue("country", phoneNumber?.country )
                                        }
                                    }}
                                />

                            )}
                        />

                        <Controller
                            name="country"
                            control={control}
                            render={({field, fieldState, formState}) => (
                                <>
                                    <Input label={field.name} type="text" placeholder="country" {...field} ref={null}/>

                                </>
                            )}
                        />

                        <Controller
                            name="experience"
                            control={control}
                            render={({field, fieldState, formState}) => {
                                console.log(fieldState.isTouched)
                                return (<Input label="experience" type="text" placeholder="experience" {...field}
                                               ref={null}/>)
                            }}
                        />
                        {/*<PhoneInput*/}
                        {/*    placeholder="Enter phone number"*/}
                        {/*    value={value}*/}
                        {/*    onChange={setValue}*/}
                        {/*/>*/}

                        {/*<Select options={options} />*/}

                    </div>
                </div>

                <div>
                    <div className="flex items-center px-5 pb-4">
                        <div className="relative h-[1.5rem] w-[1.5rem] mr-2">
                            <img src={checkmark.src} alt="" className="absolute object-cover w-full h-full"/>
                        </div>
                        <p className="text-dark-gray text-[1rem] tablet:text-[1.5rem] desktop:text-[1.5rem] font-regular">our <a
                            href="#" className="decoration-1 underline underline-offset-4">privacy policy</a></p>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 rounded-3xl flex items-center justify-center bg-accent-orange text-accent-orange transition-all tablet:p-2 desktop:p-2 hover:bg-accent-violet hover:text-accent-violet"
                    >
                        <p className="text-button text-white px-2 py-3 rounded-3xl">apply</p>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
