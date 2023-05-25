import React from "react";

class Home5 extends React.Component {
    render() {
      return <div>
              <p>Имя: {this.props.name}</p>
              <p>Возраст: {this.props.age}</p>
      </div>;
    }
}

// function Home5(props) {
//     return <div>
//         <p>Имя: {props.name}</p>
//         <p>Возраст: {props.age}</p>
//     </div>;
// }

// const Home5 = (props) => {

//     const { name, age } = props;
//     return (<div>
//         <p>Имя: {name}</p>
//         <p>Возраст: {age}</p>
//     </div>);
// }

  
  


  

export default Home5;