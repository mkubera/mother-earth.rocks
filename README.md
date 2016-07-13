## mother-earth.rocks
Code for the website of an indie publisher of sequentials and other media.

### Clone
```bash
$ git clone https://github.com/rainteller/mother-earth.rocks.git 
```

### Install
Must have [Elixir][1], [Phoenix][2], and [RethinkDb][3] installed on your system.

[1]: "http://elixir-lang.org/install.html"
[2]: "http://www.phoenixframework.org/docs/installation"
[3]: "https://www.rethinkdb.com/docs/install/"

### Run
Once you're all set up, first start Rethink locally: 
```bash
$ rethinkdb
```

Then, in another tab, start Phoenix application in the project's folder:
```bash
$ mix phoenix.server
```

Now open a browser and navigate to `localhost:4000`

Before adding any News or Sequentials, make sure to click __init__ button in Admin panel (`localhost:4000/admin`).

### Todo
* authentication via [socket][4]
* edit/delete News & Sequentials

[4]: "https://hexdocs.pm/phoenix/Phoenix.Token.html"
