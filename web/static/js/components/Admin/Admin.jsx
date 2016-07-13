import React from 'react'
import _ from 'lodash'
import {socket, utils_channel, AdminAddNewsForm, AdminAddSequentialForm, AdminInitdb} from '../../paths.js'

export default class Admin extends React.Component {
  constructor() {
    super()

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

    this.admin = socket.channel("admin:all", {})
  }


  componentDidMount() {
    utils_channel.join_1(this.admin)
  }

  componentWillUnmount() {
    utils_channel.leave_1(this.admin)
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

  validateNewsForm() {
    const news = this.state.new_news
    const values = _.values(news)
    const has_empty_strings = _.indexOf(values, "") > -1;

    if (has_empty_strings)
      return alert("Fill in all the fields, please.")
  }

  validateSequentialForm() {
    const seq = this.state.new_sequential
    const strings_values1 = _.values(_.pickBy(seq, _.isString))
    const strings_values2 = _.values(seq.authors)
    const strings = [...strings_values1, ...strings_values2]
    const has_empty_strings = _.indexOf(strings, "") > -1
    const has_zero_pages = seq.pages === 0

    if (has_empty_strings || has_zero_pages)
      return alert("Fill in all the fields, please.")
  }

  resetNewsForm() {
    this.setState({ new_news: {title: "", text: "", author: ""} })
  }

  resetSequentialForm() {
    this.setState({ new_sequential: {
      img:"", title:"", description:"", pages:0, price:0, authors: {writer:"", artist:""}
    } })
  }

  initDb() {
    this.admin.push("createDbAndTables", {})
      .receive("ok", ({msg}) => alert(msg))
      .receive("error", ({msg}) => alert(msg))
  }

  submitFormNewNews(e) {
    e.preventDefault()

    this.validateNewsForm()

    this.admin.push("insertNews", { ...this.state.new_news })
      .receive("ok", ({msg}) => {
        this.resetNewsForm()
        alert(msg)
      })
      .receive("error", () => alert("Form Error... :/"))
  }

  submitFormNewSequential(e) {
    e.preventDefault()

    this.validateSequentialForm()

    this.admin.push("insertSequential", { ...this.state.new_sequential })
      .receive("ok", ({msg}) => {
        this.resetSequentialForm()
        alert(msg)
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

        <AdminAddNewsForm
          state={this.state.new_news}
          onChange={this.onChangeNewNews}
          submitForm={this.submitFormNewNews} />
        <br/>

        <AdminAddSequentialForm
          state={this.state.new_sequential}
          onChange={this.onChangeNewSequential}
          submitForm={this.submitFormNewSequential} />
      </div>
    )
  }
}
