defmodule Mother.AdminChannelTest do
  use Mother.ChannelCase
  alias Mother.AdminChannel

  setup do
    {:ok, _, socket} =
      socket("user_id", %{})
      |> subscribe_and_join(AdminChannel, "admin:all")

    {:ok, socket: socket}
  end
  
  test "createDbAndTables", %{socket: socket} do
    ref = push socket, "createDbAndTables", %{}
    assert_reply ref, :ok, %{msg: "Database and tables already exist."}
  end

  test "insertNews", %{socket: socket} do
    ref = push socket, "insertNews", %{"title" => "Title", "text" => "Text", "author" => "Author"}
    assert_reply ref, :ok, %{msg: "Document inserted successfully into news table."}
  end
  
  test "insertSequential", %{socket: socket} do
    ref = push(socket, "insertSequential", %{
                "authors" => %{ 
                  "artist" => "rainteller", "writer" => "rainteller"
                },
                "description" => "## Listenup",
                "download" => "awake-to-the-heartbeat-of-your-mother/page1.zip",
                "img" => "awake-to-the-heartbeat-of-your-mother/page1.png",
                "img2" => "awake-to-the-heartbeat-of-your-mother/page2.png", 
                "pages" => 33,
                "price" => 1,
                "title" => "awake"
              }
    )
    assert_reply ref, :ok, %{msg: "Document inserted successfully into sequentials table."}
  end
end
