import Link from "next/link";

function ProjectItem(props) {
  const { id, key, name, percentage, avatar } = props;
  return (
    <tr key={key}>
      <td className="project-status">
        <span className="label label-primary">Active</span>
      </td>

      <td className="project-title">
        <Link href={"/projects/" + id}>{name}</Link>
      </td>

      <td className="project-completion">
        <small>Completion with : ${percentage}%</small>
        <div className="progress progress-mini">
          <div
            className="progress-bar"
            style={{ width: percentage + "%" }}
          ></div>
        </div>
      </td>
      <td className="project-people">
        <img alt="Ryan Meyer" src={avatar} className="rounded-circle" />
      </td>
      <td className="project-actions">
        <button href="#" className="btn btn-white btn-sm">
          <i className="fa fa-folder"></i> View{" "}
        </button>
        <button href="#" className="btn btn-white btn-sm">
          <i className="fa fa-pencil"></i> Edit{" "}
        </button>
      </td>
    </tr>
  );
}

export default ProjectItem;
