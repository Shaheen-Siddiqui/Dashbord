import React from 'react'
const Dashbord = () => {
  return (
    <div>

      <div className="sidebar">
          <div className="sidebar-brand">
              <h2><span className="lab la-accusoft"></span> Accusoft</h2>
          </div>
          <div className="sidebar-menu">
              <ul>
                    <li><a className="active" href=""><span className="las la-igloo"></span>
                    <span>Dashbord</span></a>
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
      </div>
<div className="main-contant">
    <header className="header">
        <h2>
        <lable for="nav-toggle">
            <span className="las la-bars"></span>
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
    <div className="cards">
        <div className="card-signal">
            <div>
                <h1>54</h1>
                <span>Customers</span>
            </div>
            <div>
                <span className="las la-users"></span>
            </div>
        </div>

        <div className="card-signal">
            <div>
                <h1>79</h1>
                <span>Projects</span>
            </div>
            <div>
                <span className="las la-clipboard-list "></span>
            </div>
        </div>

        <div className="card-signal">
            <div>
                <h1>124</h1>
                <span>orders</span>
            </div>
            <div>
                <span className="las la-shopping-bag"></span>
            </div>
        </div>

        <div className="card-signal">
            <div>
                <h1 className="specialH1">$6k</h1>
                <span>Income</span>
            </div>
            <div>
                <span className="lab la-google-wallet"></span>
            </div>
        </div>
    </div>
</main>

<div className="OuterForAll">
<div className="recent-grid">
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
                     <tbody>
                         <tr>
                             <td>UI/UX Design</td>
                             <td>UI Team</td>
                             <td><span className="status purple"></span>rewieve</td>
                             
                         </tr>
                         <tr>
                             <td>Web Devlopmemt</td>
                             <td>Frontend</td>
                             <td><span className="status pink"></span>Progress</td>
                             
                         </tr>
                         <tr>
                             <td>Unshop app</td>
                             <td>Mobile team</td>
                             <td><span className="status orange"></span>Pending</td>
                         </tr>
{/*  */}
<tr>
                             <td>UI/UX Design</td>
                             <td>UI Team</td>
                             <td><span className="status purple"></span> rewieve</td>
                             
                         </tr>
                         <tr>
                             <td>Web Devlopmemt</td>
                             <td>Frontend</td>
                             <td><span className="status pink"></span>Progress</td>
                             
                         </tr>
                         <tr>
                             <td>Unshop app</td>
                             <td>Mobile team</td>
                             <td><span className="status orange"></span>Pending</td>
                         </tr>
                         <tr>
                             <td>UI/UX Design</td>
                             <td>UI Team</td>
                             <td><span className="status purple"></span>rewieve</td>
                             
                         </tr>
                         <tr>
                             <td>Web Devlopmemt</td>
                             <td>Frontend</td>
                             <td><span className="status pink"></span>Progress</td>
                             
                         </tr>

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

            <div className="card-body">
           <div className="costomers">
               <div className="info">
                   <img className="costomeImage" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                   <div>
                       <h4>Lewis S. chunnigum </h4>
                       <small>CEO Excerpt </small>
                   </div>
               </div>
            <div className="contact">
               <span className="las la-user-circle"></span>
               <span className="las la-comment"></span>
               <span className="las la-phone"></span>
            </div>
           </div>
           {/*  */}
           <div className="costomers">
               <div className="info">
                   <img className="costomeImage" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                   <div>
                       <h4>Lewis S. chunnigum </h4>
                       <small>CEO Excerpt </small>
                   </div>
               </div>
            <div className="contact">
               <span className="las la-user-circle"></span>
               <span className="las la-comment"></span>
               <span className="las la-phone"></span>
            </div>
           </div><div className="costomers">
               <div className="info">
                   <img className="costomeImage" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                   <div>
                       <h4>Lewis S. chunnigum </h4>
                       <small>CEO Excerpt </small>
                   </div>
               </div>
            <div className="contact">
               <span className="las la-user-circle"></span>
               <span className="las la-comment"></span>
               <span className="las la-phone"></span>
            </div>
           </div><div className="costomers">
               <div className="info">
                   <img className="costomeImage" src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                   <div>
                       <h4>Lewis S. chunnigum </h4>
                       <small>CEO Excerpt </small>
                   </div>
               </div>
            <div className="contact">
               <span className="las la-user-circle"></span>
               <span className="las la-comment"></span>
               <span className="las la-phone"></span>
            </div>
           </div>
           
</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Dashbord;
