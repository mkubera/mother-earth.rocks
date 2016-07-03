defmodule Mother.NewsChannel do
  use Phoenix.Channel
  import RethinkDB.Query, only: [table: 1, insert: 2, order_by: 2, desc: 1]

  # news:all
  def join("news:all", _message, socket) do
    send(self, :after_join)
    {:ok, socket}
  end

  #news:insert
  def join("news:insert", _message, socket) do
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    news =
      table("news")
        |> order_by(desc("ts"))
        |> Mother.Database.run
        |> Map.delete(:profile)

    push(socket, "news_all", news)
    {:noreply, socket}
  end


  def handle_in("new", data, socket) do
    IO.inspect data
    new_date = DateTime.utc_now |> DateTime.to_iso8601
    data2 = Map.put(data, "ts", new_date)

    table("news")
      |> insert(data2)
      |> Mother.Database.run

    {:reply, :ok, socket}
  end
end
