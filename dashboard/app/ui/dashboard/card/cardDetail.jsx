import styles from "./card.module.css";

const CardDetail = ({ detail }) => {
  return (
    <div
      className={styles.container}
      style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
    >
      <div>{detail.number}</div>
      <div>
        {detail.detail}
        <div>{detail.percentage}</div>
      </div>
      <div>{detail.number}</div>
      <div>
        {detail.detail}
        <div>{detail.percentage}</div>
      </div>
      <div>{detail.number}</div>
      <div>
        {detail.detail}
        <div>{detail.percentage}</div>
      </div>
      <div>{detail.number}</div>
      <div>
        {detail.detail}
        <div>{detail.percentage}</div>
      </div>
      <div>{detail.number}</div>
      <div>
        {detail.detail}
        <div>{detail.percentage}</div>
      </div>
    </div>
  );
};

export default CardDetail;
