import React from "react";
const List = (props) => {
let condition =props.text==='All'?["Active", "Completed"]:props.text;
console.log(condition);
  let listTsk =
    props.task &&
    props.task.map((it, index) =>
    (condition.includes(it.status)) &&  <tr key={index} >
          <td>{it.item}</td>
          <td>{it.status}</td>
        </tr>
    );

  return <>{listTsk}</>;
};

export default List;
