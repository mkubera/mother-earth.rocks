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
import SequentialsOne from "../components/Sequentials/SequentialsOne.jsx";


describe("<SequentialsOne />", () => {

  const data =
    {
      id: "1", img: "img/path/1", img2: "img2/path/1", download: "download/path/1",
      title: "T1", description: "Txt1", price: 0, pages: 2,
      authors: { writer: "W1", artist: "A1" },
      ts: "2016-07-04T14:55:02.921836Z"
    }

  var seqone;

  beforeEach(() => {
    seqone = TestUtils.renderIntoDocument( <SequentialsOne one={data} /> )
  })

  it("should render", () => {
    expect(TestUtils.isCompositeComponent(seqone)).toBeTruthy()
  })

  it("should build a sequentials list from received sequentials items", () => {
    const title_with_price = TestUtils.findRenderedDOMComponentWithTag(seqone, 'h3')
    const description = TestUtils.findRenderedDOMComponentWithClass(seqone, 'one-sequential-description')
    const details = TestUtils.findRenderedDOMComponentWithClass(seqone, 'one-sequential-details')

    expect(title_with_price.textContent).toBe("T1 [free]")
    expect(description.textContent).toBe("Txt1")
    expect(details.textContent).toBe("released: 4th July 2016 written by W1, drawn by A1 pages count: 2")
  })

})
