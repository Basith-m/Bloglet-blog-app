// EditBlog.js
import { Link } from 'react-router-dom';

function EditBlog({ userBlog }) {

  return (
    <>
      <Link to={{ pathname: `/blogEditor`, state: { userBlog } }}>
        <i className="fa-solid fa-pen-to-square mx-3 text-success"></i>
      </Link>
    </>
  );
}

export default EditBlog;
