// import './index.scss';
// import Slidebar from '../Slidebar'
// import { Outlet } from 'react-router-dom';

// const Layout = () => {
//     return <>
//     <div className='App'> 
//     <Slidebar/>

//      <h1></h1>

//     <div className='page'>
//         <span className='tags top-tags'> &lt;/html&gt;
//         <br/>
//         <span className='body-top'>&lt;body&gt;</span></span>
       
//         <Outlet />
//         <span className='tags bottom-tags'>
//         <span className='body'>&lt;body&gt;</span>
//         <br/>
//         <span className='bottom-tag-html'>&lt;/html&gt;</span>
//         </span>
//     </div>
//     </div> 
   
//     </>
// }

// export default Layout;

import { Outlet } from 'react-router-dom'
import Sidebar from '../Slidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&lt;body&gt;</span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  )
}

export default Layout