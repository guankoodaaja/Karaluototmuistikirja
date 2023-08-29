import Menu from '../Menu'
import Header from '../Header'
import styles from './App.module.scss'
import Item from '../Item'
import Content from '../Content'


function App() {

  return (
    <>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
        </Content>
        <Menu />
      </div>
    </>
  )

}

export default App
