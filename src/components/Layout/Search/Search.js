import * as styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { Input } from "semantic-ui-react";

export function Search() {
  return (
    <h1 className={styles.header}>
      <h1>Todos tus productos de jardinería a tu alcance</h1>
      <h2>Las mejores marcas al mejor precio</h2>
      <section className={styles.buscador}>
        <div className={styles.contenedorIconos}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <Input
            className={styles.searchInput}
            type="text"
            placeholder="Buscar productos, marcas y más..."
          />
        </div>
      </section>
    </h1>
  );
}