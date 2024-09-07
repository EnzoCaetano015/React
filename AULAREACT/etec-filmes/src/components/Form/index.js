import styles from "./Form.module.css"
import {categorias} from "../Category"


function Form(){

    return(

        <section className={styles.container}>
            <h2>Cadastro de vídeos</h2>

            <form>

                <div>

                    <label>URL do vídeo</label>

                    <input 
                    
                    type="text"
                    placeholder="Digite a URL do vídeo"
                    required="required"
                    
                    ></input>

                </div>

                <div>

                    <label>Categoria</label>
                    <select>
                        <option value="-">Selecione uma categoria</option>
                        {categorias.map(item => {
                            return <option value={item}>{item}</option>
                        })}
                    </select>

                </div>

                <div>
                    <button>Cadastrar</button>
                </div>

            </form>

        </section>

    );

}

export default Form;