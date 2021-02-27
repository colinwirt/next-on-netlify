export default async function preview(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(202);
  res.json({
    message:
      "On Netlify this background function will be queued and immediately return Status Code 202 with empty body",
  });
}
