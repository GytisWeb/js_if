import Book from "../book/Book"
import styles from "./BooksList.module.css"

const BooksList = () => {
  return (
    <div className={styles.book_list}>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
  <Book/>
    </div>
  )
}

export default BooksList