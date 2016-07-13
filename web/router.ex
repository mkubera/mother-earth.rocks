defmodule Mother.Router do
  use Mother.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/", Mother do
    pipe_through [:browser]

    get "/*wildcard", PageController, :index
  end

end
