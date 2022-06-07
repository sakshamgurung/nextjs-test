import ReactMarkdown from "react-markdown";

function HomePage() {
	const markdown = `
  # Header 1
  ## Header 2

  * apple
  * ball
  * cat
  * dog

  _italic_

  **bold**

  <b>bold Html</b>
  `;

	return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default HomePage;
