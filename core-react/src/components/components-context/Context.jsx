import React, { Fragment } from 'react';

// --- With Context
const TitleContext = React.createContext();

const LevelThree = () => (
  <TitleContext.Consumer>
    {({ title, subTitle }) => (
      <Fragment>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
      </Fragment>
    )}
  </TitleContext.Consumer>
);
const LevelTwo = () => <LevelThree />;
const LevelOne = () => <LevelTwo />;

class Context extends React.Component {
  render() {
    return (
      <TitleContext.Provider value={{ title: 'simple title', subTitle: 'Sub Title' }}>
        <LevelOne />
      </TitleContext.Provider>
    );
  }
}

// --- With Drilling
// const LevelThree = ({ title }) => <h1>{title}</h1>;
// const LevelTwo = ({ title }) => <LevelThree title={title} />;
// const LevelOne = ({ title }) => <LevelTwo title={title} />;

// class Context extends React.Component {
//   render() {
//     return <LevelOne title="Simple title" />;
//   }
// }

export default Context;
