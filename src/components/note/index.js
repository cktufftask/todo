import React  from "react";
import "./index.css";
import Menu from './Menu';
import List from './List';

const  Note=()=> {
    const [task,setTask]=React.useState([]);
    const [item,setItem]=React.useState('');
    const [status,setStatus]=React.useState('');
    const [selectedTab,setSelectedTab]=React.useState('All');
    const [tab,setTab]=React.useState([{tab:'All',status:'active'},{tab:'Active',status:''},{tab:'Completed',status:''}]);

    const clickHandler=(e)=>{
      if(item){
        let temp=task;
       temp.push({item:item,status:status||'Active' });
       setTask(temp);
       setItem('');
       setStatus('');
      }
    }
  
    const activeHandler =(e, item)=>{
      let tabCopy=tab;
      const tabCopy1 = tabCopy.map((i)=>i.tab===item?{tab:i.tab,status:'active'}:{tab:i.tab,status:''});
      setTab(tabCopy1);
      setSelectedTab(item);
    }
    return (
      <div className="layout-column align-items-center justify-content-start">
        <section className="layout-row align-items-center justify-content-center mt-30">
          <input data-testid="input-note-name" type="text" className="large mx-8"
                placeholder="Note Title"  value={item} onChange={(e)=>setItem(e.target.value)}  required/>
          <select data-testid="select-note-status" className="large mx-8"
                placeholder="Note Status" value={status} onChange={(e)=>setStatus(e.target.value)} >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
           </select>       
          <button className="" data-testid="submit-button" onClick={clickHandler}>Add Note</button>
        </section>
        <div className="mt-50">
          <ul className="tabs">
             <Menu tab={tab} activeHandler={activeHandler} />
          </ul>
        </div>
        <div className="card w-40 pt-30 pb-8">
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody data-testid="noteList">
             <List task={task} text={selectedTab} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
export default Note;
