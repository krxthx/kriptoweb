import { Navbar, Welcome, Home, Footer, Services, Loader, Transactions } from './components';
const App = () => {
  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />

        <Home />
        <Welcome />


      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  )
}

export default App
