import Image from "next/image";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        orkun özdemir
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="name - surname" />

          <label>Email</label>
          <input type="email" name="username" placeholder="Example@gmai.com" />

          <label>Password</label>
          <input type="text" name="password" placeholder="password" />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="+123456789" />

          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="Kızılcaşar, 06830 İncek Gölbaşı/Gölbaşı/Gölbaşı/Ankara"
          />
          <label>Is Admin</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
