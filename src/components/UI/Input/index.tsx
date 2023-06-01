import type {DetailedHTMLProps, InputHTMLAttributes} from "react";
import type {ControllerFieldState} from "react-hook-form";
import {AnimatePresence, motion} from "framer-motion";
import {forwardRef} from "react";

type InputProps = Partial<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    label: string;
    state: ControllerFieldState;
    fieldType: "phone" | "textarea" | "text";
}>
export const Input = forwardRef((props: InputProps, ref) => {
    const {name, label, state} = props;

    return (
        <div className={`relative flex flex-col mb-6 ${state?.invalid ? "" : ""}`}>
            <label
                htmlFor={name}
                className="text-transparent absolute left-0 top-0 text-[0px]"
            >
                {label}
            </label>

            <input
                className={`text-md bg-transparent pb-2 border-b-[0.0625rem] transition-all duration-300 placeholder:text-input-label placeholder:transition-all focus:outline-0 focus:border-b-accent-orange focus:text-black focus:placeholder:text-accent-orange ${state?.invalid ? "text-accent-red" : ""}`}
                aria-invalid={state?.invalid}
                // @ts-ignore
                ref={ref}
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
})
