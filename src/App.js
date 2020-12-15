import './App.css';
import GridView from './components/GridView';
import MatToolbar from './components/mat_toolbar';
import Acc from './components/acc';




function App() {
  return (
    <div >
      <MatToolbar />
      <div className=" body_style">

        <Acc />
        <div className="grid">
          <GridView />
        </div>
        {/* divider */}
        <div className="hr" ></div>
        {/* <h2 _ngcontent-ofg-c212="" className="sectionTitle">See other dashboard solutions</h2>
        <p _ngcontent-ofg-c212="" class="sectionSubtitle">Experience the same dataset with a different technology</p>
        <div className="divider"></div> */}

      </div>

    </div>
  );
}

export default App;
