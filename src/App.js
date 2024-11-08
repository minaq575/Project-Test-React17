import './App.css'
import Trasction from "./components/Transaction";
import FormComponent from "./components/FormComponent";
import './App.css'
import { useState , useEffect } from "react";
import DataContext from './components/DataContext';
import ReportComponent from './components/ReportComponent';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"; 
function App() {
  const design = {color:"red",textAlign:"center",fontSize:"1.5rem"}
 
  const [items,setItems] = useState([])
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>
      {
        return [newItem,...prevItem]
      })
  }
  // แบ่งรายได้ และ รายจ่าย
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element => element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element => element<0).reduce((total,element)=>total+=element,0))*-1
    // toFixed(2) คือมีทศนิยม2ตำแหน่ง
    setReportIncome(income.toFixed(2))
    setReportExpense(expense.toFixed(2))
  },[items,reportIncome,reportExpense])

  return(
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense :reportExpense
      }
    }>
      <div className="container">
        <h1 style={design}>แอพบัญชีรายรับ - รายจ่าย</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
                <li>
                  <Link to='/'>ข้อมูลบัญชี</Link>
                </li>
                <li>
                  <Link to='/insert'>บันทึกข้อมูล</Link>
                </li>
              </ul>
              {/* เหตุผลเพราะว่า React update Version ใหม่ Syntax ปรับตามจาก Switch เปลี่ยนมาใช้ Routes  */}
              <Routes>
                <Route path="/" exact element ={<ReportComponent/>}></Route>
                <Route path="/insert"element ={<><FormComponent onAddItem={onAddNewItem}/>
                 <Trasction items={items}/></>}>
                </Route>
              </Routes>
        </div>
        </Router>
      </div>
    </DataContext.Provider>
    
  );
}

export default App;
