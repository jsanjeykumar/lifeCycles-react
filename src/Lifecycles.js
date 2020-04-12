import React from "react";

//mounting - first time when gets loaded
//render - display
//componentDidMount - component will be mounted

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//updating
//new props,setState,forceupdate
//shouldComponentUpdate - decides whether the component should be updated or not
//true - will be updated , false - wont be updated

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//unmount
//after finished rendering
class Lifecycles extends React.Component {
  constructor() {
    super(); //getting extending class properties
    console.log("constructor!");
  }

  componentDidMount() {
    //preferred functions  - api call
    console.log("componentDidMount!");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate!");
  }

  componentWillUnmount() {
      //clean unwanted memory
    console.log("componentWillUnmount!");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate!", nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log("render!");
    return (
      <div className="lifecycles">
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
