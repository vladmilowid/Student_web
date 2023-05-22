function HelloWorld() {
    return (
        <div>
            <h1>Здравсвуйте!</h1>
            <p>Пример фунционального опредление компонента.</p>
      </div>
    );
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);

/*
class HelloWorld extends React.Component {
    render() {
        return (
            <div>
                <h1>Hola!</h1>
                <p>Пример опредления компонента используя класс ES6.</p>
            </div>
      );
    }
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
  );*/

/*
const HelloWorld = () => {
    return (
        <div>
            <h1>Hello!</h1>
            <p>Пример опредления компонента с помощью стрелочной функции.</p>
        </div>
    );
}
ReactDOM.render(
    <HelloWorld />,
    document.getElementById('root')
);*/