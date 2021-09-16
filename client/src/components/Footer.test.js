// // import PokeCreate from "../src/components/PokeCreate";
// // import shallow from 'enzyme';
// // const configureStore = require(  "redux-mock-store");
// // const Adapter = require( "enzyme-adapter-react-16");
// const React = require("react")
// const {shallow, configure} = require("enzyme")
// const { PokeCreate } = require('./components/PokeCreate.jsx')

// // it("deberia tener inputs",()=>{
// //     const wrapper = shallow(<PokeCreate />)
// //     expect(wrapper.find("input").length).toBe(0)
// // })

// // import React from "react";
// // import { , shallow, mount } from "enzyme";
// // import { PokeCreate } from '../src/components/PokeCreate.jsx';

// // import { addTodo } from "../actions";
// // import AddTodoDefault, { AddTodo } from "../components/AddTodo/AddTodo.js";

// configure({ adapter: new Adapter() });

// describe("<PokeCreate />", () => {
//   describe("Estructura", () => {
//     let wrapper;
//     beforeEach(() => {
//       wrapper = shallow(PokeCreate );
//     });
//     it("Renderiza un <form>", () => {
//       expect(wrapper.find("form")).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Title"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(0).text()).toEqual("Title");
//     });

//     it('Renderiza un input con la propiedad "name" igual a "title"', () => {
//       expect(wrapper.find('input[name="title"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Description"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(1).text()).toEqual("Description");
//     });

//     it('Renderiza una textarea con la propiedad "name" igual a "description"', () => {
//       expect(wrapper.find('textarea[name="description"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Place"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(2).text()).toEqual("Place");
//     });

//     it('Renderiza un input con la propiedad "name" igual a "place"', () => {
//       expect(wrapper.find('input[name="place"]')).toHaveLength(1);
//     });

//     it('Renderiza un label con el texto igual a "Date"', () => {
//       // El orden en el que se encuentran los Labels es importante.
//       expect(wrapper.find("label").at(3).text()).toEqual("Date");
//     });

//     it('Renderiza un input con la propiedad "name" igual a "date"', () => {
//       expect(wrapper.find('input[name="date"]')).toHaveLength(1);
//     });

//     it('Renderiza un boton con el "type" "submit"', () => {
//       expect(wrapper.find('button[type="submit"]')).toHaveLength(1);
//     });
//   });
// });


const {Footer} = require( './Footer.jsx');
const { render, screen } = require ('@testing-library/react');

test('renders learn react link', () => {
  render();
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});