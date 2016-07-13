defmodule Mother.NewsChannel do
  use Phoenix.Channel
  import RethinkDB.Query, only: [table: 1, order_by: 2, desc: 1]

  def join("news:all", _message, socket) do
    send(self, :after_join)
    {:ok, socket}
  end
  
  def handle_info(:after_join, socket) do
    news =
      table("news")
      |> order_by(desc("ts"))
      |> Mother.Database.run
      |> Map.delete(:profile)

    push(socket, "findAll", news)
    {:noreply, socket}
  end
end
