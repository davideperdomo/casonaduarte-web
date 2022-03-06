import { useEffect, useState } from "react";
import { getProjectsList } from "../../services/data";
import styled from "styled-components";

const InteriorProjects = () => {
  const [projects, setProjects] = useState();
  const [isLoading, setIsLoading] = useState();

  const fetchData = async () => {
    setIsLoading(true)
    const data = await getProjectsList();
    //console.log("data", data);
    setProjects(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <ProjectsContainer>
        <div className="project-holder">
          { isLoading && <div>loading ...</div>}
          { !isLoading &&
            projects &&
            projects.map( (itm, idx) => {
              return <div className="project-card">
                <img src={itm?.data?.imageUrl} key={`project-${idx}`} alt="project" />
              </div>
            })
          }
        </div>
      </ProjectsContainer>
    </div>
  )
};

const ProjectsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 2em;
  justify-content: center;
  width: 100%;

  .project-holder {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: none;
    margin-bottom: 20px;
    padding: 1px 20px;

    .project-card {
      img {
        width: 300px;
        display: flex;
        justify-content: center;
        margin-bottom: 10px;
        padding: 1px 10px;
      }
    }
  }
`;

export default InteriorProjects;