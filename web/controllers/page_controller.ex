defmodule Mother.PageController do
  use Mother.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
