defmodule Mother.NewsChannelTest do
  use Mother.ChannelCase
  alias Mother.NewsChannel

  setup do
    {:ok, _, socket} =
      socket("user_id", %{some: :assign})
        |> subscribe_and_join(NewsChannel, "news:insert")

    {:ok, socket: socket}
  end

  test "news:insert insert new news", %{socket: socket} do
    push socket, "new", %{"title" => "Test Title", "text" => "Test Text", "author" => "Test Author"}
  end
end
