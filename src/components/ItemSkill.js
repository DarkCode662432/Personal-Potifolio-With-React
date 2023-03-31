import "./styles/ItemSkill.css";

const ItemSkill = (props) => {
  return (
    <div className="item">
      <img src={props.img} alt="img" />
      <h5>{props.title}</h5>
    </div>
  );
}

export default ItemSkill;
