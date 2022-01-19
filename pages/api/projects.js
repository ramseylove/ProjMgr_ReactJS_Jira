import jira from "../../services/Jira";

async function handler(req, res) {
  // const avatar = "project.lead.avatarUrls.16x16";
  const response = await jira
    .get("/project/search", { params: { expand: "issueTypes" } })
    
    const data = response.json();
  
  if (!response) {
    res.status(404).json({ error: "there was an error"});
    return;
  } else {
    res.status(201).json({ data: data });
    console.log(data)
  }
  return data;
}

export default handler
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
