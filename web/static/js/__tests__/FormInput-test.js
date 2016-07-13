jest.unmock("../components/Reuse/FormInput.jsx")

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import FormInput from "../components/Reuse/FormInput.jsx";


describe("<FormInput />", () => {

  const data = {
    name: "title", type: "text", value: "", note: "be good"
  }
  var change_happened = false;
  const checkChange = () => {
    change_happened = true
  }

  var forminput;

  beforeEach(() => {
    forminput = TestUtils.renderIntoDocument( <FormInput {...data} onChange={checkChange} /> )
  })

  it("should render", () => {
    expect(TestUtils.isCompositeComponent(forminput)).toBeTruthy()
  })

  it("should build a full form input field from the given data", () => {
    const label = TestUtils.findRenderedDOMComponentWithTag(forminput, 'label')
    const input = TestUtils.findRenderedDOMComponentWithTag(forminput, 'input')

    expect(label.textContent).toBe("Title (be good)")

    expect(input.name).toBe("title")
    expect(input.type).toBe("text")
    expect(input.value).toBe("")
  })

  it("should change value", () => {
    const forminputNode = ReactDOM.findDOMNode(forminput)

    expect(change_happened).toBe(false)
    TestUtils.Simulate.change(forminputNode.querySelector('input'))
    expect(change_happened).toBe(true)
  })

})
