defmodule Mother.AdminChannel do
  use Phoenix.Channel
  import RethinkDB.Query, only: [db_list: 0, db_create: 1, table_create: 1, contains: 2, table: 1, insert: 2]

  def join("admin:all", _message, socket) do
    {:ok, socket}
  end

  def handle_in("createDbAndTables", _data, socket) do
    # if no DB -> create DB & tables
    db_exists =
      db_list
      |> contains("mother")
      |> Mother.Database.run
      |> IO.inspect

    if db_exists.data do
      IO.inspect "Db 'mother' already exists."
      {:reply, {:ok, %{msg: "Database and tables already exist."}}, socket}
    else
      db_create("mother") |> Mother.Database.run
      table_create("news") |> Mother.Database.run
      table_create("sequentials") |> Mother.Database.run

      {:reply, {:ok, %{msg: "Database MOTHER created successfully. Tables NEWS and SEQUENTIALS created successfully. You can now start adding News and Sequentials!"}}, socket}
    end
  end

  def handle_in("insertNews", data, socket) do
    table_name = "news"

    insert_doc(table_name, data)

    {:reply, {:ok, %{msg: "Document inserted successfully into #{table_name} table."}}, socket}
  end

  def handle_in("insertSequential", data, socket) do
    table_name = "sequentials"
    
    insert_doc(table_name, data)

    {:reply, {:ok, %{msg: "Document inserted successfully into #{table_name} table."}}, socket}
  end

  defp insert_doc(table_name, data) do
    # IO.inspect data
    new_date = DateTime.utc_now |> DateTime.to_iso8601
    item = Map.put(data, "ts", new_date)

    table(table_name)
      |> insert(item)
      |> Mother.Database.run
  end
end
