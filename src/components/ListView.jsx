import { useState } from 'react'
function ListView(props) {
  const {list, filterLength} = props
  const [person1, person2, ...rest] = list;

  console.log('Destructing: ',person1, person2);
  console.log('-----------------------------')
  console.log(rest);
  // const [isFiltered, setIsFiltered] = useState(false);
  const [localList, setLocalList] = useState(list);

//  console.log(filterLength) 
const toggleFilter = () => {
  // const actualState = 
  // const toggledState = 
  // if(localList.length < list.length){ // filtered
  //   setLocalList(list);
  // } else { // unfiltered
  //   setLocalList(localList.filter((person)=>person.name.length < filterLength));
  // }
  localList.length < list.length ? 
  setLocalList(list) : 
  setLocalList(localList.filter((person)=>person.name.length < filterLength)); 

}

  return (
    <>
    <h3>My List </h3>
    <ul>
      {localList.map((e)=>{
        return (<li key={e.id}>{e.name}</li>)
      }
    )
        }
    </ul>
    <button onClick={toggleFilter} >Toggle filter</button>
    </>
  )
}

export default ListView