import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getProjectsList } from "../../services/data";

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
              return <Link 
                key={`project-${idx}`} 
                className="project-card" 
                to={`${itm?.data?.name}`}
                state={{ data: itm?.data }}
              >
                <img src={itm?.data?.imageUrl} alt="project" />
              </Link>
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
  padding-top: 1em;
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