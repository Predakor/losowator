import { CgArrowRight as AddIcon } from "solid-icons/cg";
import { IconProps } from "solid-icons";
import { CgMenu, CgMenuRight } from "solid-icons/cg";

export function OptionsIconClosed(props: IconProps) {
  return <CgMenuRight {...props} />;
}
export function OptionsIcon(props: IconProps) {
  return <CgMenu {...props} />;
}

export { AddIcon };
