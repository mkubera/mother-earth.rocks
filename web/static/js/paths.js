//js
import socket from './socket'
import store from './store/store'
import * as store_actions from './store/actions'
import * as utils_date from './utils/date'
import * as utils_channel from './utils/channel'
//components
import AppRouter from './AppRouter'
import MainLayout from './components/layouts/MainLayout'
import Landing from './components/Landing'
import Home from './components/Home'
import News from './components/News/News'
import NewsList from './components/News/NewsList'
import NewsOne from './components/News/NewsOne'
import Sequentials from './components/Sequentials/Sequentials'
import SequentialsList from './components/Sequentials/SequentialsList'
import SequentialsOne from './components/Sequentials/SequentialsOne'
import SequentialsOneImg from './components/Sequentials/SequentialsOneImg'
import Future from './components/Future/Future'
import About from './components/About/About'
import Admin from './components/Admin/Admin'
import Footer from './components/Footer/Footer'
import AdminAddNewsForm from './components/Admin/AdminAddNewsForm'
import AdminInitdb from './components/Admin/AdminInitdb'
import AdminAddSequentialForm from './components/Admin/AdminAddSequentialForm'
import NotFound from './components/NotFound'
//components:reusables
import FormButton from './components/Reuse/FormButton'
import FormInput from './components/Reuse/FormInput'
import FormTextarea from './components/Reuse/FormTextarea'
import Loading from './components/Reuse/Loading'

export
  { socket
  , store
  , store_actions
  , utils_date
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
