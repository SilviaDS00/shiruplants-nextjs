import { useState } from "react";
import { Button } from "semantic-ui-react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../AddressForm";
import styles from "./AddAddress.module.scss";

export function AddAddress(props) {
  const [show, setShow] = useState(false);
  const { onReload } = props;

  const onOpenClose = () => setShow((prevState) => !prevState);

  return (
    <>
      <Button primary className={styles.addBtn} onClick={onOpenClose}>
        Añadir
      </Button>
      <BasicModal
        show={show}
        onClose={onOpenClose}
        title="Añadir nueva dirección"
      >
        <AddressForm onClose={onOpenClose} onReload={onReload} />
      </BasicModal>
    </>
  );
}
