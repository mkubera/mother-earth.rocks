jest.unmock("react-redux")
jest.unmock("redux-act")
jest.unmock('react-markdown')
jest.unmock('moment')
jest.unmock("../components/Sequentials/Sequentials.jsx")
jest.unmock("../components/Sequentials/SequentialsList.jsx")
jest.unmock("../components/Sequentials/SequentialsOne.jsx")
jest.unmock("../components/Sequentials/SequentialsOneImg.jsx")

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import SequentialsOneImg from "../components/Sequentials/SequentialsOneImg.jsx";


describe("<SequentialsOneImg />", () => {

  const data = { name: "cover", img: "img/path/1", title: "T1" }

  var seqoneimg;

  beforeEach(() => {
    seqoneimg = TestUtils.renderIntoDocument( <SequentialsOneImg name={data.name} img={data.img} title={data.title} /> )
  })

  it("should render", () => {
    expect(TestUtils.isCompositeComponent(seqoneimg)).toBeTruthy()
  })

  it("should build an image from received data", () => {
    const img = TestUtils.findRenderedDOMComponentWithTag(seqoneimg, 'img')
    const name = TestUtils.findRenderedDOMComponentWithTag(seqoneimg, 'p')

    expect(img.src).toBe("images/img/path/1")
    expect(img.alt).toBe("cover: T1")
    expect(name.textContent).toBe("cover")
  })

  it("should enlarge the image on click of the button", () => {
    const seqoneimgNode = ReactDOM.findDOMNode(seqoneimg)

    expect(seqoneimgNode.className).toBe("img img-notenlarged")
    TestUtils.Simulate.click(
      TestUtils.findRenderedDOMComponentWithClass(seqoneimg, 'img')
    )
    expect(seqoneimgNode.className).toBe("img img-enlarged")
  })

})
