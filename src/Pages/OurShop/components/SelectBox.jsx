
function SelectBox({options, getvalue,type}) {;
  return <select onChange={(e) => getvalue(e.target.value,type)}>
    {
        options.map((option)=>{
            return <option key={option.value} value={option.value}>{option.label}</option>
        })
    }
  </select>
}

export default SelectBox