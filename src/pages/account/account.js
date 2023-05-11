import { BasicLayout } from "@/layouts";
import { useRouter } from "next/router";
import { Info, Settings, Wishlist } from "@/components/Account";
import { Tab } from "semantic-ui-react";
import * as styles from "./account.module.scss";
import { useAuth } from "@/hooks";
import { Separator } from "@/components/Shared";

export default function account() {
  const { logout, user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/");
    return null;
  }

  const panes = [
    {
      menuItem: "Mis pedidos",
      render: () => (
        <Tab.Pane attached={false}>
          <p className={styles.text}>Mis pedidos</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Lista de deseos",
      render: () => (
        <Tab.Pane attached={false}>
          <Wishlist />
          <Separator height={80} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: "Direcciones",
      render: () => (
        <Tab.Pane attached={false}>
          <p className={styles.text}>Direcciones</p>
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 20,
        icon: "settings",
        content: "Ajustes",
      },
      render: () => (
        <Tab.Pane attached={false}>
          <Settings.ChangeNameForm />
          <div className={styles.containerForms}>
            <Settings.ChangeEmailForm />
          </div>
          <div className={styles.containerForms}>
            <Settings.ChangePasswordForm />
          </div>

          <Separator height={100} />
        </Tab.Pane>
      ),
    },
    {
      menuItem: {
        key: 21,
        icon: "log out",
        content: "",
        onClick: logout,
      },
    },
  ];
  return (
    <>
      <BasicLayout isContainer relative>
        <Info />
        <Tab
          menu={{ secondary: true, pointing: true }}
          panes={panes}
          className={styles.tabs}
        />
        <Separator height={100} />
      </BasicLayout>
    </>
  );
}
