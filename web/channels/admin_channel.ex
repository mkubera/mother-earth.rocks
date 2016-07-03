defmodule Mother.AdminChannel do
  use Phoenix.Channel
  import RethinkDB.Query, only: [db_list: 0, db_create: 1, table_create: 1, contains: 2]

  def join("admin:db_init", _message, socket) do
    # send(self, :after_join)

    # if no DB -> create DB
    db_exists =
      db_list
      |> contains("mother")
      |> Mother.Database.run
      |> IO.inspect

    if db_exists.data do
      IO.inspect "Db 'mother' already exists."

      {:error, %{msg: "Database and tables already exist."}}
    else
      db_create("mother") |> Mother.Database.run
      table_create("news") |> Mother.Database.run
      table_create("sequentials") |> Mother.Database.run

      {:ok, %{msg: "Database MOTHER created successfully. Tables NEWS and SEQUENTIALS created successfully. You can now start adding News and Sequentials!"}, socket}
    end

    # msg =
    #   if contains_tables do
    #     "Tables already exist..."
    #   else
    #     "Tables created OK. You can now start inserting stuff into the db."
    #   end
    #
    # {:ok, socket, msg}
  end

  # def handle_info(:after_join, socket) do
  #   # If tables "news" and "sequentials" already exists, do nothing.
  #   # Otherwise, create these tables.
  #   contains_tables = table_list()
  #     |> contains(["news", "sequentials"])
  #     |> Mother.Database.run
  #
  #   if contains_tables do
  #     IO.inspect "Already contains tables"
  #   else
  #     table_create("news")
  #     |> Mother.Database.run
  #
  #     table_create("sequentials")
  #     |> Mother.Database.run
  #
  #   end
  #
  #   msg =
  #     if contains_tables do
  #       "Tables already exist..."
  #     else
  #       "Tables created OK. You can now start inserting stuff into the db."
  #     end
  #
  #   push(socket, "db_init", msg)
  #   {:noreply, socket}
  # end
end
