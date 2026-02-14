import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/common/Layout'
import PageLoader from './components/common/PageLoader'
import AdminLayout from './components/admin/AdminLayout'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Programs = lazy(() => import('./pages/Programs'))
const ProgramDetail = lazy(() => import('./pages/ProgramDetail'))
const Donate = lazy(() => import('./pages/Donate'))
const Volunteer = lazy(() => import('./pages/Volunteer'))
const GetInvolved = lazy(() => import('./pages/GetInvolved'))
const Gallery = lazy(() => import('./pages/Gallery'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const NotFound = lazy(() => import('./pages/NotFound'))

const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminDonations = lazy(() => import('./pages/admin/AdminDonations'))
const AdminPrograms = lazy(() => import('./pages/admin/AdminPrograms'))
const AdminGallery = lazy(() => import('./pages/admin/AdminGallery'))
const AdminBlog = lazy(() => import('./pages/admin/AdminBlog'))
const AdminSettings = lazy(() => import('./pages/admin/AdminSettings'))
const AdminHomeContent = lazy(() => import('./pages/admin/AdminHomeContent'))

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="donations" element={<AdminDonations />} />
          <Route path="programs" element={<AdminPrograms />} />
          <Route path="gallery" element={<AdminGallery />} />
          <Route path="blog" element={<AdminBlog />} />
          <Route path="settings" element={<AdminSettings />} />
          <Route path="home" element={<AdminHomeContent />} />
        </Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<ProgramDetail />} />
          <Route path="donate" element={<Donate />} />
          <Route path="volunteer" element={<Volunteer />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
