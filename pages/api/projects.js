import jira from "../../services/Jira";

export default async function handler(req, res) {
  // const avatar = "project.lead.avatarUrls.16x16";
  const response = await jira
    .get("/project/search", { params: { expand: "issueTypes" } })
    .catch((err) => console.log(err));

  if (response) {
    res.status(201).json({ data: response.data });
  } else {
    res.status(404).json({ error: "there was an error", data: response });
  }
  console.log(response.data);
}

// setProjects(
//     response.data.map((project) => {
//         return {
//         id: project.id,
//         key: project.key,
//         name: project.name,
//         self: project.self,
//         issueTypes: project.issueTypes,
//         percentage: getRandomInt(),
//         };
//     })
