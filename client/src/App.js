import React from 'react'
import { Provider } from 'react-redux'

import { store } from './__data__'
import Main from './pages/main'


function App() {
  return (
      <div className="App">
          <Provider store={store}>
                <Main/>
          </Provider>
      </div>
  )
}

export default App