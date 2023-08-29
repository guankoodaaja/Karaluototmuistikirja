import Menu from '../Menu'
import Header from '../Header'
import styles from './App.module.scss'
import Item from '../Item'

function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Item />
        <Item />
        <Item />
        <Item />
        <Menu />
      </div>
    </>
  )
}

export default App
