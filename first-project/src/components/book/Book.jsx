import styles from "./Book.module.css";



const book = () => {
  return (
    <div className={styles.oneBook}>
      
   <img className={styles.oneBookImg} src="https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg" alt="book" />
   <h2>Ziedu Valdovas</h2>
   <p>J. R. R. Tolkien </p>
   <p>Kaina: 20 eur</p>

    </div>
  )
}

export default book

