import React from 'react';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import Home from './components/home/Index'
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Gallery from './components/gallery/Gallery';
import Blog from './components/blog/Blog';




const App=() => {
  

  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/blog' element={<Blog />} />

         </Routes>
        </div>

     </Router>
    </>
  )
}

export default App;
