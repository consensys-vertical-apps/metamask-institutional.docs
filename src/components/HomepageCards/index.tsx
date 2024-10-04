import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import clsx from "clsx";

type CardItem = {
  title: string;
  link: string;
  description: JSX.Element;
  buttonName: string;
  buttonType:
    | "primary"
    | "secondary"
    | "success"
    | "info"
    | "warning"
    | "danger"
    | "link";
};

/**
 * Array of arrays defining lines and columns
 */
const CardList: CardItem[][] = [
  [
    {
      title: "Custodians",
      link: "/custodians",
      description: (
        <>
          Connect your custody system to MetaMask Institutional, enabling users
          to sign transactions directly through your platform.
        </>
      ),
      buttonName: "Get started",
      buttonType: "secondary",
    },
    {
      title: "Staking Providers",
      link: "/staking-providers",
      description: (
        <>
          Offer native ETH staking services to MetaMask Institutional users,
          enabling them to stake ETH securely through your platform.
        </>
      ),
      buttonName: "Get started",
      buttonType: "secondary",
    },
    {
      title: "API",
      link: "/api",
      description: (
        <>
          Retrieve transaction history and portfolio valuation snapshots to
          automate reporting or develop custom applications.
        </>
      ),
      buttonName: "Get started",
      buttonType: "secondary",
    },
    // {
    //   title: "SDK",
    //   link: "/sdk",
    //   description: (
    //     <>
    //       Use our Python library to create and submit Ethereum transactions to
    //       custodians connected with MetaMask Institutional.
    //     </>
    //   ),
    //   buttonName: "Get started",
    //   buttonType: "secondary",
    // },
    {
      title: "DeFi Developers",
      link: "/defi-developers",
      description: (
        <>
          Build an adapter for your DeFi protocol to enable MetaMask
          Institutional users to view their positions and execute transactions
          seamlessly.
        </>
      ),
      buttonName: "Get started",
      buttonType: "secondary",
    },
  ],
];

function Card({ title, link, description, buttonName, buttonType }: CardItem) {
  return (
    <div className={clsx("col", "margin-top--md")}>
      <div className="card-demo">
        <div className="card">
          <div className="card__header">
            <Heading as="h3">{title}</Heading>
          </div>
          <div className="card__body">
            <p>{description}</p>
          </div>
          <div className="card__footer">
            <Link
              className={clsx(
                "button",
                "button--" + buttonType,
                "button--block",
              )}
              to={link}>
              {buttonName}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomepageCards(): JSX.Element {
  return (
    <section className={clsx("margin-top--lg", "margin-bottom--lg")}>
      <div className="container homepageContainer">
        {CardList.map((_, row) => (
          <div className="row">
            {CardList[row].map((props, idx) => (
              <Card key={idx} {...props} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
