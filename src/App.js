import React from 'react';
import './App.css'; // Assurez-vous d'ajouter votre CSS

function App() {
  return (
    <div className='all'>
      <div className='App'>
        <header className='App-header'>
          <div className='navigation-bar'>
            <div className='logo'>GestionProject</div>
               
            
              <nav>
                <ul>
                  <li> <a href='#'>Home</a></li>
                  <li> <a href='#'>Domain</a></li>
                  <li> <a href='#'>Project</a></li>
                  <li> <a href='#'>Contact</a></li>
                  <li> <a href='#'>login</a></li>
                </ul>
              </nav>
            
           </div>  
        </header>
        <main className="body">

        <div className="search-container">
        <form onSubmit="">
          <input
            type="text"
            placeholder="Rechercher projets, tâches..."
            value=""
            onChange=""
            className="search-input"
          />
          <button type="submit" className="search-button">
            <i className="search-icon">🔍</i>
          </button>
        </form>
      </div>
       
          <h1>Welcome to GestionProject</h1>
          <p>
            GestionProject facilitates academic research by providing access to previous academic project and enhancing collaboration among research       </p>
          <div className="button-container">
            <button onClick={() => alert('Accéder aux Projets')}>Mes Projets</button>
            <button onClick={() => alert('Accéder aux Tâches')}>Mes Tâches</button>
            <button onClick={() => alert('Accéder aux Équipes')}>Mes Équipes</button>
          </div>
        </main>
      </div>
    </div>  
  );
}

export default App;

