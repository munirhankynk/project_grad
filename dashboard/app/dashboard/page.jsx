import styles from "../ui/dashboard/dashboard.module.css";
import Rightbar from "../ui/dashboard/rigthbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import Chart from "../ui/dashboard/chart/chart";
import Upload from "../ui/dashboard/upload/upload";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Upload />
        <Transactions />
        <Chart />
        {/* https://recharts.org/ npm i recharts@2.9.0 terminale yaz ve yükle */}
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;
