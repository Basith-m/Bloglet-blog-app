import Quill from '../components/Quill';


function QuillEditor() {
  return (
    <div className='d-flex flex-column justify-content-center p-5'>
      <h1 className='mb-4 text-center'>Create Your Blog</h1>
      <Quill />
      <div className='mt-3 mb-4'>
        <button className='btn btn-dark'>Discard</button>
        <button className='btn btn-outline-dark ms-3'>Save</button>
      </div>
    </div>
  )
}

export default QuillEditor