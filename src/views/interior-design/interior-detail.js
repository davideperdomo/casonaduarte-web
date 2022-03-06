import { Fragment, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const InteriorDetail = () => {
  const { projectId } = useParams();
  const { state: { data } } = useLocation();
  const [projectData, setProjectData] = useState(data);

  useEffect(() => {
    if (!data) {
      //todo get project
      setProjectData({})
      console.log("get project data");
    }
  }, [data]);

  return (
    <Fragment>
      <ProjectDetail>
        { projectData && projectData?.imageUrl &&
          <img src={projectData?.imageUrl} alt="project casona" />
        }
        <div className="project-content">
          <p>title: {projectId} </p>
          { projectData && projectData?.description &&
            <p>description: {projectData?.description}</p>
          }
        </div>  
      </ProjectDetail>
    </Fragment>
  );
};

const ProjectDetail = styled.div`
  display: flex;
  width: 90%;

  .project-content {
    padding: 1em;
  }
`;

export default InteriorDetail;