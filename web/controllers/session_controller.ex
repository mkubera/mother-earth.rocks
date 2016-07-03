defmodule Mother.SessionController do
  use Mother.Web, :controller

  def logout(conn, _params) do
    conn
      |> Guardian.Plug.sign_out
      |> put_flash(:info, "Logged out")
      |> redirect(to: "/")
  end
end
