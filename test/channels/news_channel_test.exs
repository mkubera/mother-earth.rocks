defmodule Mother.NewsChannelTest do
  use Mother.ChannelCase
  alias Mother.NewsChannel

  setup do
    {:ok, _, socket} =
      socket("user_id", %{})
      |> subscribe_and_join(NewsChannel, "news:all")

    {:ok, socket: socket}
  end
end
