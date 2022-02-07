

let kepek=["sovereign.png", "magyarszentek.png",
		   "magyarszabadsag.png","aranymeteorit.jpg",
		   "aranyerme.jpg","aranydukat.png"];

let aktualis = 0;

ReactDOM.render(
    React.createElement(App),
    document.getElementById("app-container")
);

function App(){
    const [kep, setKep] = React.useState(aktualis);
    console.log(aktualis);
    return React.createElement(
        "div",
        {
            style:{
                textAlign: "center"
            },
        },
        React.createElement(
            "button",
            {
                className: "btn btn-primary m-4",
                style:{
                    width: "100px"
                },
                onClick: ()=>{
                    if(aktualis > 0){
                        aktualis--;
                        setKep(aktualis);
                    }
                }
            },
            "Előző"
        ),
        React.createElement(
            "img",
            {
                src: kepek[kep],
                style:{
                    width: "600px",
                    height: "300px"
                }
            }
        ),
        React.createElement(
            "button",
            {
                className: "btn btn-primary m-4",
                style:{
                    width: "100px"
                },
                onClick: ()=>{
                    if(aktualis < 5){
                        aktualis++;
                        setKep(aktualis);
                    }
                }
            },
            "Következő"
        )   
    )
}

