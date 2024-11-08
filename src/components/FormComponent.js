import { useState,useEffect } from "react";
import "./FormComponent.css"
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props)=>{
    console.log("Render Form Component");
    const[title,setTitle] = useState('')
    const [amount,setAmount]= useState(0)
    const[formValid,setFormValid] = useState(false)

    // การดักจักeventใช้ event.target.value
    const inputTitle = (event)=>{
        // ใข้ตัวuseStateมาใช้
        setTitle(event.target.value);
    }
    const inputAmount =(event)=>{
        // ใข้ตัวuseStateมาใช้
        setAmount(event.target.value);
    }
    // ดักจับเวลากดปุ่มและไม่ให้เครียรค่าข้างใน
    const seveItem = (event)=>{
        event.preventDefault()
        //รวมstateในก้อนเดียวเพื่อที่จะสร้างเป็นข้อมูลดิบ
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        props.onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }
    // เมือมีการเปลี่ยนแปลงจะมาuseEffect
    useEffect(()=>{
        const checkData = title.trim().length>0 && amount!==0
        setFormValid(checkData)
    },[title,amount])
    return(
        <div>
        <form onSubmit={seveItem}>
            <div className = "form-control">
                <label>ชื่อรายการ</label>
                <input type="text" placeholder="ระบุชื่อรายการของคุณ" onChange={inputTitle} value={title}/>
            </div>
             <div className = "form-control">
                <label>จำนวนเงิน</label>
                <input type="text" placeholder="(+ รายรับ, - รายจ่าย)" onChange={inputAmount} value={amount}/>
            </div>
            <div>
                <button type = "submit"  className="btn" disabled={!formValid}>เพิ่มข้อมูล</button>
            </div>
        </form>
    </div>
    )
}
export default FormComponent