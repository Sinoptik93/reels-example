import {TextareaHTMLAttributes, useEffect, useState} from "react";
import type {ControllerRenderProps} from "react-hook-form";

export const AutoResizeTextarea = (props: TextareaHTMLAttributes<HTMLTextAreaElement> | ControllerRenderProps<{name: string, phone: string, email: string, country: string, experience: string}, "experience">) => {
    const [isFocused, setIsFocused] = useState(false);
    useEffect(() => {
        console.log({isFocused})
    }, [isFocused]);

    return (
        <div className={`pb-2 border-b-[0.0625rem] border-b-black w-full transition-all duration-300`} style={{borderBottomColor: isFocused ? "#FF6A00FF" : "black"}}>
            <textarea
                {...props}
                value={props.value}
                className="resize-none w-full text-md max-h-60 bg-transparent outline-0 placeholder:text-input-label"
                onFocus={() => {
                    setIsFocused(true)
                }}
                onBlur={() => {
                    setIsFocused(false)
                }}
                style={{
                    height: `${String(props?.value)?.split('\n')?.length * 1.5}em`,
                }}
            />
        </div>
    );
}
