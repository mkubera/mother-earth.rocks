defmodule Mother.SequentialsChannel do
  use Phoenix.Channel
  import RethinkDB.Query, only: [table: 1, insert: 2, order_by: 2, desc: 1, changes: 1]

  def join("sequentials:all", _message, socket) do
    send(self, :after_join)
    {:ok, socket}
  end

  def join("sequentials:insert", _message, socket) do
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    sequentials =
      table("sequentials")
      |> order_by(desc("ts"))
      |> Mother.Database.run
      # |> IO.inspect
      |> Map.delete(:profile)

    push(socket, "sequentials_all", sequentials)
    {:noreply, socket}
  end

  def handle_in("new", %{"data" => data}, socket) do
    IO.inspect data
    new_date = DateTime.utc_now |> DateTime.to_iso8601
    data2 = Map.put(data, "ts", new_date)

    table("sequentials")
      |> insert(data2)
      |> Mother.Database.run

    {:reply, :ok, socket}
  end
end
