import React from 'react'
import _ from 'lodash'
import {socket, utils_channel, AdminAddNewsForm, AdminAddSequentialForm, AdminInitdb} from 'web/static/js/paths'

export default class Admin extends React.Component {
  constructor(props) {
    super(props)
    this.state =
      { new_news:
        { title: ""
        , text: ""
        , author: ""
        }
      , new_sequential:
        { img: ""
        , img2: ""
        , download: ""
        , title: ""
        , description: ""
        , pages: 0
        , price: 0
        , authors:
          { writer: ""
          , artist: ""
          }
        }
      }

    this.initDb = this.initDb.bind(this)
    this.onChangeNewNews = this.onChangeNewNews.bind(this)
    this.onChangeNewSequential = this.onChangeNewSequential.bind(this)
    this.submitFormNewNews = this.submitFormNewNews.bind(this)
    this.submitFormNewSequential = this.submitFormNewSequential.bind(this)

    this.db_init = socket.channel("admin:db_init", {})
    this.news_insert = socket.channel("news:insert", {})
    this.sequentials_insert = socket.channel("sequentials:insert", {})
  }


  componentDidMount() {
    utils_channel.join_1(this.news_insert)
    utils_channel.join_1(this.sequentials_insert)
  }

  componentWillUnmount() {
    utils_channel.leave_1(this.news_insert)
    utils_channel.leave_1(this.sequentials_insert)
  }


  initDb() {
    // 1. Join Phoenix channel ("admin:db_init")
    // 2. If don't exist already, Phoenix will create "mother" db + 2 tables ("news", "sequentials")
    // 3. Leave the channel.
    utils_channel.joinAndLeave_1(this.db_init)
  }

  onChangeNewNews(e) {
    const t = e.target
    const name = t.name
    const val = t.value
    var update = {}

    switch (name) {
      case "title":
        update = {title: val}; break;
      case "text":
        update = {text: val}; break;
      case "author":
        update = {author: val}; break;
    }

    this.setState((prevState, currentProps) => {
      var state = prevState;
      state.new_news = {...prevState.new_news, ...update}
      return state
    })
  }

  onChangeNewSequential(e) {
    const t = e.target
    const name = t.name
    const val = t.value
    var update = {}

    switch (name) {
      case "img":
        update = {img: val}; break;
      case "img2":
        update = {img2: val}; break;
      case "download":
        update = {download: val}; break;
      case "title":
        update = {title: val}; break;
      case "description":
        update = {description: val}; break;
      case "pages":
        update = {pages: _.toSafeInteger(val)}; break;
      case "price":
        update = {price: _.toSafeInteger(val)}; break;
      case "authors.writer":
        update = {authors: {writer: val} }; break;
      case "authors.artist":
        update = {authors: {artist: val} }; break;
    }

    this.setState((prevState, currentProps) => {
      var state = prevState;
      if (update.authors)
        state.new_sequential.authors = {...prevState.new_sequential.authors, ...update.authors}
      else
        state.new_sequential = {...prevState.new_sequential, ...update}
      return state
    })
  }

  submitFormNewNews(e) {
    e.preventDefault()

    this.news_insert.push("new", { ...this.state.new_news })
      .receive("ok", () => {
        this.setState({ new_news: {title: "", text: "", author: ""} })
        alert("News added successfully.")
      })
      .receive("error", () => alert("Form Error... :/"))
  }

  submitFormNewSequential(e) {
    e.preventDefault()
    console.log(this.state);

    this.sequentials_insert.push("new", {
      data: {...this.state.new_sequential}
    })
      .receive("ok", () => {
        this.setState({ new_sequential: {img:"", title:"", description:"", pages:0, price:0, authors: {writer:"", artist:""}} })
        alert("Sequential added successfully.")
      })
      .receive("error", () => alert("Form Error... :/"))
  }

  render() {
    return (
      <div className="content-admin">
        <h1>
          <span className="octicon octicon-database"></span>
          Admin
        </h1>
        <br />

        <AdminInitdb initDb={this.initDb} />
        <br/>

        <AdminAddNewsForm state={this.state.new_news} onChange={this.onChangeNewNews} submitForm={this.submitFormNewNews} />
        <br/>

        <AdminAddSequentialForm state={this.state.new_sequential} onChange={this.onChangeNewSequential} submitForm={this.submitFormNewSequential} />
      </div>
    )
  }
}
