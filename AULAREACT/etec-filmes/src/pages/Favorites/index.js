import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import VideoList from "../../components/VideoList";
import { UseFavoriteContext } from "../../context/Favorite";
import styles from "./Favorites.module.css";


function Favorites(){


    const {favorite} = UseFavoriteContext()

    return(

        <>
        
        <Header></Header>

        <Container>

          
            
            <section className={styles.favorites}>
                <h2>Meus Favoritos</h2>
                {<VideoList videos={favorite} emptyHeading={"Sem videos favoritados"}></VideoList>}

            </section>

        </Container>

        <Footer></Footer>
        
        </>

    );

}

export default Favorites;