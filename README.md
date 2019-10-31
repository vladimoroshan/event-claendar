# Google-like Event Calendar with JavaScript
This project is using React and Redux on the client side. On the backed Express and MongoDB

## 1: Install packages
```sh
# Install server and client packages + build the React applicatin
$ npm install

# OR you can install manually the server and client packages
$ (cd server && npm install)
$ (cd client && npm install)
```

## 2: Run project: the server and the client
```sh
# Open a first terminal
$ npm run dev:server
# Run the server on http://localhost:5000/

# Open a second terminal
$ npm run dev:client
# Run the client on http://localhost:3000/
```

## 3: Open it
- [http://localhost:5000](http://localhost:5000): Express server with MongoDB
- [http://localhost:3000](http://localhost:3000) : React-Redux application

## Usage

- First register and log in with your username and password to be redirected to the calendar.
- Click on empty row or select several rows to add new event. If there is event already on required row, click on the small empty space  on right from the event.
- Resize or drag and drop to change start and end end time of the event 
- Click on event to edit or delete.
- Use arrows to change date.
- Click on "today" to return to the current date.
- To download your events click on "Export As JSON".
