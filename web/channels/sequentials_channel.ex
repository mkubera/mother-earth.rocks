defmodule Mother.SequentialsChannel do
  use Phoenix.Channel
  import RethinkDB.Query, only: [table: 1, order_by: 2, desc: 1]

  def join("sequentials:all", _message, socket) do
    send(self, :after_join)
    {:ok, socket}
  end

  def handle_info(:after_join, socket) do
    sequentials =
      table("sequentials")
      |> order_by(desc("ts"))
      |> Mother.Database.run
      # |> IO.inspect
      |> Map.delete(:profile)

    push(socket, "findAll", sequentials)
    {:noreply, socket}
  end
end
