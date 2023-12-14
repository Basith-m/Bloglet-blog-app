import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
import './Quill.css'

function Quill({ blog, setBlog, edit }) {

    // console.log(blog);

    const quillStyle = {
        height: '100%', // Set your desired height
    };
    return (
        <div>
            {
                edit ?
                    <div style={{ minHeight: '60vh' }} className='w-100 text-center shadow'>
                        <ReactQuill
                            value={blog.content}
                            placeholder={"Write something awesome..."}
                            theme="snow" // You can choose different themes like 'snow' or 'bubble'
                            modules={{
                                'toolbar': [
                                    [{ 'font': [] }, { 'size': [] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'script': 'super' }, { 'script': 'sub' }],
                                    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    ['direction', { 'align': [] }],
                                    ['link', 'image', 'video', 'formula'],
                                    ['clean']
                                ],
                            }}
                            style={quillStyle}
                        />
                    </div>
                    :
                    <div style={{ minHeight: '60vh' }} className='w-100 text-center shadow'>
                        <ReactQuill
                            onChange={(value) => { setBlog({ ...blog, content: value }) }}
                            placeholder={"Write something awesome..."}
                            theme="snow" // You can choose different themes like 'snow' or 'bubble'
                            modules={{
                                'toolbar': [
                                    [{ 'font': [] }, { 'size': [] }],
                                    ['bold', 'italic', 'underline', 'strike'],
                                    [{ 'color': [] }, { 'background': [] }],
                                    [{ 'script': 'super' }, { 'script': 'sub' }],
                                    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block'],
                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                    ['direction', { 'align': [] }],
                                    ['link', 'image', 'video', 'formula'],
                                    ['clean']
                                ],
                            }}
                            style={quillStyle}
                        />
                    </div>
            }

        </div>
    )
}

export default Quill