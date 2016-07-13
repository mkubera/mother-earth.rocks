defmodule Mother.SequentialsChannelTest do
  use Mother.ChannelCase
  alias Mother.SequentialsChannel

  setup do
    {:ok, _, socket} =
      socket("user_id", %{})
      |> subscribe_and_join(SequentialsChannel, "sequentials:all")

    {:ok, socket: socket}
  end

end
