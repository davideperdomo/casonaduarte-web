import { useEffect, useState } from "react";
import { getProjectsList } from "../../services/data";
import styled from "styled-components";

const InteriorProjects = () => {
  const [projects, setProjects] = useState();

  const fetchData = async () => {
    const data = await getProjectsList();
    //console.log("data", data);
    setProjects(data);
  }

  useEffect(() => {
    console.log("ok");
    fetchData();
  }, []);

  return (
    <div>
      <ProjectsContainer>
        { projects &&
          projects.map( (itm, idx) => {
            return <img src={itm?.data?.imageUrl} key={`project-${idx}`} alt="project" />
          })
        }
      </ProjectsContainer>
    </div>
  )
};

const ProjectsContainer = styled.div`
`;

export default InteriorProjects;