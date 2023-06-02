import Select, {components, GroupBase, OptionProps} from 'react-select'
import {Controller, useForm} from "react-hook-form";
import {useState} from "react";
import {formatPhoneNumberIntl, formatPhoneNumber, parsePhoneNumber} from 'react-phone-number-input'
import * as yup from "yup";
// import InputPhone from 'react-phone-number-input/input'

import countriesList from "../../utils/countries"
import checkmark from "@assets/icons/checkmark.svg"
import {AutoResizeTextarea} from "@components/UI/AutoResizeTextarea";
import {Input} from "@components/UI/Input";


interface CountryOption {
    value: string;
    label: string;
    flag: string;
}

const Option = (props: OptionProps<CountryOption, false, GroupBase<CountryOption>>) => {
    const { data } = props;

    return (
        <components.Option {...props} >
            <div className="flex items-center">
                <div className="w-5 h-4 rounded-[0.2rem] border-dark-gray border-[0.1rem] flex items-center overflow-hidden border-1 mr-2">
                    <span className={`fi fi-${props.data.value.toLowerCase()} bg-cover`}></span>
                </div>
                <p className="text-input-label normal-case tracking-normal">{data.label}</p>
            </div>
        </components.Option>
    )
};


const schema =  yup.string().nullable().email("Must be valid email.")
const validateEmailWithYup = (value: string) => {
    try {
        schema.validateSync(value);
    } catch (error) {
        // @ts-ignore
        return error.message;
    }

    return true;
}

const countriesOptions: CountryOption[] = countriesList.map((country) => ({
    value: country.cca2,
    label: country.name.common,
    flag: country.flags.svg
})).sort((countryA, countryB) => {
    if (countryA.label > countryB.label) {
        return 1;
    }
    if (countryA.label < countryB.label) {
        return -1;
    }
    return 0;
})

