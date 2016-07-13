jest.unmock("../components/Reuse/FormButton.jsx")

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import FormButton from "../components/Reuse/FormButton.jsx";


describe("<FormButton />", () => {

  var click_happened = false;
  const checkClick = () => {
    click_happened = true
  }
  var button;
  var buttonNode;

  beforeEach(() => {
    button = TestUtils.renderIntoDocument(
      <div><FormButton onClick={checkClick} text="Send" /></div>
    )
    buttonNode = ReactDOM.findDOMNode(button).children[0]
  })

  it("should render", () => {
    expect(buttonNode.textContent).toBe("Send")
  })

  it("should click", () => {
    //check before and after the click of <button> in <FormButton />
    expect(click_happened).toBe(false)
    TestUtils.Simulate.click(buttonNode.children[0])
    expect(click_happened).toBe(true)
  })

})
