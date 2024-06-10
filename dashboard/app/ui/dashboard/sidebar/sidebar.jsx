import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdHistory,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdStore,
  MdDetails,
} from "react-icons/md";
import { UserButton } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"
import { currentUser } from "@clerk/nextjs/server";
// import { auth, signOut } from "@/app/auth";
// buraya auth işlemleri için çıtır bir lib koyabilirsin
//sanırım değiştirmen gerekebilir githubtan aldım
const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Recommendation",
        path: "/dashboard/recommendation",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "History",
        path: "/dashboard/history",
        icon: <MdHistory />,
      },
      {
        title: "SOK",
        path: "/dashboard/SOK",
        icon: <MdStore />,
      }, {
        title: "MIGROS",
        path: "/dashboard/MIGROS",
        icon: <MdStore />,
      }, {
        title: "CAGDAS",
        path: "/dashboard/CAGDAS",
        icon: <MdStore />,
      }, {
        title: "A101",
        path: "/dashboard/A101",
        icon: <MdStore />,
      }, {
        title: "BIM",
        path: "/dashboard/BIM",
        icon: <MdStore />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      }
    ],
  },
];

const Sidebar = async () => {
  // const { user } = await auth(); line:90 == {/** {userProfile} || "/noavatar.png"*/}
  // line 97 ve 98 de buraya user info koyman gerekiyor aşağıda örneğini koydum
  // ben string koydum oraya <span className={styles.username}>{user.username}</span> (müşteri kalabilir sabit kalsın)
  const { userId } = auth();
  const user = await currentUser();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <div style={styles.MdLogout}>
          <UserButton afterSignOutUrl="/" />

        </div>
        <div className={styles.userDetail}>
          <span className={styles.username}>{user?.firstName} {user?.lastName}</span>
          <span className={styles.userTitle}>Müşteri</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          // await signOut();
        }}
      >
      </form >
    </div >
  );
};

export default Sidebar;
