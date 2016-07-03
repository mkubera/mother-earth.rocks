defmodule Mother.AdminController do
  use Mother.Web, :controller

  plug Guardian.Plug.EnsureAuthenticated, handler: __MODULE__

  def admin(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    render "admin.html", user: user
  end

  def unauthenticated(conn, _params) do
    conn
      |> put_status(401)
      |> put_flash(:info, "Authentication required")
      |> redirect(to: "/")
  end
end
