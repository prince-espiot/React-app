import { MouseEvent, useState } from "react";


//items : [], heading:string


interface Props{

    items:string[];
    heading: string;

    //(item:string)=>void

    onSelectItem:(item:string)=>void;
}
function ListGroup({items, heading, onSelectItem}:Props) {
  
 
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);


  //event handler
  const handleClicked = (event: MouseEvent) => console.log(event);

  const message = items.length === 0 ? <p>No item Found</p> : null;

  const getMessage = () => {
    return items.length === 0 ? <p>No item Found</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item Found</p>}
      <ul className="list-group ">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? 'list-group-item active':'list-group-intem'}
            key={item}
            onClick={()=>{setSelectedIndex(index)
            onSelectItem(item);}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
