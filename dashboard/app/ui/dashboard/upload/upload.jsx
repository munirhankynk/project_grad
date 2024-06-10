import styles from "./upload.module.css";

const Upload = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Upload Your Ticket</h2>

      <label class="custom-file-upload">
        <input
          style={{ visibility: "hidden", width: 0, height: 0 }}
          type="file"
          accept="image/*"
          onChange={console.log("handle later")}
        />
        Click Here to Upload Your Ticket
      </label>
    </div>
  );
};

export default Upload;
