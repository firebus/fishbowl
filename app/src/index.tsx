import {
  Container,
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider
} from "@material-ui/core"
import ApolloWrapper from "ApolloWrapper"
import App from "App"
import AuthWrapper from "AuthWrapper"
import "index.css"
import React from "react"
import ReactDOM from "react-dom"
import * as serviceWorker from "serviceWorker"

export const useTitleStyle = makeStyles({
  title: {
    fontFamily: "Playfair Display; serif"
  }
})

const theme = createMuiTheme({})

ReactDOM.render(
  <React.StrictMode>
    <AuthWrapper>
      <ApolloWrapper>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Container maxWidth="sm" style={{ marginTop: "30px" }}>
              <App></App>
            </Container>
          </CssBaseline>
        </ThemeProvider>
      </ApolloWrapper>
    </AuthWrapper>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
