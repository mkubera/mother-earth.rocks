//js
import socket from './socket'
import store from './store/store'
import * as store_actions from './store/actions'
import * as utils_channel from './utils/channel'
//components
import AppRouter from './AppRouter.jsx'
import MainLayout from './components/layouts/MainLayout.jsx'
import Landing from './components/Landing.jsx'
import Home from './components/Home.jsx'
import News from './components/News/News.jsx'
import NewsList from './components/News/NewsList.jsx'
import NewsOne from './components/News/NewsOne.jsx'
import Sequentials from './components/Sequentials/Sequentials.jsx'
import SequentialsList from './components/Sequentials/SequentialsList.jsx'
import SequentialsOne from './components/Sequentials/SequentialsOne.jsx'
import SequentialsOneImg from './components/Sequentials/SequentialsOneImg.jsx'
import Future from './components/Future/Future.jsx'
import About from './components/About/About.jsx'
import Admin from './components/Admin/Admin.jsx'
import Footer from './components/Footer/Footer.jsx'
import AdminAddNewsForm from './components/Admin/AdminAddNewsForm.jsx'
import AdminInitdb from './components/Admin/AdminInitdb.jsx'
import AdminAddSequentialForm from './components/Admin/AdminAddSequentialForm.jsx'
import NotFound from './components/NotFound.jsx'
//components:reusables
import FormButton from './components/Reuse/FormButton.jsx'
import FormInput from './components/Reuse/FormInput.jsx'
import FormTextarea from './components/Reuse/FormTextarea.jsx'
import Loading from './components/Reuse/Loading.jsx'

export
  { socket
  , store
  , store_actions
  , utils_channel
  , AppRouter
  , MainLayout
  , Landing
  , Home
  , News, NewsList, NewsOne
  , Sequentials
  , SequentialsList
  , SequentialsOne
  , SequentialsOneImg
  , Future
  , About
  , Admin
  , Footer
  , AdminAddNewsForm
  , AdminAddSequentialForm
  , AdminInitdb
  , NotFound
  , FormButton
  , FormInput
  , FormTextarea
  , Loading
  }
