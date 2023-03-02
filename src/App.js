
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ListToDo from './components/ListToDo';
import ToDoHeader from './components/ToDoHeader';

function App() {
  return (
    <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
         <Header/>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
               
               <ToDoHeader/>
                <hr className="mt-4" />

             
              <ListToDo/>

                <hr className="mt-4" />

             <Footer/> 
                
            </div>
        </div>
  );
}

export default App;
