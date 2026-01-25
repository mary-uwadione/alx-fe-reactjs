import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Recipe Sharing App 🍲</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;
