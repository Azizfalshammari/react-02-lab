
import './App.css'
import NavigationBar from './components/NavigationBar'
import Footer from './components/Footer'
import Card from './components/Card'
function App() {


  return (
    <>
    <NavigationBar/>
    <div className='d-flex col-lg-12 col-md-6 col row justify-content-center wrap gap-2'>
    <Card
    scientistimg = 'https://www.sciencekids.co.nz/images/pictures/scientists/alberteinstein.jpg'
    scientistBrief = 'lorem ipsum'
    scientistName = 'Albert Einstein'
    scientistAch1 =  'Avogadro’s Number'
    scientistAch2 =  'Brownian Movement'
    scientistAch3 = 'Quantum Theory of Light'
    />
 <Card
    scientistimg = 'https://www.sciencekids.co.nz/images/pictures/scientists/alexandergrahambell.jpg'
    scientistBrief = 'lorem ipsum'
    scientistName = 'Alexander Graham Bell'
    scientistAch1 =  'Achievement 1'
    scientistAch2 =  'Achievement 2'
    scientistAch3 = 'Achievement 3'
    /> <Card
    scientistimg = 'https://www.sciencekids.co.nz/images/pictures/scientists/aristotle.jpg'
    scientistBrief = "Aristotle is one of the greatest and most well known founders of Western philosophy and literary theory."
    scientistName = 'Aristotle'
    scientistAch1 =  'most influential philosopher'
    scientistAch2 =  'founder of formal logic'
    scientistAch3 = 'developer of formal rhetoric and the Poetics'
    /> <Card
    scientistimg = 'https://www.sciencekids.co.nz/images/pictures/scientists/benjaminfranklin.jpg'
    scientistBrief = 'lorem ipsum'
    scientistName = 'Benjamin Franklin'
    scientistAch1 =  'Achievement 1'
    scientistAch2 =  'Achievement 2'
    scientistAch3 = 'Achievement 3'
    /> <Card
    scientistimg = 'https://www.sciencekids.co.nz/images/pictures/scientists/blaisepascal.jpg'
    scientistBrief = 'lorem ipsum'
    scientistName = 'Blaise Pascal'
    scientistAch1 =  'Achievement 1'
    scientistAch2 =  'Achievement 2'
    scientistAch3 = 'Achievement 3'
    />
    </div>

    <Footer/>
    </>
  )
}

export default App
