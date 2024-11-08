import PropTypes from 'prop-types';
import './Item.css'


// props คือ properties ตัวแปลที่สามารถส่งเข้าไปในcomponentได้
const Item =(props)=>{
    const {title,amount} = props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
     //ฟังก์ชั่นแปลงรูปแบบตัวเลข
    const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
    return(
        <li className={status}>{title}<span>{symbol}{formatNumber(Math.abs(amount))}</span></li>
    );
}
// prototypes ไปดึงมาใช้แล้วต้องการกำหนดtypes อะไร
Item.propTypes={
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired
}
export default Item
