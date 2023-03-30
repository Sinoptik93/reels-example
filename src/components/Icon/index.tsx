import { cloneElement, FC, ReactComponentElement } from "react";
// import { ReactComponent as DodoLogo } from "@icons/dodo-logo.svg";
import createIconPack from "astro-icon";


// type IconsName = "dodo-logo";
//
// const RegisteredIcon: Record<IconsName, string> = {
//     "dodo-logo": <DodoLogo/>,
// }
//
// interface IconProps extends Partial<SVGElement> {
//     [key: string]: any;
//     name: IconsName;
// }
//
// const Icon: FC<IconProps> = ({
//     name,
//     ...props
// }) => {
//     return (
//         cloneElement(RegisteredIcon[name], props)
//     );
// };

// export default Icon;

export default createIconPack({ package: "assets", dir: "icons" });

