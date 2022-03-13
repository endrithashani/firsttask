import First from "./components/First";
import Second from "./components/Second";

const image = require('./images/profile.png')
function App() {
  return (
    <div className="App">
    <First/>
    <Second
    image={image}
    title="3.3.0 (14/05/2018)"
    name="Kevin Joe"
    description="File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization "
    color="#008000"
    images={image}
    titles="3.1.0 (20/05/2015)"
    names="Kevin Joe"
    descriptions="Introducing Host Cloud Drive-virtual drive functionality"
    descriptions1="New Share options and management" 
    descriptions2="New , more user friendly design Sync
    optimizations Various performance
    improvments and bug fixes"
    colors="#0000FF"
    img={image}
    t="3.1.0 (20/05/2015)"
    n="Kevin Joe"
    d="Added Settings for Auto start"
    e="Added Update Notification"
    s="Speed Optimization"
    c="Bug fixes"
    colorss="#8A2BE2"

    />
   
  
    
    </div>
  );
}

export default App;
