function Crowdjet() {
  return (
    <>
      <script
        type="text/javascript"
        src="https://enterprise.crowdin.com/crowdjet/crowdjet.js"
      ></script>
      <div
        id="crowdjet-container"
        data-organization-domain="microbolt"
        data-project-id="1"
      ></div>
      <div
        id="crowdjet-expand-container"
      ></div>
    </>
  )
}

export default Crowdjet