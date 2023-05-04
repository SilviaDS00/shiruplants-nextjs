import * as styles from "./SearchLayout.module.scss";
import { Container } from "semantic-ui-react";
import classNames from "classnames";
import { TopBar, Search } from "@/components/Layout";

export function SearchLayout(props) {
  const { children } = props;
  return (
    <>
      <Search />
    </>
  );
}
