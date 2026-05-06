import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './shared/components/layout/Header';
import Footer from './shared/components/layout/Footer';
import Home from './features/home/Home';
import About from './features/about/About';
import Contact from './features/contact/Contact';
import BlogPost from './features/blog/BlogPost';
import BlogList from './features/blog/BlogList';
import NotFound from './pages/NotFound';
import { MDXProvider } from './shared/components/mdx/MDXProvider';

function App() {
  return (
    <MDXProvider>
      <Router>
        <div className="min-h-screen flex flex-col grain-overlay selection:bg-paper-accent/20">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<BlogList />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </MDXProvider>
  );
}

export default App;
