# babak-incode-quotes

Main tasks: I connect to the server via "socket.io-client" import.

I divided the information from the server into a concise list with the most important information (on the left) - the QuotesList folder, and on a plate with complete information about a single quote (on the right) - the QuotesInfo folder. All information is updated in real time.

For beauty, in the server.js file, I changed the tickers array so that there were both a ticker and the full name of the quote, and in the getQuotes function, I added the "name" property : ticker[1] to the object

For convenience, all reducers are placed in a separate folder - store, only rootReducer is exported from it.

Additional tasks:
1. Visual rise/drop changes. To do this, in the server.js file, I changed the "change" object property in the getQuotes function to randomValue(-100, 100, 2) (added negative values to the random)
2. I hope that I correctly understood the concept of watching group. In any case, the application has a separate section where you can add and remove only those quotes that you like - all the logic is in the WatchingGroup folder. (they also update the data themselves)

\*Uploaded files without folders node_modules
