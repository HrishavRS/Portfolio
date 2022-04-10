import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Shreeyash Lal Shrestha",
      title: "Leapfrog",
      desc: "Hrishav has a good determination to learn. Working with him in projects has always been easier and he always gives another point of view.",
      img: "assets/People/shreeyash.jpg",
    },
    {
      id: 2,
      name: "Shubh Raj Dhital",
      title: "KU 4th year",
      desc: "In semester project, Hrishav always comes with unique ideas and is first to lead the directions of the project",
      img: "assets/People/shubh.jpg",
    },
    {
      id: 3,
      name: "Sajal Paudel",
      title: "Machnet",
      desc: "Hrishav is a reliable partner in a group project. He has good determination to learn and solve problems.",
      img: "assets/People/sajal.jpg",
    },
    {
      id: 4,
      name: "Gagan Adhikari",
      title: "Asterdio Inc",
      desc: "Hrishav is a good team mate, easy to work with and a good learner.",
      img: "assets/People/gagan.jpg",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((p) => (
          <div className={p.featured ? "card feature" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img src={p.img} className="Person" alt="" />
              <img src="" className="right" alt="" />
            </div>
            <div className="center">{p.desc}</div>
            <div className="bottom">
              <h3>{p.name}</h3>
              <h4>{p.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
