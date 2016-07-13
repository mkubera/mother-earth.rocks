jest.unmock("react-redux")
jest.unmock("redux-act")
jest.unmock('react-markdown')
jest.unmock('moment')
jest.unmock("../components/News/News.jsx")
jest.unmock("../components/News/NewsList.jsx")
jest.unmock("../components/News/NewsOne.jsx")

import React from "react";
import ReactDOM from "react-dom";
import TestUtils from "react-addons-test-utils";
import NewsList from "../components/News/NewsList.jsx";
import NewsOne from "../components/News/NewsOne.jsx";


describe("<NewsList />", () => {

  const news = [
    {id: "1", title: "T1", text: "Txt1", author: "A1", ts: "2016-07-04T14:55:02.921836Z"},
    {id: "2", title: "T2", text: "Txt2", author: "A2", ts: "2016-07-05T14:55:02.921836Z"}
  ]
  var newslist;
  var newslistNode;

  beforeEach(() => {
    newslist = TestUtils.renderIntoDocument( <NewsList news={news} /> )
    // newslistNode = ReactDOM.findDOMNode(newslist)
  })

  it("should render", () => {
    expect(TestUtils.isCompositeComponent(newslist)).toBeTruthy()
  })

  it("should build a news list from received news items", () => {
    const titles = TestUtils.scryRenderedDOMComponentsWithTag(newslist, 'h3')
    const timestamps = TestUtils.scryRenderedDOMComponentsWithClass(newslist, 'content-news-date')
    const authors = TestUtils.scryRenderedDOMComponentsWithTag(newslist, 'i')
    const texts = TestUtils.scryRenderedDOMComponentsWithClass(newslist, 'content-news-text')

    expect(titles.length).toBe(2);
    expect(timestamps.length).toBe(2);
    expect(authors.length).toBe(2);
    expect(texts.length).toBe(2);

    expect(titles[0].textContent).toBe("T1")
    expect(titles[1].textContent).toBe("T2")

    expect(timestamps[0].textContent).toBe("4 JULY 2016")
    expect(timestamps[1].textContent).toBe("5 JULY 2016")

    expect(authors[0].textContent).toBe("by A1")
    expect(authors[1].textContent).toBe("by A2")

    expect(texts[0].children[0].textContent).toBe("Txt1")
    expect(texts[1].children[0].textContent).toBe("Txt2")
  })

})
