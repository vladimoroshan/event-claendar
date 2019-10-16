# Google-like Event Calendar using React/Redux/Express/MongoDB

Usage
    - First register and log in with your username and password to be redirected to the calendar.
    - Click on empty row or select several rows to add new event. If there is event already on required row, click on the small empty space on right from the event.
    - Resize or drag and drop to change start and end end time of the event 
    - Click on event to edit or delete.
    - Use arrows to change date.
    - Click on "today" to return to the current date.
    - To download your events click on "Export As JSON".


**To install all the packages**
```sh
# Install server and client packages + build the React applicatin
$ npm install

# OR you can install manually the server and client packages
$ (cd server && npm install)
$ (cd client && npm install)
```

**To run the server and the client**
```sh
# Open a first terminal
$ npm run dev:server
# Run the server on http://localhost:5000/

# Open a second terminal
$ npm run dev:client
# Run the client on http://localhost:3000/
```

So now you can go to 
- http://localhost:5000/: The website based on client/build (that you can update with `$ (cd client && npm run build)`)
- http://localhost:3000/: React application that is calling server API 


