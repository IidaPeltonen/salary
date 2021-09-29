//import logo from './logo.svg';
import './App.css'
import { useState } from 'react'

function App () {
    const [salary, setSalary] = useState();
    const [tax, setTax] = useState();
    const [tax_maksettava, setTax_maksettava] = useState();
    const [pension, setPension] = useState(0.25);
    const [pension_maksettava, setPension_maksettava] = useState();
    const [insurance, setInsurance] = useState(0.25);
    const [insurance_maksettava, setInsurance_maksettava] = useState();
    const [loppu, setLoppu] = useState();

    function laskePalkka(e) {
      e.preventDefault();
      let palkka = 0;
      let vero = 0;
      let elake = 0;
      let vakuutus = 0;
      vero = salary / 100 * tax;
      setTax_maksettava(vero);
      elake = salary / 100 * pension;
      setPension_maksettava(elake);
      vakuutus = salary / 100 * insurance;
      setInsurance_maksettava(vakuutus);      
      palkka = salary - (vero + elake + vakuutus);
      setLoppu(palkka);
    }

    return (
    <>
      <h3>Loan calculator</h3>
      <form onSubmit={laskePalkka}>
        <div>
          <label>Salary</label>
          <input name='salary' type='number' step='1' value={salary} onChange={e => setSalary(e.target.value)}></input>
        </div>
        <div>
          <label>Tax (%)</label> 
          <input name='tax' type='number' step='2' value={tax} onChange={e => setTax(e.target.value)}></input>
          <output>{tax_maksettava}</output>
        </div>
        <div>
          <label>Pension (%) </label> 
          <select name='pension' value={pension} onChange={e => setPension(e.target.value)}>
            <option value="0.25">0.25</option>
            <option value="1.1">1.1</option>
            <option value="2.0">2.0</option>
            <option value="3.4">3.4</option>
            <option value="5">5</option>
          </select>
          <output>   {pension_maksettava} €</output>
        </div>
        <div>
          <label>Insurance (%) </label> 
          <select name='insurance' value={insurance} onChange={e => setInsurance(e.target.value)}>
            <option value="0.25">0.25</option>
            <option value="1.1">1.1</option>
            <option value="2.0">2.0</option>
            <option value="3.4">3.4</option>
            <option value="5">5</option>
          </select>
          <output>   {insurance_maksettava} €</output>
        </div>
        <div>
          <label>Your salary after payments: </label>
            <input value= {loppu}  readonly/>
        </div>
        <button>Calculate</button>
      </form>
      </>
  )
}

export default App
