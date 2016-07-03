defmodule Mother.PageController do
  use Mother.Web, :controller
  import RethinkDB.Query, only: [table_create: 1]

  # plug Guardian.Plug.EnsureAuthenticated, handler: Mother.MyAuthErrorHandler #hmm?

  def index(conn, _params) do
    render conn, "index.html"
  end

  def login(conn, params) do
    case User.find_and_confirm_password(params) do
      {:ok, user} ->
         conn
           |> Guardian.Plug.sign_in(user)
           |> redirect(to: "/")
      {:error, changeset} ->
        render conn, "login.html", changeset: changeset
    end
  end
end
