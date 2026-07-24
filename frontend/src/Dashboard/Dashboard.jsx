import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard({ setPage }){
 const [updateStatus, setUpdateStatus] = useState("Ready");
const updateVersion = () => {

  if (window.electronAPI) {

    window.electronAPI.checkUpdate();

  } else {

    console.log("Electron API not available");

  }

};

useEffect(()=>{

  if(window.electronAPI){

    window.electronAPI.onUpdateStatus(
      (message)=>{

        setUpdateStatus(message);

      }
    );

  }

},[]);


  const logout = () => {
    setPage("login");
  };

  return (

    <div className="dashboard-container">


      {/* Sidebar */}

     <aside className="sidebar">

  <div className="logo">
    Electron Updater
  </div>


  <nav>

    <button className="active">
      Dashboard
    </button>

    <button>
      Settings
    </button>

    <button>
      Logs
    </button>

  </nav>


  <button
    className="update-version-btn"
    onClick={updateVersion}
  >
    Update Version
  </button>


</aside>



      {/* Main Content */}

      <main className="dashboard-content">


        <header>

          <div>
            <h1>
              Dashboard for checkinggggg
            </h1>

            <p>
              Welcome back, Admin
            </p>

            <h2>Checking version changes...-_- ...</h2>

          
          </div>


          <div className="profile">

           
        <button className="logout" onClick={logout}>
          Logout
        </button>

          </div>


        </header>



        {/* Version Cards */}

        <section className="cards">


          <div className="card">

            <h3>
              dummyy
            </h3>

            <h2>
              Description
            </h2>

            <span className="success">
              .....
            </span>

          </div>



          <div className="card">

            <h3>
              dummy 
            </h3>

            <h2>
              Description
            </h2>

            <span className="update">
              ...
            </span>

          </div>



          <div className="card">

            <h3>
              Update Status
            </h3>

            <h2>
              Ready
            </h2>

            <span>
              No download running
            </span>

          </div>


        </section>



        {/* Update Section */}


        {/* <section className="update-box">


          <h2>
            Application Update
          </h2>


          <p>
            Check GitHub releases and install the latest version.
          </p>


          <button>

            Update Version

          </button>


          <div className="progress">

            <div className="progress-bar">

            </div>

          </div>


        </section> */}



        {/* system section */}

        {/* <section className="system">


          <h2>
            System Information
          </h2>


          <div className="info-grid">


            <div>
              <strong>
                OS
              </strong>

              <p>
                Windows
              </p>
            </div>



            <div>
              <strong>
                Electron
              </strong>

              <p>
                v38
              </p>
            </div>



            <div>
              <strong>
                Update Server
              </strong>

              <p>
                GitHub Release
              </p>
            </div>


          </div>


        </section> */}


      </main>


    </div>

  );
}


export default Dashboard;