const Card= [
    {
        image:"./images/profile.png",
        title:"3.3.0 (14/05/2018)",
        button:"New",
        name:"Kevin Joe",
        description:"File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization ",
        color:"#008000",
    },
    {
        image:"./images/profile.png",
        title:"3.1.0 (14/05/2018)",
        button:"Fix",
        name:"Kevin Joe",
        description:"Introducing Host Cloud Drive-virtual drive functionality New Share options and management New , more user friendly design Sync optimizations Various performance improvments and bug fixed",
        color:"#0000FF",
    },
    {
        image:"./images/profile.png",
        title:"3.1.0 (20/05/2015)",
        button:"Improvement",
        name:"Kevin Joe",
        description:"Added Settings for Auto start Added Update Notification  Speed Optimization  Bug fixes " ,
        color:"#8A2BE2",
    },
    {
        image:"./images/profile.png",
        title:"3.3.0 (14/05/2018)",
        button:"New",
        name:"Kevin Joe",
        description:"File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization ",
        color:"#008000",
    },
    {
        image:"./images/profile.png",
        title:"3.1.0 (14/05/2018)",
        button:"Fix",
        name:"Kevin Joe",
        description:"Introducing Host Cloud Drive-virtual drive functionality New Share options and management New , more user friendly design Sync optimizations Various performance improvments and bug fixed",
        color:"#0000FF",
    },
    {
        image:"./images/profile.png",
        title:"3.1.0 (20/05/2015)",
        button:"Improvement",
        name:"Kevin Joe",
        description:"Added Settings for Auto start Added Update Notification  Speed Optimization  Bug fixes " ,
        color:"#8A2BE2",
    },
    {
        image:"./images/profile.png",
        title:"3.3.0 (14/05/2018)",
        button:"New",
        name:"Kevin Joe",
        description:"File system changed from Dokan to CBFS Host Cloud Drive is now a network drive Various bug fixes and stability improvements Share premissions re-design and optimization ",
        color:"#008000",
    },
    {
        image:"./images/profile.png",
        title:"3.1.0 (14/05/2018)",
        button:"Fix",
        name:"Kevin Joe",
        description:"Introducing Host Cloud Drive-virtual drive functionality New Share options and management New , more user friendly design Sync optimizations Various performance improvments and bug fixed",
        color:"#0000FF",
    },
    {
        image:"./images/profile.png",
        title:"3.1.0 (20/05/2015)",
        button:"Improvement",
        name:"Kevin Joe",
        description:"Added Settings for Auto start Added Update Notification  Speed Optimization  Bug fixes " ,
        color:"#8A2BE2",
    },
]
const myStyle={
    width:'30px',
    height:'30px',
    };
const Second = (props) => {
    return ( 
        <div className="container-second">
        {Card.map((props) =>{
            const{image , title,button, name ,description,color} = props;
            return (
        <div className="container-card">
        <div className="card-content">
        <h4>{props.title}</h4>
        <div className="card-upper">
        <button className="new_s" style={{backgroundColor: props.color}}>{props.button}</button>
        <img src={props.image} alt="image" style={myStyle}></img>
        <h4>{props.name}</h4>
        </div>
        <p>{props.description}</p>
        <button className="downloads">Download</button>
        </div>
        </div>
        )
        
    })
}   
    </div>
   
     );
}
 
export default Second;
