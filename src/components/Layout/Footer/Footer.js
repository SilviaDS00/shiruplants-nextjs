import * as styles from "./Footer.module.scss";
import Link from "next/link";
import { Container, Image, Button } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.columns}>
          <div>
            <Link href="/">
              <FontAwesomeIcon icon={faSeedling} />
              Shiruplants
            </Link>
          </div>
          <div className={styles.center}>
            <ul>
              <Link href="#">Términos y condiciones</Link>
              <Link href="#">Política de privacidad</Link>
              <Link href="#">Contacto</Link>
              <Link href="#">FAQs</Link>
            </ul>
          </div>
          <div className={styles.social}>
            <Button as="a" href="#" circular color="facebook" icon="facebook" />
            <Button as="a" href="#" circular color="twitter" icon="twitter" />
            <Button
              as="a"
              href="#"
              circular
              color="instagram"
              icon="instagram"
            />
            <Button
              as="a"
              href="#"
              circular
              color="google plus"
              icon="google plus"
            />
          </div>
        </div>

        <div className={styles.copyright}>
          <span>Copyright 2023 ShiruPlants - All rights reserved</span>
        </div>
      </Container>
    </div>
  );
}
