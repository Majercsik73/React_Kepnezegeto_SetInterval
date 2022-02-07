
let kepek = ["sovereign.png", "magyarszentek.png", "magyarszabadsag.png", "aranymeteorit.jpg", "aranyerme.jpg", "aranydukat.png"];
let aktualis = 0;
ReactDOM.render(React.createElement(App), document.getElementById("app-container"));

function App() {
  const [kep, setKep] = React.useState(aktualis);
  React.useEffect(() => {
    const lapozo = setInterval(() => {
      if (aktualis < 5) {
        aktualis++;
      } else {
        aktualis = 0;
      }
      //console.log(aktualis);
      setKep(aktualis);
    }, 2000); // clearing interval

    return () => clearInterval(lapozo);
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: kepek[kep],
    style: {
      width: "600px",
      height: "300px"
    }
  }));
}