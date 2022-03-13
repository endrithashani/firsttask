const Card =[
    {
        id:1,
        image: "./images/com.png",
        name:"The TLD",
        description:'Does the domain extension math the language of the domain name?'
    },
    {
        id:2,
        image: "../images/ribbon.png",
        name:"International recognition",
        description:'Can the domain name be used on an international scale?'
    },
    {
        id:3,
        image:"./images/discount.png",
        name:"Sales Opportunities",
        description:'Can the domain name be used on an international scale?'
    }
]

const Card2=[

    {
        id:4,
        image:"./images/rulers.png",
        name:"Domain Length",
        description:'Is the domain short enough to remember?'
    },
    {
        id:5,
        image: "./images/search.png",
        name:"Search engine",
        description:'Does the domain follow search engine guidelines?'
    },
    {
        id:6,
        image:"./images/text.png",
        name:"Typo susceptibility",
        description:'How high is the risk of mistyping the domain name?'
    }
]
const Card3=[
    {
        id:7,
        image:"./images/chat.png",
        name:"Language",
        description:'How complex is the actual domain name?'
    },
    {
        id:8,
        image: "./images/propaganda.png",
        name:"Advertising Potential",
        description:'Could the domain be used for advertising campaigns?'
    },
    {
        id:9,
        image:"./images/idea.png",
        name:"Bussines potential",
        description:'Can the domain name be used as your company address?'
    },
]
const myStyle={
    width:'50px',
    height:'50px',
    };
const First = () => {
    return ( 
        <div className="container">
        <div className="cards">
        {Card.map((cardss) =>{
            const{image , name ,description} = cardss;
            return (
                <div className="card">
                <div className="image">
                    <img src={image} alt="first" style={myStyle}></img>
                </div>
                
                <div className="text">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                </div>
            )
        
        })
    }   
    </div>
    <div className="cards">
        {Card2.map((cardss) =>{
            const{image , name ,description} = cardss;
            return (
                <div className="card">
                <div className="image">
                    <img src={image} alt="first" style={myStyle}></img>
                </div>
                
                <div className="text">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                </div>
            )
        })}
        </div>
        <div className="cards">
        {Card3.map((cardss) =>{
            const{image , name ,description} = cardss;
            return (
                <div className="card">
                <div className="image">
                    <img src={image} alt="first" style={myStyle}></img>
                </div>
                
                <div className="text">
                    <h1>{name}</h1>
                    <p>{description}</p>
                </div>
                </div>
            )
        })}
        </div>
        </div>
     );
}
 
export default First;