import Link from "next/link";

const NotBackground = () => (
  <div>
    <h1>NextJS on Netlify</h1>
    <p>
      This function name should not end in `-background` because it's not an API
      route
    </p>
  </div>
);

NotBackground.getInitialProps = async function () {
  return { data: "Not background" };
};

export default NotBackground;
