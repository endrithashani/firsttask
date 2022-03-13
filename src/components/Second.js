const myStyle={
    width:'30px',
    height:'30px',
    };
const Second = (props) => {

    return ( 
        <div className="second-container">
        <div className="second-cards">
        <div className="second-card">
        <div className="card-content">
        <h4>{props.title}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.color}}>New</button>
        <div className="upper-component">
        <img src={props.image} alt="image" style={myStyle}></img>
        <h4>{props.name}</h4>
        </div>
        </div>
        <p>{props.description}</p>

        <button className="downloads">Download</button>
        </div>
        </div>
        <div className="second-card">
        <div className="card-content">
        <h4>{props.title}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.color}}>New</button>
        <div className="upper-component">
        <img src={props.image} alt="image" style={myStyle}></img>
        <h4>{props.name}</h4>
        </div>
        </div>
        <p>{props.description}</p>

        <button className="downloads">Download</button>
        </div>
        </div>
        <div className="second-card">
        <div className="card-content">
        <h4>{props.title}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.color}}>New</button>
        <div className="upper-component">
        <img src={props.image} alt="image" style={myStyle}></img>
        <h4>{props.name}</h4>
        </div>
        </div>
        <p>{props.description}</p>
        <button className="downloads">Download</button>
        </div>
        </div>
        </div>
        <div className="second-cards">
        <div className="second-card">
        <div className="card-content">
        <h4>{props.titles}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.colors}}>Fix</button>
        <div className="upper-component">
        <img src={props.images} alt="image" style={myStyle}></img>
        <h4>{props.names}</h4>
        </div>
        </div>
        <p>{props.descriptions}</p>
        <p>{props.descriptions1}</p>
        <p>{props.descriptions2}</p>


        <button className="download_m">Download</button>
        </div>
        </div>
        <div className="second-card">
        <div className="card-content">
        <h4>{props.titles}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.colors}}>Fix</button>
        <div className="upper-component">
        <img src={props.images} alt="image" style={myStyle}></img>
        <h4>{props.names}</h4>
        </div>
        </div>
        <p>{props.descriptions}</p>
        <p>{props.descriptions1}</p>
        <p>{props.descriptions2}</p>


        <button className="download_m">Download</button>
        </div>
        </div>
        <div className="second-card">
        <div className="card-content">
        <h4>{props.titles}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.colors}}>Fix</button>
        <div className="upper-component">
        <img src={props.images} alt="image" style={myStyle}></img>
        <h4>{props.names}</h4>
        </div>
        </div>
        <p>{props.descriptions}</p>
        <p>{props.descriptions1}</p>
        <p>{props.descriptions2}</p>


        <button className="download_m">Download</button>
        </div>
        </div>
        </div>
        <div className="second-cards">
        <div className="second-card">
        <div className="card-content">
        <h4>{props.t}</h4>
        <div className="card-upper">
        <button className="new" style={{backgroundColor: props.colorss}}>Improvement</button>
        <div className="upper-component">
        <img src={props.img} alt="image" style={myStyle}></img>
        <h4>{props.n}</h4>
        </div>
        </div>
        <p>{props.d}</p>
        <p>{props.e}</p>
        <p>{props.s}</p>
        <p>{props.c}</p>

        <button className="download">Download</button>
        </div>
        </div>
        <div className="second-card">
        <div className="card-content">
        <h4>{props.t}</h4>
        <div className="card-upper">
        <button className="new" style={{backgroundColor: props.colorss}}>Improvement</button>
        <div className="upper-component">
        <img src={props.img} alt="image" style={myStyle}></img>
        <h4>{props.n}</h4>
        </div>
        </div>
        <p>{props.d}</p>
        <p>{props.e}</p>
        <p>{props.s}</p>
        <p>{props.c}</p>

        <button className="download">Download</button>
        </div>
        </div>
        <div className="second-card">
        <div className="card-content">
        <h4>{props.t}</h4>
        <div className="card-upper">
        <button className="new" style={{backgroundColor: props.colorss}}>Improvement</button>
        <div className="upper-component">
        <img src={props.img} alt="image" style={myStyle}></img>
        <h4>{props.n}</h4>
        </div>
        </div>
        <p>{props.d}</p>
        <p>{props.e}</p>
        <p>{props.s}</p>
        <p>{props.c}</p>

        <button className="download">Download</button>
        </div>
        </div>
        </div>
        </div>
     );
}
 
export default Second;
