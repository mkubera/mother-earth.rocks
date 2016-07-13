jest.unmock("react-redux")
jest.unmock("redux-act")
jest.unmock('react-markdown')
jest.unmock('moment')
jest.unmock("../components/Sequentials/Sequentials.jsx")
jest.unmock("../components/Sequentials/SequentialsList.jsx")
jest.unmock("../components/Sequentials/SequentialsOne.jsx")
jest.unmock("../components/Sequentials/SequentialsOneImg.jsx")
jest.unmock("../components/Sequentials/SequentialsOneDownload.jsx")

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import SequentialsOneDownload from "../components/Sequentials/SequentialsOneDownload.jsx";


describe("<SequentialsOneDownload />", () => {

  const data = "download/path/1";
  var seqonedwnl;

  beforeEach(() => {
    seqonedwnl = TestUtils.renderIntoDocument( <SequentialsOneDownload download={data} /> )
  })

  it("should render", () => {
    expect(TestUtils.isCompositeComponent(seqonedwnl)).toBeTruthy()
  })

  it("should contain a download link to a sequential", () => {
    const a = TestUtils.findRenderedDOMComponentWithTag(seqonedwnl, 'a')

    expect(a.href).toBe("files/download/path/1")
  })

})
