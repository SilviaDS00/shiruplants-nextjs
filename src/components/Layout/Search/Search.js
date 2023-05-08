import * as styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  useEffect(() => {
    setSearchText(router.query.s || "");
  }, []);

  const onSearch = (text) => {
    setSearchText(text);
    router.replace(`/search?s=${text}`);
  };

  return (
    <div className={styles.header}>
      <h1>Todos tus productos de jardinería a tu alcance</h1>
      <h2>Las mejores marcas al mejor precio</h2>
      <section className={styles.buscador}>
        <div className={styles.contenedorInput}>
          <FontAwesomeIcon icon={faSearch} className={styles.icon} />
          <Input
            id="searchInput"
            className={styles.searchInput}
            type="text"
            placeholder="Buscar productos..."
            value={searchText}
            onChange={(_, data) => onSearch(data.value)}
          />
        </div>
      </section>
    </div>
  );
}
