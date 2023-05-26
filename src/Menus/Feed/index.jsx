import { Input } from "./Input"
import { SectionTitle } from "./SectionTitle"
import { IconButton } from "./IconButton"
import { Feeds } from "./Feeds"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { Other } from "./Other"
import { useOutsideClick } from "../../Hooks/useOutsideClick"

export const Feed = ({onClick}) => {
  const ref = useOutsideClick(onClick);
  
  return (
    <div class="headerMenuOpen" tabIndex={0} ref={ref}>
      <Input />
      <SectionTitle title={'your communities'} />
      <IconButton icon={faPlus} title="Create Community" />
      <SectionTitle title={'following'} />
      <Feeds />
      <Other />
    </div>
  )
}
