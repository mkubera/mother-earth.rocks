jest.unmock("../components/Reuse/FormTextarea.jsx")

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import FormTextarea from "../components/Reuse/FormTextarea.jsx";


describe("<FormTextarea />", () => {

  const data = {
    name: "text", value: "", note: "be good"
  }
  var change_happened = false;
  const checkChange = () => {
    change_happened = true
  }

  var formtextarea;

  beforeEach(() => {
    formtextarea = TestUtils.renderIntoDocument( <FormTextarea {...data} onChange={checkChange} /> )
  })

  it("should render", () => {
    expect(TestUtils.isCompositeComponent(formtextarea)).toBeTruthy()
  })

  it("should build a full form textarea field from the given data", () => {
    const label = TestUtils.findRenderedDOMComponentWithTag(formtextarea, 'label')
    const textarea = TestUtils.findRenderedDOMComponentWithTag(formtextarea, 'textarea')

    expect(label.textContent).toBe("Text (be good)")

    expect(textarea.name).toBe("text")
    expect(textarea.value).toBe("")
  })

  it("should change value", () => {
    const textareaNode = ReactDOM.findDOMNode(formtextarea)

    expect(change_happened).toBe(false)
    TestUtils.Simulate.change(
      textareaNode.querySelector('textarea')
    )
    expect(change_happened).toBe(true)
  })

})
