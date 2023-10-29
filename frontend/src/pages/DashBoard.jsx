import React from 'react';
import DSB from "../components/Dashboard.module.css"
const DashBoard = () => {
  return (
    <>
      <div className={DSB.container}>
        <div className={DSB.sidebar}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
        <div className={DSB.main}>

        </div>
      </div>
    </>
  )
}

export default DashBoard;