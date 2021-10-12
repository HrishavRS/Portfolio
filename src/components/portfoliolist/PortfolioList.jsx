import "./portfoliolist.scss";

export default function PortfolioList({ title, setSelected, active,id }) {
  return (
    <li className={active ? "portfoliolist active" : "portfoliolist"} onClick={()=> setSelected(id)}>
      {title}
    </li>
  );
}