const ContactForm = () => {
    const [defaultCountry, setDefaultCountry] = useState<CountryOption | null>(null);
    const {control, handleSubmit, formState, watch, register, setValue, trigger} = useForm({
        mode: "onBlur",
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            country: "",
            experience: "",
            privacy: true,
        },
    });

    const [phone, privacy] = watch(["phone", "privacy"])
    console.log({phone, privacy})

    return (
        <div className="bg-gray rounded-3xl tablet:w-1/3 h-full">
            <form
                className="flex flex-col justify-between h-full"
                onSubmit={handleSubmit((onValid, onInvalid) => {
                    console.log({onValid, onInvalid})
                    return new Promise((resolve) => setTimeout(() => {
                        console.log("ready")
                        resolve("")
                    }, 3000))
                })}
            >
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
                            render={({field, fieldState}) => {
                                return (
                                    <Input
                                        autoComplete="given-name"
                                        label={field.name}
                                        type="text"
                                        placeholder="name"
                                        {...field}
                                        ref={field.ref}
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
                                // validate: (value) => {
                                    // const phoneNumber = parsePhoneNumber(value);
                                    // const formattedNumber = phoneNumber?.formatInternational() ?? value;
                                    //
                                    // return isPossiblePhoneNumber(formattedNumber) ? true : 'Invalid phone number.'
                                // },

                            }}
                            render={({field, fieldState}) => (
                                <Input
                                    label={field.name}
                                    type="tel"
                                    autoComplete="tel"
                                    placeholder="phone"
                                    {...field}
                                    ref={null}
                                    state={fieldState}
                                    // onKeyDown={(event) => {
                                    //     const validKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', "Tab"];
                                    //     if (!/[0-9]/.test(event.key) && !validKeys.includes(event.key)) {
                                    //         event.preventDefault();
                                    //     }
                                    // }}
                                    // onInput={(e) => {
                                    //     const unformattedNumber = e.target.value;
                                    //     const isIntl = unformattedNumber[0] === "+"
                                    //     const formattedNumber = formatPhoneNumber( isIntl ? unformattedNumber : "+" + unformattedNumber ) ?? e.target.value;
                                    //     console.log({"e.target.value": e.target.value, formattedNumber})
                                    //
                                    //     if (formattedNumber) {
                                    //         setValue("phone",  formattedNumber)
                                    //     }
                                    // }}
                                    onChange={({target: {value}}) => {
                                        console.log({value})
                                        const isFirstChar = value.length === 1;
                                        const isValidFirstChar = value[0] === "+"

                                        setValue("phone", `${isFirstChar && !isValidFirstChar ? "+" : ""}${value}`)
                                    }}
                                    onFocus={() => {
                                        setValue("phone", field.value.replaceAll(" ", ""))
                                    }}
                                    onBlur={() => {
                                        field.onBlur();
                                        trigger("phone")
                                        if (fieldState.invalid) return;

                                        const phoneNumber = parsePhoneNumber(field.value);
                                        const formattedNumber = formatPhoneNumberIntl(field.value) ?? field.value;

                                        if (formattedNumber) {
                                            setValue("phone",  formattedNumber)
                                        }

                                        if (phoneNumber?.country) {
                                            const targetCountry = countriesOptions.find((country) => country.value === phoneNumber.country) ?? null
                                            setDefaultCountry(targetCountry)
                                        }
                                    }}
                                />

                                // <InputPhone
                                    // value={field.value}
                                    // international
                                    // placeholder="phone"
                                    // onChange={(e) => {
                                    //     field.onChange(e);
                                    //     trigger("phone")
                                    //
                                    //     const phoneNumber = parsePhoneNumber(field.value);
                                    //
                                    //     if (phoneNumber?.country) {
                                    //         const targetCountry = countriesOptions.find((country) => country.value === phoneNumber.country) ?? null
                                    //         setDefaultCountry(targetCountry)
                                    //     }
                                    // }}

                                    // inputComponent={(props) => {
                                    // console.log({props})
                                    // return (<Input
                                    //     value={props.value}
                                    //     ref={props.ref}
                                    //     onChange={(e) => {
                                    //         console.log(e)
                                    //         props.onChange(e.target.value)
                                    //     }}
                                    //     onKeyDown={(e) => {
                                    //         console.log(e)
                                    //         props.onKeyDown(e)
                                    //     }}
                                    //     placeholder="phone"
                                    //     {...props}
                                    // />)
                                    // }}

                                    //@ts-ignore
                                    // inputComponent={Input}
                                // />
                            )}
                        />

                        <Controller
                            name="email"
                            control={control}
                            rules={{
                                validate: validateEmailWithYup,
                            }}
                            render={({field, fieldState}) => {
                                return (
                                    <Input
                                        autoComplete="email"
                                        label={field.name}
                                        type="text"
                                        placeholder="email"
                                        {...field}
                                        ref={field.ref}
                                        state={fieldState}
                                    />
                                )
                            }}
                        />

                        <Controller
                            name="country"
                            control={control}
                            render={({field}) => (
                                <Select
                                    value={defaultCountry}
                                    components={{ Option }}
                                    placeholder="country"
                                    className="custom-select mb-6"
                                    classNamePrefix="select-country"
                                    options={countriesOptions}
                                    onChange={(option) => {
                                        setDefaultCountry(option);
                                        field.onChange(option?.value)
                                    }}
                                />
                            )}
                        />

                        <Controller
                            name="experience"
                            control={control}
                            render={({field}) => {
                                return (
                                    <AutoResizeTextarea
                                        placeholder="experience"
                                        {...field}
                                    />
                                )
                            }}
                        />
                    </div>
                </div>

                <div>
                    <div className="px-5 pb-4">
                        <div className="relative flex items-center">
                            <div className="relative h-[1rem] w-[1rem] desktop:h-[1.5rem] desktop:w-[1.5rem] mr-1 desktop:mr-2">
                                <img src={checkmark.src} alt="" className="absolute object-cover w-full h-full" style={{opacity: privacy ? "100%" : "20%"}}/>
                            </div>
                            <label htmlFor="privacy" className="hidden">Privacy policy</label>
                            <input type="checkbox" {...register("privacy", {required: true})} className="absolute top-0 left-0 w-4 h-4 desktop:w-8 desktop:h-8 opacity-0"/>
                            <p
                                className="text-dark-gray text-[1rem] tablet:text-[1.5rem] desktop:text-[1.5rem] font-regular mobile:pb-[0.1rem]"
                            >our <a
                                href="#" className="decoration-1 underline underline-offset-4">
                                privacy policy
                            </a>
                            </p>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full p-2 rounded-3xl flex items-center justify-center bg-accent-orange text-accent-orange transition-all tablet:p-2 desktop:p-2 hover:bg-accent-violet hover:text-accent-violet disabled:bg-dark-gray"
                        disabled={formState.isSubmitting}
                    >
                        <p className="text-button text-white px-2 py-3 rounded-3xl">apply</p>
                    </button>
                </div>

            </form>
        </div>
    );
};

export default ContactForm;
