import * as styles from "./TopBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Account } from "../Account";
import { Menu } from "../Menu";

export function TopBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={styles.topBar}>
      <Link href="/" className={styles.left}>
        <FontAwesomeIcon icon={faSeedling} />
        Shiruplants
      </Link>
      <div className={styles.center}>
        <Menu isOpenSearch={isOpenSearch} />
      </div>
      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}
