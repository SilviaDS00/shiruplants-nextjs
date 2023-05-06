import * as styles from "./Menu.module.scss";
import { useEffect, useState } from "react";
import { Category } from "@/api";
import { map } from "lodash";
import Link from "next/link";

const categoryCtrl = new Category();

export function Menu(props) {
  const [categories, setCategories] = useState(null);
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await categoryCtrl.getAll();
        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const handlePanelClick = () => {
    setShowPanel(!showPanel);
  };

  return (
    <div>
      <div className={styles.categories}>
        <Link href="/">Inicio</Link>
        <button className={styles.products} onClick={handlePanelClick}>
          Productos
          <i className="angle down icon" />
        </button>
        <Link href="/blog">Blog</Link>
        <Link href="/blog">Foro</Link>
        <Link href="/contact">Contacto</Link>
      </div>
      {showPanel && (
        <div className={styles.panel}>
          {map(categories, (category) => (
            <Link
              key={category.id}
              href={`/products/${category.attributes.slug}`}
            >
              {category.attributes.title}
            </Link>
          ))}
          <Link href={`/products/`}>Ver todo...</Link>
        </div>
      )}
    </div>
  );
}
