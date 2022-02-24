import { useRouter } from "next/router";
import Image from "next/image";
import Portfolio from "../../public/images/tools/Portfolio.svg";
import User from "../../public/images/tools/user.svg";
import Link from "../../public/images/tools/link.svg";

const sectionThreeData = [
  {
    id: 1,
    image: Portfolio,
    text: "Create your portfolio and gain subscribers",
  },
  {
    id: 2,
    image: User,
    text: "Follow other users portfolio",
  },
  {
    id: 3,
    image: Link,
    text: "Connect, trade & share ideas in real time",
  },
];
const CardComponent = ({ image, text }) => {
  const styles = {
    height: "235px",
    width: "365px",
  };
  return (
    <div style={styles} className="py-4 px-2 card-comp">
      <div className="imgDiv mx-auto">
        <Image src={image} alt="img" width="50" height="50px" />
      </div>
      <div className="mx-auto">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default function ToolSectionThree() {
  return (
    <div className="toolsSectionThree d-flex w-full align-items-center ">
      <div className="background"></div>
      <div className="container d-flex flex-column align-items-center justify-content-between">
        <div className="row mx-auto flex-column align-items-center justify-content-between">
          <h2>Social Portfolio</h2>
          <p>
            Social portfolio allows you to gain paying <br />
            subscribers following your moves in the market.
          </p>
          <div className="my-5 cardsDiv">
            {sectionThreeData.map(function (d) {
              return <CardComponent key={d.id} image={d.image} text={d.text} />;
            })}
          </div>
          <button>Create a free portfolio</button>
        </div>
      </div>
    </div>
  );
}
