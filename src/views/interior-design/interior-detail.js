import { useParams } from "react-router-dom";

const InteriorDetail = () => {
  const { projectId } = useParams();


  return (
    <div>
      detail: {projectId}
    </div>  
  );
};

export default InteriorDetail;