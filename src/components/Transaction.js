import Item from "./Item";
import './Transaction.css'

// uuidv4 เป็นการสร้างและจัดการเกี่ยวกับkeyขึ้นโดยไม่ต้องสร้างหลายอัน
// import { v4 as uuidv4 } from 'uuid';
const Trasction =(props)=> {
  const {items} = props
  return(
      <div> <ul className="item-list">
        {/* mapสมาชิกแต่ละตัวที่ทำงานในArry */}
          {items.map((element)=>{
            return<Item {...element} key = {element.id}/> 
          })} 
      </ul>
      </div>
  );
}
export default Trasction