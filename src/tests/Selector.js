import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import './selector.css'

const handleSelect = (e) => {
  console.log(e.target.value)
}
const Selector = ({ options }) => {
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState('')
  const [open, setOpen] = useState(false)

  // const datas = [
  //   { value: 'Alabama', label: 'AL' },
  //   { value: 'Alaska', label: 'AK' },
  // ]
  return (
    <div className="container_select">
      <div
        // quand je clique
        // pas encore ouvert open =false
        // update false => true = !open
        onClick={() => setOpen(!open)}
        className={`container_select_click ${!selected}`}
      >
        {selected
          ? selected?.length > 25
            ? selected?.substring(0, 25) + '...'
            : selected
          : 'Select '}
        {/* quand open = true (ouvert) - rotation du chevron */}
        <BiChevronDown size={20} className={`${open && 'rotate'}`} />
      </div>
      <ul
        className={`overflow ${
          //   //taille de la liste
          //   //open false 60
          //   //open true 0
          open ? 'dropped' : 'not_dropped'
        } `}
      >
        <div className="search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Select ..."
            className="input_search"
          />
        </div>
        {options?.map((data) => (
          <li
            key={data?.label}
            className={`list_state
            ${
              data?.value?.toLowerCase() === selected?.toLowerCase() &&
              'list_state_select'
            }
            ${
              data?.value?.toLowerCase().startsWith(inputValue)
                ? 'appear'
                : 'hidden'
            }`}
            onClick={() => {
              if (data?.value?.toLowerCase() !== selected.toLowerCase()) {
                setSelected(data?.label)
                setInputValue('')
                setOpen(false)

                // console.log(data.label)
                // console.log(typeof data.label)
                // console.log(data)
                //update je referme
              }
            }}
          >
            {data?.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Selector
