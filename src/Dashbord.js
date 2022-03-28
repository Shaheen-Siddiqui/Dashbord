import React,{useState} from 'react';
import {CustomerArr} from './CustomerArr';
import {RecentProjectArr} from './CustomerArr';
import {CardArr} from './CustomerArr';


const Dashbord = () => {

    let[toggle,setToggle]=useState(true);
    const toggleHandler =()=>{
        setToggle(!toggle)
        console.log(toggle);
    }
/////////////////////// internal stylings ///////////////////////
let maincontant;
let recentgrid;
let header;
let cardSignal;

if (toggle==false) {
    maincontant={
        margin:'0',
        marginTop:'-2.8rem'
    }
    header={
        width:"80rem",
        margin:"0rem",
        position:"fixed",
        left:"0"
    }
    recentgrid={
        marginLeft: "2rem",
        width: "74%"
    }
    cardSignal={
        width: "100%",
    }
}

  return (
    <div>
    {/* <input type="checkbox" id="nav-toggle" />    */}
 {toggle?
      (<div className="sidebar">
          <div className="sidebar-brand">
              <h2><span className="lab la-accusoft"></span> Accusoft</h2>
          </div>
          <div className="sidebar-menu">
              <ul>
                    <li><a className="active" href=""><span className="las la-igloo"></span>
                    <span>Dashbord</span>

                    </a>
                    </li>

                    <li><a href=""><span className="las la-user"></span>
                    <span>Customers</span></a>
                    </li>

                    <li><a href=""><span className="las la-clipboard-list"></span>
                    <span>Projects</span></a>
                    </li>

                    <li><a href=""><span className="las la-shopping-bag"></span>
                    <span>Orders</span></a>
                    </li>

                    <li><a href=""><span className="las la-receipt"></span>
                    <span>Inventory</span></a>
                    </li>

                    <li><a href=""><span className="las la-user-circle"></span>
                    <span>Accounts</span></a>
                    </li>

                    <li><a href=""><span className="las la-clipboard-list"></span>
                    <span>Tasks</span></a>
                    </li>
              </ul>
          </div>
      </div>):null}
<div className="main-contant" style={maincontant}>
    <header className="header" style={header}>
        <h2>
        <lable for="nav-toggle">
            <span className="las la-bars" onClick={toggleHandler} ></span>
        </lable>
            Dashbord
        </h2>
        <div className="search-wrapper">
            <span className="las la-search"></span>
            <input className="bg-change-input" type="text" placeholder="Search here" />
        </div>
        <div className="user-wrapper">
            <img className="costomeImage" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
            <div>
                <h4>Rokezrs Doe </h4>
                <span>Super admin</span>

            </div>
        </div>
    </header>
<main>
{/* UsedHigherOrder Function on "Card Body" Component */}

    <div className="cards">
    {
        CardArr.map(({number,todoThings,Class})=>{
            return(<>
        <div className="card-signal" style={cardSignal}>
            <div>
                <h1>{number}</h1>
                <span>{todoThings}</span>
            </div>
            <div>
                <span className={Class}></span>
            </div>
        </div>
            </>)
        })
    }
        
    </div>
</main>
<div className="OuterForAll Fortoggle">
<div className="recent-grid" style={recentgrid}>
    <div className="projects">
        <div className="card Right-sideCard">
            <div className="card-header">
                <h2>Recent Projects</h2>
                <button>see all <span className="las la-arrow-right"></span> </button>
            </div>

            <div className="card-body">
            <div className="table-responsive">
                <table style={{width:"100%"}}>
                     <thead>
                         <tr>
                             <td>Projects</td>
                             <td>department</td>
                             <td>Status</td>

                         </tr>
                     </thead>
{/* UsedHigherOrder Function on "Recent Projects" Component */}

                     <tbody>
                    {
                        RecentProjectArr.map(({UIUXDesign,UITeam,rewieve,WebDevlopmemt,Frontend,Progress,Unshopapp,Mobileteam,Pending})=>{
                            return(<>
                                <tr>
                             <td>{UIUXDesign}</td>
                             <td>{UITeam}</td>
                             <td><span className="status purple"> </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{rewieve}</td>
                             
                         </tr>
                         <tr>
                             <td>{WebDevlopmemt}</td>
                             <td>{Frontend}</td>
                             <td><span className="status pink"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Progress}</td>
                             
                         </tr>
                         <tr>
                             <td>{Unshopapp}</td>
                             <td>{Mobileteam}</td>
                             <td><span className="status orange"></span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{Pending}</td>
                         </tr>
                            </>)
                        })
                    }
                         
                     </tbody>
                </table>
                </div>
            </div>

        </div>
    </div>
</div>

<div className="costomers AnotherDown">
<div className="card leftsideCard">
            <div className="card-header">
                <h3>News Customer</h3>
                <button>see all <span className="las la-arrow-right"></span> </button>
            </div>
{/* UsedHigherOrder Function on "News Customer" Component */}
         <div className="card-body">
         {
            CustomerArr.map(({img,pname,Eligibility})=>{
            return(
                <div className="costomers">
               <div className="info">
                   <img className="costomeImage" src={img} alt="" />
                   <div>
                       <h4>{pname}</h4>
                       <small>{Eligibility}</small>
                   </div>
               </div>
            <div className="contact">
               <span className="las la-user-circle"></span>
               <span className="las la-comment"></span>
               <span className="las la-phone"></span>
            </div>
           </div>)

            })
         }
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Dashbord;
