defmodule Mother.Router do
  use Mother.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :browser_auth do
    plug Guardian.Plug.VerifySession
    plug Guardian.Plug.LoadResource
  end

  # pipeline :api do
  #   plug :accepts, ["json"]
  # end

  scope "/", Mother do
    pipe_through [:browser]

    get "/*wildcard", PageController, :index
  end

  # scope "/a", Mother do
  #   get "/login", PageController, :login
  #   get "/admin", AdminController, :admin
  # end

  # Other scopes may use custom stacks.
  # scope "/api", Mother do
  #   pipe_through :api
  # end
end
